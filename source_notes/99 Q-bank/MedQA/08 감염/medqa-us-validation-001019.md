---
type: qbank
schema_version: 1
id: medqa-us-validation-001019
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:03d74ae893df1f994592b59dbedfb7edf345b3680bb1696fade38ff3756e02fd
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "항생제 관련 설사"
  - "글루타메이트 탈수소효소"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: investigation
difficulty: complex
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

지역사회획득폐렴으로 입원한 지 4일 된 68세 여성이 복통과 하루 6회의 물 많고 악취 나는 설사를 하며 때때로 피가 섞인다. 현재 세프트리악손과 아지트로마이신을 투여 중이다. 가장 적절한 다음 처치는?

## 선택지

A. 대변 충란 및 기생충 검사
B. 대변 락토페린 검사
C. 글루타메이트 탈수소효소 항원 효소면역측정법
D. 대변 산도 검사

## 해설


입원 중 항균제 노출 뒤 하루 6회 새 설사는 CDI 검사를 고려할 상황이다. 선택지 중 GDH 항원 EIA(C)는 민감한 초기 선별검사로 사용할 수 있다. 다만 GDH는 독소 비생성 균주에서도 양성이므로 단독으로 활동성 CDI를 확진하지 않고 toxin EIA 및 필요 시 NAAT를 포함한 검사실 알고리즘으로 해석한다. 혈변이 섞이는 경우 다른 장염 원인도 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001019 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항균제 후 새 설사에서 GDH EIA C는 선별 단계로 적절하나 단독 독소생성균/활동성 CDI 확진이 아니다. 가장 민감이라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridium-difficile/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001019
