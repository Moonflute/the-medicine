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
answer: "D"
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

70세 남성이 1년간 간헐적 명치 통증과 피로를 호소한다. 최근 검은 변이 있었고 창백하다. 맥박 72회/분, 혈압 110/70 mmHg이며 요소호기검사는 양성이다. 내시경에서 위전정부 궤양성 종괴, 생검에서 CD20 양성 작은 림프구의 미만성 침윤이 보인다. 흉부·복부 CT에서 국소 림프절은 정상이다. 이 위 MALT 림프종에 대한 첫 치료로 가장 적절한 것은?

## 선택지

A. 리툭시맙, 사이클로포스파미드, 아드리아마이신과 빈크리스틴
B. 이마티닙
C. 외부빔 방사선치료
D. 적합한 H. pylori 제균요법(예: 14일 PPI·비스무트·테트라사이클린·메트로니다졸)과 반응 추적

## 해설

H. pylori 양성이고 국소 림프절 비대가 없는 위 MALT 림프종에서는 제균이 중요한 첫 치료이며 림프종 관해도 얻을 수 있다. 감수성 정보 없이 clarithromycin 3제를 일률적으로 선택하지 않고, 미국 ACG 기준으로 optimized bismuth 4제 등 적합한 요법을 사용한다. 제균 확인 및 내시경·병리 반응 추적이 필요하며, 불응 시 추가 종양 치료를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 국한성 H. pylori 양성 위 MALT의 제균 선택지·누락 CT 정보 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001164

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
