---
type: qbank
schema_version: 1
id: medqa-us-train-004265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5526fcf92f736735b24d3bd8306cd3b3a8385b1ab619d800f53c4e358c21d112
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "하행 대동맥 박리"
  - "대동맥박리"
  - "에스몰롤"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXNtb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남자가 찢어지는 듯한 심한 상부 등 통증으로 가족에게 이끌려 응급실에 왔다. TV를 보던 중 1시간 전에 갑자기 시작되었다. 13년간 고혈압이 있지만 약물 순응도가 낮다. 니코틴, 술, 불법 약물은 사용하지 않는다. 체온 36.5°C, 심박수 110회/분, 혈압은 오른팔 182/81 mmHg, 왼팔 155/71 mmHg이다. 흉부 CT에서 하행 대동맥에 국한된 내막판이 보인다. 정맥 오피오이드 진통제를 시작했다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 응급 수술
B. 경구 메토프롤롤 및/또는 에날라프릴
C. 설하 니트로글리세린
D. 정맥 에스몰롤

## 해설

하행대동맥 박리의 초기 치료는 감시하 IV β차단제로 HR/수축력과 대동맥벽 충격을 줄이는 것이며 esmolol D가 적절하다. 필요하면 β차단 뒤 혈관확장제를 추가한다. Esmolol이 직접 혈관평활근을 이완시키기 때문이라는 기존 기전은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Esmolol은 직접혈관확장제가 아닌 β1차단제. 급성typeB anti-impulse D 기전 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004265
