---
type: qbank
schema_version: 1
id: medqa-us-train-001111
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0653ca3a52549ac0ec13c25641dae626d1ae84f4728aa3c230dc7a96222c001f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "Sjogren syndrome"
  - "Rheumatoid arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
---

# MedQA US 임상문제

## 문제

43세 여성이 수개월간 눈·입 건조와 반복 충치로 평가받는다. 쉬르머 검사와 안구 표면 염색은 비정상이지만 항SSA/Ro는 음성이다. 다른 원인을 평가한 뒤에도 쇼그렌증후군이 의심된다. 다음 진단 검사로 고려할 것은?

## 선택지

A. 위 점막 생검
B. 신장 생검
C. 입술 소타액선 생검
D. 갑상선 결절 세침흡인

## 해설


항SSA가 음성이어도 쇼그렌증후군을 배제할 수 없다. 객관적인 건조 소견이 있고 임상적으로 의심되면 소타액선 생검에서 국소 림프구 침윤을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001111`와 직접 대조했다.
- 판정: 안구·구강 건조, 치아우식, 관절염, ANA/RF 양성은 쇼그렌과 anti-Ro D를 지지. 원문 수치·선지와 설명 연결을 대조; 플래그만으로 교체하지 않음.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001111
- https://doi.org/10.1093/rheumatology/keae152
