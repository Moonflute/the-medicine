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

11세 남아가 2일 동안 지속된 전신 가려움 발진으로 어머니와 함께 내원했다. 일주일 전 3일간 야외 여름 캠프에 다녀왔고 그곳에서 한 아이가 홍역으로 진단되어 귀가했다. 6주 전 경련장애를 진단받았고 천식도 있다. 카르바마제핀과 알부테롤 흡입제를 복용한다. 예방접종 기록은 확인할 수 없다. 체온은 38.4°C(101.1°F), 맥박은 분당 88회, 혈압은 102/60 mm Hg이다. 얼굴 부종과 얼굴, 몸통 및 사지의 미만성 발진이 있고 경부와 서혜부 림프절병증이 있다. 그 외 진찰은 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 카르바마제핀 중단
B. 홍역 혈청검사
C. 이종친화항체 검사
D. 페니실린 치료 투여

## 해설


카르바마제핀 시작 6주 뒤 발열·발진·안면부종·림프절병증은 DRESS를 포함한 중증 약물 과민반응을 의심하게 한다. 원인 약물 중단(A)이 우선이다. 진단과 장기침범 평가를 위한 혈구분획, 간·신장기능 검사 등은 필요하며 다른 검사가 불필요하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-006750`와 직접 대조했다.
- 판정: 카르바마제핀 6주 후 DRESS 의심에 A 유지. 다른 검사 불필요라는 위험한 단정 제거하고 장기침범 평가 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f0a254c5-bd33-4b14-b9f0-830b3438f5c6&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006750
