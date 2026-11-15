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

61세 여성이 폐경 후 출혈이 처음 생겼을 때 질식 초음파에서 자궁내막이 3 mm였다. 두 달 동안 출혈이 두 번 더 생겼고 질·자궁경부 병변은 보이지 않는다. 다음 조치는?

## 선택지

A. 내막이 4 mm 이하이므로 평가 종료
B. 질 에스트로겐을 먼저 처방하고 검사 생략
C. 자궁내막 조직검사를 시행한다
D. 자궁경부 세포검사만 반복한다

## 해설

폐경 후 출혈이 지속되거나 반복되면 얇은 내막만으로 악성 병변을 배제하지 말고 조직검사를 한다. 생검이 음성인데도 계속 출혈하면 자궁경 평가 등으로 국소 병변을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 재발 폐경후출혈의 내막생검 C 유지. 증식증으로만 한정하지 않고 암 배제와 누락 위험요인 보완.
- https://www.acog.org/news/news-releases/2026/04/acog-publishes-updated-guidance-evaluation-postmenopausal-bleeding

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001178
- https://doi.org/10.1097/AOG.0000000000006275
