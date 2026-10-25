---
type: qbank
schema_version: 1
id: medqa-us-test-000306
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0a650f13d4cc345dc09c1b96fb2f3c377b89f53e0b027ee44327c5419e4e3ae3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간성뇌증"
  - "간경변"
  - "고암모니아혈증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세의 집 없는 남성이 의식 상태 변화로 경찰에 의해 응급실에 이송되었다. 과거 의무기록은 확인할 수 없었다. 입원 당시 진찰에서 공막 황달과 손목을 펴게 했을 때 날개짓 떨림이 보였다. 적절한 평가 후 입원 치료를 시작했다. 다음 날 회진에서 밤새 11회의 설사와 거의 지속적인 방귀가 나왔다고 호소했다. 의식 상태는 호전되었고 손 떨림은 사라졌다. 입원 후 이 환자가 투여받았을 가능성이 가장 높은 약물은?

## 선택지

A. 티아민
B. 락툴로스
C. 날록손
D. 리팍시민

## 해설

정답은 B이다. 황달·의식변화·날개치기떨림이 있는 환자에서 치료 후 의식이 호전되고 설사·복부 가스가 발생했다면 lactulose가 가장 적합하다. lactulose는 대장에서 분해되어 장내 pH를 낮추고 NH3를 NH4+ 형태로 포획하며 대변 배출을 통해 질소 부하를 줄인다. 통상 부드러운 변을 하루 2–3회 보도록 조절하며 밤새 11회의 설사는 목표가 아니라 탈수·전해질 이상을 유발할 과다 효과로 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: lactulose의 장내 암모니아 포획 기전을 설명하고 11회 설사를 치료 목표처럼 해석하지 않도록 수정.
- https://doi.org/10.14309/ajg.0000000000003899

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000306
