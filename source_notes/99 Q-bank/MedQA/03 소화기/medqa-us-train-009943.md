---
type: qbank
schema_version: 1
id: medqa-us-train-009943
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b36392eff13e416cbc02360d0495c3d96d271ca1392626cf99d2fd1daf7db145
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "궤양성 대장염"
  - "전 결장직장절제술"
  - "가성용종"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

31세 남성이 궤양성 대장염 악화로 입원했다. 혈성 설사와 발열에 이어 복통이 심해졌고, 복부 전반에 반발통이 생겼다. CT에서 대장이 팽창해 있고 복강 내 자유공기가 보인다. 지금 필요한 조치는?

## 선택지

A. 경구 메살라민을 증량한 뒤 관찰한다
B. 면역조절제를 추가하고 반응을 기다린다
C. 전 대장내시경으로 염증 범위를 확인한다
D. 대장 천공으로 보고 즉시 외과와 함께 응급 결장절제술을 준비한다

## 해설


궤양성 대장염 환자에게 복막 자극 소견과 복강 내 자유공기가 있으면 천공을 의심한다. 소생과 항생제를 시작하고 수술을 지연하지 않는다. 안정기에 계획하는 근치술과 달리 응급 상황에서는 결장절제술과 말단 회장루를 우선 고려할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009943 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대장직장절제 D는 UC의 근본적 장병변 제거라는 질문 맥락; 진단 3개월만으로 약물불응/즉시 수술 필요를 만들어낸 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gut.bmj.com/content/74/Suppl_2/s1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009943
- https://doi.org/10.1097/DCR.0000000000004290
