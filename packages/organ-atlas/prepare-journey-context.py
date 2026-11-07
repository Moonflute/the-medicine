"""Rasterize source projections as location context, not a clinical slice."""
import sys,json,base64,io
import numpy as np
from PIL import Image,ImageDraw
header=json.loads(sys.stdin.buffer.readline());layers=[]
for layer in header['layers']:
    positions=np.frombuffer(sys.stdin.buffer.read(layer['positions']*4),'<f4').reshape(-1,3)
    indices=np.frombuffer(sys.stdin.buffer.read(layer['indices']*4),'<u4').reshape(-1,3)
    layers.append((layer['color'],positions,indices))
result={};w,h=header['width']*2,header['height']*2
for axis,u in [('front',0),('side',2)]:
    low,high=header['bounds']['min'],header['bounds']['max'];output=Image.new('RGBA',(w,h))
    # Merge like-coloured silhouettes so overlapping pieces do not darken.
    for color in dict.fromkeys(row[0] for row in layers):
        mask=Image.new('L',(w,h));draw=ImageDraw.Draw(mask)
        for c,positions,indices in layers:
            if c!=color:continue
            x=(positions[:,u]-low[u])/(high[u]-low[u])*(w-1)
            y=(high[1]-positions[:,1])/(high[1]-low[1])*(h-1)
            points=np.stack([x,y],axis=1)
            for triangle in indices:draw.polygon([tuple(p) for p in points[triangle]],fill=255)
        output.paste(Image.new('RGBA',(w,h),color),mask=mask)
    out=io.BytesIO();output.resize((w//2,h//2),Image.Resampling.LANCZOS).save(out,format='PNG',optimize=True)
    result[axis]=base64.b64encode(out.getvalue()).decode()
print(json.dumps(result))
