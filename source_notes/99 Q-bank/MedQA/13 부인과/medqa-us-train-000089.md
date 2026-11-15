---
type: qbank
schema_version: 1
id: medqa-us-train-000089
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2033f4b9163e6480659d26939554aef618770cae11419429ae94744a6b204e6d
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "trichomoniasis"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-2KuOumrOy9lOuqqOuCmOyKpCAoVHJpY2hvbW9uaWFzaXMpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

22세 여성이 가려움과 악취 나는 거품성 황록색 질 분비물을 호소한다. 질 pH는 5.7이고, 습식 도말에서 움직이는 원충이 보이지 않았다. 질편모충증이 여전히 의심될 때 다음 검사는?

## 선택지

A. 질 검체의 질편모충 핵산증폭검사
B. 자궁경부 세포검사로만 확진
C. 한 번 음성이므로 질편모충 검사 종료
D. 요 배양만 시행

## 해설


습식 도말은 민감도가 낮아 음성이라고 질편모충증을 배제할 수 없다. 의심이 지속되면 민감도가 더 높은 핵산증폭검사로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000089
- https://stiguide.kr/%EC%A7%88%EC%97%BC-vaginitis/
- https://www.cdc.gov/std/treatment-guidelines/trichomoniasis.htm
