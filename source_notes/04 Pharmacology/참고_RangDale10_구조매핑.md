# 참고: Rang & Dale's Pharmacology 10e ↔ 이 vault 구조

**참고 서지**: *Rang & Dale's Pharmacology*, 10th ed., Elsevier, 2023, ISBN 978-0-323-87398-7.  
로컬 EPUB: `workspace_ops/source/Rang n Dale's Pharmacology.epub`  
자동 추출 목차(JSON): `workspace_ops/output/rang_dale_nav.json` — `python workspace_ops/scripts/extract_epub_toc.py -o workspace_ops/output/rang_dale_nav.json` 로 갱신.

이 문서는 **원문을 복제하지 않고**, 장(Chapter) 제목을 **한국어로 짧게 옮긴 뒤** `04 Pharmacology`의 **대분류 폴더**·[[분류체계]]에 연결하기 위한 **색인**입니다. 약물·기전 정리 본문은 각 대분류 폴더·약물 노트에서 **한국어**로 작성합니다.

---

## SECTION 1 — 일반 원리 (Ch 1–12)

약동학·약력학·세포 기전·측정 등 **장기계 통합 전 주제**. 이 vault의 15개 **장기·질환축 폴더**에 직접 대응하지 않으므로, 아래는 **루트 보조 노트**로 두는 것을 권장합니다.

| Ch | 원제 (요지) | 한국어 표기 (요지) | vault 연결 |
|----|-------------|-------------------|------------|
| 1 | What is pharmacology? | 약리학의 성격·범위 | [[일반원례_및_교과서색인]] |
| 2–4 | Drug action: general / molecular / cellular | 약물 작용 일반·분자·세포 | 동일 |
| 5 | Biopharmaceuticals & gene therapy | 생물의약품·유전자치료 | 동일 |
| 6–8 | Proliferation/apoptosis; host defence; methods | 증식·사멸·방어·실험법 | 동일 |
| 9–11 | Absorption/distribution; metabolism/elimination; PK | 흡수·분포·대사·배설·약동학 | 동일 |
| 12 | Variation, pharmacogenomics | 개체차·약물유전체학 | 동일 |

→ **폴더 신설 없음.** [[일반원례_및_교과서색인]]에서 장별로 요약·링크를 쌓습니다.

---

## SECTION 2 — 화학적 전달물질 (Ch 13–19)

자율신경·국소호르몬·매개체 총론. 개별 약물은 각 계통 폴더로 흩어지지만, **교과서 순서**를 따라가려면 아래 매핑을 씁니다.

| Ch | 원제 (요지) | 한국어 표기 (요지) | 주된 vault 폴더 |
|----|-------------|-------------------|-----------------|
| 13 | Chemical mediators & autonomic nervous system | 매개체·자율신경 개론 | `신경·정신` 폴더 |
| 14 | Cholinergic transmission | 콜린성 전달 | 신경·정신 |
| 15 | Noradrenergic transmission | 노르아드레날린성 전달 | 신경·정신·심혈계(교감 맥락) |
| 16 | 5-HT and purines | 세로토닌·퓨린 | 신경·정신 |
| 17 | Histamine, lipids, peptides… | 히스타민·지질·펩타이드 등 국소호르몬 | 면역·염증·류마티스 / 신경·정신 |
| 18 | Cannabinoids | 카나비노이드 | 신경·정신 |
| 19 | Nitric oxide and related | 산화질소·관련 매개체 | 심혈계·신경·정신(맥락별) |

---

## SECTION 3 — 주요 장기계 (Ch 20–36)

