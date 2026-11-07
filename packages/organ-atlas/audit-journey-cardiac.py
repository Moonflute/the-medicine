import sys,json,io
import numpy as np
from scipy import ndimage as ndi
from PIL import Image,ImageDraw
cfg=json.loads(sys.stdin.buffer.readline());nx,ny,nz=cfg['dimensions'];n=nx*ny*nz;step=cfg['step'];origin=np.array(cfg['origin']);volumes=[];report=[]
colors=[(100,142,186),(131,166,197),(198,106,106),(185,82,85)]
for item in cfg['reports']:
    votes=np.frombuffer(sys.stdin.buffer.read(n),np.uint8).reshape(nz,ny,nx)
    tissue=np.frombuffer(sys.stdin.buffer.read(n),np.uint8).reshape(nz,ny,nx)
    surface=np.frombuffer(sys.stdin.buffer.read(n),np.uint8).reshape(nz,ny,nx)
    blood=(votes&(votes-1))>0;wall=(tissue&(tissue-1))>0
    blood&=~wall
    parts,count=ndi.label(blood);sizes=np.bincount(parts.ravel());sizes[0]=0
    largest=parts==sizes.argmax();distance=ndi.distance_transform_edt(largest)*step;seed=np.unravel_index(np.argmax(distance),distance.shape)
    report.append({**item,'volumeMl':round(float(largest.sum()*step**3*1e6),2),'components':count,'largestFraction':round(float(largest.sum()/max(1,blood.sum())),3),'seed':(np.array(seed)[::-1]*step+origin).tolist(),'clearanceMm':round(float(distance.max()*1000),3)})
    volumes.append((blood,wall,surface))
image=Image.new('RGB',(900,900),'#101c25');draw=ImageDraw.Draw(image)
for row,height in enumerate([1.265,1.285,1.305]):
    y=round((height-origin[1])/step)
    for col,(blood,wall,surface) in enumerate(volumes):
        pixels=np.zeros((nz,nx,3),np.uint8);pixels[:]=[16,28,37];pixels[wall[:,y,:]]=[87,79,80];pixels[blood[:,y,:]]=colors[col];pixels[surface[:,y,:]>0]=[220,224,220]
        panel=Image.fromarray(np.flipud(pixels)).resize((218,260),Image.Resampling.NEAREST);image.paste(panel,(col*225,row*300+25));draw.text((col*225+6,row*300+5),cfg['reports'][col]['name']+' '+str(height),fill='white')
image.save('journey-cardiac-cavity-audit.png')
with open('journey-cardiac-cavity-audit.json','w',encoding='utf-8') as f:json.dump({'method':'Oriented source wall crossings: leave tissue then enter tissue; at least two orthogonal axes agree; tissue excluded','origin':cfg['origin'],'spacing':step,'parts':report},f,indent=2)
print(json.dumps(report))
