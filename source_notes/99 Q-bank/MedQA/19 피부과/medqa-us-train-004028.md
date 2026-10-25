---
type: qbank
schema_version: 1
id: medqa-us-train-004028
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:66839d57128d2b1dd04dafe3d52597dde3be69a364ebe284b2c7706f56062a86
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "아토피피부염"
  - "영아 습진"
  - "피부 장벽 기능장애"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JWE7Yag7ZS8IO2UvOu2gOyXvCAoQXRvcGljIERlcm1hdGl0aXMpLm1k
  - MTkg7ZS867aA6rO8L-yVhO2GoO2UvCDtlLzrtoDsl7wgKEF0b3BpYyBEZXJtYXRpdGlzKS5tZA
difficulty: standard
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5개월 남아가 2주간 지속된 전신 가려움 발진으로 내원했다. 가려움 때문에 밤에 자주 깬다. 생후 4개월까지 모유만 먹다가 분유로 바꾸었다. 아버지에게 천식 병력이 있다. 예방접종은 최신 상태이며 키는 75백분위수, 체중은 70백분위수이다. 얼굴과 사지의 폄쪽에 건조하고 인설이 있는 반점이 보이며 사타구니는 침범되지 않았다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 국소 콜타르
B. 경구 아시클로버
C. 경구 비타민 A
D. 국소 보습제

## 해설

가족의 아토피 소인과 얼굴·사지 폄쪽의 건조한 소양성 습진, 사타구니 보존은 영아 아토피피부염에 합당하다. 선지 중 국소 보습제(D)가 피부장벽 회복을 위한 기본 치료이다. 염증성 악화가 있으면 부위·나이·중증도에 맞는 국소 corticosteroid를 추가할 수 있어 무조건 불필요하다고 해서는 안 된다. 분유 전환만으로 식품알레르기를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영아 아토피피부염의 보습 D는 맞지만 스테로이드가 필요 없다고 일괄 배제한 오류를 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg57/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004028
