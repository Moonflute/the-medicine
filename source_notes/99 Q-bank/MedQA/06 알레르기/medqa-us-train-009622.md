---
type: qbank
schema_version: 1
id: medqa-us-train-009622
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:201f92fd96a5ebbd05301c152d259413cdbba6520adbad7f7c0d74400363c624
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "hyper-IgM syndrome"
  - "고 IgM 증후군"
  - "immunoglobulin class-switch defect"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-qzoElnTSDspp3tm4TqtbAgKEh5cGVyLUlnTSBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

18개월 남아가 반복 세균감염과 주폐포자충 폐렴으로 평가받았다. B세포 수는 정상인데 IgG와 IgA는 현저히 낮고 IgM은 높다. 가장 가능성 높은 진단은?

## 선택지

A. X연관 무감마글로불린혈증
B. 선택적 IgA 결핍
C. 고IgM 증후군
D. 보체 C5 결핍

## 해설


B세포 수가 유지되지만 IgG·IgA가 낮고 IgM이 정상 또는 높으면 항체 종류 전환 결함을 의심한다. 주폐포자충 감염은 CD40 리간드 결핍 등 복합 면역결핍의 단서다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009622`와 직접 대조했다.
- 판정: 영아기 반복 세균감염과 정상 IgM·낮은 IgG/IgA는 class-switch 결함의 고 IgM 표현형과 부합해 C 유지. 유전자·기능 확진까지 검증한 것은 아님.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009622
- https://www.ncbi.nlm.nih.gov/books/NBK1402/
