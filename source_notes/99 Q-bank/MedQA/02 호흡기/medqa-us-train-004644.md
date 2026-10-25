---
type: qbank
schema_version: 1
id: medqa-us-train-004644
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25accc1b88f4728d73e54b0983a53e1a6a7ee4256c43f2f6dc732144310c9e28
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "마이코플라스마 폐렴"
  - "비정형 폐렴"
  - "Mycoplasma pneumoniae"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uniOydtOy9lO2UjOudvOyKpOuniCDtj5DroLQgKE15Y29wbGFzbWEgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-u5hOygle2YlSDtj5DroLQgKEF0eXBpY2FsIFBuZXVtb25pYSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

10세 남아가 만성 기침으로 진료실에 왔다. 어머니는 2주 동안 가래가 나오지 않는 기침과 경구 체온계로 측정한 100.5°F의 미열이 있었다고 한다. 다른 병력은 없고 몇 주 동안 같은 기침을 하던 친구 한 명과 접촉했다고 한다. 활력징후는 체온 100.7°F를 제외하면 정상이다. 흉부 방사선사진에서 미만성 간질성 침윤이 보인다. 이 폐렴을 일으킨 가능성이 가장 높은 병원체는 무엇인가?

## 선택지

A. Mycoplasma pneumoniae
B. 황색포도상구균
C. 폐렴사슬알균
D. B군 사슬알균

## 해설


청소년에서 미열, 비생산성 기침, 미만성 간질성 침윤은 비정형 폐렴을 특징으로 하며, 가장 흔한 원인균이 Mycoplasma pneumoniae이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 학령기 집단접촉·마른기침·간질성 침윤은 Mycoplasma A와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004644
