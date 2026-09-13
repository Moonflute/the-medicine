const NS='http://www.w3.org/1999/xhtml';
export function appendIndicationRail(fragment,items,{side,width,boxWidth,top,bottom,svg}){
 const x=side?width-boxWidth-5:5,end=side?x:x+boxWidth;
 const lines=svg('g',{'data-indication-lines':side}),foreign=svg('foreignObject',{x,y:top,width:boxWidth,height:bottom-top});
 const panel=document.createElementNS(NS,'div');panel.className='indication-rail';
 panel.setAttribute('aria-label',`${items.length} visible structures; scroll to browse`);
 const header=document.createElementNS(NS,'div');header.className='indication-rail-count';header.textContent=`${items.length} structures ↕`;
 const list=document.createElementNS(NS,'div');list.className='indication-rail-list';
 list.tabIndex=0;list.setAttribute('aria-label',`${items.length} visible anatomical structures`);
 list.addEventListener('keydown',event=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','PageUp','PageDown','Home','End'].includes(event.key))event.stopPropagation();});
 const rows=items.map(item=>{const row=document.createElementNS(NS,'div');row.className='indication-rail-label';row.dataset.indicationName=item.name;row.textContent=item.name;list.append(row);return row;});
 panel.append(header,list);foreign.append(panel);fragment.append(lines,foreign);
 function draw(){
  if(!panel.isConnected)return;
  const bounds=panel.getBoundingClientRect(),listBounds=list.getBoundingClientRect(),output=document.createDocumentFragment();
  rows.forEach((row,i)=>{const r=row.getBoundingClientRect(),middle=(r.top+r.bottom)/2;if(middle<listBounds.top||middle>listBounds.bottom)return;
   const y=top+middle-bounds.top,item=items[i];
   output.append(svg('path',{d:`M ${item.x} ${item.y} L ${end+(side?-9:9)} ${y} L ${end} ${y}`}),svg('circle',{cx:item.x,cy:item.y,r:2}));
  });lines.replaceChildren(output);
 }
 list.addEventListener('scroll',draw,{passive:true});
 // Rail scrolling must not zoom or rotate the model underneath it.
 for(const event of ['wheel','pointerdown','touchstart'])panel.addEventListener(event,e=>e.stopPropagation(),{passive:true});
 requestAnimationFrame(draw);
}
