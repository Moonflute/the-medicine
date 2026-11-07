"""Offline source-derived lumen reconstruction and matching collision field.

Only whitelisted anatomical adjacencies are joined. Original source geometry is
not modified. Every synthetic junction is recorded with its measured gap.
"""
import sys, json, heapq
import numpy as np
from scipy import ndimage as ndi
from scipy.spatial import cKDTree
from skimage.measure import marching_cubes
from scipy.sparse import coo_matrix, diags
from scipy.interpolate import PchipInterpolator

cfg=json.loads(sys.stdin.buffer.readline())
nx,ny,nz=cfg['dimensions']; step=cfg['spacing']; origin=np.array(cfg['origin'])
raw=np.frombuffer(sys.stdin.buffer.read(),dtype=np.uint8);n=nx*ny*nz
labels=raw[:n].reshape((nz,ny,nx)).copy();obstacles=raw[n:].reshape((nz,ny,nx)).copy()

def world(indices): return indices[:,::-1]*step+origin
def index(point): return np.round((np.array(point)-origin)/step).astype(int)[::-1]

def bounded_distance(mask,limit=.065):
 # Only distances below the field's 63.75 mm storage ceiling matter. Slabs with
 # a larger halo preserve those exact Euclidean distances without allocating
 # scipy's full-body 3-axis index/double buffers at coronary resolution.
 halo=int(np.ceil(limit/step))+2;result=np.zeros(mask.shape,dtype=np.float32)
 # Three-dimensional tiles cap scipy's temporary coordinate arrays even for
 # broad, finely sampled organs. Empty tiles need no distance transform.
 for z in range(0,mask.shape[0],64):
  for y in range(0,mask.shape[1],64):
   for x in range(0,mask.shape[2],64):
    begin=np.array([z,y,x]);end=np.minimum(begin+64,mask.shape);target=tuple(slice(int(a),int(b)) for a,b in zip(begin,end))
    if not mask[target].any():continue
    lo=np.maximum(0,begin-halo);hi=np.minimum(mask.shape,end+halo);source=tuple(slice(int(a),int(b)) for a,b in zip(lo,hi));core=tuple(slice(int(a),int(b)) for a,b in zip(begin-lo,end-lo))
    if mask[source].all():result[target]=limit;continue
    d=ndi.distance_transform_edt(mask[source]);result[target]=np.minimum(d[core]*step,limit);del d
 return result
def stamp_capsule(a,b,r,label):
 a,b=np.array(a),np.array(b); lo=np.maximum(0,np.floor((np.minimum(a,b)-r-origin)/step).astype(int)); hi=np.minimum([nx-1,ny-1,nz-1],np.ceil((np.maximum(a,b)+r-origin)/step).astype(int))
 if np.any(lo>hi): return
 z,y,x=np.mgrid[lo[2]:hi[2]+1,lo[1]:hi[1]+1,lo[0]:hi[0]+1]; p=np.stack([x,y,z],axis=-1)*step+origin
 d=b-a; t=np.clip(np.sum((p-a)*d,axis=-1)/max(np.dot(d,d),1e-15),0,1)
 hit=np.sum((p-a-t[...,None]*d)**2,axis=-1)<=r*r
 sub=labels[lo[2]:hi[2]+1,lo[1]:hi[1]+1,lo[0]:hi[0]+1]; sub[hit&(sub==0)]=label

def stamp_transition(a,b,ra,rb,label):
 a,b=np.array(a),np.array(b);r=max(ra,rb);lo=np.maximum(0,np.floor((np.minimum(a,b)-r-origin)/step).astype(int));hi=np.minimum([nx-1,ny-1,nz-1],np.ceil((np.maximum(a,b)+r-origin)/step).astype(int))
 z,y,x=np.mgrid[lo[2]:hi[2]+1,lo[1]:hi[1]+1,lo[0]:hi[0]+1];p=np.stack([x,y,z],axis=-1)*step+origin;d=b-a;t=np.clip(np.sum((p-a)*d,axis=-1)/max(np.dot(d,d),1e-15),0,1);radius=ra+(rb-ra)*t*t*(3-2*t)
 hit=np.sum((p-a-t[...,None]*d)**2,axis=-1)<=radius*radius;sub=labels[lo[2]:hi[2]+1,lo[1]:hi[1]+1,lo[0]:hi[0]+1];sub[hit&(sub==0)]=label

