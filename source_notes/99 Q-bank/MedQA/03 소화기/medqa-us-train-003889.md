---
type: qbank
schema_version: 1
id: medqa-us-train-003889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6287a44e027ba22d5afec9ff633d61639519e8d9487521a206f42a615c3bbe3c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatorenal syndrome"
  - "end-stage liver disease"
  - "oliguria"
  - "liver transplantation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsi6Ag7Kad7ZuE6rWwIChIZXBhdG9yZW5hbCBTeW5kcm9tZSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

알코올성 간경변으로 말기 간질환이 있는 54세 남성이 소변량 감소와 하지 부종으로 내원했다. 복수와 간성뇌증 병력이 있고 알부민을 투여했지만 크레아티닌이 상승하며 핍뇨가 지속되었다. 다음 중 상태의 가장 확실한 치료는?

## 선택지

A. 복막정맥 단락술
B. 경경정맥 간내 문맥전신 단락술
C. 간이식
D. 혈액투석

## 해설

간경변·복수와 albumin 투여 후에도 악화하는 신기능은 HRS-AKI를 의심하게 한다. 감염·쇼크·저혈량·약물·다른 신장병 등을 평가해야 하며, 간이식 C가 적합 환자의 근본치료이다. 혈관수축제/albumin·신대체요법은 상황에 따라 가교로 활용한다. 단백뇨성 nephrotic syndrome인 신증후군과 다른 상태이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HRS를 신증후군으로 잘못 명명. 간이식 C는 근본치료이며 이식평가까지 AKI 원인·가교치료 별도.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11193657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003889
