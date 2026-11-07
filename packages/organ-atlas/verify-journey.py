"""Topology checks on the exact compressed collision fields shipped to clients."""
import gzip,json,sys
from pathlib import Path
import numpy as np
from scipy import ndimage as ndi
from scipy.spatial import cKDTree
from skimage.graph import MCP_Geometric

base=Path(__file__).parent/'static/models/current'
for key in ([sys.argv[1]] if len(sys.argv)>1 else ['upper','airways','vessels','veins','thoracic-veins']):
 m=json.loads((base/f'journey-{key}.json').read_text(encoding='utf8'))
 shape=tuple(reversed(m['dimensions']));n=int(np.prod(shape))
 packed=gzip.decompress((base/f'journey-{key}-volume.bin.gz').read_bytes())
 if m.get('volumeFormat')=='bricks-v1':
  count=int(np.frombuffer(packed,dtype='<u4',count=1)[0]);keys=np.frombuffer(packed,dtype='<u4',count=count,offset=4);data=np.frombuffer(packed,dtype=np.uint8,offset=4+count*4).reshape(count,2,8,8,8)
  dense=np.zeros((2,*shape),dtype=np.uint8);bx,by,bz=[(d+7)//8 for d in m['dimensions']]
  for i,k in enumerate(keys):
   x=(int(k)%bx)*8;y=(int(k)//bx%by)*8;z=(int(k)//(bx*by))*8;sz=min(8,shape[0]-z);sy=min(8,shape[1]-y);sx=min(8,shape[2]-x)
   dense[:,z:z+sz,y:y+sy,x:x+sx]=data[i,:,:sz,:sy,:sx]
  raw=dense.ravel()
 else:raw=np.frombuffer(packed,dtype=np.uint8)
 assert len(raw)==n*2
 field=raw[:n].reshape(shape)*m['distanceUnit'];labels=raw[n:].reshape(shape)
 points=[np.round((np.array(p['position'])-m['origin'])/m['spacing']).astype(int)[::-1] for p in m['parts']]
 radii={}
 for radius in [.0016,.0008,.0004]:
  components,count=ndi.label(field>=radius)
  ids=[int(components[tuple(p)]) for p in points]
  if radius==.0004:assert all(ids),'Start point is outside navigable volume'
  radii[str(radius)]=ids
  if radius==.0004:
   if m.get('expectedComponents',1)==2:
    groups={c:{ids[p['id']-1] for p in m['parts'] if p['circuit']==c} for c in ['right','left']}
    assert all(len(v)==1 for v in groups.values()) and len(set(ids))==2,f'{key}: interrupted or joined cardiac circuits {groups}'
   else:assert len(set(ids))==1,f'{key}: some anatomical destinations cannot be reached at the smallest size: {ids}'
  if radius==.0016 and m.get('expectedComponents',1)==2:
   for a,b in [(1,2),(2,5),(3,4),(4,12)]:assert ids[a-1] and ids[a-1]==ids[b-1],f'{key}: valve passage too narrow at full size {a}->{b}'
  if radius==.0016 and key in ['vessels','veins','airways','thoracic-veins']:
   trunks=[1,2,3,9] if key=='vessels' else [1,2,3,4,5,6,7,8,9] if key=='airways' else [1,2,3] if key=='thoracic-veins' else [1,2]
   trunk_ids=[ids[i-1] for i in trunks]
   assert all(trunk_ids) and len(set(trunk_ids))==1,f'{key}: source trunk seams create an artificial bottleneck'
 # Contact graph must exactly match the anatomical allowlist, after collapsing
 # branch origins into their parent. In particular no esophagotracheal fistula.
 observed=set()
 for axis in range(3):
  a=[slice(None)]*3;b=a.copy();a[axis]=slice(0,-1);b[axis]=slice(1,None)
  aa=labels[tuple(a)];bb=labels[tuple(b)];different=(aa>0)&(bb>0)&(aa!=bb)
  for u,v in np.unique(np.stack([aa[different],bb[different]],axis=1),axis=0):observed.add(tuple(sorted([int(u),int(v)])))
 expected={tuple(sorted(pair)) for pair in m['connections']}
 assert observed==expected,f'{key}: missing/false anatomical connections {observed ^ expected}'
 for route in m.get('sourcePaths',[]):
  points_in=np.argwhere(labels==route['part']);lo=points_in.min(axis=0);hi=points_in.max(axis=0)+1;slices=tuple(slice(int(a),int(b)) for a,b in zip(lo,hi))
  passable=(labels[slices]==route['part'])&(field[slices]>=.0004);valid=np.argwhere(passable);tree=cKDTree(valid)
  endpoints=[np.round((np.array(p)-m['origin'])/m['spacing']).astype(int)[::-1]-lo for p in route['ends']];_,nearest=tree.query(endpoints);a,b=[tuple(valid[i]) for i in nearest]
  costs=np.where(passable,1.,np.inf);distance,_=MCP_Geometric(costs,fully_connected=False,sampling=(m['spacing'],)*3).find_costs([a],[b]);length=float(distance[b])
  assert np.isfinite(length),f'{key}: bowel path is interrupted'
  assert route['lengthMetres']*.70<length<route['lengthMetres']*1.8,f'{key}: bowel shortcut or detour: {length}'
  print(json.dumps({'sourceBowelLengthMetres':round(route['lengthMetres'],3),'shortestNavigablePathMetres':round(length,3),'noBowelShortcut':True}))
 surface=gzip.decompress((base/f'journey-{key}-surface.bin.gz').read_bytes());vn=m['vertices']
 vertices=np.frombuffer(surface,dtype='<f4',count=vn*3).reshape(-1,3)
 normals=np.frombuffer(surface,dtype='<f4',offset=vn*12,count=vn*3).reshape(-1,3)
 faces=np.frombuffer(surface,dtype='<u4',offset=vn*27).reshape(-1,3)
 assert faces.max()<vn and len(faces)==m['triangles']
 edges=np.sort(np.concatenate([faces[:,[0,1]],faces[:,[1,2]],faces[:,[2,0]]]),axis=1)
 _,counts=np.unique(edges,axis=0,return_counts=True)
 assert np.all(counts==2),f'{key}: open/nonmanifold surface edges {int((counts!=2).sum())}'
 print(json.dumps({'region':key,'parts':len(points),'junctions':len(expected),'triangles':m['triangles'],'watertight':True,'connectedAtSmallestSize':True,'componentsByRadius':radii}))