def in_window(points,window):
 p=world(points);return np.all((p>=window['min'])&(p<=window['max']),axis=1)

junction_windows=dict(cfg.get('junctionWindows',{}));self_contact_voxels=0;source_overlap_voxels=0
for route in cfg.get('centerlines',[]):
 stations=np.array(route['points']);centers=stations[:,:3];radii=stations[:,3];arc=np.r_[0,np.cumsum(np.linalg.norm(np.diff(centers,axis=0),axis=1))]
 lo=np.maximum(0,np.floor((np.min(centers-radii[:,None],axis=0)-origin)/step).astype(int));hi=np.minimum([nx-1,ny-1,nz-1],np.ceil((np.max(centers+radii[:,None],axis=0)-origin)/step).astype(int))
 z,y,x=np.mgrid[lo[2]:hi[2]+1,lo[1]:hi[1]+1,lo[0]:hi[0]+1];p=np.stack([x,y,z],axis=-1)*step+origin
 distance,owner=cKDTree(centers).query(p);hit=distance<=radii[owner];barrier=np.zeros_like(hit)
 # Preserve the tube's order when neighboring loops approach or overlap. A
 # nearest-surface union alone would create false bowel-to-bowel shortcuts.
 for axis in range(3):
  a=[slice(None)]*3;b=a.copy();a[axis]=slice(0,-1);b[axis]=slice(1,None);aa=tuple(a);bb=tuple(b)
  touching=hit[aa]&hit[bb]&(np.abs(arc[owner[aa]]-arc[owner[bb]])>.04);barrier[aa]|=touching;barrier[bb]|=touching
 self_contact_voxels+=int(barrier.sum());hit&=~barrier
 sub=labels[lo[2]:hi[2]+1,lo[1]:hi[1]+1,lo[0]:hi[0]+1];source_overlap_voxels+=int((hit&(sub>0)).sum());sub[hit]=route['part']
 for key,point in [('5:10',centers[0]),('10:11',centers[-1])]:junction_windows[key]={'min':(point-.012).tolist(),'max':(point+.012).tolist()}
 del z,y,x,p,distance,owner,hit,barrier

def stamp_sections(sections,label):
 # Smooth elliptical sections in the original frame. PCHIP avoids overshoot at
 # the esophageal/posterior and laryngeal/anterior junctions.
 a=np.array(sorted(sections));profile=PchipInterpolator(a[:,0],a[:,1:],axis=0)
 for y in range(max(0,int(np.ceil((a[0,0]-origin[1])/step))),min(ny,int(np.floor((a[-1,0]-origin[1])/step))+1)):
  zc,rx,rz=profile(origin[1]+y*step);x0=max(0,int(np.floor((-rx-origin[0])/step)));x1=min(nx-1,int(np.ceil((rx-origin[0])/step)));z0=max(0,int(np.floor((zc-rz-origin[2])/step)));z1=min(nz-1,int(np.ceil((zc+rz-origin[2])/step)))
  zz,xx=np.mgrid[z0:z1+1,x0:x1+1];hit=((xx*step+origin[0])/rx)**2+((zz*step+origin[2]-zc)/rz)**2<=1
  sub=labels[z0:z1+1,y,x0:x1+1];sub[hit&(sub==0)]=label

if cfg['key']=='upper':
 # Oral cavity above the existing Z-Anatomy tongue; posterior outlet to pharynx.
 center=np.array([0,1.548,.053]); radius=np.array([.026,.022,.038]); lo=np.maximum(0,index(center-radius-step)); hi=np.minimum(np.array(labels.shape)-1,index(center+radius+step))
 z,y,x=np.mgrid[lo[0]:hi[0]+1,lo[1]:hi[1]+1,lo[2]:hi[2]+1]; p=np.stack([x,y,z],-1)*step+origin
 sub=labels[lo[0]:hi[0]+1,lo[1]:hi[1]+1,lo[2]:hi[2]+1]; sub[np.sum(((p-center)/radius)**2,axis=-1)<1]=1
 stamp_sections([[1.553,.024,.015,.010],[1.540,.010,.017,.013],[1.520,.002,.016,.013],[1.507,.001,.016,.013],[1.495,-.003,.014,.010],[1.482,-.002,.009,.006],[1.472,.002,.007,.004]],2)
 stamp_sections([[1.514,.014,.012,.010],[1.506,.012,.011,.010],[1.496,.014,.010,.009],[1.485,.013,.009,.008],[1.477,.013,.006,.006],[1.466,.012,.007,.006],[1.455,.010,.008,.007]],6)

