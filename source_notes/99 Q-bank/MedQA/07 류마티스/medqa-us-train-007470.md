---
type: qbank
schema_version: 1
id: medqa-us-train-007470
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fde95a593238c22a51fd52de0b3ef0283d3d29b6901be304dc1901bfdd1ed4c2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "루푸스 신염"
  - "항dsDNA 항체"
  - "질병 활성도"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDUg7Iug7J6lL-ujqO2RuOyKpCDsvantjKXsl7wgKEx1cHVzIE5lcGhyaXRpcykubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

29세 여자가 관절통과 눈에 띄는 발진으로 응급실에 내원했다. 12개월 동안 관절통이 있었고 최근 발진과 전신 권태감이 나타났다. 관절통은 대칭적이고 상지에 있으며 아침에 더 심하다. 체온은 97.6°F(36.4°C), 혈압 111/74 mmHg, 맥박 83회/분, 호흡수 14회/분, 산소포화도 98%이다. 검사에서 헤모글로빈 10 g/dL, 헤마토크릿 30%, 백혈구 수 6,800/mm³(감별 정상), 혈소판 수 207,000/mm³, BUN 30 mg/dL, 크레아티닌 1.8 mg/dL이다. 환자는 결국 입원했다. 다음 중 질병 진행을 모니터링하는 데 가장 적절한 검사는 무엇인가?

## 선택지

A. 항CCP 항체
B. 항dsDNA 항체
C. 항핵항체
D. 류마티스인자

## 해설


젊은 여성의 염증성 다관절 증상, 발진, 빈혈과 신기능 이상에서 SLE가 의심된다. 보기 중 anti-dsDNA B는 확진된 SLE의 활동성을 추적하는 데 도움을 줄 수 있다. 다만 발진 형태·소변·보체 등 정보 없이 SLE 신염을 확정할 수 없고 항체 수치만으로 악화나 치료 반응을 결정하지 않는다. 실제 추적에는 임상 증상, CBC, creatinine/eGFR, 소변 단백·침사와 보체를 함께 본다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007470 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-dsDNA B는 SLE 활동성 추적의 일부이며 신염 진행을 단독으로 가장 잘 반영·확정한다는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1093/rheumatology/keag223

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007470
