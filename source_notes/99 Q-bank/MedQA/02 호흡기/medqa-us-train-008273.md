---
type: qbank
schema_version: 1
id: medqa-us-train-008273
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa7230c585c72ad3c592ada4b4f40da0ac6afd9b0a854cc8702f61bb735c98b7
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "exocrine pancreatic insufficiency"
  - "vitamin K deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2DgOuvvCBLIOqysO2VjSAoVml0YW1pbiBLIERlZmljaWVuY3kpLm1k
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 5일간 지속된 생산성 기침으로 내원했다. 반복되는 하기도 감염과 부비동염으로 경구 항생제를 복용한 병력이 있다. 잘 씻기지 않는 묽은 변을 자주 보고, 임신 37주에 태어났으며 신생아기에 태변성 장폐색이 있었다. 키 15백분위수, 체중 5백분위수이다. 체온 37.1°C(98.8°F), 맥박 98회/분, 호흡수 38회/분, 산소포화도 95%이며 양측 비강 용종과 산발적 흡기 수포음이 있다. 추가 검사에서 가장 가능성 높은 소견은?

## 선택지

A. 프로트롬빈 시간 연장
B. 대사성 산증
C. 세포질 항중성구 세포질 항체
D. 글루탐산 탈탄산효소 항체

## 해설


낭성 섬유증 환자는 지방소화 효소 결핍으로 비타민 K 흡수가 감소해 PT 연장이 나타난다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문·4선지·정답 A·해설 및 영어 원문 읽음. 태변성 장폐색, 반복 호흡기감염, 비강용종과 지방변은 낭성섬유증을 지지하며 췌장 외분비부전→지용성 비타민 K 흡수장애→PT 연장 기전이 일치. 치료·최신지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008273
