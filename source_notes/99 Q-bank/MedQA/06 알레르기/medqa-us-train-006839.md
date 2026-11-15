---
type: qbank
schema_version: 1
id: medqa-us-train-006839
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ddfb9780b6aa67d43e91465d188c6b32a0d62a91a4a86eb1d4b7bcd312dd855
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "쇼그렌증후군"
  - "건성각결막염"
  - "쉬르머검사 양성"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmx1dmFzdGF0aW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

쇼그렌증후군이 있는 46세 여성이 양쪽 눈이 건조하고 모래가 들어간 것 같다고 한다. 눈물 분비가 감소했지만 시력저하, 광과민, 각막 손상은 없다. 증상 완화를 위한 일차 처치는?

## 선택지

A. 보존제 없는 인공눈물
B. 항생제 안연고
C. 스테로이드 안약 장기사용
D. 산동제

## 해설


인공눈물과 안구 윤활제는 쇼그렌증후군에 의한 안구건조의 초기 증상 치료다. 통증, 광과민이나 시력 변화가 있으면 각막 손상 등을 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-006839`와 직접 대조했다.
- 판정: 비정상 Schirmer 검사·우식증·자가항체로 건조증 지지, A 유지. 해설의 시와 눈물막 건조 오염 문구 정리.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://academic.oup.com/rheumatology/article/56/10/e24/3895127

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006839
- https://doi.org/10.1136/annrheumdis-2019-216114