| Ch | 원제 (요지) | 한국어 표기 (요지) | vault 폴더 |
|----|-------------|-------------------|------------|
| 20 | The heart | 심장 | `심혈계` |
| 21 | The vascular system | 혈관 | 심혈계 |
| 22 | Atherosclerosis & lipoprotein metabolism | 동맥경화·지단백 | 심혈계 |
| 23 | Haemostasis & thrombosis | 지혈·혈전 | `혈액·응고` |
| 24 | Haemopoietic system & anaemia | 조혈·빈혈 치료 | 혈액·응고 |
| 25 | Anti-inflammatory & immunosuppressant | 소염·면역억제 | `면역·염증·류마티스` |
| 26 | Skin | 피부 | `안과·이비인후·피부` |
| 27 | Eye | 안과 | 안과·이비인후·피부 |
| 28 | Respiratory system | 호흡기 | `호흡기` |
| 29 | Kidney & urinary system | 콩팥·비뇨 | `비뇨·신장` |
| 30 | Gastrointestinal tract | 위장관 | `소화기` |
| 31 | Blood glucose & diabetes drugs | 혈당·당뇨 약물 | `내분비·대사` |
| 32 | Obesity | 비만 | 내분비·대사 |
| 33 | Pituitary & adrenal cortex | 뇌하수체·부신 겉질 | 내분비·대사 |
| 34 | Thyroid | 갑상샘 | 내분비·대사 |
| 35 | Reproductive system | 생식기 | [[산부인과·소아/산부인과·소아 약물]] |
| 36 | Bone metabolism | 골 대사 | 내분비·대사 |

---

## SECTION 4 — 신경계 (Ch 37–50)

| Ch | 원제 (요지) | 한국어 표기 (요지) | vault 폴더 |
|----|-------------|-------------------|------------|
| 37–39 | CNS transmission, amino acids, other transmitters | 중추 전달·아미노산·기타 전달물질 | `신경·정신` |
| 40 | Neurodegenerative diseases | 퇴행성 신경질환 | 신경·정신 |
| 41 | General anaesthetics | 전신마취 | `근골격·통증·마취` |
| 42 | Headache | 두통 | 신경·정신 |
| 43 | Analgesic drugs | 진통제 | 신경·정신·근골격·통증·마취 |
| 44 | Local anaesthetics & Na⁺ channels | 국소마취·Na채널 | 근골격·통증·마취 |
| 45 | Anxiolytics & hypnotics | 항불안·최면 | 신경·정신 |
| 46 | Antiepileptic drugs | 항경련 | 신경·정신 |
| 47 | Antipsychotic drugs | 항정신병 | 신경·정신 |
| 48 | Antidepressant drugs | 항우울 | 신경·정신 |
| 49 | Psychoactive drugs | 정신작용제 | 신경·정신 |
| 50 | Drug use & addiction | 약물 오·남용·중독 | 신경·정신 |

---

## SECTION 5 — 감염·항암 (Ch 51–57)

| Ch | 원제 (요지) | 한국어 표기 (요지) | vault 폴더 |
|----|-------------|-------------------|------------|
| 51 | Principles of antimicrobial chemotherapy | 항균화학요법 원리 | `감염` |
| 52–56 | Antibacterial / antiviral / antifungal / protozoa / helminth | 항균·항바이러스·항진균·원충·회충 | 감염 |
| 57 | Anticancer drugs | 항암제 | `종양` |

---

## SECTION 6 — 특수 주제 (Ch 58–60)

| Ch | 원제 (요지) | 한국어 표기 (요지) | vault 폴더 |
|----|-------------|-------------------|------------|
| 58 | Harmful effects of drugs | 약물의 유해작용 | `전해질·영양·독성·기타` |
| 59 | Lifestyle drugs & drugs in sport | 라이프스타일·도핑 | 전해질·영양·독성·기타 |
| 60 | Drug discovery & development | 신약 개발 | [[일반원례_및_교과서색인]] (원론·개발) |

---

## EPUB에서 목차를 뽑을 때 (로컬)

프로젝트에 포함된 스크립트:

- `workspace_ops/scripts/extract_epub_toc.py` — `workspace_ops/source/*.epub` 첫 파일의 `nav` 제목을 JSON으로 출력.

터미널에서 저장소 루트로 이동한 뒤 실행하면, 위 표와 **제목 철자**를 맞출 수 있습니다.

```bash
python workspace_ops/scripts/extract_epub_toc.py > workspace_ops/output/rang_dale_nav.json
```

---

## 한 장이 여러 `계통`에 걸릴 때

교과서 한 장이 여러 장기를 묶더라도, **약물 노트는 [[계통_규칙]]대로 주 계통 하나 + 본문에서 타 폴더 링크**로 정리합니다.
