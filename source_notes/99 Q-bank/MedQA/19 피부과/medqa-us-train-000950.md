---
type: qbank
schema_version: 1
id: medqa-us-train-000950
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7058c49ddeeee4038f4da83bd917abedcf807be6f6556ba77b2ce912855ad5d1
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "small cell lung carcinoma"
  - "hyponatremia"
  - "sinusitis"
  - "sunburn"
question_type: diagnosis
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67aA67mE64-Z7Je8IChTaW51c2l0aXMpLm1k
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9ab2xwaWRlbS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 여드름으로 독시사이클린을 복용하기 시작했다. 짧게 햇볕을 쬔 뒤 얼굴과 양손등이 화끈거리며 붉어졌다. 긴소매로 덮인 피부는 정상이다. 가장 가능성 높은 원인은?

## 선택지

A. 약물 유발 광독성 반응
B. 알레르기성 접촉피부염
C. 다형홍반
D. 만발성 피부 포르피린증

## 해설

일부 테트라사이클린계 약물은 햇빛에 노출된 부위에 과장된 일광화상처럼 따갑고 붉은 광독성 반응을 일으킬 수 있다. 의심 약과 햇빛 노출 경과를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Demeclocycline 광과민 C는 맞지만 노출 부위 한정 홍반을 전신 홍반으로 바꾼 설명을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000950
