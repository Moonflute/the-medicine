---
type: qbank
schema_version: 1
id: medqa-us-train-002149
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bdb656c9aa07d1d33470940a48d9e22716792f63e94f56f4a8ee980f1342f298
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertrophic cardiomyopathy"
  - "sudden cardiac death"
  - "interventricular septal hypertrophy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
question_type: diagnosis
difficulty: simple
answer: D
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

16세 남아가 농구를 하던 중 쓰러져 20분 후 응급실에 이송되었다. 개인 또는 가족에게 중대한 질환의 병력은 없다. 도착 당시 촉지되는 맥박이 없고 호흡 노력도 보이지 않아 사망 판정을 받았다. 가족은 부검에 동의했다. 다음 중 이 환자에게서 발견될 가능성이 가장 높은 소견은?

## 선택지

A. 심방중격 결손
B. 대동맥의 동맥관 후부 협착
C. 죽상경화판 파열
D. 심실중격 비대

## 해설

운동 중 급사한 청소년에서 선택지 중 비대성 심근병증의 비대칭 중격 비대 D가 가장 적절하다. 심근 섬유 배열 이상과 심실성 부정맥이 기전이 될 수 있으며 음성 가족력이 이를 배제하지 않는다. 다만 젊은 운동선수 급사의 원인 분포는 지역·연구·집단에 따라 달라 항상 최다 원인이라고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은 운동선수 급사의 선택지상 HCM D이나 모든 집단의 최다 원인이라는 단정은 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002149
