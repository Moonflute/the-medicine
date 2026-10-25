---
type: qbank
schema_version: 1
id: medqa-us-train-002022
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6ce9b70db5e4ec1bace7ff3cdfda9a824981353feb1a13f8afeb35f4f7986638
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "secondary hyperparathyroidism"
  - "chronic kidney disease"
  - "phosphate retention"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: mechanism
difficulty: simple
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

58세 백인 여성이 제2형 당뇨병과 3A기 만성콩팥병으로 연례 검진을 받는다. 추정 GFR은 이전과 변하지 않았지만 부갑상선 호르몬이 중등도로 상승했다. 다음 중 이 새로운 소견을 설명하는 것은 무엇인가?

## 선택지

A. 인산염 저류
B. 고요산혈증
C. 고칼슘혈증
D. 요독증

## 해설

CKD에서는 인산 배설 능력이 줄어 인산 저류가 생기고, 활성 비타민 D 감소 등과 함께 이차성 PTH 상승을 자극할 수 있다(A). 초기에는 PTH·FGF23 등의 보상으로 혈청 인이 정상 범위에 남아 있어도 체내 인산 처리 부담은 증가할 수 있다. 배설 감소가 직접 혈청 인 감소를 일으킨다는 설명은 반대다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 인산 배설 감소→혈청인 감소라는 반대 기전 교정 및 초기 CKD에서 혈청P가 정상일 수 있음을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002022
