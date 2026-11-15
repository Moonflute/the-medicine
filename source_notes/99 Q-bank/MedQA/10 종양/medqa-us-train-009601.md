---
type: qbank
schema_version: 1
id: medqa-us-train-009601
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48bc13bb9174752c0143015115c1783a63b16e033eb356a8ad182db4ce5417b3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "palpable breast mass"
  - "만져지는 유방 종괴"
  - "breast ultrasound"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

49세 여성이 3개월간 만져지는 왼쪽 유방 종괴로 진단 유방촬영을 받았으나 해당 부위에 이상이 보이지 않았다. 종괴는 여전히 만져진다. 바로 시행할 추가 영상은?

## 선택지

A. 단기 추적 유방촬영만 예약
B. 흉부 조영 CT
C. 만져지는 부위의 표적 유방 초음파
D. 유방 PET/CT

## 해설


유방촬영이 음성이어도 만져지는 종괴가 지속되면 표적 초음파로 평가한다. 영상이 모두 음성이어도 촉진 소견이 강하게 의심되면 조직검사를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009601 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 음성 유방촬영 후에도 지속되는 촉지 종괴의 표적 US D 유지; 음성 영상만으로 악성을 배제하는 해석 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009601
- https://acsearch.acr.org/docs/69495/narrative/
