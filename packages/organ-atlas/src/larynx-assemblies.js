// Presentation groups preserve source geometry; they are not new tissue segmentations.
export function larynxAssembly(label,region){
 if(region==='pharynx')return /constrictor|raphe/i.test(label)?'pharyngeal-constrictors':'pharyngeal-elevators';
 if(/hyoid bone|thyrohyoid|hyo-epiglottic/i.test(label))return 'hyoid-suspension';
 if(/epiglott|cuneiform/i.test(label))return 'laryngeal-inlet';
 if(/thyroid cartilage|cricothyroid/i.test(label))return 'thyroid-framework';
 // Keep vocal attachments, arytenoids and their muscles together.
 return 'cricoarytenoid-vocal';
}
