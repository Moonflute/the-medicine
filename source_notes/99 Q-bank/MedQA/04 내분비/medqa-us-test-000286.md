---
type: qbank
schema_version: 1
id: medqa-us-test-000286
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3e1ab693b069083601578d03988e1e6b8b62cb38ad9ddf2fdb5ae048d5a5902e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 부신기능부전"
  - "애디슨병"
  - "부신피질 호르몬 결핍"
related_disease_slugs:
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadKFByaW1hcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9GbHVkcm9jb3J0aXNvbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0h5ZHJvY29ydGlzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "안정된 외래 의심 사례에는 가능한 경우 ACTH 자극검사로 확인한다는 Endocrine Society 권고에 따라 미확진 상태의 장기 병용 보충치료 C보다 D가 적절."
---

# MedQA US 임상문제

## 문제

30세 남성이 수개월간 피로와 체중 감소, 피부 색소 침착을 보인다. 아침 코르티솔은 낮고 ACTH는 높다. 혈압은 안정적이고 구토·의식 변화는 없다. 부신의 코르티솔 생성 능력을 확인할 검사는?

## 선택지

A. 저용량 덱사메타손 억제검사
B. 24시간 소변 유리 코르티솔
C. 뇌하수체 MRI 단독
D. 코신트로핀 자극검사

## 해설

안정적인 환자는 코신트로핀 투여 전후의 코르티솔 반응으로 부신기능저하를 평가할 수 있다. 쇼크가 있는 부신위기에서는 이 검사를 기다리지 않고 먼저 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 위기나 쇼크가 아닌 안정된 외래 부신기능저하 의심 환자이므로 확진 ACTH 자극검사 D로 원정답 C 변경.
- https://www.endocrine.org/-/media/endocrine/files/cpg/primary-adrenal-insufficiency-cpg-resource-page-13feb18.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000286
- https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency
