---
type: qbank
schema_version: 1
id: medqa-us-test-000052
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:df5eb36b2bfce1435e84022e4072fc11a2c40d582b7227f422d949ae01b05927
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 알도스테론증"
  - "저칼륨혈증"
  - "대사성 알칼리증"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이뇨제를 포함한 세 가지 약을 복용 중인 56세 환자의 혈압이 174/111 mmHg이고 칼륨 3.3 mmol/L다. 심각한 급성 장기 손상은 없다. 원발성 알도스테론증을 선별할 검사는?

## 선택지

A. 혈장 알도스테론과 레닌을 함께 측정해 비율을 평가
B. 혈장 메타네프린만 먼저 측정
C. 생화학 평가 없이 부신정맥 채혈부터 시행
D. 신장 조직검사

## 해설

저항성 고혈압과 저칼륨혈증에서는 알도스테론과 레닌을 함께 확인한다. 저칼륨은 교정하고 약물·채혈 조건이 결과에 미치는 영향을 고려한다. CT나 부신정맥 채혈이 선별검사를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 36.7°F를 원문의 98.0°F(36.7°C)로 복원하고 HCTZ/신혈관성 원인도 전해질 패턴을 만들 수 있어 확진은 아님을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000052
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10765003/
