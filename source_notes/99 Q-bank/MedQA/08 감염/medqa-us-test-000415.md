---
type: qbank
schema_version: 1
id: medqa-us-test-000415
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eb9e59ce87795c1247718dc1a96b4224ee90e1450ecddd3e13a148757b66e5d6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "여행자 설사"
  - "장독소생성 대장균"
  - "급성 수양성 설사"
  - "Enterohemorrhagic E. coli infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
---

# MedQA US 임상문제

## 문제

인도에서 귀국한 환자가 이틀 동안 하루 세 차례 물설사를 했다. 혈변과 열이 없고 물을 잘 마시며 평소 활동을 할 수 있다. 초기 치료로 적절한 것은?

## 선택지

A. 경구 수분과 전해질을 보충하고 경과를 본다
B. 여행 이력이 있으므로 아지트로마이신을 시작한다
C. 지아르디아증으로 보고 메트로니다졸을 우선 시작한다
D. 혈변이 없더라도 세프트리악손을 정맥으로 투여한다

## 해설


활동을 방해하지 않는 경증 여행자 설사는 대개 수분·전해질 보충으로 충분하며 항생제를 일률적으로 투여하지 않는다. 고열, 혈변, 심한 탈수가 나타나면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000415 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여행자 수양성 설사의 ETEC D 유지. 미제시 혈변을 덧붙인 오류와 모든 경우 항생제 불필요라는 불필요한 치료 단정 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000415
- https://doi.org/10.3947/ic.2019.51.2.217
- https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html
