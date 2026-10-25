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
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

정답은 C이다. 자세·호흡에 따른 흉통, 심낭 마찰음과 미만성 ST상승은 급성 심낭염을 지지한다. 경미한 troponin 상승은 심근 침범 가능성도 시사한다. 심낭액이 증가하면 심장압전이 발생할 수 있어 제시된 합병증 중 C가 적합하다. 본문에 ST상승이 없다고 하거나 마찰음을 ECG 저전압이라고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문의 미만성 ST상승을 없다고 뒤집고 저전압 마찰음이라 한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001014