if cfg.get('kind')=='circulation':labels[obstacles>0]=0
# Remove only subvoxel speckle inside a source part, never fill across organs.
for part in range(1,len(cfg['parts'])+1):
 points=np.argwhere(labels==part)
 if not len(points):raise ValueError('Empty source region '+str(part))
 # Some supplied exterior meshes have tiny open seams (odd ray intersections).
 # Repair only within this one region; do not close across separate organs.
 if cfg['parts'][part-1].get('sourceSweep'):continue
 repair_steps=max(1,int(np.ceil(cfg['parts'][part-1].get('sourceSeamRadius',cfg.get('sourceSeamRadius',step*2))/step-1e-9)));padding=repair_steps+1
 lo=np.maximum(0,points.min(axis=0)-padding);hi=np.minimum(labels.shape,points.max(axis=0)+padding+1);slices=tuple(slice(int(a),int(b)) for a,b in zip(lo,hi));sub=labels[slices];mask=sub==part
 closed=ndi.binary_closing(mask,iterations=repair_steps)
 filled=closed if cfg['parts'][part-1].get('preserveInternalTissue') else ndi.binary_fill_holes(closed)
 sub[filled&(sub==0)]=part

distance_cache={}
def region_distance(part):
 if part not in distance_cache:
  points=np.argwhere(labels==part);lo=np.maximum(0,points.min(axis=0)-1);hi=np.minimum(labels.shape,points.max(axis=0)+2);slices=tuple(slice(int(a),int(b)) for a,b in zip(lo,hi));d=ndi.distance_transform_edt(labels[slices]==part)*step
  distance_cache[part]=(points,d[tuple((points-lo).T)],lo,d)
 return distance_cache[part]

