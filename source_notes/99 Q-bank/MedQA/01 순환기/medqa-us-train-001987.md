---
type: qbank
schema_version: 1
id: medqa-us-train-001987
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e80a10e99dd64722f33aeb9453ba010be3d9f0145e4e7768c2c63b6198c0f4bb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic stenosis"
  - "calcific valve disease"
  - "systolic ejection murmur"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

67세 남성이 건강검진을 위해 내원했다. 딸은 비정상적으로 피곤해하고 정원에서 어지럽다고 하며 한 번 실신했다고 한다. 제2형 당뇨병, 고혈압과 변비가 있고 최근 인후 감염은 휴식과 수분으로 회복했다. 혈압 167/98 mmHg, 맥박 90/min이며 오른쪽 상흉골연에서 가장 크게 들리는 수축기 잡음이 있다. ECG에서 ST 상승은 없고 심장 트로포닌은 음성이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 자가면역성 판막 파괴
B. 판막 첨판 석회화
C. 불완전 판막
D. 유출로 폐색

## 해설


고령 환자에서 심음청진 시 가장 크게 들리는 수축기 잡음은 대동맥 판막 석회화에 의한 대동맥 협착을 시사한다. 따라서 정답은 B이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고령의 운동성 실신·협심증과 우상흉골연 수축기 잡음은 석회화 대동맥판 협착 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001987
