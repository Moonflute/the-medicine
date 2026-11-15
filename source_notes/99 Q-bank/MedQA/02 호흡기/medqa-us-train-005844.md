---
type: qbank
schema_version: 1
id: medqa-us-train-005844
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a52568713d4fae46392a9deea1df480bdd220f81289abef1b3ca716c01690a0
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "자발성 기흉"
  - "폐첨부 폐포수포"
  - "흡연 관련 기흉"
  - "spontaneous pneumothorax"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

63세 COPD 환자가 갑자기 오른쪽 가슴이 아프고 숨이 차다. 오른쪽 호흡음과 촉각진탕이 감소하고 타진은 과공명이다. 흉부 X선에서 오른쪽 폐선이 보이고 그 바깥쪽에 폐혈관 음영이 없다. 가장 가능성 높은 진단은?

## 선택지

A. 우측 흉수
B. 우하엽 무기폐
C. 우측 폐렴
D. 기저 폐질환에 동반된 이차성 자발성 기흉

## 해설


갑자기 생긴 한쪽 흉통과 호흡음 감소에 폐선 바깥쪽 혈관 음영이 없는 소견은 기흉에 부합한다. COPD 같은 기저 폐질환이 있으면 이차성 자발성 기흉이며, 기저 폐질환이 없는 경증 사례의 관찰 기준을 그대로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 D/해설 읽음. COPD 환자의 급성 편측 흉통·호흡음/진탕 감소·과공명은 수포 파열에 의한 이차성 자발기흉 기전과 일치. 치료지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005844
- https://publications.ersnet.org/lookup/doi/10.1183/13993003.00797-2023
