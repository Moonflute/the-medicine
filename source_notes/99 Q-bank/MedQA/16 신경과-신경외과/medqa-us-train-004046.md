---
type: qbank
schema_version: 1
id: medqa-us-train-004046
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eacd9464129585e04da27c28fc31a4c5ef2c671605353ea4298a7f3e6523c424
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "뇌 과관류 증후군"
  - "경동맥 내막절제술"
  - "뇌출혈"
  - "고혈압"
question_type: 임상증례 객관식
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

왼쪽 경동맥 내막절제술 하루 후 63세 남자에게 심한 두통이 발생했다. 통증 강도는 10점 만점에 9점이고 오심이 있다. 왼쪽 경동맥 협착은 80%였으며 수술 전 헤파린을 투여받았다. 2개월 전과 4개월 전에 일과성 허혈발작을 각각 한 번씩 겪었다. 고혈압, 제2형 당뇨병, 고콜레스테롤혈증이 있고 40년간 하루 한 갑을 피웠다. 주말마다 맥주 1~2잔을 마신다. 현재 리시노프릴, 메트포르민, 시타글립틴, 아스피린을 복용한다. 체온 37.3°C, 맥박 111회/분, 혈압 180/110 mmHg이다. 혼란스러워하며 사람만 알아본다. 동공은 빛에 느리게 반응하고 오른쪽 안면 처짐, 오른쪽 상하지 근력 저하, 오른쪽 심부건반사 3+가 있다. 왼쪽 목 수술 절개부에는 홍반이나 분비물이 없다. 혈구검사와 크레아티닌, 전해질, 포도당은 정상이다. 두부 CT 사진이 제시되어 있다. 이 환자 상태의 가장 강한 소인 요인은 무엇인가?

## 선택지

A. 경동맥 협착 정도
B. 아스피린 치료
C. 고혈압
D. 흡연

## 해설

중증 경동맥 협착을 교정한 직후 심한 두통·혼란·국소 신경결손이 생기고 혈압이 180/110 mmHg이면 뇌 과관류 증후군과 출혈성 합병증을 우선 의심한다. 만성 고혈압(C)은 자가조절 장애 및 이러한 수술후 합병증의 중요한 소인이며 주어진 선지 중 가장 적절하다. 다만 실제 CT를 확인할 수 없어 출혈이 관찰되었다고 단정하지 않는다. 급성 색전성 허혈 등 다른 수술후 신경학적 원인도 실제 영상으로 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CEA 직후 두통·고혈압·국소결손은 과관류 합병증을 시사하여 위험인자 C를 유지하되 보이지 않는 CT에서 출혈을 확인한 것처럼 쓰지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004046
