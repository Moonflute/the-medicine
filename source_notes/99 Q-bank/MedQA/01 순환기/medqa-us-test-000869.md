---
type: qbank
schema_version: 1
id: medqa-us-test-000869
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:05e61a128de6006c4e7dab7d87e735ad079ec18d9e77d1734175460016143864
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "2도 방실차단"
  - "Mobitz II"
  - "서맥성 쇼크"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uwqeyLpOywqOuLqCAoQVYgYmxvY2spLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9idXRhbWluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

80세 남성이 피로와 어지러움으로 응급실에 왔다. 흉통, 두근거림 또는 호흡곤란은 없었다. 고지혈증, 제2형 당뇨병, 고혈압, 골관절염, 천식 병력이 있으며 심바스타틴, 메트포르민, 리시노프릴, 알부테롤, 이부프로펜을 복용한다. 맥박 48회/분, 혈압 89/50 mmHg였다. 질문에 느리게 답하지만 사람·장소·시간 지남력은 있었다. 점막이 건조했고 폐 청진은 깨끗했으며 장음은 정상이었다. 양쪽 발의 맥박은 만져지지 않고 말단이 차가우며 모세혈관 재충만 시간이 4초였다. 심전도에서 좌축편위, III유도 Q파, 일정한 PR 간격 0.15초와 매 세 번째 P파의 비전도, QRS 0.09초가 보였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 도부타민
B. 노르에피네프린
C. 심장 조율
D. 에피네프린

## 해설


심박수가 48회·PR 간격 정상·QRS 0.09초·3번째 P파 전도 차단은 2도 방실 차단(Mobitz II)이며, 서맥성 쇼크에 해당한다. 치료는 심장 조율(pacemaker)이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 일정 PR과 간헐적 비전도 P파·서맥/저관류는 위험한 2도 AV block. 제시된 처치 중 조율 C가 적합하고 ECG가 글로 충분히 기술됨.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000869
