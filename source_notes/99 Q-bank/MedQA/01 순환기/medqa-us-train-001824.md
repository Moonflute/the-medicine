---
type: qbank
schema_version: 1
id: medqa-us-train-001824
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5ea7fe4b746373587a1508374d5cc4d5fa49a7d388ec576ba8861e1dcb08589
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "stable angina"
  - "beta blocker"
  - "secondary prevention"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFub2xhemluZS5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 동등하게 가능한 BB·CCB 선택지를 통합하여 복수정답 교정."
curation_status: "revised"
curation_reason: "동등하게 가능한 BB·CCB 선택지를 통합하여 복수정답 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

73세 남성이 관상동맥질환으로 추적 중이다. 평소 계단을 오를 때만 가슴이 조이고 쉬면 수분 내 호전된다. 아스피린과 스타틴을 복용 중이다. 심부전, 서맥이나 방실차단은 없다. 일상에서 반복되는 협심증을 줄이기 위한 첫 약으로 적절한 것은?

## 선택지

A. 경구 메토프롤롤
B. 경구 아픽사반
C. 경구 푸로세미드
D. 경구 디곡신

## 해설

안정형 협심증의 증상 조절에는 환자의 혈압, 맥박과 동반질환에 맞춰 베타차단제 또는 칼슘통로차단제를 선택한다. 보기 중 베타차단제인 메토프롤롤이 적절하다. 스타틴과 항혈소판제는 별도의 심혈관 사건 예방 치료이며 증상 조절제를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 동등하게 가능한 BB·CCB 선택지를 통합하여 복수정답 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.04.003

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001824
- https://doi.org/10.1093/eurheartj/ehae177

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
