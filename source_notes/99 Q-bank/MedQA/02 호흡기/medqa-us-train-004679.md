---
type: qbank
schema_version: 1
id: medqa-us-train-004679
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa98f588b5cf903015371e5dd44a7a159517b9fa0b9fcdc8a7d75059ecae7e9b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "녹농균 폐감염"
  - "흡입 토브라마이신"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWlub2N5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVG9icmFteWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

낭성섬유증을 앓는 9세 남아의 정기 기도 배양에서 녹농균이 처음 분리됐다. 발열, 호흡곤란 악화나 폐기능 저하는 없다. 초기 녹농균 제균을 위해 고려할 치료는?

## 선택지

A. 흡입 토브라마이신 28일
B. 도르나제 알파를 한 번 흡입한다
C. 경구 세팔렉신 14일
D. 증상이 생길 때까지 항균치료를 미룬다

## 해설

낭성섬유증에서 처음 분리된 녹농균은 중증 악화가 없어도 제균을 고려하며, 흡입 토브라마이신 28일이 근거 있는 방법이다. 만성 정착의 장기 억제요법이나 중증 악화의 전신 치료와 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡입 tobramycin 28일 A는 초기/새 Pseudomonas 분리 제균요법으로 한정하며 만성감염·급성악화 치료와 구별.
- https://www.cff.org/medical-professionals/eradication-initial-p-aeruginosa-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004679
