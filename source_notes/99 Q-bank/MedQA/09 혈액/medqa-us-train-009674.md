---
type: qbank
schema_version: 1
id: medqa-us-train-009674
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:60afa133af7ff4239100529364e153734cda649c8cad1e9a70997d3fdb98b943
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "beta thalassemia"
  - "베타 지중해빈혈"
  - "β-globin mutation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

35세 여성이 2개월 동안 피로와 어지럼으로 내원했다. 음식과 관련 없는 경미한 상복부 통증도 있다. 이탈리아에서 10년 전 이주했고 월경은 규칙적이며 중등도 출혈이다. 비장 끝이 왼쪽 늑골연 아래 2 cm에서 만져진다. 혈색소 11.2 g/dL, MCV 62 μm³, 백혈구 7,000/mm³, 혈소판 260,000/mm³이고 말초도말에서 표적세포가 보인다. 철분 보충을 시작했지만 3주 후에도 변화가 없다. 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 페로킬라타제와 ALA 탈수효소 억제
B. 베타글로빈 유전자 돌연변이
C. δ-ALA 합성효소 유전자 돌연변이
D. 비타민 B12 결핍

## 해설


경미한 빈혈에 비해 뚜렷한 소구성(MCV 62), 표적세포와 철제 무반응은 β 지중해빈혈을 시사한다. β-globin 유전자 변이(B)로 β 사슬 합성이 감소한다. 보인자에서는 HbA₂가 흔히 증가하고 HbF 증가 정도는 다양하며, 철결핍 동반 여부는 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009674 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심한 소구성·표적세포·경미 빈혈·철제 무반응은 β-thalassemia B. 미세소관이라는 세포 용어 오기와 HbF가 항상 증가한다는 단정 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009674
