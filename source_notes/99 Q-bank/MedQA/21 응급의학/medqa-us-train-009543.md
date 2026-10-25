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

62세 여성이 6월에 정기검진을 위해 내원했다. 만성 요통이 있고 27세에 충수절제술을 받았다. 멕시코 크루즈 여행에서 돌아왔으며 최근 유방촬영술, 자궁경부 세포검사, 대장내시경은 정상이었다. 어머니는 지난해 유방암으로 사망했고 아버지는 고혈압이 있다. 예방접종 기록에서 폐렴구균과 대상포진 백신을 맞지 않았고 마지막 파상풍 추가접종은 6년 전, 독감 백신은 2년 전이었다. 가장 적절한 권고는 무엇인가?

## 선택지

A. 대장내시경
B. 인플루엔자 백신
C. 파상풍 백신
D. 대상포진 백신

## 해설

대상포진 백신을 한 번도 받지 않은 62세 성인에게는 재조합 대상포진 백신 2회 접종(D)이 권장되며 특정 계절을 기다릴 필요가 없다. 인플루엔자 백신은 매년 필요하므로 2년 전 접종이 현재의 예방을 대신하지 않으며, 미국의 통상적인 접종은 가을 유행 시즌을 앞두고 계획한다. 파상풍 정기 추가 접종은 일반적으로 10년 간격이고, 현재 오염 상처가 제시되지 않았다. 실제 진료에서는 연령에 따른 폐렴구균 등 다른 미접종 백신도 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대상포진 백신 D는 유지하되 2년 전 인플루엔자 접종이 최근 접종이어서 불필요하다는 오류를 교정한다.
- 공식/학회 근거: https://www.cdc.gov/vaccines/vpd/shingles/hcp/index.html
- 공식/학회 근거: https://www.cdc.gov/flu/vaccines/keyfacts.html
- 공식/학회 근거: https://www.cdc.gov/vaccines/hcp/current-vis/tdap.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009543
