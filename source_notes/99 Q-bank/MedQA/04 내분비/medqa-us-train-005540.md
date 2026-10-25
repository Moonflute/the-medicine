---
type: qbank
schema_version: 1
id: medqa-us-train-005540
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6cfa3a87331ebc34761baeb384b6ce40553228ac6df1af797ba2d2025139889
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "말단비대증"
  - "말단비대성 심근병증"
  - "심박출량 감소"
related_disease_slugs:
  - MDQg64K067aE67mEL-unkOuLqOu5hOuMgOymnSAoQWNyb21lZ2FseSkubWQ
question_type: prognosis
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

38세 여자가 두통, 시야 흐림, 체중 증가, 월경불순과 다모증으로 내원했다. 신발과 반지 크기가 커지고 목소리가 굵어졌으며 이마 돌출, 돌출된 턱, 큰 손발, 혈당 180 mg/dL가 있다. 이 상태의 가장 가능성 높은 후유증은?

## 선택지

A. 심근에 점액다당류 침착
B. 관상동맥 벽 비후
C. 심전도 QT 간격 연장
D. 심박출량 감소

## 해설

GH/IGF1 과다는 심근비대·이완장애를 유발하며 오래 진행하면 섬유화와 수축기 기능저하로 심박출량 감소 D가 생길 수 있다. 초기에는 정상 또는 높은 심박출량일 수도 있으므로 모든 말단비대증 환자가 즉시 저박출성 심근병증을 보인다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 말단비대성 심근병증의 심박출량 감소 D를 모든 환자에서 흔한 초기결과로 과장하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005540
