---
type: qbank
schema_version: 1
id: medqa-us-train-001014
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2b88154ca9a27d6333387a0a9c4d667999d27ed2b757ece4d6f541236d214c2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute pericarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: prognosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

32세 남성이 3일간 지속된 날카로운 흉통으로 응급실에 내원했다. 통증은 흉골 뒤쪽에서 느껴지며 강도는 10점 만점에 8점이고, 호흡 시 악화되며 똑바로 앉아 앞으로 숙이면 완화된다. 환자는 오심과 근육통을 동반하고 있다. 발열이나 기침은 없었다. 천식이 있으며 6개월 전 기관지염으로 아지트로마이신(azithromycin) 치료를 받은 적이 있다. 어머니는 고혈압이 있다. 일반의약품 흡입제를 사용 중이다. 체온은 37.3°C, 맥박은 분당 110회, 혈압은 130/84 mm Hg이다. 호흡음은 정상이다. 심장 진찰에서 S1과 S2 사이에서 고음의 긁히는 소리(grating sound)가 들린다. 나머지 진찰 소견은 정상이다. 혈청 검사 결과는 다음과 같다: 혈액요소질소(BUN) 16 mg/dL, 포도당 103 mg/dL, 크레아티닌 0.7 mg/dL, 트로포닌 I 0.230 ng/mL (정상 < 0.1 ng/mL). 심전도(ECG)에서 모든 유도에 미만성 ST 분절 상승이 보인다. 이 환자가 위험이 증가한 질환은 무엇인가?

## 선택지

A. 유두근 파열(Papillary muscle rupture)
B. 폐경색(Pulmonary infarction)
C. 심장 눌림증(Cardiac tamponade)
D. 심실 동맥류(Ventricular aneurysm)

## 해설


흉통이 호흡 시 악화되고 전신성 ST 상승이 없으며, 심전도에서 저전압 마찰음과 경미한 트로포닌 상승은 급성 심낭염을 시사한다. 급성 심낭염의 주요 합병증은 심장 압박(심낭압전)이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001014
