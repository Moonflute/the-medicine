---
type: qbank
schema_version: 1
id: medqa-us-train-005571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20c199ae538943eac7e9bbcf6c060aeef341b64dc78b75b0c5131e40d9d9f516
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "외음부 경화태선"
  - "외음부 백색판"
  - "국소 고강도 스테로이드"
  - "Lichen sclerosus"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: standard
answer: A
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

61세 여성이 심한 외음부 가려움으로 내원했다. 외음부와 항문 주위 흰 위축성 판이 있고 일부 소음순이 소실돼 있다. 생검에서 외음부 경화태선이 확인됐고 국소 결절이나 궤양은 없다. 첫 치료는?

## 선택지

A. 외음부 클로베타솔 0.05% 연고
B. 국소 에스트로겐 단독
C. 외음부 항진균 크림
D. 병변 부위 광범위 외음부 절제

## 해설

외음부 경화태선에는 초강력 국소 스테로이드가 1차 치료다. 증상과 흉터 및 암 의심 변화가 없는지 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 외음부 경화태선에 클로베타솔 A 유지. 백색판 자체를 진단명으로 둔 부정확한 설명 교정.
- https://www.bad.org.uk/pils/lichen-sclerosus-in-females

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005571
- https://pubmed.ncbi.nlm.nih.gov/38822598/
