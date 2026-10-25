---
type: qbank
schema_version: 1
id: medqa-us-train-005145
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03b67ca7b8c677381c4104e53e576816319ea4030f96472a240b52f16ca7f037
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "기능성 소화불량"
  - "헬리코박터 파일로리"
  - "비궤양성 소화불량"
  - "Helicobacter pylori infection"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9ILnB5bG9yaSDqsJDsl7wgKEgucHlsb3JpIEluZmVjdGlvbikubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 대학원생이 3주 동안 식사로 악화되는 명치 통증, 흉골 뒤 통증, 조기 포만감과 복부팽만으로 내원했다. 토혈이나 혈변은 없고 최근 시험공부로 카페인 음료와 패스트푸드를 많이 먹었다. 위장관암 가족력이나 개인력은 없다. 다음 중 가장 적절한 접근은?

## 선택지

A. 상부위장관 내시경
B. 바륨 삼킴 방사선검사
C. 헬리코박터 파일로리 대변 항원검사
D. 메토클로프라미드 치료

## 해설

젊고 명확한 경고소견이 없는 미조사 소화불량에서는 C의 비침습 H.pylori 대변항원 검사와 양성시 제균 접근이 적절하다. 3주 증상만으로 기능성 소화불량을 확진하지 않으며 검사에 영향 주는 PPI·항생제 복용도 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 3주 증상만으로 기능성 소화불량 확진하지 않고 미조사 소화불량 H.pylori검사 C로 정리.
- https://gi.org/guideline/management-of-dyspepsia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005145
