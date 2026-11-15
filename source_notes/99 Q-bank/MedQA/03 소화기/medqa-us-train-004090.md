---
type: qbank
schema_version: 1
id: medqa-us-train-004090
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c51863754ab5e02a2db93a0f89ef1cf2ef3d517d02697381c35169a3c6450c3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "소장 협착"
  - "협착성형술"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: management
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
  - ZHJ1ZzowMyDshoztmZTquLAvTG9wZXJhbWlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

크론병으로 소장을 일부 절제한 32세 남성이 보존치료로 풀리지 않는 소장폐색 때문에 수술 중이다. 중간 회장에 서로 떨어진 짧은 섬유성 협착 두 곳이 있다. 농양·누공이나 종양 의심 소견은 없다. 남은 장 길이를 보존하려면 어떤 수술이 적절한가?

## 선택지

A. 회결장 절제술
B. 두 협착 부위의 협착성형술
C. 두 병변을 포함한 광범위 소장 절제
D. 병변을 남긴 채 영구 회장루 조성

## 해설

짧은 소장 협착에서는 협착성형술로 좁아진 내강을 넓히면서 장을 보존할 수 있다. 이전 절제력이 있거나 여러 협착이 있는 크론병 환자에서 특히 유용하다. 천공·농양이나 악성 의심이 있으면 같은 접근을 일률적으로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn 협착성형술 B를 단순 stretching으로 오역한 해설 교정.
- https://doi.org/10.14309/ajg.0000000000003465

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004090
- https://doi.org/10.1093/ecco-jcc/jjae089
