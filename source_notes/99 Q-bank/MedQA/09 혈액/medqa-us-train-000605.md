---
type: qbank
schema_version: 1
id: medqa-us-train-000605
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3f7456db36c446dde22c85ba5258dcd1e27359c7b9c80c90b992d723735fa63
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell trait"
  - "sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

15세 소년이 밤에 소변을 보기 위해 자주 깬다는 이유로 아버지와 함께 내원하였다. 가끔 두통이 있는 것 외에는 다른 호소 증상은 없다. 가족은 최근 탄자니아에서 이주해 왔으며 환자의 과거력은 알려진 바 없다. 아버지는 5세 때 겸상 적혈구 질환(sickle cell disease)을 진단받았다. 신체 검진상 이상 소견은 없다. 검사실 검사 결과는 다음과 같다: 혈색소 14.5 g/dL, 헤마토크릿 44%, MCV 90 fL, 망상적혈구 1.5%. 혈색소 전기영동 결과는 다음과 같다: HbA 55%, HbS 43%, HbF 1%. 이 환자가 가장 위험도가 높은 질환은 무엇인가?

## 선택지

A. 투명세포 신세포암(Clear cell renal carcinoma)
B. 신유두 괴사(Renal papillary necrosis)
C. 기능적 무비증(Functional asplenia)
D. 허혈성 뇌졸중(Ischemic stroke)

## 해설


HbA가 HbS보다 많고 빈혈·망상적혈구증가가 없는 전기영동 양상은 겸상적혈구 보인자(HbAS)를 지지한다. 신수질의 낮은 산소분압·고삼투성·산성 환경은 국소 겸상화를 유발해 농축능 저하와 신유두 괴사(B)를 일으킬 수 있다. 이를 신우피질 괴사라고 부르지 않는다. 일반적 HbSS 환자와 같은 기능적 무비증·뇌졸중 위험을 그대로 적용하지 않으며, 드문 신수질암 연관을 투명세포 신암과 혼동하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000605 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Sickle trait의 신유두 괴사를 신우피질 괴사로 오역한 부분을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000605
