---
type: qbank
schema_version: 1
id: medqa-us-train-009552
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c38a96a1d9b9bd78858506fbf5459614ff84d7eed92dcb81863fefac22712429
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "congenital adrenal hyperplasia"
  - "선천성 부신과형성"
  - "21-hydroxylase deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
question_type: mechanism
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14세 여아가 윗입술과 볼에 털이 많이 자라고 가슴에도 듬성듬성 털이 있으며 아직 월경을 시작하지 않아 어머니와 내원했다. 만삭 정상 질식분만으로 태어났고 발달은 정상이다. 키는 55백분위수, 혈압 90/50 mmHg, 맥박 75회/분, 호흡수 15회/분이다. 윗입술과 볼에 가늘고 검은 털, 얼굴과 어깨에 농포성 여드름, 초기 유방 발달, 굵은 목소리가 있다. 가장 가능성 높은 결핍 효소는 무엇인가?

## 선택지

A. 11-β-하이드록실화효소
B. 17-α-하이드록실화효소
C. 21-하이드록실화효소
D. 5-α-환원효소

## 해설


정답 C. 다모증·여드름·굵은 목소리는 androgen 과다에 의한 남성화를 시사한다. 고혈압이 없는 이 여아에서 선택지 중 21-hydroxylase 결핍이 가장 부합하며 비고전형 CAH 등을 평가한다. 14세의 초기 유방 발달 자체가 조기사춘기라는 뜻은 아니다. 실제 진단에는 17-hydroxyprogesterone 등 호르몬 평가가 필요하며 11β 결핍의 mineralocorticoid성 고혈압과 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009552 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 14세의 유방 발달을 조기사춘기라고 한 오류 제거. 저혈압성 androgen과다의 21OH C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009552
