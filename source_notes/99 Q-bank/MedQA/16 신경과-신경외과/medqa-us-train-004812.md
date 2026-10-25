---
type: qbank
schema_version: 1
id: medqa-us-train-004812
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf2dfe82e39178756bb36ea2a9bf345b51a70a80a46c8909e332f97ecfd7bad6
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "고혈압성 뇌병증"
  - "가역적 후뇌 병증 증후군"
  - "뇌 MRI"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
difficulty: standard
answer: D
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

53세 남성이 혼란으로 응급실에 왔다. 약 3시간 전까지 평소와 같았지만 샌드위치로 TV를 끄려고 했고 아내에게 심한 두통을 호소했다. 여러 약을 써도 조절이 어려운 고혈압이 있다. 체온은 36.7°C (98°F), 맥박은 분당 70회, 혈압은 206/132 mm Hg이다. 정신이 명료하지만 자신에 대해서만 지남력이 있고 계속 머리가 아프다고 반복한다. 그 외 신체검사와 국소 신경학적 검사는 정상이다. 비조영 두부 CT가 제시되어 있다. 이 환자의 진단을 확인하는 데 도움이 될 검사는 무엇인가?

## 선택지

A. 뇌 CT 혈관조영술
B. 목 CT 혈관조영술
C. 요추천자
D. 뇌 MRI

## 해설

심한 고혈압과 급성 두통·뇌병증은 PRES를 포함한 고혈압성 뇌증을 의심하게 하며, 뇌 MRI(D)가 혈관성 부종의 분포 및 다른 병변 감별에 도움이 된다. PRES는 보통 T2/FLAIR 고신호와 혈관성 부종, 증가한 확산을 보이며 확산제한이 반드시 뚜렷한 병이 아니다. 제한확산이 있으면 허혈성 손상 등이 동반될 수 있다. 현재 CT 사진이 없어 특정 뇌실주위 저음영을 관찰했다고 쓰지 않으며 MRI 하나만으로 모든 임상 진단이 확정되는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진에서 특정 CT 저음영을 보았다고 하는 오류와 PRES는 확산제한이 뚜렷하다는 기전 오류를 수정했다. 임상적으로 의심되는 PRES 평가 MRI D는 유지한다.

- 공식/학회 근거: https://www.ajnr.org/content/ajnr/23/6/1038.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004812
