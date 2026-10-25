---
type: qbank
schema_version: 1
id: medqa-us-train-001335
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c5cbbb8ff2056d6acc6bbbdee1e3466c790e1ef3f5c5698f74752830bb908d3
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "serum sickness-like reaction"
  - "drug hypersensitivity"
  - "urticarial rash"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOyyreuzkSAoU2VydW0gU2lja25lc3MpLm1k
  - MDYg7JWM66CI66W06riwL-uRkOuTnOufrOq4sCAoVXJ0aWNhcmlhKS5tZA
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
---

# MedQA US 임상문제

## 문제

14세 남아가 24시간 동안 급성으로 발생한 전신 가려움 발진 뒤 관절통이 생겨 부모와 함께 응급실에 내원했다. 일주일 전 여름 캠프에서 돌아온 뒤 인두염 진단을 받았고 현재 항생제를 복용 중이다. 중증 질환 가족력은 없다. 체온은 38.5°C (101.3°F), 맥박은 90회/분, 혈압은 110/70 mm Hg이다. 신체검사에서 눈 주위 부종, 전신 림프절병증, 전신에 수 cm까지 다양한 크기로 경계가 뚜렷하고 홍반성인 융합 피부 병변이 보인다. 양쪽 손목과 발목 관절을 수동으로 움직일 때 통증이 있다. 소변 시험지에서 단백뇨 1+가 보이나 혈뇨는 없다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 약물을 독시사이클린으로 변경한다
B. 항생제를 중단한다
C. 프레드니손을 투여한다
D. 알레르기 검사를 시행한다

## 해설


항생제 투여 약 1주 뒤 발열, 소양성 발진, 관절통, 부종이 발생해 약물 관련 혈청병 또는 혈청병 유사반응을 의심한다. 단백뇨도 있어 신장 침범 여부 평가가 필요하며, 유사반응이라고 확정할 수는 없다. 선지 중 우선할 조치는 원인 항생제 중단(B)이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001335`와 직접 대조했다.
- 판정: 약물 중단 B 유지. 단백뇨가 있는 사례를 혈청병 유사반응으로 확정하지 않고 혈청병/유사반응 가능성으로 기술.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.rch.org.au/clinicalguide/guideline_index/Serum_Sickness_and_Serum_Sickness_like_reactions_%28SSLRs%29/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001335
