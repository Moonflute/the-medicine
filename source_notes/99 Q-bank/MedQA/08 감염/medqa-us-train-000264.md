---
type: qbank
schema_version: 1
id: medqa-us-train-000264
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16a168536439da39d98a845980658c019f47472c99ae5f5891e3387028eab367
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "community-acquired pneumonia"
  - "watery diarrhea"
  - "C. difficile colitis"
  - "Ulcerative colitis"
  - "Irritable bowel syndrome"
  - "Giardiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
---

# MedQA US 임상문제

## 문제

지역사회 획득 폐렴(community-acquired pneumonia)으로 입원하여 레보플록사신(levofloxacin)으로 치료 중인 58세 여성이 물설사를 보이기 시작했다. 환자는 지난 이틀 동안 최소 9회의 설사를 하였으며, 하복부 불편감과 경련을 호소한다. 체온은 98.6° F(37° C), 호흡수는 15회/분, 맥박은 67회/분, 혈압은 122/98 mm Hg이다. 신체 검진상 특이 소견은 없다. 검사실 검사 결과는 다음과 같다: 혈색소(Hb) 13 gm/dL, 백혈구 수(WBC) 13,400/mm3, 백혈구 감별 계산: 호중구 80%, 림프구 15%, 단핵구 5%, 적혈구 침강 속도(ESR) 33 mm/hr. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 궤양성 대장염(Ulcerative colitis)
B. 클로스트리디움 디피실리 대장염(C. difficile colitis)
C. 과민성 대장 증후군(Irritable bowel syndrome)
D. 지아르디아증(Giardiasis)

## 해설


항생제 치료 후 물설사와 백혈구 증가, ESR 상승은 C. difficile 독소에 의한 장염을 시사한다. 특히 레보플록사신 같은 플루오로퀴놀론은 C. difficile 감염 위험을 높인다. 따라서 가장 가능성 높은 진단은 C. difficile 대장염이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000264 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 입원 중 levofloxacin 노출 후 급성 수양성 설사와 백혈구증가는 선택지 중 C. difficile 대장염 B를 지지한다. 원문·정답·해설 일치; 증상만으로 확진했다고 확대하지 않는다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000264
