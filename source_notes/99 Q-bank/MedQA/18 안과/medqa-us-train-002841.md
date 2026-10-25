---
type: qbank
schema_version: 1
id: medqa-us-train-002841
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5ab48329fd22ce214552914602137e200b5d791501ae0d8b2aff3b221f78bda
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "viral conjunctivitis"
  - "adenovirus"
  - "follicular conjunctivitis"
  - "preauricular lymphadenopathy"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
  - MDgg6rCQ7Je8L-yVhOuNsOuFuOuwlOydtOufrOyKpCDqsJDsl7wgKEFkZW5vdmlydXMgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 여성이 오른쪽 눈의 자극감, 충혈, 눈물성 분비물로 내원했다. 4일 전 갑자기 시작되었고 여름휴가 중 명백히 아픈 사람과 접촉한 적은 없지만 사람이 붐비는 장소를 자주 방문했다. 다른 증상은 없다. 혈압은 125/80 mmHg, 심박수 75회/분, 호흡수 14회/분, 체온 36.7°C이다. 진찰에서 오른쪽 결막 충혈, 눈물성 분비물, 경미한 여포성 결막 변화가 있고 각막 병변은 없다. 같은 쪽 귀앞 림프절이 커져 있다. 다음 중 적절한 치료는?

## 선택지

A. 아시클로버 연고
B. 의학적 치료가 필요하지 않다
C. 레보플록사신 점안액
D. 테트라사이클린 연고

## 해설

수양성 분비물, 여포성 결막 변화와 같은 쪽 귀앞 림프절 비대는 아데노바이러스성 결막염에 합당하다. 각막 병변이 없는 이 증례에서는 B처럼 특정 항균제나 항바이러스제를 일률적으로 투여할 필요가 없다. 다만 손 위생, 수건 공유 금지, 냉찜질·인공눈물 등 증상 관리가 도움이 된다. 심한 통증이나 시력저하가 생기면 재평가해야 하므로 아무 관리나 안내도 필요 없다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전구성/전구림프절이라는 오역을 여포성 결막염·귀앞 림프절로 교정하며 B는 특이 항균제 불필요라는 뜻임을 명확히 함.
- 공식/학회 근거: https://www.aaojournal.org/article/S0161-6420(24)00009-5/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002841
