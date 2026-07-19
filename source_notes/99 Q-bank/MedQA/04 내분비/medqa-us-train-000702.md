---
type: qbank
schema_version: 1
id: medqa-us-train-000702
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc91689bad5bc49988dea87a28138d8c2b2616495ce059bfc8c1062f9b3691e7
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "adrenal adenoma"
  - "Conn syndrome"
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

44세 여성이 두통, 피로, 근력 약화, 빈뇨를 주소로 일차 진료 의사를 방문하였다. 이러한 증상들은 지난 한 달 동안 발생하여 악화되었다. 5년 전 담낭절제술로 치료받은 담낭염 외에 특이 과거력이나 수술력은 없다. 오늘 방문 시 활력징후는 체온 37.1도, 심박수 77회/분, 혈압 158/98mmHg, 호흡수 12회/분, 산소포화도 99%이다. 신체 검진상 테타니(tetany), 경미한 복부 팽만, 장음 감소, 안저 검사상 고혈압성 망막 변화가 관찰된다. 의사는 의심되는 진단에 근거하여 검사실 검사와 영상 검사를 처방하였다. 복부 CT 검사에서 부신 선종을 시사하는 8cm 크기의 일측성 좌측 부신 종괴가 확인되었다. 이 환자에서 가장 가능성이 높은 검사실 소견 조합은 무엇인가?

## 선택지

A. 대사성 산증, 고나트륨혈증, 고칼륨혈증
B. 대사성 산증, 저나트륨혈증, 고칼륨혈증
C. 대사성 산증, 고나트륨혈증, 저칼륨혈증
D. 대사성 알칼리증, 고나트륨혈증, 저칼륨혈증

## 해설


부신 선종이 8 cm이며 고혈압, 저칼륨혈증, 대사성 알칼리증을 동반하는 경우 알도스테론 과다(Conn 증후군)가 가장 흔한 원인이다. 이는 나트륨 보유·칼륨 배설을 초래한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000702
