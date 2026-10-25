---
type: qbank
schema_version: 1
id: medqa-us-train-008134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c49571daeeda51bf0fd42495a670807ee6559cb7e2ffe77921c9eb75c87a17b3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "human bite"
  - "fight bite"
  - "clindamycin doxycycline"
  - "Human bite infection"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-q1kOyDgSDqsJDsl7wgKEJpdGUgV291bmQgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 남자가 3일 전 싸움 중 다른 사람의 입을 때린 후 발생한 우측 둘째와 셋째 중수골 손등의 자상으로 내원했다. 말초혈관질환과 고혈압 병력이 있고 아스피린, 설파살라진, 리시노프릴을 복용하며 페니실린 알레르기가 있다. 체온 38.9°C(102.1°F), 혈압 142/88 mm Hg, 맥박 88회/분이다. 우측 손등 둘째와 셋째 중수골 부위에 부종을 동반한 3 mm 열상 두 개가 있다. 가장 적절한 처치는?

## 선택지

A. 아지스로마이신과 세척 및 괴사조직 제거
B. 클린다마이신과 독시사이클린 및 세척·괴사조직 제거
C. 독시사이클린과 세척 및 괴사조직 제거
D. 세척 및 괴사조직 제거

## 해설

입을 주먹으로 친 뒤 생긴 손등 상처는 사람 교상인 fight bite이며, 작은 상처라도 관절이나 신전건까지 오염될 수 있다. 발열과 부종이 있어 세척·괴사조직 제거와 신속한 손 전문 진료가 필요하다. 페니실린 알레르기가 있는 보기 중 B는 독시사이클린으로 Eikenella 등의 균을, 클린다마이신으로 일부 그람양성균과 혐기성균을 보완하는 조합이다. 클린다마이신 단독은 Eikenella를 충분히 치료하지 못하며 독시사이클린은 파상풍 예방약이 아니다. 현행 지침의 다른 대체 조합에는 독시사이클린과 메트로니다졸이 있으므로 중증도·배양과 지역 지침에 따라 항생제를 선택한다. 파상풍 예방은 별도로 접종력을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 독시사이클린을 파상풍 예방약으로 설명한 오류를 제거한다. 페니실린 알레르기 fight bite의 구강 혼합균 범위를 구별하고 발열·손 감염의 수술 평가를 명시한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG184/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008134
