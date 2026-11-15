---
type: qbank
schema_version: 1
id: medqa-us-train-006750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d3e1c99332753d9ea4ac2abf9171dd0ac00e50bbdf7ac7947327b24f3ed7389d
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "DRESS 증후군"
  - "카르바마제핀 과민반응"
  - "약물 발진"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVveusvCDrsJzsp4Qg7Zi47IKw6rWs7KadIOuwjyDsoITsi6Ag7Kad7IOBIChEUkVTUykgKERydWcgUmVhY3Rpb24gd2l0aCBFb3Npbm9waGlsaWEgYW5kIFN5c3RlbWljIFN5bXB0b21zIChEUkVTUykpLm1k
  - MTkg7ZS867aA6rO8L-yVveusvCDrsJzsp4QgKERydWcgRXJ1cHRpb24pLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DYXJiYW1hemVwaW5lLm1k
---

# MedQA US 임상문제

## 문제

11세 남아가 카르바마제핀을 시작한 지 6주 뒤 고열, 전신 발진, 얼굴 부종으로 내원했다. 호산구가 증가했고 ALT가 정상 상한의 6배다. 중증 약물 이상반응이 의심될 때 우선 조치는?

## 선택지

A. 카르바마제핀을 즉시 중단하고 장기 침범을 평가한다
B. 카르바마제핀을 유지하며 항히스타민제만 추가한다
C. 피부 알레르기 검사 결과가 나올 때까지 약을 유지한다
D. 같은 약을 감량하고 2주 뒤 간기능을 재검한다

## 해설


시작 수주 뒤 발열, 발진, 얼굴 부종과 호산구증가·간손상이 나타나 DRESS가 의심된다. 원인약을 중단하며 간·신장·혈액 등 장기 침범과 중증도를 평가하고 대체 항경련 치료를 상의한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-006750`와 직접 대조했다.
- 판정: 카르바마제핀 6주 후 DRESS 의심에 A 유지. 다른 검사 불필요라는 위험한 단정 제거하고 장기침범 평가 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f0a254c5-bd33-4b14-b9f0-830b3438f5c6&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006750
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12210004/
