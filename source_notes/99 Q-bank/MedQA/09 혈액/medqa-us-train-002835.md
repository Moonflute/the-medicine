---
type: qbank
schema_version: 1
id: medqa-us-train-002835
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9277a380219bc4de35a5a7c291119f983d1a511e094d5b95781911571c728c4d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "monoclonal gammopathy of undetermined significance"
  - "MGUS"
  - "monoclonal protein"
  - "low clonal plasma cell burden"
  - "Monoclonal gammopathy of undetermined significance"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

74세 남성이 2주 전 빈혈 평가를 위해 시행한 검사 결과를 추적하기 위해 내원했다. 특별한 증상은 없다. 20년 동안 고혈압이 있었고 수년간 무릎 골관절염이 있다. 하루 2마일을 걷고 흡연은 하지 않으며 술은 적당히 마신다. 하이드로클로로티아지드, 로사르탄, 이부프로펜을 포함한 진통제를 복용한다. 혈색소 10 g/dL, 평균적혈구용적 75 μm³, 백혈구 5,000/mm³, 혈소판 350,000/mm³, ESR 18 mm/hr, 페리틴 5 μg/L, 철 30 μg/L, 총 철결합능 500 μg/dL이다. 칼슘, 알부민, BUN, 크레아티닌은 정상이다. 혈청 단백전기영동에서 비-IgM 단클론 단백질이 12 g/L이고 골수의 클론성 형질세포는 전체 세포의 4%이다. 골격검사와 MRI에서 병적 소견은 없다. 철결핍성 빈혈 외에 다음 중 고려할 가장 적절한 진단은?

## 선택지

A. 의미불명 단클론감마병증
B. 무증상 다발골수종
C. 증상성 다발골수종
D. 발덴스트롬 거대글로불린혈증

## 해설


비-IgM M단백 12 g/L(1.2 g/dL), 골수 clonal plasma cell 4%이고 형질세포질환에 기인한 장기손상이 없어 MGUS A에 부합한다. Hb10의 빈혈은 ferritin 5, 높은 TIBC와 소구성으로 철결핍이 설명하며 곧바로 myeloma-defining anemia로 계산하지 않는다. MGUS는 혈액학적 이상이 전혀 없는 상태라는 뜻이 아니라 형질세포질환에 귀속되는 CRAB 등 골수종 정의 사건이 없는 상태이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002835 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MGUS 기준과 빈혈의 원인 귀속을 명확화; 철결핍 빈혈이 있다고 MGUS가 배제되는 것은 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7020664/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002835
