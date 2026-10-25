---
type: qbank
schema_version: 1
id: medqa-us-train-009129
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57dc3ecb500d0d092f5e27493315401bd258c19fa1ccb3614dc75f0f914ba654
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Dressler syndrome"
  - "드레슬러 증후군"
  - "post-myocardial infarction pericarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 환자가 3시간 전부터 발생한 날카로운 흉통으로 응급실에 왔다. 깊게 숨을 들이마시면 통증이 악화되어 얕게 숨 쉴 수밖에 없고, 기침할 때도 통증이 심해진다. 2주 전 급성 심근경색으로 심장 카테터 삽입술을 받았다. 현재 아스피린, 티카그렐러, 아토르바스타틴, 메토프롤롤, 리시노프릴을 복용 중이다. 체온 38.54°C, 맥박 55회/분, 호흡수 23회/분, 혈압 125/75 mmHg이다. 심장 진찰에서 똑바로 앉은 자세와 호기 시 가장 잘 들리는 고음의 마찰음이 난다. 심전도에서 광범위한 ST 분절 상승과 aVR 및 V1의 ST 분절 하강이 보인다. 심초음파는 정상이다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 헤파린 주입 시작
B. 니트로글리세린 투여
C. 아스피린 용량 증량
D. CT 혈관조영술 시행

## 해설

최근 심근경색 후 발생한 흉막성 흉통, 발열, 심낭 마찰음과 광범위 ST 상승은 심근경색 후 심낭염에 부합한다. 이미 항혈소판 치료를 받는 환자에서는 항염증 용량의 아스피린이 우선이므로 C의 아스피린 증량이 적합하다. 다른 NSAID를 무조건 대체 투여한다는 뜻은 아니며, 출혈 위험과 위장 보호 및 콜히친 병용 여부를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C를 비특이적 NSAID로 바꾸어 설명한 해설을 심근경색 후 심낭염의 아스피린 증량으로 명시.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_MyoPeri.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009129
