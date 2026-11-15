---
type: qbank
schema_version: 1
id: medqa-us-train-009315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3521de01d1d8672e434e8b28ee640c4d11686273ad24f3f5f1aef0e1114835a4
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "fluoroquinolone-associated tendinopathy"
  - "플루오로퀴놀론 관련 건병증"
  - "Achilles tendinitis"
question_type: mechanism
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yVhO2CrOugiOyKpCDqsbTrs5Hspp0gKEFjaGlsbGVzIFRlbmRpbm9wYXRoeSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvTWVzYWxhemluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 시프로플록사신을 시작한 며칠 뒤 외상 없이 뒤꿈치 위쪽이 아파졌다. 아킬레스건 부위에 압통이 있고 종아리를 압박해도 발이 발바닥 쪽으로 굽혀지지 않는다. 가장 관련이 큰 요인은?

## 선택지

A. 플루오로퀴놀론의 힘줄 이상반응
B. 위장관 감염에 따른 반응성 관절염
C. 관절 내 요산 결정 침착
D. 세균의 발목 관절 파종

## 해설

종아리 압박에서 발바닥굽힘이 없는 소견은 아킬레스건 파열을 시사한다. 플루오로퀴놀론은 힘줄염과 파열의 위험을 높일 수 있다. 이런 증상은 단순 관절통으로 보지 말고 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 양성 Thompson 검사(종아리 압박 시 족저굴곡 없음)를 단순 건염으로 놓친 해설을 아킬레스건 파열 의심으로 교정했다. fluoroquinolone 이상반응 A는 유지한다.
- 공식/학회 근거: https://www.fda.gov/media/119537/download

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009315
- [서울아산병원: 아킬레스 건 파열](https://ydh.asanfoundation.or.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31698)
- [식품의약품안전처: 시프로플록사신 사용상 주의사항](https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq=201600601aupdateTs2026-10-15+14%3A56%3A04.841917b)
