---
type: qbank
schema_version: 1
id: medqa-us-validation-001250
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1e98a9a58672c0eb40d902ffecac8d344c6ae5057f150119176e7da0b2f890db
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "니트로글리세린"
  - "전부하 감소"
  - "협심증"
  - "Acute coronary syndrome"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 한 시간 전 시작되어 호전되지 않는 흉통으로 응급실에 왔다. 경정맥 팽창과 양측 하지 함요부종이 있고 니트로글리세린 투여 후 흉통이 호전되었다. 증상 호전의 가장 적절한 설명은?

## 선택지

A. 관상동맥 혈관확장
B. 교감신경 활성 감소
C. 뮤 수용체 작용
D. 전부하 감소

## 해설

니트로글리세린은 정맥을 확장하여 정맥환류와 심실 전부하를 줄인다. 이에 따라 심실벽 응력과 심근 산소요구량이 감소하므로 D가 증상 호전의 대표 기전이다. 전부하는 전압 부하라는 뜻이 아니며, 통증이 질산염에 반응했다는 사실만으로 관상동맥질환을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전부하를 전압 부하로 오역한 표현을 정맥환류·벽응력 감소로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001250
