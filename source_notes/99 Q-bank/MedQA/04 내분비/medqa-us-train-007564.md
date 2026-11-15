---
type: qbank
schema_version: 1
id: medqa-us-train-007564
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0133106b57eb11e67de8b97896e52a192309f23044f02990c835dddadde744d1
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제1형 당뇨병"
  - "당뇨병성 케톤산증"
  - "베타세포 자가면역 파괴"
  - "항GAD 항체"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

10세 남아가 케톤산증 치료 뒤 안정됐다. 췌도 자가항체인 항GAD와 IA-2 항체가 모두 양성이고, 고혈당일 때 C-펩타이드는 낮았다. 가장 가능성 높은 당뇨병 유형은?

## 선택지

A. 비만에 동반된 제2형 당뇨병
B. 자가면역 제1형 당뇨병
C. 글루코코르티코이드 유발 당뇨병
D. GCK 관련 단일유전자 당뇨병

## 해설


여러 췌도 자가항체와 낮은 내인성 인슐린 분비는 제1형 당뇨병을 지지한다. 케톤산증이 있었다는 사실만으로 당뇨병 유형을 구별하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007564 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 검출 불가 C-peptide·anti-GAD 양성과 고혈당/ketosis는 자가면역 β세포 파괴 B에 부합하는 기초 병인 문항.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007564
- https://doi.org/10.2337/dc26-s002
