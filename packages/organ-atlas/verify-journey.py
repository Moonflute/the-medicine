"""Topology checks on the exact compressed collision fields shipped to clients."""
import gzip,json
from pathlib import Path
import numpy as np
from scipy import ndimage as ndi
from scipy.spatial import cKDTree

base=Path(__file__).parent/'static/models/current'
for key in ['upper','vessels']:
 m=json.loads((base/f'journey-{key}.json').read_text(encoding='utf8'))
 shape=tuple(reversed(m['dimensions']));n=int(np.prod(shape))
 raw=np.frombuffer(gzip.decompress((base/f'journey-{key}-volume.bin.gz').read_bytes()),dtype=np.uint8)
 assert len(raw)==n*2
 field=raw[:n].reshape(shape)*m['distanceUnit'];labels=raw[n:].reshape(shape)
 points=[np.round((np.array(p['position'])-m['origin'])/m['spacing']).astype(int)[::-1] for p in m['parts']]
 radii={}
 for radius in [.0016,.0008,.0004]:
  components,count=ndi.label(field>=radius)
  ids=[int(components[tuple(p)]) for p in points]
  assert all(ids),'Start point is outside navigable volume'
  radii[str(radius)]=ids
  if radius==.0004:assert len(set(ids))==1,f'{key}: some anatomical destinations cannot be reached at the smallest size: {ids}'
 # Contact graph must exactly match the anatomical allowlist, after collapsing
 # branch origins into their parent. In particular no esophagotracheal fistula.
 observed=set()
 for axis in range(3):
  a=[slice(None)]*3;b=a.copy();a[axis]=slice(0,-1);b[axis]=slice(1,None)
  aa=labels[tuple(a)];bb=labels[tuple(b)];different=(aa>0)&(bb>0)&(aa!=bb)
  for u,v in np.unique(np.stack([aa[different],bb[different]],axis=1),axis=0):observed.add(tuple(sorted([int(u),int(v)])))
 expected={tuple(sorted(pair)) for pair in m['connections']}
 assert observed==expected,f'{key}: missing/false anatomical connections {observed ^ expected}'
 surface=gzip.decompress((base/f'journey-{key}-surface.bin.gz').read_bytes());vn=m['vertices']
 vertices=np.frombuffer(surface,dtype='<f4',count=vn*3).reshape(-1,3)
 normals=np.frombuffer(surface,dtype='<f4',offset=vn*12,count=vn*3).reshape(-1,3)
 faces=np.frombuffer(surface,dtype='<u4',offset=vn*27).reshape(-1,3)
 assert faces.max()<vn and len(faces)==m['triangles']
 edges=np.sort(np.concatenate([faces[:,[0,1]],faces[:,[1,2]],faces[:,[2,0]]]),axis=1)
 _,counts=np.unique(edges,axis=0,return_counts=True)
 assert np.all(counts==2),f'{key}: open/nonmanifold surface edges {int((counts!=2).sum())}'
 print(json.dumps({'region':key,'parts':len(points),'junctions':len(expected),'triangles':m['triangles'],'watertight':True,'connectedAtSmallestSize':True,'componentsByRadius':radii}))
