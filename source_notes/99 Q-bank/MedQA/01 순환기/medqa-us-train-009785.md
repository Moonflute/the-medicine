---
type: qbank
schema_version: 1
id: medqa-us-train-009785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aaae4d8948289e7ce5757e714a0816347e0ad05a770dcd48c59df10750497b1e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "승모판 협착"
  - "류마티스성 심장질환"
  - "심방세동"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
question_type: diagnosis
difficulty: standard
answer: C
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

45세 여성이 지난 한 달 동안 누워 있을 때 발생하는 호흡곤란으로 내원했다. 이 기간에 피를 섞은 기침도 여러 차례 했다. 어릴 때 항생제로 치료받은 심장질환이 있었다고 한다. 5년 전 러시아에서 미국으로 이주했다. 중대한 질환의 가족력은 없다. 폐 진찰에서 양측 폐기저부 수포음이 들린다. 심장 진찰 소견이 제시되어 있다. 심전도는 빈맥과 P파 소실을 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 대동맥판 협착
B. 폐동맥판 협착
C. 승모판 협착
D. 대동맥판 역류

## 해설

어린 시절의 심장질환, 기좌호흡, 객혈, 폐울혈과 P파가 없는 빈맥은 류마티스성 승모판 협착에 동반한 좌심방 확장과 심방세동을 가장 시사하므로 C가 적합하다. 폐동맥판 협착은 이런 좌심방·폐정맥 울혈 양상을 잘 설명하지 못한다. 누락된 심장 진찰 자료를 임의로 판독하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C와 달리 폐동맥판 협착을 주장한 해설을 해당 류마티스성 승모판 협착 사례에 맞게 교체.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009785
