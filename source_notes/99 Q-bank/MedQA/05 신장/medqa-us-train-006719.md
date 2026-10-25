---
type: qbank
schema_version: 1
id: medqa-us-train-006719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5c9f734d26abb8ad72b9719283a3c072b271730e8ef84fb2c04b53e2d073da0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "제4형 신세뇨관산증"
  - "당뇨병성 신장병증"
  - "고칼륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: diagnosis
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
curation_status: "revised"
curation_reason: "제4형 RTA에서 칼륨 배설이 증가한다는 반대 기전을 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

67세 남성이 약한 소변줄기와 배뇨 시작 및 중단의 어려움이 점점 심해져 주치의를 방문했다. 낮 동안 전신적인 경미한 통증과 쇠약감도 있다. 제2형 당뇨병을 35년, 본태성 고혈압을 19년 앓았다. 메트포르민, 빌다글립틴 및 에날라프릴을 복용한다. 체온은 36.7°C(98.1°F), 혈압은 151/82 mm Hg, 맥박은 분당 88회이다. 결절 없이 단단하고 현저히 커진 전립선이 만져진다. 검사에서 혈청 나트륨 142 mEq/L, 칼륨 5.7 mEq/L, 염소 115 mEq/L, 중탄산염 17 mEq/L, 크레아티닌 0.9 mg/dL, 동맥혈 pH 7.31, 소변 pH 5.3, 소변 나트륨 59 mEq/L, 칼륨 6.2 mEq/L, 염소 65 mEq/L이다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. 제1형 신세뇨관산증
B. 제4형 신세뇨관산증
C. 제2형 신세뇨관산증
D. 판코니 증후군

## 해설

고칼륨혈증과 정상 음이온차 대사성 산증은 aldosterone 부족·작용 저하에 따른 제4형 RTA를 시사한다. 당뇨병·ACE 억제제 등이 기여할 수 있고 칼륨과 ammonium 배설이 감소한다. 요 pH가 5.3처럼 낮아질 수 있으므로 산성뇨가 제4형을 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006719

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 제4형 RTA에서 칼륨 배설이 증가한다는 반대 기전을 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
