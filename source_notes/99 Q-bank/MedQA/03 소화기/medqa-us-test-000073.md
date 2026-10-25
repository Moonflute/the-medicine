---
type: qbank
schema_version: 1
id: medqa-us-test-000073
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7c3c8335c1d1c487bbde336104fcb1f4f1aee2c5df90a73605f234ff1c5c91b8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간신증후군"
  - "자발성 세균성 복막염"
  - "간경변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsi6Ag7Kad7ZuE6rWwIChIZXBhdG9yZW5hbCBTeW5kcm9tZSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남성이 점점 악화되는 피로, 권태감, 발열, 복통으로 응급실에 내원했다. 일주일 전 시작되었고 설사도 있다. 수면 개선을 위해 최근 멜라토닌과 마그네슘을 복용하기 시작했다. 알코올사용장애로 급성 췌장염과 간경변 치료를 위해 여러 번 입원했으며 가끔 헤로인을 정맥주사한다. 체온 37.8°C, 혈압 105/70 mmHg, 맥박 분당 92회, 호흡수 분당 17회이다. 공막 황달, 간비대, 복수, 전반적 복부 압통과 백혈구 증가 및 대사성 산증이 있다. 복수천자 후 세포수 280/mm³, SAAG 1.3 g/dL, E. coli 배양 양성으로 세포탁심과 알부민을 투여했다. 입원 2일째 지속적으로 수액을 섭취하는데도 소변량이 감소하고 혈청 Na 131 mEq/L, 크레아티닌 1.8 mg/dL(입원 시 0.9)이다. 요중 나트륨이 낮고 혈액이나 단백은 없다. 입원 후 새 약물은 시작하지 않았다. 다음 중 가장 적절한 치료는?

## 선택지

A. 도파민 추가
B. 리시노프릴 추가
C. 간이식
D. 경정맥 간내 문맥전신 단락술

## 해설

정답은 C이다. SBP를 동반한 간경변 환자에서 새로 생긴 AKI는 HRS-AKI를 의심하게 하지만 저혈량·감염 관련 손상·약물 등 다른 원인도 평가해야 한다. 낮은 요중 Na만으로 확진할 수 없다. 적절한 원인 평가와 치료 뒤 HRS-AKI라면 혈관수축제(예: terlipressin)와 상황에 맞춘 albumin이 이식까지의 가교 치료가 될 수 있고, 간이식은 근본 치료이다. dopamine이나 lisinopril은 HRS의 표준 치료가 아니며 TIPS를 일률적으로 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간신증후군 의심과 확진을 구별하고 dopamine을 표준 혈관수축제라 한 오류 교정; C는 제시된 선택지 중 근본 치료.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11193657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000073
