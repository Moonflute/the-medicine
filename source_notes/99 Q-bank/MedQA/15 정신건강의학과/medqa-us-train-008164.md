---
type: qbank
schema_version: 1
id: medqa-us-train-008164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:867cc058583f0940f27e8e485dd7b4db964fe7998dcab275b6c697204920282a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "frontotemporal dementia"
  - "Pick disease"
  - "disinhibition"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghOuRkOy4oeuRkOyXvSDsuZjrp6QgKEZyb250b3RlbXBvcmFsIERlbWVudGlhKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghO2ZmCDsnqXslaAgKENvbnZlcnNpb24gRGlzb3JkZXIpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 여성이 아들과 함께 내원했다. 아들은 수년 동안 환자가 부적절하게 행동했다고 한다. 방문객 앞에서 옷을 벗고 물건을 입에 넣으며, 친한 친구의 죽음에도 정서적 반응이 없고 장례식에서 웃었다. 기억력 문제는 거의 없지만 가끔 전화기 같은 물건 사용법을 잊는다. 다른 질환이나 복용 약물은 없다. 국소 신경학적 결손은 없고 간이정신상태검사 25/30점이다. 가장 가능성 높은 진단은?

## 선택지

A. 알츠하이머 치매
B. 루이소체 치매
C. 픽병
D. 혈관성 치매

## 해설

기억력 저하보다 먼저 두드러진 탈억제·공감과 정서 반응 감소·과도한 구강 행동은 행동변이 전두측두치매를 시사한다. 제시된 선택지 중 역사적으로 픽병이라 부른 전두측두 변성 범주의 진단이 가장 적절하다. 실제로는 임상·영상과 경과로 평가하고 조직학적 픽병을 증상만으로 확정하는 것은 아니다. 원문에 CT의 초승달형 병변이나 경막하혈종, 외과적 배액 정보는 전혀 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008164

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 인지장애 문항에 전혀 무관한 CT/경막하혈종/배액 해설이 붙은 오류 전면 교정. 픽병 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nia.nih.gov/health/frontotemporal-disorders/what-are-frontotemporal-disorders-causes-symptoms-and-treatment