junctions=[]
for a,b in cfg['bridges']:
 # Join the interiors at the junction, not the nearest exterior edge: edge-only
 # contacts are connected mathematically but cannot admit a finite camera.
 surface_a,va,loa,da=region_distance(a);surface_b,vb,lob,db=region_distance(b)
 bowel=cfg['key']=='upper' and 10<=max(a,b)<=14
 local_join=cfg['key']!='upper' or (b>=15 and cfg['parts'][b-1].get('system')=='respiratory')
 passage=cfg.get('valvePassages',{}).get(f'{a}:{b}')
 threshold=.008 if bowel and min(a,b)>=11 else .005 if bowel else .0022 if cfg['key']=='upper' and (a==3 or b==3) else .0032
 aa=surface_a[va>=min(threshold,va.max()*.85)];bb=surface_b[vb>=min(threshold,vb.max()*.85)]
 if local_join:
  # Narrow branch origins must be searched locally. A whole-vessel maximum
  # can otherwise choose a distant wider segment and bridge over real bends.
  anchor=cfg.get('junctionAnchors',{}).get(f'{a}:{b}')
  if anchor:mid=(np.array(anchor)-origin)[::-1]/step
  else:
   search_window=junction_windows.get(f'{a}:{b}')
   search_a=surface_a[in_window(surface_a,search_window)] if search_window else surface_a
   search_b=surface_b[in_window(surface_b,search_window)] if search_window else surface_b
   if not len(search_a) or not len(search_b):raise ValueError(f'Missing reviewed source contact {a}->{b}')
   near_distance,near_source=cKDTree(search_a).query(search_b,k=1);contact=int(np.argmin(near_distance));mid=(search_a[near_source[contact]]+search_b[contact])*.5
  local_a=np.linalg.norm((surface_a-mid)*step,axis=1)<.014;local_b=np.linalg.norm((surface_b-mid)*step,axis=1)<.014
  core_radius=cfg.get('junctionCoreRadius',.0022);core_fraction=cfg.get('junctionCoreFraction',.65)
  aa=surface_a[local_a&(va>=min(core_radius,va[local_a].max()*core_fraction))];bb=surface_b[local_b&(vb>=min(core_radius,vb[local_b].max()*core_fraction))]
 # Clinical endpoints: GE junction at the lower esophagus, not an adjacent wall.
 if cfg['key']=='upper' and (a,b)==(3,4): aa=aa[world(aa)[:,1]<1.215]
 if cfg['key']=='upper' and (a,b)==(2,3): aa=aa[world(aa)[:,1]<1.49];bb=bb[world(bb)[:,1]>1.46]
 window=junction_windows.get(f'{a}:{b}')
 if window:
  if cfg['key']=='upper' and not local_join:
   # At a reviewed bowel endpoint the local opening can be narrower than the
   # widest lumen elsewhere in the organ. Choose its local interior only.
   wa=in_window(surface_a,window);wb=in_window(surface_b,window)
   if not wa.any() or not wb.any():raise ValueError(f'Missing reviewed endpoint {a}->{b}')
   aa=surface_a[wa&(va>=min(threshold,va[wa].max()*.85))];bb=surface_b[wb&(vb>=min(threshold,vb[wb].max()*.85))]
  else:aa=aa[in_window(aa,window)];bb=bb[in_window(bb,window)]
 if not len(aa) or not len(bb):raise ValueError(f'Missing reviewed junction interior {a}->{b}')
 distances,near=cKDTree(aa).query(bb,k=1); k=int(np.argmin(distances));pa=world(aa[[near[k]]])[0];pb=world(bb[[k]])[0];gap=float(distances[k]*step)
 if passage:
  anchor=np.array(passage['center']);pa=world(aa)[np.argmin(np.sum((world(aa)-anchor)**2,axis=1))];pb=world(bb)[np.argmin(np.sum((world(bb)-anchor)**2,axis=1))];gap=float(np.linalg.norm(pa-pb))
 # Interior endpoints include depth into both source surfaces. Keep a strict
 # separate limit on the actual exterior gap, which was measured before this.
 surface_gap=float(cKDTree(surface_a).query(surface_b,k=1)[0].min()*step)
 max_gap=cfg.get('branchJunctionMaxGap',.004) if cfg['key']=='upper' and local_join else cfg.get('maxJunctionGap',.018)
 if surface_gap>max_gap or gap>.035: raise ValueError(f'Unreviewed gap {a}->{b}: {surface_gap}, interior span {gap}')
 maximum=.008 if bowel and min(a,b)>=11 else .006 if bowel else .0035
 ra=float(min(maximum,da[tuple(aa[near[k]]-loa)]));rb=float(min(maximum,db[tuple(bb[k]-lob)]))
 if passage:ra=rb=passage['radius']
 stamp_transition(pa,pb,ra,rb,a)
 seam_voxels=0
 if local_join:
  # Source segments may have slightly misaligned cut faces. A narrow bridge
  # alone leaves artificial shutters across a large aortic/caval lumen. Close
  # only sub-2.4 mm seams simultaneously adjacent to BOTH reviewed parts.
  seam_mid=(pa+pb)*.5;lo=np.maximum(0,index(seam_mid-.020));hi=np.minimum(labels.shape,index(seam_mid+.020)+1);slices=tuple(slice(int(x),int(y)) for x,y in zip(lo,hi));sub=labels[slices]
  aa_mask=sub==a;bb_mask=sub==b;union=aa_mask|bb_mask
  closed=ndi.binary_closing(union,iterations=3)
  near_a=ndi.distance_transform_edt(~aa_mask)*step<=step*3;near_b=ndi.distance_transform_edt(~bb_mask)*step<=step*3
  seam=closed&near_a&near_b&(sub==0);seam_voxels=int(seam.sum());sub[seam]=a
 distance_cache.pop(a,None)
 junctions.append({'from':a,'to':b,'gapMetres':round(surface_gap,6),'interiorSpanMetres':round(gap,6),'radiusMetres':min(ra,rb),'endRadiiMetres':[ra,rb],'start':pa.tolist(),'end':pb.tolist(),'seamRepairVoxels':seam_voxels,'kind':'open-valve-passage' if passage else 'reconstructed-junction',**({'valve':passage} if passage else {})})

