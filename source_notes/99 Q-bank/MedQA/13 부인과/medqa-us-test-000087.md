---
type: qbank
schema_version: 1
id: medqa-us-test-000087
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ad05cc0be5590067f5e56fe15d7bae15245d45a0882fb4fd384528bf2f54e06a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁내막증"
  - "성교통"
  - "복강경검사"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 여성이 월경에 악화되는 골반통과 깊은 성교통을 호소한다. 질식 초음파는 정상이고 적절한 진통제와 연속 복합피임약을 충분히 썼지만 생활을 방해하는 통증이 지속된다. 잠재 병변을 직접 확인하고 치료하려면?

## 선택지

A. 복강경으로 골반을 평가하고 발견 병변을 필요시 치료
B. CA-125로 확진하고 수술 여부 결정
C. 자궁경으로 자궁강만 검사
D. 추가 평가 없이 곧바로 자궁절제

## 해설

정상 영상이 표재성 자궁내막증을 배제하지 않는다. 경험적 약물 치료로 조절되지 않고 수술적 평가를 원한다면, 복강경으로 진단과 병변 치료를 함께 고려할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 월경 하루전부터7일을 월경전7일로 바꾼 해설오류 수정. 정상US에도 지속통증/이미COC사용에서 복강경 C 가능; 확진에 항상필수라는 단정 제거.
- https://www.nice.org.uk/guidance/ng73/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000087
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11788693/
