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
question_type: investigation
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

17세 여성이 월경 간격이 길고 여드름과 굵은 털이 늘었다. 임신검사는 음성이고, 아침 난포기에 측정한 기본 17-하이드록시프로게스테론이 경계 수준으로 높다. 비고전적 선천성 부신과형성을 확인할 다음 검사는?

## 선택지

A. 저용량 덱사메타손 억제검사
B. 수분제한 검사
C. 코신트로핀 자극 뒤 부신 스테로이드 측정
D. 24시간 소변 유리 코르티솔

## 해설

다모증과 희발월경만으로 다낭난소증후군과 비고전적 21-수산화효소 결핍을 구별할 수 없다. 기저 17-하이드록시프로게스테론이 경계에 있으면 코신트로핀 자극 뒤 스테로이드 반응을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 21-hydroxylase 결핍의 고androgen 소견을 낮은 testosterone·여성화로 설명한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004975
- https://doi.org/10.1210/jc.2018-01865
