---
type: qbank
schema_version: 1
id: medqa-us-train-003318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aacc18d85ca32c4e718711b69b198a1bcad8891b4e5f853efb3f695ab9575259
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "multiple endocrine neoplasia type 2A"
  - "pheochromocytoma"
  - "medullary thyroid carcinoma"
  - "autosomal dominant inheritance"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: risk_factor
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 두통 발작, 고혈압, 두근거림으로 내분비내과에 의뢰되었다. 갑상샘암 가족력이 있고 갑상샘 우엽에 2.5 cm 결절이 만져진다. 혈장 유리 메타네프린은 상승, TSH는 정상이며 갑상샘 결절의 세침흡인에서 칼시토닌 양성이다. 내분비내과 의사는 유전증후군을 의심한다. 가장 가능성 높은 유전 양식은?

## 선택지

A. 상염색체 우성
B. 상염색체 열성
C. 미토콘드리아
D. X연관 우성

## 해설

Calcitonin 양성 갑상샘 수질암과 metanephrine 상승의 pheochromocytoma 조합은 RET 관련 MEN2를 시사하며 상염색체우성 A로 유전된다. MEN2A에서는 부갑상샘질환, MEN2B에서는 점막신경종 등 아형별 소견이 다르다. 누락된 외형 사진 없이 아형을 확정하지 않아도 공통 유전양식 A는 결정할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 핵심 이미지 없어도 MTC+pheo의 MEN2 상염색체우성 A는 판단 가능; 아형2A를 이미지 없이 강제한 설명 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003318
