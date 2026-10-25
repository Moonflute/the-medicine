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
question_type: management
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

30세 남성이 수주 동안 지속된 심한 피로와 쇠약으로 일차 진료를 받으러 왔다. 같은 기간 복통과 변비도 있었고, 지난 2주 동안 체중이 8파운드 감소했다. 과거력과 가족력에는 특이사항이 없다. 체온 37.3°C(99.2°F), 호흡 21회/분, 맥박 63회/분, 혈압 99/70 mmHg였다. 진찰에서 피곤해 보이고 마른 체형이었으며 피부가 청동색으로 변색되어 있었다. 햇빛에 노출되거나 태닝 베드에 누운 적은 없다고 한다. 다음 중 가장 적절한 처치는?

## 선택지

A. 정맥 플루드로코르티손 투여
B. 안드로겐 대체요법 시작
C. 히드로코르티손과 플루드로코르티손을 모두 시작
D. ACTH 자극검사 시행

## 해설

정답은 D이다. 수주간의 쇠약·체중 감소·색소침착과 낮은 혈압은 일차 부신기능저하증을 의심하게 한다. 그러나 의식저하·쇼크·지속 구토 등 부신위기를 시사하는 급성 중증 소견이 제시되지 않았으므로 가능한 상황에서 cortisol/ACTH를 평가하고 ACTH 자극검사로 확진한다. 확진된 일차 부신기능저하증에는 glucocorticoid와 필요 시 mineralocorticoid를 보충한다. 위기가 의심되면 검사 결과를 기다리지 않고 hydrocortisone과 수액을 즉시 투여해야 하며 이 예외를 안정된 외래 사례와 혼동하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 위기나 쇼크가 아닌 안정된 외래 부신기능저하 의심 환자이므로 확진 ACTH 자극검사 D로 원정답 C 변경.
- https://www.endocrine.org/-/media/endocrine/files/cpg/primary-adrenal-insufficiency-cpg-resource-page-13feb18.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000286
