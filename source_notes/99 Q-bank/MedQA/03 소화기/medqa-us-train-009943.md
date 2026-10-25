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

31세 남성이 지난 3개월 동안 더 자주 발생한 하복부 통증, 복부 팽만, 혈성 설사, 복부 충만감으로 긴급진료센터에 내원했다. 직장검사에서 소량의 선홍색 혈액이 보인다. 체온 36.7°C, 혈압 126/74 mmHg, 심박수 분당 74회, 호흡수 분당 14회이다. 대장내시경에서 직장부터 비장만곡까지 광범위한 점막 홍반, 경화, 가성용종이 관찰된다. 다음 중 이 환자의 기저 질환에 대한 확정적 치료는?

## 선택지

A. 설파살라진
B. 전신 코르티코스테로이드
C. 아자티오프린
D. 전 결장직장절제술

## 해설


정답 D. 대장과 직장을 제거하는 proctocolectomy는 궤양성 대장염의 대장 병변을 근본적으로 제거하는 방법이다. 이는 수술의 근치적 성격을 묻는 답이지 이 환자가 지금 반드시 수술받아야 한다는 뜻이 아니다. 본문에는 약물치료 불응이 제시되지 않았으며 질환 범위·중증도와 치료 반응에 따라 약물치료와 수술 적응증을 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009943 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대장직장절제 D는 UC의 근본적 장병변 제거라는 질문 맥락; 진단 3개월만으로 약물불응/즉시 수술 필요를 만들어낸 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gut.bmj.com/content/74/Suppl_2/s1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009943
