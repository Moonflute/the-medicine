---
type: qbank
schema_version: 1
id: medqa-us-train-004025
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21e14e034e44ae1325bfa9976c6bc8582f617dbad76b421c5536b64e21887e3b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "내치핵"
  - "치질"
  - "직장 출혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rgrTsuZjtlbUgKEludGVybmFsIEhlbW9ycmhvaWQpLm1k
question_type: 임상증례 객관식
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남자가 3개월간 지속된 통증 없는 직장 출혈로 내원했다. 간헐적으로 배변 후 휴지에 선홍색 피가 묻고 대변과 섞이지 않은 피가 보인다. 때때로 변기에 소량의 피가 떨어지며 힘을 주는 것과 관련 있다고 한다. 지난 2주 동안 배변할 때 항문에 불편한 덩어리가 느껴졌지만 직후 저절로 사라졌다. 복통, 체중 감소, 발열은 없다. 약간 비만하지만 전반적으로 건강해 보인다. 직장수지검사 후 장갑에 선홍색 피가 묻고, 항문경검사에서 치상선 위에 커진 혈관이 보인다. 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 1도 외치핵
B. 2도 외치핵
C. 2도 내치핵
D. 3도 외치핵

## 해설

치상선 위의 혈관 확장과 배변 시 탈출했다가 저절로 환원되는 종괴는 2도 내치핵 C이다. 1도는 탈출 없고 3도는 수동환원이 필요하다. 외치핵은 특히 혈전성일 때 통증이 심하지만 모든 외치핵이 아픈 것은 아니다. 출혈의 다른 원인 평가는 별도이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 2도 내치핵 C의 결정근거는 자발환원 탈출. 모든 외치핵 통증이라는 오설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004025
