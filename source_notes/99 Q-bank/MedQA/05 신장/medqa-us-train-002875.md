---
type: qbank
schema_version: 1
id: medqa-us-train-002875
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e7117f693bbbe4e4f48144297fb856139226d486f17f2a9533fe834a0f943ba7
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "prerenal acute kidney injury"
  - "fractional excretion of sodium"
  - "oliguria"
  - "volume depletion"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2MpeyghCDquInshLEg7L2p7YylIOyGkOyDgSAoUHJlcmVuYWwgQWN1dGUgS2lkbmV5IEluanVyeSkubWQ
question_type: diagnosis
difficulty: standard
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

진행성 치매, 고혈압, 파킨슨병, 제2형 당뇨병 병력이 있는 77세 남성이 요양원에서 며칠간의 비혈성 설사와 구토 후 병원으로 이송되었다. 신체검사에서 좌측 상부 흉골연에 2/6 범수축기 잡음, 깨끗한 폐음, 정상 장음과 함께 팽창된 복부, 안정 시 떨림, 발목까지 양측 하지 2+ 부종이 보인다. 이후 몇 시간 동안 간호사가 5시간 동안 총 소변량 21 cc임을 기록했다. 다음 중 신전성 신부전을 시사하는 기준은?

## 선택지

A. 소변 삼투질농도 280 mOsm/kg
B. 소변 나트륨 80 mEq/L
C. 소변/혈장 크레아티닌 비율 10
D. 나트륨 분획배설 0.5%

## 해설

저관류성 신전성 AKI에서는 신장의 Na 보존으로 FENa가 보통 1% 미만이며, 0.5%인 D가 선택지 중 부합한다. 0.5%가 보편적 진단 절단값이라는 뜻은 아니다. 이뇨제·CKD 등에서는 지표 해석에 한계가 있어 용적상태 및 임상경과와 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FENa0.5% D는 신전성에 부합하나 임계값을 ≤0.5%로 잘못 정의한 해설 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002875
