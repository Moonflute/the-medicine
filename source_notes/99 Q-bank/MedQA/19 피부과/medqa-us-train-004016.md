---
type: qbank
schema_version: 1
id: medqa-us-train-004016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fda2d34a0bd67c622ec6c8064f9b6d8935e63120dc35e501c4b83099124a8201
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "두부백선"
  - "피부사상균 감염"
  - "탈모"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVGVyYmluYWZpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 여아가 3주간 지속된 두피의 원형 가려운 발진과 탈모를 걱정하는 어머니와 함께 내원했다. 과거력에 천식이 있으며 알부테롤 흡입기를 평균 일주일에 한 번 사용한다. 혈압 112/70 mmHg, 심박수 104회/분, 호흡수 20회/분, 체온 37.0°C이다. 의식이 명료하고 상호작용이 가능하며 양측 폐 청진은 깨끗하다. 오른쪽 뒤목에 압통이 있는 림프절이 만져진다. 두피 사진이 제시되어 있다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 트리암시놀론 피하주사
B. 케토코나졸 샴푸
C. 경구 독시사이클린
D. 경구 테르비나핀

## 해설

두피의 가려운 원형 병변·탈모 및 후경부 림프절은 두부백선(tinea capitis)을 지지한다. 모간·모낭 감염에는 전신 항진균제가 필요하여 선지 중 경구 terbinafine(D)이 적절하다. 균종·지역·검사 결과에 따라 약제를 선택·조정한다. 항진균 샴푸는 전파 감소의 보조 요법이며 단독 치료로 충분하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두피 소양성 환상 병변·탈모·후경부 림프절의 두부백선은 본문으로 충분히 지지되어 경구 terbinafine D를 유지하고 질환명 오류와 샴푸 단독치료 혼동을 수정한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/tinea-capitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004016
