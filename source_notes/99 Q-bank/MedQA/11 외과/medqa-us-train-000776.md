---
type: qbank
schema_version: 1
id: medqa-us-train-000776
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b57e7300940d2c3018dca892834afb7172d73688b0bbe83e21cacacd7031209a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "acute cholecystitis"
  - "atrial fibrillation"
  - "necrotic small intestine"
  - "thromboembolism"
  - "superior mesenteric artery occlusion"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDUg7Iug7J6lL-yLoOuPmeunpSDtmIjsoITsg4nsoITspp0gKFJlbmFsIEFydGVyeSBUaHJvbWJvZW1ib2xpc20pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: ethics
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

환자가 담낭절제술에만 동의한 뒤 전신마취를 받았다. 수술 중 제거가 시급하지 않은 별개의 장 종괴를 우연히 발견했다. 출혈·폐색·천공은 없다. 적절한 대응은?

## 선택지

A. 예정 수술만 하고 회복 후 종괴 소견과 추가 검사·수술을 설명한다
B. 추가 동의 없이 장 절제까지 시행한다
C. 회복 후 알리지 않아도 되도록 종괴를 즉시 제거한다
D. 마취 중에는 수술 범위의 제한이 없다고 판단한다

## 해설


응급 예외는 지연하면 생명이나 신체에 중대한 위해가 예상될 때 적용한다. 지연해도 위험하지 않은 별도 수술은 추가 설명과 환자 동의 없이 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000776 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정답 B와 반대로 POA 동의 D를 권한 해설을 응급 수술 동의 예외로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000776
- https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1028255763
