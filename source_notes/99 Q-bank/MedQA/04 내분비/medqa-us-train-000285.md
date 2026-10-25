---
type: qbank
schema_version: 1
id: medqa-us-train-000285
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3846e7096eabd40a2bb36cdeb45ff74695e69b0a65773ddf77f5cb3ccb4562a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "medullary thyroid carcinoma"
  - "pheochromocytoma"
  - "multiple endocrine neoplasia type 2A"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 여성이 5개월 전부터 시작된 목의 부종으로 내원하였다. 부종은 점차 커졌으며 경미한 통증이 있다. 환자는 지난 3개월 동안 간헐적인 박동성 두통, 발한, 심계항진을 겪었다. 월경은 28일 주기로 규칙적이며 4~5일간 지속된다. 흡연은 하지 않으며 주말에 가끔 음주를 한다. 환자는 마르고 창백해 보인다. 체온은 38.7°C, 맥박은 112회/분, 혈압은 140/90 mm Hg이다. 진찰상 목에 삼킬 때 움직이는 3cm 크기의 단단한 부종이 관찰되며, 림프절병증은 없다. 심폐 진찰상 이상 소견은 없다. 검사실 검사 결과는 다음과 같다: 혈색소 13 g/dL, 백혈구 수 9500/mm3, 혈소판 수 230,000/mm3, 혈청 Na+ 136 mEq/L, K+ 3.5 mEq/L, Cl- 104 mEq/L, TSH 2.3 μU/mL, 칼시토닌(Calcitonin) 300 ng/dL (정상 < 5 ng/dL). 심전도상 동성 빈맥이 관찰된다. 다음 중 가장 나타날 가능성이 높은 검사실 이상 소견은 무엇인가?

## 선택지

A. 혈청 가스트린(gastrin) 증가
B. 혈청 코르티솔(cortisol) 증가
C. 혈청 T3 수치 증가
D. 혈장 메타네프린(metanephrines) 증가

## 해설

정답은 D이다. 갑상샘 종괴와 높은 calcitonin은 수질암을 시사하고 두통·발한·심계항진은 동반 갈색세포종을 의심하게 한다. MEN2에서 두 종양이 함께 발생할 수 있어 혈장 metanephrine 증가 D가 가장 합당하다. melanoma를 고전적 MEN2 구성으로 넣지 않으며 갈색세포종을 모두 부신수질암으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MEN2에 melanoma/부신수질암을 필수 구성처럼 넣은 해설 교체.
- https://www.cancer.gov/publications/pdq/information-summaries/genetics/men2-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000285
