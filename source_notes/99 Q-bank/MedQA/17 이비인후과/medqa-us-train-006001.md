---
type: qbank
schema_version: 1
id: medqa-us-train-006001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d127d86978acdd9e4067c21896057034881c0d68f71903de15ee6ea551854f4d
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "세균성 경부 림프절염"
  - "연쇄상구균 인두염"
  - "클린다마이신"
  - "Acute bacterial cervical lymphadenitis"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 5일 동안 지속된 인후통과 점점 커지는 좌측 목의 통증성 부종으로 내원했다. 지난 3일 동안 삼킬 때 아팠고 고형식을 거부했다. 1년 전 인도에서 미국으로 이민 왔으며 예방접종 기록은 없다. 가족은 고양이 두 마리를 키운다. 체온은 37.7°C(99.9°F), 맥박은 분당 103회, 혈압은 92/60 mmHg이다. 구인두가 홍반성이고 편도가 커져 삼출물이 보인다. 좌측 목에 3cm 크기의 따뜻하고 압통이 있지만 파동은 없는 경부 림프절이 있다. 혈색소 12.6 g/dL, 백혈구 11,100/mm³, 혈소판 180,000/mm³이다. 인후 면봉과 배양검사 외에 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 설파디아진과 피리메타민 치료
B. 절개 및 배농
C. 클린다마이신 치료
D. 면역글로불린 치료

## 해설

급성 편측성의 따뜻하고 아픈 경부 림프절 종대는 S. aureus나 A군 연쇄상구균 등에 의한 급성 세균성 림프절염에 합당하다. 제시된 선지에서는 이 균들을 겨냥할 수 있는 clindamycin C가 타당하다. 실제 경험약은 지역 내성·알레르기·MRSA 위험을 고려하며 clindamycin이 모든 소아에서 일률적 1차는 아니다. 현재 파동이 없는 3 cm 림프절이므로 농양이 이미 확정되었다고 할 수 없다. 고양이 접촉만으로 톡소플라스마나 다른 비전형 감염을 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 클라미디아(Clostridium)·비정형 연쇄상구균이라는 잘못된 병원체 설명 및 본문에 없는 고열·농양을 교정.
- 공식/학회 근거: https://idmp.ucsf.edu/content/lymphadenitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006001
