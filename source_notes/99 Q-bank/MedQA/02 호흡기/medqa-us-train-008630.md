---
type: qbank
schema_version: 1
id: medqa-us-train-008630
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de172508359f2f35c21d18746897580dbab04bc7c0ffa60e9d2bda55de4f42da
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "hospital-acquired pneumonia"
  - "sepsis"
  - "pleural effusion"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-yVheyEsSDtnYnsiJggKE1hbGlnbmFudCBQbGV1cmFsIEVmZnVzaW9uKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2MqO2YiOymnSAoTmVvbmF0YWwgU2Vwc2lzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9idXRhbWluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 수술로 입원한 지 5일째 발열, 저산소증과 새 폐침윤이 생겼다. 병원획득 폐렴으로 보고 배양을 채취했다. 최근 MRSA가 호흡기에서 분리됐고 병동 내 감수성 자료와 사망 위험을 검토해 세페핌을 경험적으로 시작하려 한다. MRSA를 함께 치료하기 위해 추가할 약제는?

## 선택지

A. 아지트로마이신
B. 암피실린
C. 반코마이신
D. 겐타마이신

## 해설

과거 MRSA 분리력이 있는 병원획득 폐렴에서는 초기 치료에 MRSA에 대한 항균 범위가 필요할 수 있다. 보기 중 반코마이신이 이에 해당한다. 세페핌은 MRSA를 치료하지 못한다. 경험적 치료 범위는 병동 내성 자료와 중증도에 맞추고 배양 결과가 확인되면 조정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 호산구 증가라는 없는 소견과 반코마이신의 그람음성 항균 범위 오류를 교정.
- https://www.idsociety.org/practice-guideline/hap_vap/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008630
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11704733/
