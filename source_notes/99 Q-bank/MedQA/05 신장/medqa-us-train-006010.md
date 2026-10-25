---
type: qbank
schema_version: 1
id: medqa-us-train-006010
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7008ccbd69989efc24b2af5285cc86b201c08bccd3cece91d6677fa2e8e8096
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요독성 혈소판 기능장애"
  - "만성 신장질환"
  - "위장관 출혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsnqXqtIAg7Lac7ZiILm1k
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: mechanism
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
curation_status: "revised"
curation_reason: "109,000인 혈소판을 정상이라고 바꾼 해설을 실제 수치에 맞춰 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

75세 남성이 3일 동안 지속된 피로와 검고 끈적한 변으로 응급실에 왔다. 오심과 지난 한 달 동안 2kg(4.4lb) 체중 감소도 있다. 다낭성 신장질환, 고혈압 및 고지혈증 병력이 있다. 흡연과 음주는 하지 않고 히드로클로로티아지드, 푸로세미드, 발사르탄 및 아토르바스타틴을 복용한다. 마르고 피곤해 보이며 결막이 창백하고 상지 폄면에 긁힌 자국이 많다. 복부검사는 정상이고 양쪽 손목을 굽히면 퍼덕떨림이 보인다. 혈색소 8.5 g/dL, 혈소판 109,000/mm³, MCV 81 μm³, PT 11초, aPTT 34초, 크레아티닌 6.1 mg/dL이다. 다음 중 현재 상태의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 유전성 항트롬빈 결핍
B. 혈소판 응집 기능 장애
C. 후천성 VII인자 결핍
D. 트롬보포이에틴 생성 장애

## 해설

진행한 신부전과 요독 증상에서 혈소판 부착·응집 기능 장애가 출혈 경향을 설명한다. 이 환자의 혈소판은 109,000/mm³로 정상은 아니지만 응고 시간은 뚜렷하게 연장되지 않았다. 요독성 기능 장애와 수적 감소를 구분하며 흑색변 자체의 출혈 원인·중증도 평가도 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006010

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 109,000인 혈소판을 정상이라고 바꾼 해설을 실제 수치에 맞춰 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
