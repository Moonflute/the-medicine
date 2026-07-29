export type MicrobiologyVisual = {
  asset: string;
  modality: string;
  caption: string;
};

export const microbiologyVisuals: Record<string, MicrobiologyVisual> = {
  "staphylococcus-aureus": { asset: "/images/microbiology/staphylococcus-aureus.webp", modality: "Gram stain", caption: "포도송이 모양으로 모인 G(+) cocci" },
  "streptococcus-pneumoniae": { asset: "/images/microbiology/streptococcus-pneumoniae.webp", modality: "Gram stain", caption: "쌍을 이루는 lanceolate G(+) diplococci" },
  "streptococcus-pyogenes": { asset: "/images/microbiology/streptococcus-pyogenes.webp", modality: "Gram stain", caption: "사슬 모양의 G(+) cocci" },
  "streptococcus-agalactiae": { asset: "/images/microbiology/streptococcus-agalactiae.webp", modality: "Gram stain", caption: "사슬 모양으로 배열된 G(+) cocci" },
  "enterococcus-faecalis": { asset: "/images/microbiology/enterococcus-faecalis.webp", modality: "Gram stain", caption: "쌍 또는 짧은 사슬의 G(+) cocci" },
  "enterococcus-faecium": { asset: "/images/microbiology/enterococcus-faecium.webp", modality: "Gram stain", caption: "쌍 또는 짧은 사슬의 G(+) cocci" },
  "corynebacterium-diphtheriae": { asset: "/images/microbiology/corynebacterium-diphtheriae.webp", modality: "Albert stain", caption: "metachromatic granule을 가진 club-shaped bacilli" },
  "listeria-monocytogenes": { asset: "/images/microbiology/listeria-monocytogenes.webp", modality: "Gram stain", caption: "작은 G(+) coccobacilli" },
  "haemophilus-influenzae": { asset: "/images/microbiology/haemophilus-influenzae.webp", modality: "Gram stain", caption: "작고 다형성인 G(-) coccobacilli" },
  "neisseria-meningitidis": { asset: "/images/microbiology/neisseria-meningitidis.webp", modality: "Gram stain", caption: "neutrophil 주변의 kidney-bean shaped G(-) diplococci" },
  "neisseria-gonorrhoeae": { asset: "/images/microbiology/neisseria-gonorrhoeae.webp", modality: "Gram stain", caption: "neutrophil 내·외의 G(-) diplococci" },
  "bordetella-pertussis": { asset: "/images/microbiology/bordetella-pertussis.webp", modality: "Gram stain", caption: "작은 G(-) coccobacilli" },
  "moraxella-catarrhalis": { asset: "/images/microbiology/moraxella-catarrhalis.webp", modality: "Gram stain", caption: "쌍을 이루는 G(-) diplococci" },
  "escherichia-coli": { asset: "/images/microbiology/escherichia-coli.webp", modality: "Gram stain", caption: "전형적인 G(-) bacilli" },
  "klebsiella-pneumoniae": { asset: "/images/microbiology/klebsiella-pneumoniae.webp", modality: "Gram stain", caption: "굵고 짧은 capsulated G(-) bacilli" },
  "proteus-mirabilis": { asset: "/images/microbiology/proteus-mirabilis.webp", modality: "Agar culture", caption: "한천 배지에서의 동심원형 swarming growth" },
  "pseudomonas-aeruginosa": { asset: "/images/microbiology/pseudomonas-aeruginosa.webp", modality: "Agar culture", caption: "pyocyanin에 의한 청록색 색소를 보이는 colony" },
  "acinetobacter-baumannii-complex": { asset: "/images/microbiology/acinetobacter-baumannii-complex.webp", modality: "Gram stain", caption: "짧고 통통한 G(-) coccobacilli" },
  "stenotrophomonas-maltophilia": { asset: "/images/microbiology/stenotrophomonas-maltophilia.webp", modality: "Gram stain", caption: "가늘고 짧은 G(-) bacilli" },
  "clostridioides-difficile": { asset: "/images/microbiology/clostridioides-difficile.webp", modality: "Spore stain", caption: "oval subterminal spore를 가진 bacilli" },
  "legionella-pneumophila": { asset: "/images/microbiology/legionella-pneumophila.webp", modality: "BCYE agar culture", caption: "charcoal agar 위의 작은 glistening colony" },
  "mycoplasma-pneumoniae": { asset: "/images/microbiology/mycoplasma-pneumoniae.webp", modality: "Specialized culture", caption: "특수 배지의 fried-egg colony" },
  "chlamydia-trachomatis": { asset: "/images/microbiology/chlamydia-trachomatis.webp", modality: "Direct immunofluorescence", caption: "상피세포 내 밝은 녹색 cytoplasmic inclusion" },
  "chlamydia-pneumoniae": { asset: "/images/microbiology/chlamydia-pneumoniae.webp", modality: "Direct immunofluorescence", caption: "세포질 내 점상 fluorescence를 보이는 inclusion" },
  "mycobacterium-tuberculosis-complex": { asset: "/images/microbiology/mycobacterium-tuberculosis-complex.webp", modality: "Ziehl-Neelsen stain", caption: "청색 배경에서 보이는 적색 acid-fast bacilli" },
  "treponema-pallidum": { asset: "/images/microbiology/treponema-pallidum.webp", modality: "Dark-field microscopy", caption: "어두운 배경의 가는 corkscrew spirochete" },
  "candida-albicans": { asset: "/images/microbiology/candida-albicans.webp", modality: "Gram stain", caption: "budding yeast와 pseudohyphae" },
  "candida-auris": { asset: "/images/microbiology/candida-auris.webp", modality: "Gram stain", caption: "pseudohyphae 없이 보이는 budding yeast" },
  "cryptococcus-neoformans-gattii": { asset: "/images/microbiology/cryptococcus-neoformans-gattii.webp", modality: "India ink", caption: "두꺼운 capsule halo를 보이는 encapsulated yeast" },
  "aspergillus-fumigatus": { asset: "/images/microbiology/aspergillus-fumigatus.webp", modality: "GMS stain", caption: "acute-angle branching을 보이는 septate hyphae" },
  "pneumocystis-jirovecii": { asset: "/images/microbiology/pneumocystis-jirovecii.webp", modality: "GMS stain", caption: "cup-shaped cyst가 모인 frothy alveolar material" },
  "histoplasma-capsulatum": { asset: "/images/microbiology/histoplasma-capsulatum.webp", modality: "GMS stain", caption: "macrophage 내외의 작은 budding yeast" },
};
