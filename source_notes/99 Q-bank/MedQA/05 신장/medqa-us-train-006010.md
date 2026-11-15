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
answer: B
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

진행된 만성콩팥병 환자가 잇몸 출혈과 잦은 코피가 있다. 혈소판 수는 정상이고 PT와 aPTT도 정상이다. 항응고제는 복용하지 않고 요독 증상이 있다. 가장 가능성 높은 출혈 기전은?

## 선택지

A. 혈장 응고인자 VIII 결핍
B. 요독에 의한 혈소판 부착·응집 기능 이상
C. 혈소판 수가 줄어드는 면역성 파괴
D. 비타민 K 의존 응고인자 생성 장애

## 해설

요독은 혈소판의 부착과 응집을 방해하므로 혈소판 수와 응고 시간이 정상이어도 점막 출혈이 발생할 수 있다. 출혈 환자에서는 국소 원인과 복용 약물도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006010
- https://kdigo.org/guidelines/ckd-evaluation-and-management/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 109,000인 혈소판을 정상이라고 바꾼 해설을 실제 수치에 맞춰 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
