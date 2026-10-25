---
type: qbank
schema_version: 1
id: medqa-us-train-008804
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d0cee78549c28e7f5f86333ce3b5f4a930b7739bab484c2fd12354949a47b45
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "iron deficiency anemia"
  - "pica"
  - "restless legs syndrome"
question_type: prognosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvTGFtaXZ1ZGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

과거 임신에서 전자간증 병력이 있고 HIV(CD4 441/mm³)와 당뇨병이 있는 34세 G3P2103 여성이 첫 산후 진료를 위해 산과에 내원했다. 일주일 전 셋째 아이를 제왕절개로 출산했고 수술 회복은 양호하다. 모유 수유도 잘 되고 아기의 체중은 거의 출생 체중을 회복했다. 아기가 낮잠을 잘 때마다 자려고 노력하지만 예상보다 피곤하다고 호소한다. 하루에 아이스커피를 여러 잔 마시고 커피를 다 마신 뒤 얼음을 먹는 것을 좋아한다. 식단은 그 외에 변하지 않았고 평소만큼 밖에 나가 운동하지 못했다고 한다. 현재 메트포르민과 돌루테그라비르, 아바카비르, 라미부딘으로 구성된 HAART를 복용한다. 체온 98.9°F(37.2°C), 혈압 128/83mmHg, 맥박 85회/분, 호흡수 14회/분이다. 피곤해 보이고 결막이 창백하다. 다음 중 이 환자에게 발생 위험이 증가하는 상태는 무엇인가?

## 선택지

A. 용혈성 빈혈
B. 거대적아구성 빈혈
C. 부갑상선기능항진증
D. 하지불안증후군

## 해설

얼음 씹기(pagophagia)와 결막 창백·산후 피로는 철결핍빈혈을 의심하게 한다. 철결핍은 하지불안증후군(D)과 연관되므로 CBC·철 저장량을 평가한다. HIV·메트포르민·HAART 자체가 이 사례의 RLS 원인이라는 근거는 없고 현재 증상만으로 RLS가 이미 있다고 진단하지 않는다. HIV 수유 관리는 바이러스 억제 상태에 따른 별도 상담이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 철결핍 부정 및 HAART를 RLS 원인으로 단정한 오류 수정.
- https://health.nih.gov/health-topics-a-z/restless-leg-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008804
