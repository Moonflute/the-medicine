"""Surface-only rebuild from the existing reviewed sparse navigation field."""
import sys, json, gzip
from pathlib import Path
import numpy as np
from journey_mesh import build_surface

cfg = json.loads(sys.stdin.buffer.readline())
packed = gzip.decompress((Path('static/models/current') / ('journey-' + cfg['key'] + '-volume.bin.gz')).read_bytes())
assert cfg['volumeFormat'] == 'bricks-v1'
count = int(np.frombuffer(packed, dtype='<u4', count=1)[0])
keys = np.frombuffer(packed, dtype='<u4', count=count, offset=4)
data = np.frombuffer(packed, dtype=np.uint8, offset=4+count*4).reshape(count, 2, 8, 8, 8)
nx, ny, nz = cfg['dimensions']
labels = np.zeros((nz, ny, nx), dtype=np.uint8)
bx, by, _ = [(d+7)//8 for d in cfg['dimensions']]
for i, key in enumerate(keys):
    x, y, z = (int(key) % bx)*8, (int(key)//bx % by)*8, int(key)//(bx*by)*8
    sx, sy, sz = min(8, nx-x), min(8, ny-y), min(8, nz-z)
    labels[z:z+sz, y:y+sy, x:x+sx] = data[i, 1, :sz, :sy, :sx]
verts, faces, normals, colors, _ = build_surface(labels, cfg)
surface = verts.tobytes() + normals.tobytes() + colors.tobytes() + faces.tobytes()
report = {'vertices': len(verts), 'triangles': len(faces), 'surfaceBytes': len(surface), 'surfaceIsolation': 'per-blood-circuit'}
sys.stdout.buffer.write((json.dumps(report)+'\n').encode())
sys.stdout.buffer.write(surface)
