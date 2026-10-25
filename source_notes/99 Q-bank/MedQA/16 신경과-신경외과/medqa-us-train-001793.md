---
type: qbank
schema_version: 1
id: medqa-us-train-001793
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7a64b965deb8a7952d95b02563bfc188fc49feaaec347e8fd9bf23e6e5708b1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "myasthenia gravis"
  - "fatigable weakness"
  - "diplopia"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHspp0g6re866y066Cl7KadIChNeWFzdGhlbmlhIGdyYXZpcykubWQ
difficulty: complex
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

33세 여성이 쇠약감으로 응급실에 왔다. 하루가 끝날 무렵 스스로 돌보기 힘들 정도로 피로하고 힘이 빠진다고 하며 현재도 그렇다. 최근 여러 질환을 앓았고 여행, 하이킹과 캠핑을 했다. 체온 98.0°F (36.7°C), 혈압 124/84 mmHg, 맥박 82/min, 호흡 12/min, 산소포화도 98%이다. 상지 근력 2/5, 하지 근력 4/5이고 가벼운 복시가 있다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 근위축성 측삭경화증
B. Lambert-Eaton 증후군
C. 중증근무력증
D. 진드기 마비

## 해설

하루 말미에 악화되는 피로성 근력저하와 복시는 중증근무력증(C)을 가장 지지한다. 복시(diplopia)는 물체가 두 개로 보이는 증상이며 안구진탕(nystagmus)과 같은 뜻이 아니다. 신경근접합부의 자가면역 이상이 원인이며 대부분 AChR 항체가 관여하지만 MuSK 등 다른 표적도 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 복시를 안구진탕으로 혼동한 해설을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001793
