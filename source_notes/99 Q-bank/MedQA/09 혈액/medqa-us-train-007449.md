---
type: qbank
schema_version: 1
id: medqa-us-train-007449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac846c6a926c7fdbcb65fd27f52a717e31af3dbc43c8ed5c50c67e0506364b8c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 용혈성 수혈반응"
  - "ABO 부적합"
  - "제2형 세포독성 과민반응"
  - "수혈 쇼크"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDsmqntmIjshLEg7IiY7ZiIIOuwmOydkSAoQWN1dGUgSGVtb2x5dGljIFRyYW5zZnVzaW9uIFJlYWN0aW9uKS5tZA
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

43세 남자가 업무 중 사고로 양팔이 절단되어 응급실에 내원했다. 도착 전 상당한 출혈이 있었고 동맥 손상과 상처 오염으로 출혈 조절이 어렵다. 전혈구검사에서 헤모글로빈은 5.3 g/dL이다. 외상외과 전공의가 대량수혈 프로토콜을 시작하고 만능 공혈자라 설명하며 O형 음성 전혈을 주문했다. 입원 전에 O형 음성 혈액 6단위를 받았다. 이후 발열, 오한, 혈뇨, 폐부종이 발생했고 몇 시간 후 혈역학적 쇼크로 진행하여 혈압상승제가 필요했다. 다음 중 발생한 과민반응은 무엇인가?

## 선택지

A. 제1형 과민반응
B. 제2형 과민반응
C. 제3형 과민반응
D. 제4형 과민반응

## 해설


발열·오한·heme뇨와 쇼크는 급성 면역성 용혈 반응을 의심하게 하며 적혈구 표적 항원에 대한 항체/보체 매개 제II형 B에 해당한다. O형 음성은 적혈구 제제의 일반적 응급 호환 개념이고 전혈에는 anti-A/anti-B를 포함한 혈장이 있어 모든 수혈자에게 무조건 안전한 만능 제제라는 뜻은 아니다. 실제 원인은 환자/제제 확인·DAT·용혈 및 오염 평가로 구분하며 일률적 자가항체로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007449 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: O형 음성 전혈을 모두에 완전 안전한 universal donor로 부른 설명 보정; 급성 항체 매개 용혈 II형 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007449
