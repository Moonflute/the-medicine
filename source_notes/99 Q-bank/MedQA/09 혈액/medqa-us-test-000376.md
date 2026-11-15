---
type: qbank
schema_version: 1
id: medqa-us-test-000376
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7a0ae491f9bcdba6370c3e749cae28a18d53305d6d31155512db28ac9ee0ef35
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "겸상적혈구병 관련 뇌졸중"
  - "허혈성 뇌졸중"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

겸상적혈구병이 있는 22세 남성이 1시간 전부터 갑자기 얼굴 왼쪽이 처지고 왼쪽 팔과 다리에 힘이 빠져 내원했다. 혈색소는 9.2 g/dL이고 두부 CT에서 출혈은 없다. 급성 뇌졸중 평가·처치를 진행하면서, 겸상적혈구병 때문에 추가할 치료는?

## 선택지

A. 수혈 없이 알테플라제만 투여
B. 응급 적혈구 교환수혈
C. 고용량 헤파린 주입
D. 와파린 즉시 투여

## 해설


겸상적혈구병 환자에게 급성 국소 신경학적 결손이 생기면 신속한 수혈이 필요하다. 이 사례처럼 혈색소가 8.5 g/dL를 넘으면 단순수혈의 과점도 위험을 피하기 위해 교환수혈을 우선한다. 성인의 재관류 치료 적응증은 별도로 평가하되 수혈이 지연되지 않게 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000376 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 교환수혈 B 유지. 총Hb를 낮추는 치료라는 오류를 HbS 분율 감소와 산소운반 개선으로 교정, 성인 tPA의 일률 배제 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7189278/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000376
- 미국혈액학회 겸상적혈구병 뇌혈관질환 지침, 권고 4–5: https://pmc.ncbi.nlm.nih.gov/articles/PMC7189278/
