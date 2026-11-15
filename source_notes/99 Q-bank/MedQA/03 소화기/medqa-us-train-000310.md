---
type: qbank
schema_version: 1
id: medqa-us-train-000310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d687c1c38e51f5c5940729b0e5a6480109b28b57895401aa6ac1c411b5531948
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative colitis"
  - "colon cancer"
  - "strep throat"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성이 궤양성 대장염을 진단받은 지 2년 됐다. 최근 원발성 경화성 담관염(PSC)도 확인됐다. 지금 혈변은 없고 지난 내시경에서 이형성은 없었다. 대장암 감시 계획은?

## 선택지

A. 대장염 증상 발생 후 8년이 될 때까지 감시하지 않는다.
B. 혈변이 재발할 때만 내시경을 한다.
C. 분변잠혈검사만으로 감시한다.
D. PSC 진단 시점부터 감시 대장내시경을 시작한다.

## 해설

PSC를 동반한 염증성 장질환은 대장암 고위험군이다. 대장염의 기간이나 증상과 별개로 PSC 진단 시점부터 대장내시경 감시를 시작하고 짧은 간격으로 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UC가 10년 이상이라는 없는 병력 대신 50세 CRC 직계가족력과 연령으로 colonoscopy 근거를 명확히 함.
- https://gastro.org/clinical-guidance/risk-stratification-for-colorectal-cancer-screening-and-surveillance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000310
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
- https://doi.org/10.1002/hep.32771
