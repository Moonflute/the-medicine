---
type: qbank
schema_version: 1
id: medqa-us-train-000340
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a34b2333294a6a7ed8c62de5388c3590a4917499a3f0b7068d38ad14d7de0db
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "heat stroke"
  - "rhabdomyolysis"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXtOyniO2ZmCAoSGVhdCBJbGxuZXNzKS5tZA
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강하던 44세 남성이 공장 보일러실에서 작업하던 중 어지러움을 느끼고 쓰러진 지 45분 만에 동료들에 의해 응급실로 이송되었습니다. 의식 소실은 없었습니다. 동료들에 따르면 쓰러지기 30분 전, 환자가 메스꺼움과 두통을 호소했다고 합니다. 환자는 땀을 많이 흘리고 기면 상태입니다. 시간, 장소, 사람에 대한 지남력이 없습니다. 환자의 활력 징후는 다음과 같습니다: 체온 41°C, 심박수 133회/분, 호흡수 22회/분, 혈압 90/52 mm Hg. 검사상 동공은 대칭적이고 빛에 반응합니다. 심부건 반사는 양측 2+입니다. 목은 유연합니다. 0.9% 생리식염수 주입이 시행되었습니다. 소변 카테터를 삽입하였고 짙은 갈색 소변이 채취되었습니다. 환자의 검사실 검사 결과는 다음과 같습니다: 혈액: 혈색소 15 g/dL, 백혈구 수 18,000/mm3, 혈소판 수 51,000/mm3. 혈청: Na+ 149 mEq/L, K+ 5.0 mEq/L, Cl- 98 mEq/L, 요소질소 42 mg/dL, 포도당 88 mg/dL, 크레아티닌 1.8 mg/dL, 아스파르테이트 아미노전이효소(AST) 210, 알라닌 아미노전이효소(ALT) 250, 크레아틴 키나아제 86,000 U/mL. 다음 중 환자 관리의 다음 단계로 가장 적절한 것은 무엇입니까?

## 선택지

A. 아세트아미노펜 치료
B. 단트롤렌(Dantrolene)
C. 얼음물 침수
D. 혈액 투석

## 해설

고온 작업환경에서 41°C 고체온과 중추신경계 이상·저혈압·장기손상이 나타나 열사병을 시사한다. 신속한 적극 냉각, 가능한 경우 차갑거나 얼음물 침수(C)를 시행한다. 기도·호흡·순환 감시와 수액을 병행하며 일반 해열제나 dantrolene이 냉각을 대신하지 않는다. 원문 CK 86,000 U/mL는 임상에서 통상 사용하는 U/L 표기와 달라 원자료 단위 확인이 필요하지만, 열사병 응급 냉각 판단은 고체온·의식 변화만으로도 충분하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 열사병의 즉시 냉각 C는 적절하며 원문 CK의 비표준 U/mL 단위를 확정적 정상 단위처럼 해석하지 않도록 설명한다.
- 공식/학회 근거: https://sccm.org/clinical-resources/guidelines/guidelines/guideline-for-the-treatment-of-heat-stroke

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000340
