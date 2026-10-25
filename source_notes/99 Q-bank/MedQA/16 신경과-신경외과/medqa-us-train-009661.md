---
type: qbank
schema_version: 1
id: medqa-us-train-009661
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa6fef7bc6a60940df21322fa9609d777e598b1c402cf474381442f554cdb09a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "dementia with Lewy bodies"
  - "루이소체 치매"
  - "occipital hypoperfusion"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-ugiOu5hCDshozssrQg7LmY66ekIChEZW1lbnRpYSB3aXRoIExld3kgQm9kaWVzKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjIztgqjsiqgg7Kad7ZuE6rWwIChQYXJraW5zb25pc20pLm1k
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: DLB의 선조체 DAT 감소와 후두엽 저대사를 혼동한 선택지 교정"
curation_status: "revised"
curation_reason: "DLB의 선조체 DAT 감소와 후두엽 저대사를 혼동한 선택지 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

68세 남자가 인지 저하와 환각으로 아내와 내원했다. 6년 동안 점진적으로 진행되었고 처음에는 계산과 주의력 문제가 있었으며 1년 전부터 현실적이고 무섭지 않은 환각이 생겨 고양이가 항상 따라다니는 것처럼 보인다. 멍하게 응시하는 에피소드와 낮 동안 긴 낮잠도 있다. 기립 시 혈압이 130/80에서 110/60 mmHg로 떨어지고 사람만 지남력이 있으며 창백하고 표정이 감소되어 있다. 양쪽 상지에 대칭적인 톱니바퀴 경직이 있다. 추가 영상에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 도파민운반체(DAT) SPECT에서 선조체 섭취 감소
B. MRI에서 다발성 열공경색
C. SPECT에서 전두엽 저관류 및 저대사
D. MRI에서 교뇌 ‘뜨거운 십자빵’ 징후

## 해설

인지기능 변동, 구체적인 반복 환시, 파킨슨증과 자율신경계 증상은 Lewy 소체 치매를 시사한다. DAT 영상에서 기저핵·선조체 섭취 감소는 진단을 뒷받침하는 바이오마커이다. FDG-PET의 후두엽 저대사와 DAT 영상의 선조체 섭취 감소는 서로 다른 소견이므로 후두엽 도파민 활성 감소로 합쳐 표현하지 않는다. 다발성 열공경색이나 교뇌 hot-cross-bun 징후는 이 사례의 가장 적절한 영상 소견이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: DLB의 선조체 DAT 감소와 후두엽 저대사를 혼동한 선택지 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/28592453/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009661

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
