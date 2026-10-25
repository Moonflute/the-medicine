---
type: qbank
schema_version: 1
id: medqa-us-train-003591
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac4ae4ea6b2ed3285c2e7958095e465ab7af88c755c82b06e2d3dcbc8fcdb994
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Boerhaave syndrome"
  - "esophageal perforation"
  - "post-endoscopy complication"
  - "pneumomediastinum"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 전날 시행한 상부위장관 내시경 후 발생한 심한 심와부 불편감과 등으로 퍼지는 왼쪽 흉통, 반복 구토로 응급실에 왔다. 흉부에 염발음이 있고 심근효소와 심전도는 급성 심근경색 소견이 없었다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 기흉
B. 식도 천공
C. 대동맥 박리
D. 급성 심근경색

## 해설

상부내시경 다음 날 흉통·심와부통과 흉부 crepitus가 나타나 의인성 식도천공 B를 의심한다. 반복 ECG/심근효소가 MI를 지지하지 않는 점도 감별에 도움이 된다. Boerhaave는 보통 격렬한 구토 후 자발성 전층 파열을 뜻하므로 시술 관련 천공을 모두 같은 명칭으로 부르면 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 내시경 후 의인성 식도천공 B를 자발성 구토후 파열 Boerhaave와 무조건 동일시한 오류.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003591
