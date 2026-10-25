---
type: qbank
schema_version: 1
id: medqa-us-train-004129
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2597a7f485e142b90af8021b281e57b94d0761e135789814195c68d519728a1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 응급"
  - "고혈압성 망막병증"
  - "니트로프루시드"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
question_type: 임상증례 객관식
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 고혈압성 뇌병증의 정주약과 강압 속도 설명 교정."
curation_status: "revised"
curation_reason: "고혈압성 뇌병증의 정주약과 강압 속도 설명 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

44세 남자가 3시간 전부터 지속된 심한 두통과 흐린 시야로 응급실에 왔다. 히드로클로로티아지드로 고혈압을 치료하지만 여행으로 지난 일주일간 약을 복용하지 않았다. 시간과 사람만 지남력이 있다. 체온 37.1°C, 맥박 92회/분으로 규칙적이고 혈압 245/115 mmHg이다. 심폐검사는 정상이며 안저검사에서 양측 망막출혈과 삼출물이 보인다. 신경학적 검사에서 국소 소견은 없다. 혈구검사와 전해질, 포도당, 크레아티닌은 정상이고 뇌 CT도 정상이다. 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 감시하 정맥 니카르디핀으로 조절하며 혈압을 단계적으로 낮춘다
B. 경구 캅토프릴 투여 후 즉시 귀가시킨다
C. 정맥 만니톨만 투여한다
D. 경구 클로니딘 투여 후 즉시 귀가시킨다

## 해설

심한 고혈압에 의식 변화와 망막출혈이 동반되어 고혈압 응급상황이다. 정상 CT도 고혈압성 뇌병증을 배제하지 않는다. 지속 감시하에 조절 가능한 정주 항고혈압제로 단계적으로 낮춰야 하며, 즉시 정상혈압까지 떨어뜨리면 관류를 해칠 수 있다. Nicardipine은 이런 상황에 사용할 수 있다. 경구약만 주고 퇴원하거나 뇌압 상승 근거 없이 mannitol만 쓰는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 고혈압성 뇌병증의 정주약과 강압 속도 설명 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004129

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
