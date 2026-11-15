---
type: qbank
schema_version: 1
id: medqa-us-validation-001164
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9465d7919980c743f61647599fe505b8d68b14b549bc6cd7ef73ec724030c0c1
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "위 MALT 림프종"
  - "헬리코박터 파일로리"
  - "제균요법"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 국한성 H. pylori 양성 위 MALT의 제균 선택지·누락 CT 정보 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
curation_status: "revised"
curation_reason: "국한성 H. pylori 양성 위 MALT의 제균 선택지·누락 CT 정보 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

위내시경 조직검사로 저등급 위 MALT 림프종이 확인됐다. 위에 국한되어 있고 H. pylori 검사도 양성이다. 초기 치료 계획으로 적절한 것은?

## 선택지

A. 국내 항생제 내성과 환자 조건을 반영해 제균치료하고 제균 여부와 조직 반응을 추적한다
B. 모든 경우 제균을 생략하고 곧바로 위절제술을 시행한다
C. 리툭시맙 복합항암을 우선 시작한다
D. 내시경 추적 없이 위산억제제만 투여한다

## 해설

국소 위 MALT 림프종에 H. pylori 감염이 확인됐으면 제균이 첫 치료다. 감염이 사라졌는지와 림프종 조직 반응을 각각 확인하고, 불응하거나 진행하면 추가 치료를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 국한성 H. pylori 양성 위 MALT의 제균 선택지·누락 CT 정보 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001164
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13407497/
- https://www.kjim.org/journal/view.php?number=171085

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
