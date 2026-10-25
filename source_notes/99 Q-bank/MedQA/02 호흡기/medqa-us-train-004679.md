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

낭성섬유증이 있는 9세 남아가 발열, 가래 증가와 기침으로 내원했다. 활력징후는 체온 38.0°C (100.4°F), 혈압 126/74 mm Hg, 심박수 분당 103회, 호흡수 분당 22회이다. 신체검사에서 키가 작고 마른 체형이며 양쪽 호흡음이 감소되어 있고 오른쪽 상부 흉골연에서 가장 잘 들리는 2/6등급 범수축기 잡음이 있다. 폐기능검사는 평소 상태와 같고 객담 배양에서 녹농균이 자랐다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 28일간 흡입 토브라마이신
B. 도르나제 알파 2.5mg 1회 투여
C. 14일간 경구 세팔렉신
D. 28일간 미노사이클린

## 해설

CF에서 처음 또는 새롭게 분리된 Pseudomonas aeruginosa의 제균요법으로 흡입 tobramycin 28일 A가 권고된다. 이미 만성감염인 경우의 반복 억제요법이나 중증 급성악화의 전신 항생제 치료까지 단일 28일 요법으로 대체하지 않는다. 이전 배양과 현재 악화의 중증도를 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡입 tobramycin 28일 A는 초기/새 Pseudomonas 분리 제균요법으로 한정하며 만성감염·급성악화 치료와 구별.
- https://www.cff.org/medical-professionals/eradication-initial-p-aeruginosa-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004679
