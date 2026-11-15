---
type: qbank
schema_version: 1
id: medqa-us-train-004216
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea62979e64aafe68c3c3385820b85ae9399a958c343955a4463c2276609e6bca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "덤핑증후군"
  - "위절제술 후 증후군"
  - "식후 설사"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_ruaDrpbgg67mE7JuAIOymne2bhOq1sCAoRHVtcGluZyBTeW5kcm9tZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snIQg7KCI7KCcIOu2gOyekeyaqS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 위암으로 원위부 위절제술을 받은 뒤 식후 15–20분마다 복통, 설사, 두근거림과 식은땀을 겪는다. 평소에는 증상이 없다. 조기 덤핑증후군으로 판단했을 때 첫 치료는?

## 선택지

A. 한 번에 많이 먹고 식사 중 물을 충분히 마신다
B. 옥트레오타이드 주사부터 시작한다
C. 메트로니다졸을 경험적으로 투여한다
D. 소량씩 자주 먹고 단순당을 줄이며 물은 식사와 나눠 마신다

## 해설

위절제술 뒤 음식이 소장에 빠르게 도달하면 식후 수십 분 이내에 장 증상과 혈관운동 증상이 나타날 수 있다. 조기 덤핑증후군의 일차 치료는 식사량·구성과 수분 섭취 시각을 조정하는 것이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안검염 해설을 위절제 후 조기 덤핑증후군 및 우선 식이조절 설명으로 교체. 원정답 D 유지.
- https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome/treatment
- https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome/eating-diet-nutrition

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004216
- https://www.nature.com/articles/s41574-020-0357-5
