---
type: qbank
schema_version: 1
id: medqa-us-train-008142
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fb901a4b01295752f37977145b6f1e65afd4c00dcb93346cd03c2a51718ad02e
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "bronchiectasis"
  - "hemoptysis"
  - "bronchial artery damage"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
question_type: prognosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남자가 7주 동안 지속된 기침, 호흡곤란, 매일 많은 양의 가래로 내원했다. 지난 몇 년간 호흡기 감염이 잦았다. 담배는 피우지 않고 덱스트로메토르판과 구아이페네신을 필요할 때 복용한다. 체온 37.1°C(98.8°F), 맥박 88회/분, 호흡수 21회/분, 혈압 133/84 mm Hg, 산소포화도 95%이다. 양측 폐야에서 수포음과 천명음이 들리고 흉부 CT가 제시되어 있다. 이 환자에게 가장 위험한 합병증은?

## 선택지

A. 기관지 혈관 손상
B. Rhizopus 감염
C. 폐수포 파열
D. 흉막세포의 종양성 증식

## 해설

반복되는 호흡기 감염과 많은 양의 가래는 기관지확장증을 시사한다. 만성 염증으로 기관지동맥이 비대하고 취약해지면 손상되어 대량 객혈을 일으킬 수 있으므로 A가 적합하다. 이는 폐포나 폐수포 파열이 주된 기전이라는 뜻은 아니다. 누락된 CT의 모양을 임의로 판독하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기관지확장증의 객혈을 폐포 파열이나 기관지-폐동맥 혼동으로 설명한 오류를 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008142
