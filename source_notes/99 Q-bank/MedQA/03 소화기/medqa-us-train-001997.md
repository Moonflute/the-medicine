---
type: qbank
schema_version: 1
id: medqa-us-train-001997
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c06337041d6c5cdd8d20409516e04e0051359fdc58aa87ad22e93262104a5a5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "toxic megacolon"
  - "ulcerative colitis flare"
  - "abdominal radiograph"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

궤양성 대장염 환자가 혈성 설사에 이어 고열과 빈맥, 심한 복부팽만을 보인다. 수액을 시작했고 독성 거대결장이 의심된다. 환자를 이동시키기 전 병상에서 대장 확장을 신속히 확인할 검사는?

## 선택지

A. 복부 단순 X선
B. 전대장내시경
C. 조영제 관장
D. 소장 캡슐내시경

## 해설


심한 대장염에서 전신 독성과 복부팽만이 나타나면 독성 거대결장을 의심한다. 병상 X선으로 대장 확장을 확인할 수 있고, 안정되면 CT로 합병증을 평가한다. 전대장내시경이나 바륨 관장은 천공 위험 때문에 피한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UC의 발열·쇼크·복부팽만·장음 감소에서 독성거대결장 평가를 위한 복부단순촬영 A; 급성 대장내시경보다 적절.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001997
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
