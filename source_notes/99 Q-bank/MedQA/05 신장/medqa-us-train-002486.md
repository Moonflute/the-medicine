---
type: qbank
schema_version: 1
id: medqa-us-train-002486
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03e1fc5a18e28a598c0708ee66414a3a68fbe2efda9b989dd9431bf4edde33d0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "membranoproliferative glomerulonephritis"
  - "cryoglobulinemia"
  - "low complement"
  - "glomerulonephritis in intravenous drug use"
related_disease_slugs:
  - MDUg7Iug7J6lL-unieymneyLnSDthqDrpqzsvantjKXsl7wgKE1lbWJyYW5vcHJvbGlmZXJhdGl2ZSBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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

39세 남성이 하지 부종, 피로, 혈뇨로 내원했다. 헤로인 사용장애로 메타돈 치료 중이며 발병 1개월 전까지 헤로인을 사용했다. 진찰에서 결막 창백, 공막 황달, 간비대, 말단 청색증, 하지 2+ 함요부종이 있다. 소변검사에서 단백뇨와 변형 적혈구가 보이고 C3와 C4가 감소되어 있다. 다음 중 신장 생검에서 가장 가능성 높은 소견은?

## 선택지

A. 콩고레드 염색에서 사과녹색 이중굴절
B. 미만성 메산지움 세포 증식과 모세혈관벽 비후
C. 사구체 기저막의 얇아짐과 분열
D. 정상으로 보이는 사구체

## 해설

저보체혈증, 혈뇨·단백뇨와 간질환 단서는 면역복합체성 사구체신염을 시사하며 생검에서 메산지움 증식과 모세혈관벽 비후의 MPGN 패턴 B가 가능하다. 주사약물 사용은 HCV 등 감염 위험과 연결되며, 간질환·저C4·말단 청색증은 혼합 한랭글로불린혈증 가능성도 시사한다. HCV 감염 자체가 본문에서 확진된 것은 아니므로 검사 확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저C3/C4·황달·주사약물력의 MPGN 패턴 B는 유지하되 모든 IV 약물 사용 자체가 면역복합체 원인이라는 단정 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002486
