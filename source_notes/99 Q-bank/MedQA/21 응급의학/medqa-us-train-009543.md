---
type: qbank
schema_version: 1
id: medqa-us-train-009543
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:51673b58878d03b97a239c78dff5618427b336f13f2eb21cafc1fe5b50c6f5c8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "herpes zoster vaccination"
  - "대상포진 예방접종"
  - "adult immunization"
question_type: prevention
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
difficulty: complex
answer: D
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

62세 여성이 정기 진료에서 백신 접종력을 확인했다. 인플루엔자는 이번 절기에, 파상풍은 6년 전에 접종했다. 대상포진 백신을 맞은 적은 없다. 대상포진 예방을 위해 권고할 접종은?

## 선택지

A. 수두 생백신
B. 폐렴구균 단백결합백신
C. 파상풍 추가접종
D. 재조합 대상포진 백신

## 해설

국내 성인 예방접종 권고에서 만 50세 이상 성인은 재조합 대상포진 백신 접종 대상이다. 수두 백신은 대상포진 예방 접종을 대신하지 않는다. 인플루엔자·폐렴구균 등 다른 접종 적응증은 별도로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대상포진 백신 D는 유지하되 2년 전 인플루엔자 접종이 최근 접종이어서 불필요하다는 오류를 교정한다.
- 공식/학회 근거: https://www.cdc.gov/vaccines/vpd/shingles/hcp/index.html
- 공식/학회 근거: https://www.cdc.gov/flu/vaccines/keyfacts.html
- 공식/학회 근거: https://www.cdc.gov/vaccines/hcp/current-vis/tdap.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009543
- 대한감염학회 성인 예방접종 권고, 대상포진: https://icjournal.org/DOIx.php?id=10.3947%2Fic.2023.0072
