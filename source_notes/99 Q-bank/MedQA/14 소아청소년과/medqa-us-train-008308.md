---
type: qbank
schema_version: 1
id: medqa-us-train-008308
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19fd2bbc6660d20a753a1395febc858e546fd0fc7acd2a8476aac797e67a1535
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "infant botulism"
  - "botulinum toxin"
  - "neuromuscular junction blockade"
  - "botulism"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uztO2ItOumrOuIlCDspJHrj4UgKEJvdHVsaXNtKS5tZA
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 영아 보툴리즘의 포자 섭취·장내 독소 생성 기전 교정."
curation_status: "revised"
curation_reason: "영아 보툴리즘의 포자 섭취·장내 독소 생성 기전 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

8개월 남아가 수유 곤란으로 내원했다. 어제 아침부터 먹지 않고 머리를 가누기 어렵고 축 늘어져 보인다. 모유만 먹이다가 최근 퓌레를 도입했다. 3일 전 정상적인 배변을 했고 최근 중이염을 앓았다. 부모가 종교적 이유로 예방접종을 하지 않았으며 한약 보충제를 먹인다. 체온 37.0°C(98.6°F), 혈압 85/45 mm Hg, 맥박 140회/분, 호흡수 31회/분, 산소포화도 99%이다. 기면, 침흘림, 전신 이완성 근긴장, 양측 안검하수, 느린 동공반사가 있다. 이 상태의 병태생리를 가장 잘 설명하는 것은?

## 선택지

A. 아세틸콜린 수용체에 대한 자가항체
B. 수막의 세균 감염
C. 섭취한 Clostridium botulinum 포자가 장내에서 정착해 독소를 생성한다
D. Haemophilus influenzae 감염

## 해설

변비, 수유 저하, 안검하수와 이완성 약화는 영아 보툴리즘을 시사한다. 영아에서는 섭취한 C. botulinum 포자가 장내에 정착하고 독소를 생산해 신경근접합부의 acetylcholine 방출을 억제한다. 미리 생성된 독소를 먹는 전형적 식품매개 보툴리즘과 구분한다. 예방접종을 하지 않았다는 사실만으로 Hib 감염을 정답으로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 영아 보툴리즘의 포자 섭취·장내 독소 생성 기전 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/botulism/hcp/clinical-overview/infant-botulism.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008308

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
