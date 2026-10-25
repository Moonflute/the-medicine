---
type: qbank
schema_version: 1
id: medqa-us-train-006799
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a3a1a79067dbaf2cc3c3172df50d116dada17774668b979490fea7de241eed7
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세뇨관간질신염"
  - "비스테로이드성 소염제 유발"
  - "호산구뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
question_type: diagnosis
difficulty: complex
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "간질성 사구체신염이라는 혼합 용어를 교정하고 호산구뇨의 한계 명시."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

67세 남성이 오늘 아침부터 두 차례 붉은 소변을 보아 응급실에 내원했다. 배뇨통은 없지만 요통과 발열이 있다. 6개월 전 오른쪽 무릎 골관절염을 진단받아 매일 이부프로펜 1~2정을 복용한다. 45년 동안 하루 한 갑을 피웠고 술은 마시지 않는다. 체온은 38.5°C(101.3°F), 맥박은 분당 95회, 혈압은 130/80 mm Hg이다. 희미한 미만성 반구진 발진과 양쪽 옆구리 통증이 있고 그 외 진찰은 정상이다. 소변검사에서 혈액 3+, 단백 1+, 적혈구 10~12/고배율시야, 적혈구 원주 음성, 호산구 다수가 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 급성 세뇨관간질신염
B. 급성 사구체신염
C. 신세포암
D. 급성 세뇨관 괴사

## 해설

NSAID 노출 뒤 발열·발진·호산구뇨의 조합은 선택지 중 약물 관련 급성 세뇨관간질신염을 지지한다. 그러나 호산구뇨는 민감도·특이도가 낮아 단독 확진·배제 검사가 아니며 신기능·다른 원인과 필요한 생검을 종합한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006799

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 간질성 사구체신염이라는 혼합 용어를 교정하고 호산구뇨의 한계 명시.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/24052222/