# The immediate fork belongs to the parent lumen. Separating two daughters at
# their shared ostium would manufacture a wall through the bifurcation itself.
forks=cfg.get('forks',[(7,[8,9])] if cfg['key']=='upper' else [])
for parent,children in forks:
 points=np.argwhere(labels==parent);pad=int(np.ceil(.004/step))+2;lo=np.maximum(0,points.min(axis=0)-pad);hi=np.minimum(labels.shape,points.max(axis=0)+pad+1);slices=tuple(slice(int(a),int(b)) for a,b in zip(lo,hi));sub=labels[slices]
 near_parent=ndi.distance_transform_edt(sub!=parent)*step<.004
 for i,a in enumerate(children):
  for b in children[i+1:]:
   touching=ndi.binary_dilation(sub==a)&ndi.binary_dilation(sub==b)&near_parent
   sub[touching&((sub==a)|(sub==b))]=parent

# A close exterior contact must NOT create a fistula or a false arterial branch.
allowed={tuple(sorted(p)) for p in cfg['connections']}; remove=np.zeros_like(labels,dtype=bool)
for axis in range(3):
 s=[slice(None)]*3;t=s.copy();s[axis]=slice(0,-1);t[axis]=slice(1,None);la=labels[tuple(s)];lb=labels[tuple(t)]
 candidates=(la>0)&(lb>0)&(la!=lb)
 for a,b in np.unique(np.stack([la[candidates],lb[candidates]],axis=1),axis=0):
  pair=tuple(sorted([int(a),int(b)]));touch=candidates&(la==a)&(lb==b)
  if pair in allowed:
   window=junction_windows.get(f'{pair[0]}:{pair[1]}')
   if not window:continue
   where=np.argwhere(touch);keep=in_window(where,window);touch[tuple(where[keep].T)]=False
  # Preserve a source vessel running against the conservative chamber mask.
  # Cutting BOTH sides would amputate a narrow coronary origin. The chamber
  # side alone receives the separating wall; no arterial lumen is widened.
  chamber_a=cfg.get('kind')=='circulation' and cfg['parts'][int(a)-1].get('bloodSpace',False)
  chamber_b=cfg.get('kind')=='circulation' and cfg['parts'][int(b)-1].get('bloodSpace',False)
  if chamber_a!=chamber_b and pair not in allowed:
   remove[tuple(s) if chamber_a else tuple(t)]|=touch
  else:remove[tuple(s)]|=touch;remove[tuple(t)]|=touch
labels[remove]=0
del candidates,touch,la,lb
distance_cache.clear()
# Short, reviewed vessel seam repairs share the source vessel's priority over
# the approximate myocardial mask. Chamber tissue remains impermeable.
if cfg.get('kind')=='circulation':
 vessel_ids=[i for i,p in enumerate(cfg['parts'],1) if not p.get('bloodSpace')]
 vascular_space=np.isin(labels,vessel_ids);obstacles[vascular_space]=0;del vascular_space
labels[obstacles>0]=0
mask=labels>0
mask[[0,-1],:,:]=False;mask[:,[0,-1],:]=False;mask[:,:,[0,-1]]=False;labels[~mask]=0
# Cardiac right and left blood spaces MUST remain separate without a supplied
# pulmonary capillary bed. Every source part must belong to its main circuit.
components,count=ndi.label(mask);sizes=np.bincount(components[mask]);sizes[0]=0
if cfg.get('expectedComponents',1)>1:
 retained=set();circuits={};part_components={}
 for number,part in enumerate(cfg['parts'],1):
  counts=np.bincount(components[labels==number]);counts[0]=0;component=int(counts.argmax());retained.add(component)
  circuit=part['circuit'];circuits.setdefault(circuit,set()).add(component)
  part_components[part['name']]=component
 if len(retained)!=cfg['expectedComponents'] or any(len(c)!=1 for c in circuits.values()):
  diagnostic=[]
  for number,part in enumerate(cfg['parts'],1):
   if 'anterior tibial artery' not in part['name'].lower():continue
   for component in np.unique(components[labels==number]):
    points=np.argwhere((labels==number)&(components==component));diagnostic.append({'part':part['name'],'component':int(component),'count':len(points),'min':world(points).min(axis=0).tolist(),'max':world(points).max(axis=0).tolist()})
  raise ValueError(f'Incomplete or falsely connected circuits: {circuits}; parts={part_components}; regions={diagnostic}; junctions={junctions}')
 mask=np.isin(components,list(retained));discarded=int(sizes.sum()-mask.sum())
