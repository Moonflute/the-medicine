---
type: qbank
schema_version: 1
id: medqa-us-train-007971
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ee3cbc353a5f41b5b9cc5415c3b679ea58f46d002c98a77cac019cd0630a6f5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "postoperative fever"
  - "inflammatory response to surgery"
  - "postoperative day 1"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImOyIoCDtm4Qg67Cc7Je0IChQb3N0b3BlcmF0aXZlIEZldmVyKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

자궁내막증의 확정적 치료로 전자궁적출술을 받은 55세 여성이 외과병동에서 관리 중이다. 수술 후 1일째 발열을 호소하며 침상에 누워 움직이지 않아 몸이 쑤신다는 것 외에는 다른 증상이 없다. 온단세트론, 아세트아미노펜, 모르핀을 투여 중이다. 체온 101°F(38.3°C), 혈압 127/68 mmHg, 맥박 100회/분, 호흡수 17회/분, 실내 공기 산소포화도 94%이다. 복부검사는 정상이고 심폐검사에서 경미한 수포음만 들린다. 이 환자 발열의 가장 가능성 높은 원인은?

## 선택지

A. 농양 형성
B. 수술에 의한 염증 자극
C. 요로감염
D. 상처 감염

## 해설


수술 직후 발열은 조직 손상에 대한 염증성 사이토카인 방출이 원인인 경우가 많다. 따라서 가장 가능성 높은 원인은 수술에 의한 염증 자극이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007971 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술1일째 국소 감염 근거 없는 발열에서 수술 조직손상에 따른 염증자극 B가 가장 가능성 높다. 무기폐가 발열 원인이라는 오해로 바꾸지 않았고 실제 감염 가능성을 영구 배제한 검수는 아니다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007971
