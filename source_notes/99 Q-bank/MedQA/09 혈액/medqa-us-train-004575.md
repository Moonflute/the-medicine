---
type: qbank
schema_version: 1
id: medqa-us-train-004575
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5acbc404e59c591951fcbf030e61327a7af19307445c8764a433e114f9d3ee59
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "면역성 혈소판감소성 자반증"
  - "소아 ITP"
  - "바이러스 감염 후 혈소판감소증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
question_type: management
difficulty: complex
answer: D
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

5세 남아가 3주 동안 멍이 늘어나 어머니와 함께 내원했다. 지난주에는 코피가 두 번 났지만 몇 분 안에 저절로 멎었다. 만삭으로 태어났고 5주 전 치료 없이 호전된 위장염을 앓은 것 외에는 건강했다. 키는 48백분위수, 체중은 43백분위수이다. 건강하고 영양 상태가 좋아 보인다. 체온은 36.5°C (97.7°F), 맥박은 분당 100회, 혈압은 100/65 mm Hg이다. 몸통과 등에 산발적인 점상출혈이 보인다. 그 외 신체검사에서는 이상이 없다. 검사 결과는 다음과 같다.
헤모글로빈 12.5 g/dL
평균 적혈구 용적 88 μm3
백혈구 9,000/mm3
혈소판 45,000/mm3
적혈구 분포 폭 14% (정상 13~15%)
혈액도말은 정상이다.
다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 항혈소판 항체 검사
B. 로미플로스팀 치료
C. 비장절제술
D. 관찰

## 해설


감염 후 단독 혈소판감소45,000/µL, 양호한 전신 상태와 경미하고 짧게 자가 소실된 코피는 소아 ITP에 합당하다. 현재 심한/지속 점막출혈이 없으므로 관찰 D와 출혈 교육·신속한 추적이 적절하다. 치료 여부는 혈소판 수 하나뿐 아니라 출혈·삶의 질·추적 가능성을 고려한다. 원문 수치를30,000미만이라고 바꾸지 않으며 romiplostim·비장절제술을 초기에 일률 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004575 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 혈소판45,000을30,000미만으로 바꾼 해설 교정; 출혈이 경미한 소아 ITP 관찰 D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004575
