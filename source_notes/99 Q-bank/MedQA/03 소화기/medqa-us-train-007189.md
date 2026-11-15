---
type: qbank
schema_version: 1
id: medqa-us-train-007189
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07a572fdf1db447ced5bb429092d0bdbc474637762f7e4d5cdf3d9da24337cf5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "독성 거대결장"
  - "위막성 대장염"
  - "하스트라 소실"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

최근 항생제를 복용한 66세 여성이 수양성 설사와 복부팽만으로 왔다. 혈압 84/50 mmHg, 백혈구 28,000/μL이고 대변에서 C. difficile 독소가 검출됐다. CT에 대장 확장이 있으나 장마비나 천공은 확인되지 않았다. 수액·응급 외과 협진과 함께 시작할 항균 치료는?

## 선택지

A. 경구 또는 위관 반코마이신과 정맥 메트로니다졸
B. 정맥 반코마이신과 경구 메트로니다졸
C. 경구 메트로니다졸 단독
D. 경구 피닥소마이신 단독

## 해설

쇼크와 대장 확장이 동반된 전격성 감염에서는 장관 내로 반코마이신을 투여하고 정맥 메트로니다졸을 병용한다. 정맥 반코마이신으로 이를 대신할 수 없다. 장마비가 있으면 직장 반코마이신 추가도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Haustra를지방층으로오역한설명을결장팽대주름으로교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007189
- https://pubmed.ncbi.nlm.nih.gov/42383946/
