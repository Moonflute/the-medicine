---
type: qbank
schema_version: 1
id: medqa-us-train-005498
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a7f6764b52dd88b95fabb1d02db0fad2c86d40d339827c86298f5832d03af57
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요독성 심낭염"
  - "혈액투석 누락"
  - "심낭 마찰음"
  - "Uremic pericarditis"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: mechanism
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "장기 투석자의 투석 누락에 따른 요독성/투석 관련 심낭염을 과도한 빈도 단정 없이 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

52세 여자가 3일 동안 호흡과 기침 시 악화되고 앉으면 호전되는 심한 흉골 뒤 통증으로 내원했다. 루푸스 신염으로 인한 만성콩팥병으로 혈액투석 중이나 최근 두 번 빠졌다. 심음 전체를 가리는 고음의 마찰음이 들리고 심장효소와 항DNA 항체는 정상이다. 다음 중 가장 가능성 높은 원인은?

## 선택지

A. 약물 부작용
B. 면역반응에 의한 장막염
C. 심근 분절 경색
D. 질소성 노폐물의 혈청 농도 상승

## 해설

호흡·기침 때 악화되고 앉으면 호전되는 흉통과 심낭 마찰음은 심낭염을 시사한다. 장기 혈액투석 중 최근 투석을 빠진 맥락에서는 불충분한 노폐물 제거에 연관된 투석 관련 심낭염이 가장 적합하다. Anti-DNA·심장효소 등의 자료를 함께 보되 이 검사 하나만으로 다른 원인을 절대 배제하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005498

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 장기 투석자의 투석 누락에 따른 요독성/투석 관련 심낭염을 과도한 빈도 단정 없이 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
