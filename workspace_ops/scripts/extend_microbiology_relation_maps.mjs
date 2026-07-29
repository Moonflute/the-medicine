import fs from "node:fs";
import path from "node:path";

const target = path.join(process.cwd(), "apps", "medicine-web", "scripts", "build-microbiology-relations.mjs");
let content = fs.readFileSync(target, "utf8");

const diseaseMarker = `const diseasePatterns = new Map([
`;
const diseaseAddition = `const diseasePatterns = new Map([
  ["coagulase-negative-staphylococci", /인공판막.*심내막염|prosthetic valve endocarditis|카테터.*혈류감염|catheter-related bloodstream/i],
  ["corynebacterium-diphtheriae", /디프테리아|diphtheria/i],
  ["moraxella-catarrhalis", /중이염|otitis media|부비동염|sinusitis|COPD.*악화/i],
  ["chlamydia-pneumoniae", /지역사회획득폐렴|community-acquired pneumonia|비정형 폐렴/i],
  ["borrelia-clinical-group", /라임병|Lyme disease|재귀열|relapsing fever/i],
  ["leptospira-species", /렙토스피라|leptospirosis/i],
  ["enterovirus", /수족구|hand-foot-mouth|무균성 수막염|aseptic meningitis|심근염|myocarditis/i],
  ["rotavirus", /로타바이러스|rotavirus/i],
  ["hepatitis-a-virus", /A형간염|hepatitis A/i],
  ["measles-virus", /홍역|measles/i],
  ["mumps-virus", /유행성이하선염|볼거리|mumps/i],
  ["rubella-virus", /풍진|rubella/i],
  ["dermatophytes", /백선|tinea|피부사상균|onychomycosis/i],
  ["histoplasma-capsulatum", /히스토플라스마|histoplasmosis/i],
  ["coccidioides-species", /콕시디오이데스|coccidioidomycosis/i],
  ["cryptosporidium-species", /와포자충|cryptosporid/i],
  ["intestinal-helminths", /회충|요충|편충|구충|ascariasis|enterobiasis|trichuriasis|hookworm/i],
  ["tissue-helminths", /주혈흡충|사상충|에키노코쿠스|schistosom|filariasis|echinococc/i],
`;
if (!content.includes('["corynebacterium-diphtheriae"')) content = content.replace(diseaseMarker, diseaseAddition);

const drugMarker = `const drugPatterns = new Map([
`;
const drugAddition = `const drugPatterns = new Map([
  ["corynebacterium-diphtheriae", /Penicillin|Erythromycin|Azithromycin/i],
  ["moraxella-catarrhalis", /Amoxicillin.*clavulan|Cefuroxime|Azithromycin/i],
  ["chlamydia-pneumoniae", /Azithromycin|Doxycycline|Levofloxacin|Moxifloxacin/i],
  ["borrelia-clinical-group", /Doxycycline|Amoxicillin|Ceftriaxone/i],
  ["leptospira-species", /Doxycycline|Penicillin|Ceftriaxone/i],
  ["dermatophytes", /Terbinafine|Itraconazole|Fluconazole/i],
  ["histoplasma-capsulatum", /Itraconazole|Amphotericin/i],
  ["coccidioides-species", /Fluconazole|Itraconazole|Amphotericin/i],
  ["cryptosporidium-species", /Nitazoxanide/i],
  ["intestinal-helminths", /Albendazole|Mebendazole|Praziquantel|Pyrantel/i],
  ["tissue-helminths", /Praziquantel|Ivermectin|Albendazole|Diethylcarbamazine/i],
`;
if (!content.includes('["corynebacterium-diphtheriae", /Penicillin')) content = content.replace(drugMarker, drugAddition);

fs.writeFileSync(target, content, "utf8");
console.log("Microbiology disease and drug relation maps extended.");
