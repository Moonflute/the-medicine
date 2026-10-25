---
type: qbank
schema_version: 1
id: medqa-us-train-008577
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:740548905ca5d79d097c09615f6309909c664a675658d44719129e7095202907
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "physiologic edema of pregnancy"
  - "pregnancy-related dyspnea"
  - "third trimester"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
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

임신 32주인 27세 초임부가 산전 진료를 위해 내원했다. 지난 2주 동안 다리가 붓고 가벼운 호흡곤란과 전신 피로가 있었다. 철분 보충제와 종합비타민을 복용한다. 체온 37.2°C(99°F), 맥박 93회/분, 호흡수 20회/분, 혈압 108/60mmHg이다. 하지에 2+ 압흔성 부종이 있지만 홍반이나 압통은 없다. 폐 청진은 깨끗하고 심장검사에서 S3 심음이 들린다. 골반검사에서 자궁 크기는 임신 32주에 해당한다. 다음 중 증상에 대한 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 소변검사
B. 하지 도플러 초음파
C. 환기-관류 스캔
D. 안심시키고 관찰한다

## 해설

정상 혈압·맑은 폐·대칭성 하지부종과 경한 호흡곤란은 임신의 혈액량 증가·정맥압 변화와 관련될 수 있고 S3도 임신 중 생리적으로 들릴 수 있다. 제시된 선택지에서는 D의 관찰이 의도된 답이다. 그러나 안정 시/진행성 호흡곤란·기좌호흡·흉통·저산소증·빈맥이 생기면 심부전/PE 등을 즉시 평가해야 하며 임신이라는 이유로 모든 호흡곤란을 정상으로 돌리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생리 변화 가능성과 호흡곤란의 재평가 조건 구분.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008577
