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
question_type: mechanism
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

63세 남성이 갑자기 발생한 심한 호흡곤란과 우측 흉통으로 응급실에 왔다. 만성폐쇄성폐질환, 고혈압, 소화성 궤양질환 및 갑상선기능항진증 병력이 있다. 20년 동안 하루 한 갑씩 흡연했고 사교적으로 음주하지만 불법 약물은 사용하지 않는다. 혈압은 130/80 mmHg, 맥박은 규칙적인 분당 98회, 호흡수는 분당 20회이며 실내 공기 산소포화도는 90%이다. 경미한 호흡곤란 상태이고 우측 촉각진탕과 호흡음이 감소하며 타진에서 과공명음이 들린다. 기관은 중앙에 있고 심잡음은 없다. 다음 중 현재 상태의 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. 종양에 의한 주기관지 압박
B. 대동맥 내막 박리
C. 심근 산소 요구량 증가
D. 폐첨부 폐포수포 파열

## 해설


갑작스러운 일측성 흉통·청진음 감소·타진에서 과공명음은 폐첨부의 파열성 폐포수포(자발성 기흉)와 일치한다. 종양 압박·대동맥 박리·심근 산소 요구증가는 해당 소견을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 D/해설 읽음. COPD 환자의 급성 편측 흉통·호흡음/진탕 감소·과공명은 수포 파열에 의한 이차성 자발기흉 기전과 일치. 치료지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005844
