import {getStructureIdentity} from './structure-identifiers.js';
const standard={VH_M_heart_left_ventricle:'Left ventricle',VH_M_heart_right_ventricle:'Right ventricle',VH_M_left_cardiac_atrium:'Left atrium',VH_M_right_cardiac_atrium:'Right atrium'};
const details={capsule:"Bowman's capsule",glomerulus:'Glomerular capillary tuft',afferent:'Afferent arteriole',efferent:'Efferent arteriole',proximal:'Proximal convoluted tubule','proximal-straight':'Proximal straight tubule',descending:'Thin descending limb of loop of Henle','ascending-thin':'Thin ascending limb of loop of Henle',ascending:'Thick ascending limb of loop of Henle',distal:'Distal convoluted tubule','macula-densa':'Macula densa',connecting:'Connecting tubule',collecting:'Collecting duct',sa:'Sinoatrial node',av:'Atrioventricular node',his:'Atrioventricular bundle (bundle of His)','right-bundle':'Right bundle branch','left-bundle':'Left bundle branch','atrial-spread':'Atrial excitation pathway',ra:'Right atrium',la:'Left atrium',rv:'Right ventricle',lv:'Left ventricle','renal-artery':'Renal artery'};
export function selectionEnglishName(part){
 if(part.detail?.englishLabel)return part.detail.englishLabel;
 if(standard[part.id])return standard[part.id];
 const official=getStructureIdentity(part.organId,part.id)?.ontologyLabel;
 if(official)return official.charAt(0).toUpperCase()+official.slice(1);
 if(part.id.startsWith('detail:')){const key=part.id.split(':').at(-1);if(details[key])return details[key];for(const [prefix,label]of [['segmental-','Segmental renal artery'],['interlobar-','Interlobar artery'],['arcuate-','Arcuate artery'],['cortical-','Cortical radiate artery'],['afferent-','Afferent arteriole'],['glomerulus-','Glomerulus'],['purkinje-','Purkinje fibers']])if(key.startsWith(prefix))return label;
 const valve=key.startsWith('mitral')?'Mitral valve':'Tricuspid valve';if(key.includes('-chord-'))return 'Chordae tendineae — '+valve;if(key.includes('-papillary-'))return 'Papillary muscle — '+valve;if(key.includes('-annulus'))return valve+' annulus';if(key.includes('-leaflet-'))return valve+' leaflet';}
 const label=part.id.replace(/^(VH_[MF]_|Allen_|SBU_[MF]_)/,'').replace(/_L$/,' (left)').replace(/_R$/,' (right)').replace(/[_:]+/g,' ');return label.charAt(0).toUpperCase()+label.slice(1);
}
