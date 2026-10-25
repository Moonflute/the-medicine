---
type: qbank
schema_version: 1
id: medqa-us-validation-000354
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3f083878ad23fa2b092646cb67de3ff59237d43fe805635bdd30b641d161f845
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "헤파린 유발 혈소판감소증"
  - "혈소판인자 4"
  - "혈전증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: mechanism
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

70세 여성이 오른쪽 무릎 전치환술을 합병증 없이 받고 수술 후 3일째 재활시설로 퇴원했다. 퇴원 2일 후 오른쪽 다리 통증과 부종이 생겼고 도플러 초음파에서 오른쪽 슬와정맥과 경골정맥의 심부정맥혈전증이 확인되어 비분획 헤파린을 시작했다. 5일 후 혈전이 오른쪽 총대퇴정맥, 표재대퇴정맥, 슬와정맥, 경골정맥, 복재정맥까지 확장되고 왼쪽 총대퇴정맥에도 혈전이 보였다. 혈소판은 195,000/uL에서 83,000/uL로 감소했다. 이 상태의 병태생리는?

## 선택지

A. 사이클로옥시게나제 효소의 과도한 비가역적 불활성화
B. 헤파린-혈소판인자 4 복합체에 대한 항체 형성
C. 면역복합체 핵항원의 신장 침착
D. 활성화 단백질 C로 분해되지 않는 응고인자 V의 유전 돌연변이

## 해설


비분획 heparin을 시작한 지 5일 뒤 혈소판이 195,000에서 83,000/µL로 50% 넘게 감소하고 혈전이 새로 생기거나 확장되었다. 이는 면역성 heparin 유발 혈소판감소증(HIT)에 부합한다. PF4-heparin 복합체에 대한 항체(B)가 혈소판과 응고계를 활성화하여 혈소판 감소에도 불구하고 혈전을 일으킨다. 접촉피부염이나 국소 스테로이드 해설은 해당하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000354 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Heparin5일 뒤 혈소판 >50% 감소와 혈전확장은 면역 HIT B. 전혀 무관한 poison ivy/clobetasol 해설을 PF4-heparin 항체 기전으로 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000354
