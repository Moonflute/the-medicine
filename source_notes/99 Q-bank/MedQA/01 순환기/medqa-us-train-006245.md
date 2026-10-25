---
type: qbank
schema_version: 1
id: medqa-us-train-006245
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a19dc13853cac3590c7bb85cc7ea16d4e621c25374b207a286e1e2c35788c7f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 류마티스열"
  - "류마티스성 심장염"
  - "심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 남아가 3일 동안 점점 심해지는 호흡곤란으로 응급실에 왔다. 5일 동안 발열과 권태감이 있었고 3주 전 인후통은 치료 없이 호전되었다. 체온은 38.6°C(101.5°F), 맥박은 분당 98회, 혈압은 84/62 mmHg, 실내 공기 산소포화도는 93%이다. 경정맥 팽창과 양측 발목 부종, 몸통의 경계가 뚜렷한 고리 모양 홍반성 반점 및 양측 폐기저부 수포음이 있다. 심장 청진에서 S3가 들리고 혈색소 12.2 g/dL, 백혈구 13,600/mm³, 혈소판 280,000/mm³이며 소변검사는 정상이다. 흉부 X선에서 심장비대와 양측 폐혈관 음영 증가가 보인다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 급성 류마티스열
B. 바이러스성 심근염
C. 전신홍반루푸스
D. Borrelia burgdorferi 감염

## 해설

치료받지 않은 인두염3주후 발열·심염/심부전과 고리모양 몸통발진은 ARF A를 시사한다. 이 환자에서 관절통이 제시된 것은 아니므로 진단근거로 만들어 넣지 않는다. 실제 진단에서는 streptococcal 선행감염 증거와 Jones기준을 종합한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 류마티스열 A의 실제선행감염·심염·유연성홍반을 설명하고 제시되지 않은 관절통을 근거로 추가하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006245
