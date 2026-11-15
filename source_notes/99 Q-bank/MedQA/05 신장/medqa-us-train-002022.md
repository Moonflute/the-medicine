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
question_type: management
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

투석하지 않는 3b기 만성콩팥병 환자의 온전한 PTH가 세 차례에 걸쳐 상승했다. 교정 칼슘은 낮은 정상 범위이고 인과 비타민 D 상태는 최근 검사하지 않았다. 다음으로 할 조치는?

## 선택지

A. 칼슘·인·25-하이드록시비타민 D와 인 섭취를 확인하고 교정 가능한 원인을 관리한다
B. PTH 상승만으로 고용량 칼시트리올을 시작한다
C. 부갑상선절제술을 바로 의뢰한다
D. 칼슘·인 수치와 관계없이 시나칼세트를 시작한다

## 해설

비투석 만성콩팥병에서 PTH가 지속적으로 오르면 인 부담, 저칼슘, 비타민 D 결핍 등 교정 가능한 원인을 먼저 평가한다. 칼시트리올을 모든 비투석 환자에게 일률적으로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 인산 배설 감소→혈청인 감소라는 반대 기전 교정 및 초기 CKD에서 혈청P가 정상일 수 있음을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002022
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6340919/
