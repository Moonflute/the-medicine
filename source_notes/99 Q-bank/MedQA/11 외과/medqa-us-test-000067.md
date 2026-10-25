---
type: qbank
schema_version: 1
id: medqa-us-test-000067
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:402205175f1ab473ac007f6fb9df1387b5ba3af6a4934cc0161a400b4fa45caa
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "응급 수술"
  - "묵시적 동의"
  - "장폐색"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snqXtj5Dsg4kubWQ
  - MTEg7Jm46rO8L-yepSDtj5Dsg4kgKEJvd2VsIE9ic3RydWN0aW9uKS5tZA
question_type: ethics
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 남아가 6시간 동안 지속된 심한 복통과 담즙성 구토로 응급실에 내원했다. 24시간 동안 배변이 없고 아파 보인다. 체온 37.8°C, 맥박 분당 122회이며 복부가 팽창되고 하복부 압통, 경직, 반발통, 장음 감소가 있다. 복부 X선에서 장관이 확장되어 있다. 14세 형이 동행했고 외과의는 응급 개복술을 권고했다. 부모는 친구를 방문하러 가서 연락할 수 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 형에게 동의 받기
B. 환자에게 동의 받기
C. 응급 개복술 시행
D. 부모 동의까지 수술 연기

## 해설


이 환자는 담즙성 구토·장폐색 소견뿐 아니라 경직과 반발통 등 복막자극징후가 있어 응급 수술이 필요하다. 부모와 연락을 시도하되 생명·장기 손상을 막기 위한 처치를 지연하지 않는다. 부모가 즉시 동의할 수 없고 환자도 유효한 동의를 할 수 없는 응급상황에서는 필요한 개복술을 시행할 수 있으므로 C가 적절하다. 14세 형에게 법적 대리 동의를 요구하며 기다리지 않는다. 응급성, 연락 시도와 판단을 기록하고 가능한 한 빨리 부모에게 설명한다. 모든 장폐색이 곧바로 개복술 대상인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000067 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복막자극징후가 있는 소아 응급수술의 동의 예외와 단순 장폐색의 일반화를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000067
