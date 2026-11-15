---
type: qbank
schema_version: 1
id: medqa-us-validation-000229
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5e98c1d5620faadfdb6894427a2b638f0232ec8e1f800afd44e4b60a9a488df4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "일차성 레이노 현상"
  - "혈관연축"
  - "니페디핀"
  - "Raynaud phenomenon"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
---

# MedQA US 임상문제

## 문제

33세 여성이 추울 때 양손 손가락이 하얗게 변했다가 따뜻해지면 붉어진다. 손끝 궤양이 없고 손톱주름 모세혈관 검사는 정상이다. 보온해도 발작이 자주 생겨 일상생활이 어렵다. 고려할 일차 약제는?

## 선택지

A. 저용량 아스피린
B. 경구 니페디핀
C. 정맥 에포프로스테놀
D. 경구 프레드니솔론

## 해설


보온에도 증상이 지속되는 일차성 레이노 현상에는 디히드로피리딘계 칼슘통로차단제를 고려한다. 혈압, 두통, 부종 등을 확인하면서 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000229 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 보온에도 반복되는 Raynaud의 약물치료로 dihydropyridine CCB nifedipine B가 적절함을 공식NIAMS 근거와 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niams.nih.gov/health-topics/raynauds-phenomenon/diagnosis-treatment-and-steps-to-take

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000229
- https://doi.org/10.1136/ard-2024-226430