else:
 largest=int(sizes.argmax());discarded=int(mask.sum()-sizes[largest]);mask=components==largest
 missing=[p['name'] for i,p in enumerate(cfg['parts'],1) if not np.any(mask&(labels==i))]
 if missing:
  detail={p['name']:{'voxels':int((labels==i).sum()),'component':int(np.bincount(components[labels==i]).argmax())} for i,p in enumerate(cfg['parts'],1)}
  raise ValueError(f'Disconnected source regions before meshing: {detail}; junctions={junctions}')
labels[~mask]=0
distance_cache.clear();del components,sizes,remove
distance=bounded_distance(mask,cfg.get('maxClearance',.065))-step*.5
if cfg.get('kind')=='circulation' or cfg.get('preserveSeparation'):
 from journey_mesh import build_surface
 verts,faces,normals,colors,locations=build_surface(labels,cfg)
else:
 smooth=ndi.gaussian_filter(mask.astype(np.float32),sigma=.75 if cfg['key']=='upper' else .55)
 verts,faces,normals,_=marching_cubes(smooth,level=.5,spacing=(step,step,step),allow_degenerate=False)
 verts=(verts[:,::-1]+origin).astype('<f4');normals=normals[:,::-1].astype('<f4');faces=faces.astype('<u4')
 # Remove voxel stair steps without enlarging the uncertainty budget. Taubin
 # smoothing is clamped to 0.18 mm; collision clearance reserves at least 0.28 mm
 # for smoothing and 0.12 mm for subsequent mesh simplification.
 edges=np.concatenate([faces[:,[0,1]],faces[:,[1,2]],faces[:,[2,0]]]);edges=np.concatenate([edges,edges[:,::-1]]);edges=np.unique(edges,axis=0)
 adj=coo_matrix((np.ones(len(edges)),(edges[:,0],edges[:,1])),shape=(len(verts),len(verts))).tocsr();adj=diags(1/np.maximum(1,np.asarray(adj.sum(axis=1)).ravel()))@adj
 original=verts.copy()
 for _ in range(5):
  for factor in [.45,-.47]:
   verts=verts+factor*(adj@verts-verts);delta=verts-original;length=np.linalg.norm(delta,axis=1);verts=original+delta*np.minimum(1,.00018/np.maximum(length,1e-12))[:,None]
 verts=verts.astype('<f4');normals=np.zeros_like(verts);face_normals=np.cross(verts[faces[:,1]]-verts[faces[:,0]],verts[faces[:,2]]-verts[faces[:,0]])
 for corner in range(3):np.add.at(normals,faces[:,corner],face_normals)
 normals/=np.maximum(np.linalg.norm(normals,axis=1,keepdims=True),1e-12)
 locations=np.clip(np.round((verts-origin)/step).astype(int),[0,0,0],[nx-1,ny-1,nz-1]);region=labels[locations[:,2],locations[:,1],locations[:,0]]
 missing=np.flatnonzero(region==0)
 if len(missing):
  inside=np.argwhere(mask);tree=cKDTree(world(inside));_,near=tree.query(verts[missing]);region[missing]=labels[tuple(inside[near].T)]
 colors=np.array([[int(p['color'][i:i+2],16) for i in [1,3,5]] for p in cfg['parts']],dtype=np.uint8)[region-1]
for landmark in cfg.get('landmarks',[]):
 distance_to_source=bounded_distance(obstacles!=landmark['id'],step*3)
 near=distance_to_source[locations[:,2],locations[:,1],locations[:,0]]<step*1.6
 colors[near]=[int(landmark['color'][i:i+2],16) for i in [1,3,5]]
