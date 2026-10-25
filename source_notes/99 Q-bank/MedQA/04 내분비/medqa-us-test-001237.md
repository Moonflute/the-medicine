---
type: qbank
schema_version: 1
id: medqa-us-test-001237
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d4da4e84db49b4465f8e848f037564581e98c43b68a2dc53133d9e8406667ae0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "MEN 2A"
  - "갈색세포종"
  - "수질 갑상선암"
  - "부갑상선기능항진증"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 두통, 심계항진, 발작성 발한으로 진료를 받으러 왔다. 고혈압으로 암로디핀을 복용하고 있고 4개월간 미만성 갑상선 비대, 3개월간 팔다리 장골 통증이 있었다. 마르고 불안하며 피부는 따뜻하고 촉촉했다. 혈압 196/102 mmHg, 맥박 116회/분, 24시간 요중 VMA와 메타네프린, 혈청 에피네프린·칼시토닌·부갑상선호르몬이 증가하고 고칼슘혈증과 고혈당이 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 폰히펠-린다우 증후군
B. 다발성 내분비 종양 2A형
C. 다발성 내분비 종양 2B형
D. 신경섬유종증

## 해설

정답은 B이다. MEN2A의 대표 구성은 갑상샘 수질암, 갈색세포종, 원발성 부갑상샘기능항진증이다. calcitonin 증가·갑상샘 종대, catecholamine/metanephrine 증가·발작성 증상 및 PTH 증가·고칼슘혈증이 각각 이에 대응한다. 비소세포폐암을 MEN2A의 고전적 구성에 넣지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MEN2A의 비소세포폐암 혼입을 갈색세포종으로 교정.
- https://www.cancer.gov/publications/pdq/information-summaries/genetics/men2-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001237
