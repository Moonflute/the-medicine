---
type: qbank
schema_version: 1
id: medqa-us-train-004314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c55c191eea1901d1af1867c2714dbef8ed9501735f9cc878f0808d695fcfb19e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "환자 개인정보 보호"
  - "HIPAA"
  - "정보 공개 동의"
related_disease_slugs: []
question_type: 임상증례 객관식
difficulty: standard
answer: B
publication_status: "withheld"
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

54세 남성이 급성 심근경색으로 관상동맥중재술을 받고 회복 중이다. 판단 능력이 있는 환자는 배우자에게만 경과를 설명해 달라고 했다. 사촌이 병실 밖에서 치료 내용과 예후를 묻는다. 가장 적절한 대응은?

## 선택지

A. 입원 경과만 말하고 예후는 밝히지 않는다
B. 사촌에게는 환자 동의 없이 건강정보를 설명할 수 없다고 안내한다
C. 가족 관계를 확인한 뒤 전체 경과를 설명한다
D. 자세한 설명 대신 진료기록 사본을 준다

## 해설

가족이라는 사실만으로 진료정보를 공개할 수는 없다. 환자가 정보를 공유할 사람으로 지정하지 않은 사촌에게는 경과나 예후를 설명하지 않는다. 진료기록 사본 교부에도 별도의 법적 요건이 적용된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이미 허용한 가족정보공유를 동의없음으로 읽은 해설오류. B 유지.
- https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-allow-a-health-care-provider-to-communicate-with-a-patients-family-friends-or-other-persons-who-are-involved-in-the-patient-care.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004314
- 국가법령정보센터, 의료법 제19조·제21조: https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=279731
