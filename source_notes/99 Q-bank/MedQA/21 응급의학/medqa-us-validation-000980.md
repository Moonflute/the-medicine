---
type: qbank
schema_version: 1
id: medqa-us-validation-000980
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9441f232bf8ee26f24b31bde7fcca0bdab3853d182671afd21a530bd878269bd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "파상풍"
  - "불완전 예방접종"
  - "파상풍 면역글로불린"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 흙이 묻은 깊은 열상으로 내원했다. 상처를 충분히 씻었다. 파상풍 백신을 평생 두 번 맞았고 마지막 접종은 3년 전이다. 무엇이 필요한가?

## 선택지

A. 파상풍 함유 백신과 파상풍 면역글로불린
B. 파상풍 함유 백신만
C. 파상풍 면역글로불린만
D. 둘 다 필요 없음

## 해설

오염된 상처에서 기본접종을 완료하지 않았으면 마지막 접종이 5년 이내라도 백신과 면역글로불린이 모두 필요하다. 5년 기준은 기본접종을 마친 환자에게 적용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 불완전 기초접종과 흙에 오염된 깊은 상처에서 백신·TIG C를 유지한다. TIG가 균 자체를 중화한다는 오류를 독소 중화로 교정한다.
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-guidance/
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000980
- https://www.kdca.go.kr/bbs/kdca/55/259856/download.do
- 질병관리청 국가건강정보포털, 파상풍 상처 노출 후 예방: https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6776
