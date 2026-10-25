---
type: qbank
schema_version: 1
id: medqa-us-train-004975
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12cd68e7f36af54639fdd1f358c5ed71770b39438bc7a53cf0f0a5d8c076f08c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "비고전적 선천성 부신과형성"
  - "21-수산화효소 결핍"
  - "고안드로겐혈증"
  - "nonclassic congenital adrenal hyperplasia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 여자가 건강검진을 받으러 왔다. 학업과 운동을 잘하고 과거 소아 비만은 식이와 운동으로 치료되었다. 월경은 1~3개월마다 불규칙하게 발생한다. 얼굴, 어깨, 가슴에 여드름이 있고 윗입술과 가슴에 굵고 검은 털이 있다. 혈청 테스토스테론은 82 ng/dL, 17-하이드록시프로게스테론은 상승되어 있다. 다음 중 가장 가능성 높은 진단과 관련된 소견은?

## 선택지

A. 11-수산화효소 결핍
B. 17-수산화효소 결핍
C. 21-수산화효소 결핍
D. 악성 종양

## 해설

희발월경·여드름·다모증과 상승한 testosterone 및 17-hydroxyprogesterone은 비고전형 21-hydroxylase 결핍 C를 시사한다. Cortisol 합성 경로 장애로 androgen 쪽 합성이 증가해 남성화/고androgen 증상이 나타나는 것이지 testosterone 저하나 여성화가 원인이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 21-hydroxylase 결핍의 고androgen 소견을 낮은 testosterone·여성화로 설명한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004975
