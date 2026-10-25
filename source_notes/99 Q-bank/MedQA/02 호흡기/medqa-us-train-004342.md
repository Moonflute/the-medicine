---
type: qbank
schema_version: 1
id: medqa-us-train-004342
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f0c4c4bd108bd50b2ac4be880c3e9343aa205866f5bd09ebe303ad7dface013
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "기관지확장증"
  - "남성 불임"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: D
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

17세 남자가 2일간 지속된 발열, 코막힘, 권태감으로 내원했다. 코와 뺨에 압박감이 있고 지난 1년 동안 녹색 가래를 동반한 간헐적 기침과 최근 피가 섞인 가래가 있었다. 부비동염을 10회 이상 앓았고 모두 항생제로 치료되었다. 체온 38°C, 맥박 90회/분, 혈압 120/80 mmHg이다. 양쪽 뺨에 압통이 있고 흉부 청진에서 수포음과 건성수포음이 들린다. 왼쪽 아래 흉부에서 심음이 들리지 않는다. 추가로 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 인터루킨-2 수용체 감마 사슬 결함
B. 노력성 호기량 증가
C. 땀 염소 수치 증가
D. 운동성 정자 결핍

## 해설

반복 부비동염·기관지확장성 증상과 좌측에서 심음이 들리지 않는 dextrocardia 단서는 PCD/Kartagener를 시사한다. 섬모/편모 운동장애로 정자운동 저하 D가 동반될 수 있다. CF의 땀염소상승 C를 정답처럼 설명한 기존 해설은 이 조합을 반영하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원답 D인데 해설이 CF/sweat chloride C로 오연결. PCD의 situs/정자운동 기전으로 교체.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004342
