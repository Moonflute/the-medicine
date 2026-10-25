---
type: qbank
schema_version: 1
id: medqa-us-train-009200
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6c89b832ef290acf7fbe311d950a254d902c2f48b007a911d9837c6575d7a73
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "thrombosed external hemorrhoid"
  - "혈전성 외치핵"
  - "external hemorrhoid"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_smbjsuZjtlbUgKEV4dGVybmFsIEhlbW9ycmhvaWQpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 남자가 2시간 전 시작된 심한 항문 통증으로 내원했다. 만성 변비와 직장 가려움증 병력이 있으나 그 외 과거력은 특이사항이 없고 약물도 복용하지 않는다. 활력징후는 정상이다. 통증이 극심하여 국소마취하에 직장 진찰을 시행했으며 항문 주위에 만져지는 종괴가 있다. 피부꼬리나 항문관을 통한 점막 탈출은 없다. 가장 적절한 즉시 처치는 무엇인가?

## 선택지

A. 타원형 절제
B. 절개 및 배농
C. 고무밴드 결찰
D. 경화요법

## 해설


정답 A. 발병 2시간의 급성 통증성 항문주위 종괴는 혈전성 외치핵을 시사한다. 통증이 심한 선별 환자에서는 혈전을 포함한 병변의 타원형 절제가 빠른 증상 완화에 도움이 될 수 있다. 모든 외치핵이 수술 대상인 것은 아니며 증상 정도와 발병 시점, 환자 선호를 고려한다. 치열이나 농양의 진찰 소견과 구분해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009200 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 갑작스러운 통증성 항문주위 종괴의 혈전성 외치핵 조기 절제 취지 유지; 생존 혈전이라는 잘못된 표현 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/2024-Hemorrhoids-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009200
