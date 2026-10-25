---
type: qbank
schema_version: 1
id: medqa-us-validation-001178
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e436b1de63b9e8416b05bdb509888c06948db7b5dbd79d4b015cbdc8012d40fe
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "폐경 후 출혈"
  - "자궁내막암"
  - "자궁내막 생검"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-u5hOygleyDgSDsnpDqtoEg7Lac7ZiIIChBYm5vcm1hbCBVdGVyaW5lIEJsZWVkaW5nKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 여성이 3년간 간헐적으로 발생한 무통성 질출혈로 진료를 받으러 왔다. 제2형 당뇨병·고혈압이 있고 BMI는 33.8 kg/m²이다. 폐경은 8년 전이었고 호르몬 대체요법을 받지 않았다. 질과 자궁경부에 병변은 없으나 자궁경부구에서 소량의 출혈이 보인다. 다음 중 가장 적절한 초기 진단검사는?

## 선택지

A. 자궁경검사
B. 자궁경부 세포검사
C. 자궁내막 생검
D. 골반 MRI

## 해설

폐경 후 반복 출혈은 위축 등 양성 원인도 있지만 자궁내막암·증식증을 배제해야 한다. 내막생검(C)이 적절하며 필요시 초음파 등으로 함께 평가한다. 이 환자는 비만·당뇨·고혈압이 있고 정상 Pap만으로 내막 병변이 배제되지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 재발 폐경후출혈의 내막생검 C 유지. 증식증으로만 한정하지 않고 암 배제와 누락 위험요인 보완.
- https://www.acog.org/news/news-releases/2026/04/acog-publishes-updated-guidance-evaluation-postmenopausal-bleeding

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001178
