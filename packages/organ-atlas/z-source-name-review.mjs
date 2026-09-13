// Reviewed exact source names only. These pairs coexist in the same evaluated
// source; never generate geometry or infer arbitrary unsuffixed names as a side.
export const reviewedPairs=[
 ['Intra-articular ligament of head of rib','Intra-articular ligament of head of rib.r'],
 ['Iliocostalis colli muscle','Iliocostalis colli muscle.r'],
 ['Left testicular artery','Right testicular artery.r'],
 ['Insular branches of middle cerebral artery (M2-segment).l','Insular branches of middle cerebral artery (M2).r'],
 ['Middle cerebral artery (M3 segment).l','Middle cerebral artery (M3-segment).r'],
 ['Descending branch of lateral circumflex femoral artery.l','Descending branch of lateral circumflex femoral artery'],
 ['Cochlear nerve.l','Cochlear nerve'],
 ['Common plantar digital branches of medial plantar nerve.l','Common plantar digital branches of medial plantar nerve'],
];
export function reviewedSourceSide(name){
 for(const [left,right]of reviewedPairs){if(name===left)return 'L';if(name===right)return 'R';}
 return null;
}
