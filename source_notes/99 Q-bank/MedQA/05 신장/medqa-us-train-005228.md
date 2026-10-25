---
type: qbank
schema_version: 1
id: medqa-us-train-005228
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9020b7bb5bbb3dcf879c0b171b0212e69fd7954f62cb2cfb4874ee35cc857bc1
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신성 요붕증"
  - "리튬 유발 요붕증"
  - "바소프레신 저항성"
  - "Nephrogenic diabetes insipidus"
related_disease_slugs:
  - MDQg64K067aE67mEL-y9qe2Mpeq4sOybkCDsmpTrtpXspp0gKE5lcGhyb2dlbmljIERpYWJldGVzIEluc2lwaWR1cykubWQ
question_type: mechanism
difficulty: simple
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "집광관 오역과 ADH 분비 억제라는 중추성 기전 혼동 수정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

61세 남자가 다뇨, 다음, 혼돈으로 응급실에 왔다. 데스모프레신을 투여했지만 소변량과 소변 삼투압에 변화가 없다. 다음 중 이 증후군을 유발할 수 있는 약물은?

## 선택지

A. 오메프라졸
B. 니트로푸란토인
C. 나프실린
D. 리튬

## 해설

Desmopressin에 소변 농축 반응이 없는 것은 신장의 vasopressin 반응 저하를 시사한다. 선택지 중 lithium은 집합관의 물 재흡수 반응을 방해해 신성 요붕증을 일으킬 수 있다. 핵심은 ADH 분비 저하가 아니라 신장 반응의 문제다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 집광관 오역과 ADH 분비 억제라는 중추성 기전 혼동 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005228

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
