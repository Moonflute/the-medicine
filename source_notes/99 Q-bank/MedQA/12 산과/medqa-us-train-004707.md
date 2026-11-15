---
type: qbank
schema_version: 1
id: medqa-us-train-004707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55af6e758e0d66e79febcf956286a2fee43363743b9dc60a574eec2c55e31301
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "태반조기박리"
  - "임신 중 출혈"
  - "태아 곤란"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
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

임신 32주 산모가 갑작스러운 지속 복통으로 왔다. 자궁은 팽팽하고 눌렀을 때 아프며 혈압이 떨어지고 태아 서맥이 생겼다. 밖으로 보이는 질출혈은 거의 없다. 우선 의심할 진단은?

## 선택지

A. 가려진 출혈을 동반한 태반조기박리
B. 전치태반에 의한 무통성 출혈
C. 자궁경부 용종 출혈
D. 규칙적인 생리적 수축

## 해설

태반조기박리에서는 피가 태반 뒤에 고여 외부 출혈이 적을 수 있다. 지속 통증과 자궁 경직, 산모 저혈압과 태아 심박 이상을 함께 보면 응급으로 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아혈압을측정한것처럼쓴오류·비출혈성구토가특징이라는오류삭제. 단단한압통자궁/모체쇼크/태아서맥으로C.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004707
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10176440/
