---
type: qbank
schema_version: 1
id: medqa-us-validation-001201
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:678e92facebaa87adb936949639fb56d4f90024963ec4693b7ccfddc32120692
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "항생제 관련 설사"
  - "중합효소연쇄반응"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: investigation
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
---

# MedQA US 임상문제

## 문제

56세 여성이 급성 봉와직염으로 클린다마이신을 정맥 투여받은 지 6일 후 심한 물설사, 발열과 복부 압통이 생겼다. 현재 증상에 대한 가장 적절한 초기 진단검사는?

## 선택지

A. 백혈구 감별을 포함한 전혈구검사
B. 구불결장경검사 또는 대장내시경
C. 대변 잠혈검사
D. 중합효소연쇄반응

## 해설


Clindamycin 노출 뒤 새 물설사·발열·복통은 CDI를 의심하게 한다. 적절한 무형성 설사 검체에서 독소 유전자 NAAT/PCR(D)을 사용한다. 기관이 검체 제출 기준을 관리하면 NAAT 단독 또는 다단계 검사를 쓰고, 기준이 없으면 toxin 검사를 포함한 알고리즘을 권고한다. 양성 유전자 검사만으로 무증상 집락화와 활동성 감염을 자동 구분하지는 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001201 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항균제 후 의심 CDI의 NAAT/PCR D 유지. 독소 유전자 검출은 집락화도 가능해 무조건 가장좋은 단독 확진이라고 단정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridium-difficile/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001201