parts=[]
for number,part in enumerate(cfg['parts'],1):
 points=np.argwhere(labels==number)
 if len(points)<4:raise ValueError('Disconnected/missing anatomical part '+part['name'])
 clear=distance[tuple(points.T)]-step*.35; valid=points[clear>=.0020]
 if not len(valid):valid=points[clear>=clear.max()*.85]
 seed=cfg.get('seeds',{}).get(str(number))
 if seed:chosen=valid[np.argmin(np.sum((world(valid)-np.array(seed))**2,axis=1))]
 else:chosen=points[np.argmax(clear)]
 pos=world(chosen[None,:])[0];parts.append({**part,'id':number,'position':pos.tolist(),'clearance':float(distance[tuple(chosen)]),'center':world(points).mean(axis=0).tolist()})

boundaries=[]
for part in parts:
 number=part['id'];neighbors=[b if a==number else a for a,b in cfg['connections'] if a==number or b==number]
 if (len(neighbors)!=1 and number not in cfg.get('terminalParts',[]) and not (cfg.get('kind')=='airway' and number==1)) or (cfg['key']=='upper' and number==1):continue
 junction=next((j for j in junctions if {j['from'],j['to']}=={number,neighbors[0]}),None)
 if not junction:continue
 entry=np.array(junction['start'] if junction['from']==number else junction['end']);points=np.argwhere((labels==number)&(distance>=.0025))
 if not len(points):points=np.argwhere(labels==number)
 positions=world(points);farthest=positions[np.argmax(np.sum((positions-entry)**2,axis=1))]
 continuation=('이 기관의 위쪽 후두·인두는 이 표본의 탐험 범위에 포함하지 않았어요.' if number==1 else '이후의 더 작은 기관지·세기관지·폐포는 포함하지 않았어요.') if cfg.get('kind')=='airway' else '이후의 더 작은 기관지·세기관지·폐포는 포함하지 않았어요.' if part.get('system')=='respiratory' else '항문관과 외부 개구의 정확한 경계는 제공하지 않아요.' if cfg['key']=='upper' else '이후의 혈관·심장 연결은 이 탐험 범위에 포함하지 않았어요.'
 boundaries.append({'part':number,'position':farthest.tolist(),'returnPoint':entry.tolist(),'range':.026,'name':part['name'],'continuation':continuation})
 if cfg.get('kind') in ('circulation','artery','vein'):boundaries[-1]['continuation']='이후의 더 작은 혈관과 모세혈관망은 포함하지 않았어요. 이 끝에서 동맥과 정맥을 직접 연결하지 않습니다.'
 if cfg.get('kind')=='urinary':boundaries[-1]['continuation']=part.get('endNotice','신우 이전의 신배·집합관·네프론은 이번 탐험에 포함하지 않았어요.')
 if cfg.get('kind')=='biliary':boundaries[-1]['continuation']=part.get('endNotice','원본에 포함된 담도·췌관 구간의 끝입니다. 더 작은 분지는 포함하지 않았어요.')

# Preserve conservative clearance, including the smoothing displacement.
distance_unit=cfg.get('distanceUnit',.00025)
clearance=np.floor(np.maximum(0,distance-step*.35)/distance_unit).clip(0,255).astype(np.uint8)
surface=verts.tobytes()+normals.tobytes()+colors.tobytes()+faces.tobytes()
volume=clearance.tobytes()+labels.tobytes()
report={'surfaceIsolation':'per-blood-circuit' if cfg.get('kind')=='circulation' else 'single-lumen','vertices':len(verts),'triangles':len(faces),'surfaceBytes':len(surface),'distanceUnit':distance_unit,'parts':parts,'junctions':junctions,'junctionWindows':junction_windows,'boundaries':boundaries,'selfContactBarrierVoxels':self_contact_voxels,'sourceOverlapAdjustedVoxels':source_overlap_voxels,'discardedVoxels':discarded,'componentsBeforeCleanup':int(count),'gridBytes':len(volume),'limits':'Navigation cavity reconstructed from exterior source surfaces; not measured lumen or histology.'}
sys.stdout.buffer.write((json.dumps(report)+'\n').encode());sys.stdout.buffer.write(surface);sys.stdout.buffer.write(volume)
