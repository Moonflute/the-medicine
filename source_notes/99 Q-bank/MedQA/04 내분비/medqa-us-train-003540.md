---
type: qbank
schema_version: 1
id: medqa-us-train-003540
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71f59e77a837707221b0dd91726c3e1a45945d9cb3d0f6caa786fd25ad715e29
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pellagra"
  - "niacin deficiency"
  - "dementia"
  - "diarrhea and dermatitis"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
question_type: diagnosis
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

55세 여성이 6개월간 진행한 기억력저하와 근력저하로 내원했다. 이제 일상생활을 수행하지 못하고 집에서 여러 번 넘어졌다. 설사와 혀의 염증, 얼굴과 팔의 과다색소침착, 양팔의 멍이 있었다. 과거 결핵 치료력이 있고 매일 보드카 1파인트를 마신다. 사람과 장소에 대해서만 지남력이 있었고 10분 후 물체 5개 중 하나도 기억하지 못했다. 다음 중 가장 가능성 높은 결핍은?

## 선택지

A. 비타민 B5(판토텐산)
B. 비타민 B7(비오틴)
C. 비타민 B2(리보플라빈)
D. 비타민 B3(니아신)

## 해설

만성 음주/영양결핍에 설사·광노출 부위 피부병변·인지저하가 동반되어 niacin(B3) 결핍의 pellagra D가 가장 부합한다. 고전적인 3D는 dermatitis, diarrhea, dementia이며 glossitis(설염)는 동반 소견이지 dermatitis의 대체어가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Pellagra 3D 중 dermatitis를 설염으로 잘못 기재. Niacin결핍 D 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003540
