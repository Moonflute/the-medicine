---
type: qbank
schema_version: 1
id: medqa-us-train-000090
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9cce4be5cea5d97771178f792dff6b1476e81de269b96134c424efa0210f95ea
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "hyperlipidemia"
  - "colonic adenocarcinoma"
  - "small cell lung cancer"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압과 고지혈증이 있는 53세 여성이 지난 2주간 전신 피부의 발적과 가려움증을 주소로 내원하였다. 증상은 매일 저녁 취침 전에 발생하며 약 30분간 지속된다. 3개월 전, 점진적으로 악화되는 목과 등 통증을 경험한 후 아토르바스타틴(atorvastatin) 복용을 중단하였다. 3주 전 더 낮은 용량으로 스타틴 치료를 재개했으나 근골격계 증상이 재발하여 다시 중단해야 했다. 월경은 2~3개월 간격으로 불규칙하며 3~4일간 지속된다. 지난 30년간 매일 담배 한 갑을 피워왔다. 현재 복용 중인 약물은 리시노프릴(lisinopril)과 나이아신(niacin)이다. 오빠는 결장 선암종(colonic adenocarcinoma)으로 사망했고, 아버지는 소세포폐암(small cell lung cancer)으로 사망했다. 키는 169cm, 체중은 83kg이며, 체질량지수(BMI)는 29kg/m2이다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 이상 소견은 없다. 혈청 지질 검사 결과는 다음과 같다: 총 콜레스테롤 247mg/dL, HDL-콜레스테롤 39mg/dL, LDL-콜레스테롤 172mg/dL, 중성지방 152mg/dL. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 이부프로펜(ibuprofen) 투여
B. 소변 하이드록시인돌아세트산(hydroxyindoleacetic acid) 수치 측정
C. 소변 메타네프린(metanephrine) 수치 측정
D. 나이아신을 페노피브레이트(fenofibrate)로 변경

## 해설

정답은 A이다. niacin 복용 중 매일 밤 짧게 발생하는 전신 홍조·가려움은 niacin 유발 flushing에 합당하다. prostaglandin 관련 피부 혈관확장을 aspirin 또는 ibuprofen 같은 NSAID 전처치로 줄일 수 있어 제시된 선택지에서는 A이다. 이는 이미 중단한 statin의 근육통을 치료하는 문항이 아니다. NSAID의 위장관·신장 위험과 niacin 지속 필요성도 개별 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: statin 근육통 해설이 아닌 niacin의 prostaglandin성 홍조에 NSAID가 작용함을 설명.
- https://www.medlineplus.gov/druginfo/meds/a682518.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000090
