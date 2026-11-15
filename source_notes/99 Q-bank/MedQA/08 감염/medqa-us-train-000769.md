---
type: qbank
schema_version: 1
id: medqa-us-train-000769
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:196f2073d1518f8c7813bea8702e3065d9c11805529e2ff419f85f9e0752a30b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "type 1 diabetes mellitus"
  - "tuberculosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

가족 내 결핵 접촉자 검사에서 IGRA가 양성인 성인이 무증상으로 내원했다. 아직 흉부 영상은 촬영하지 않았다. 잠복결핵감염 치료를 시작하기 전에 우선 할 일은?

## 선택지

A. BCG를 접종하고 다른 검사는 시행하지 않는다
B. 흉부 검사 없이 리팜핀 단독 치료를 시작한다
C. IGRA 양성이므로 바로 활동성 결핵 4제 치료를 시작한다
D. 흉부 X선으로 활동성 결핵 가능성을 평가한다

## 해설


IGRA 양성은 활동성 결핵과 잠복결핵을 구분하지 못한다. 증상과 흉부 영상을 평가하고, 이상 소견이 있으면 객담 결핵균 검사 등을 추가한 뒤 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000769 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 13 mm TST는 이민·보호소·당뇨 위험군에서 양성이다. 흉부 X선은 감염 자체 확인이 아니라 활동성 결핵 평가 단계임을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000769
- https://www.kdca.go.kr/bbs/kdca/55/259948/download.do
