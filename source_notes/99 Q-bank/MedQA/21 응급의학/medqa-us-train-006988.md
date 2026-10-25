---
type: qbank
schema_version: 1
id: medqa-us-train-006988
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94144dac7b01bc36ea4a8810e8ae24d60127ff0bf451d24ec90fc4c67d6c5a30
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "급성 사지 허혈"
  - "동맥 색전"
  - "심방세동"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: complex
answer: C
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

58세 남자가 저림과 근력저하를 동반한 심한 오른쪽 다리 통증으로 응급실에 내원했다. 3시간 전 영화를 보던 중 갑자기 증상이 시작되었다. 제2형 당뇨병과 고혈압 병력이 있으며, 35년 동안 하루 20–30개비의 담배를 피웠다. 활력징후는 혈압 149/85 mmHg, 체온 36.9°C(98.4°F), 불규칙 맥박 96회/분이다. 신체검사에서 오른쪽 오금동맥과 뒤정강동맥의 맥박이 만져지지 않는다. 오른쪽 다리는 창백하고 차갑다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 르리슈 증후군
B. 버거병
C. 급성 사지 허혈
D. CREST 증후군

## 해설

갑작스러운 다리 통증, 차가움, 맥박 소실과 근력 저하는 급성 하지 허혈(C)을 시사한다. 불규칙한 맥박은 심방세동과 심장성 색전 가능성을 높이지만 심전도 확인 없이 확진한 것은 아니다. 색전은 사지 동맥을 폐색할 수 있으며 반드시 대동맥에 걸려야 하는 것은 아니다. 신경학적 이상은 위협받는 사지의 단서이므로 신속한 혈관 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 하지 허혈 C는 유지한다. 불규칙 맥박만으로 심방세동을 확진하고 색전이 반드시 대동맥에 걸린다고 설명한 오류를 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006988
