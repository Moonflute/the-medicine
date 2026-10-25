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
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

정답은 D이다. 고혈압과 근쇠약·장운동 저하에 부신 종괴가 있으면 mineralocorticoid 과다에 의한 K/H 소실과 대사성 알칼리증을 고려한다. 제시된 선택지에서는 D가 이에 대응한다. 실제 원발성 알도스테론증에서는 Na가 정상일 수도 있다. 8cm 부신 종괴는 크기만으로 양성 선종이라 확정할 수 없으며 악성 및 다른 호르몬 분비 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 8cm 종괴를 양성 Conn adenoma로 단정하지 않고 mineralocorticoid 생리를 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000702
