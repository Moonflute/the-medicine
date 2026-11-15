---
type: qbank
schema_version: 1
id: medqa-us-train-005424
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc1c9a77b02e969648aa577bb072a7f568f04e1c8e041d4eb73e3b4590f16f38
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "독성 거대결장"
  - "중증 궤양성 대장염"
  - "정맥 코르티코스테로이드"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여성이 궤양성 대장염으로 입원했다. 혈성 설사가 하루 9회, 체온 38.1°C, 맥박 115회/분이다. 대변 감염검사는 음성이다. 영상에서 거대결장이나 천공 소견은 없고 복막 자극 징후도 없다. 관해 유도를 위해 시작할 치료는?

## 선택지

A. 경구 메살라민만 시작한다
B. 정맥 코르티코스테로이드를 투여하고 반응을 면밀히 재평가한다
C. 지사제만 투여한다
D. 치료 없이 외래에서 추적한다

## 해설

잦은 혈성 설사와 전신 염증 소견은 급성 중증 궤양성 대장염에 해당한다. 입원해서 정맥 스테로이드를 시작하고 수일 안에 반응을 판단한다. 조기에 외과와 상의하며 악화하거나 천공·거대결장이 생기면 수술 평가를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 독성거대결장 B IV steroid는 유지하되 쇼크가 필수라는 설명과 단독치료 축소 교정.
- https://doi.org/10.14309/ajg.0000000000003463

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005424
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714434/
