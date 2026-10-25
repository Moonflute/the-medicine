---
type: qbank
schema_version: 1
id: medqa-us-train-006281
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:302210ad047b8eaed1a0a634410a92b16ee2d2fe3d91d6dcf9b2144ebb5551a5
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 초기"
  - "임신 위치 불명"
  - "자궁외임신 감별"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

류마티스관절염과 중증 만성질환 빈혈의 과거력이 있는 27세 여성이 오늘 아침 시작된 오심, 구토 및 복통으로 응급실에 내원했다. 그동안 경구 섭취를 전혀 하지 못했다. 혈압은 107/58 mmHg, 맥박은 분당 127회, 호흡수는 분당 15회, 실내 공기에서 산소포화도는 99%이다. 신체진찰에서 왼쪽 아랫배를 누를 때 통증이 있다. 소변 임신검사는 양성이고 혈청 β-hCG는 1,110 mIU/mL이다. 질식 초음파에서 복강 내 유리액체는 보이지 않고 자궁내 임신도 확인되지 않는다. 환자는 앞으로 아이를 갖기를 원한다고 말한다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 복부 CT
B. 2일 후 β-hCG 재검
C. 난관절제술
D. 난관개구술

## 해설

hCG 1,110과 자궁내 임신 미확인은 임신 위치 미상(PUL)이며 이 수치 하나로 자궁외임신을 확진할 수 없다. 안정되고 신뢰할 추적이 가능하면 48시간 뒤 hCG와 추적 초음파(B)가 적절하다. 그러나 맥박 127·구토·심한 빈혈 병력이 있어 탈수·출혈을 즉시 평가하고 안정화를 확인해야 한다. 증상 악화 시 수치를 기다리지 않고 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PUL 추적은 안정 상태 확인 후 가능하며 빈맥127을 무시하지 않도록 보강.
- https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006281
