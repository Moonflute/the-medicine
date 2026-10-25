---
type: qbank
schema_version: 1
id: medqa-us-train-008501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d5dc41b446856a60231e6431526b2fd854bf46b2d21e3e3f233366f30c6262e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperosmolar hyperglycemic state"
  - "type 2 diabetes mellitus"
  - "hyperglycemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

65세 여성이 10시간 동안 지속된 흐린 시야로 응급실에 내원했다. 4일 전부터 소변이 급하고 배뇨 시 불편감도 있었다. 어제부터 점점 쇠약하고 메스꺼웠다. 제2형 당뇨병과 동맥성 고혈압이 있다. 1년 전 눈 감염으로 치료받았다. 일주일에 와인 2~3잔을 마신다. 현재 캅토프릴, 메토프롤롤, 메트포르민, 인슐린을 복용한다. 체온 37.5°C(99.5°F), 맥박 107회/분, 혈압 95/70mmHg이다. 양쪽 시력이 감소되어 있고 동공은 동일하며 빛에 반응한다. 각막반사는 활발하다. 구강 점막은 건조하다. 복부는 부드럽고 팽만되지 않았다. 심폐검사는 정상이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 허혈성 시신경병증
B. 저혈당
C. 후포도막염
D. 고삼투압성 고혈당 상태

## 해설


정답 D. 제2형 당뇨병 환자에서 요로감염 의심 증상 후 쇠약·오심, 빈맥·저혈압과 건조한 점막은 감염에 의해 유발된 고삼투압성 고혈당 상태를 의심하게 한다. 심한 고혈당은 양안 시야 흐림을 동반할 수 있다. 다만 혈당·삼투질농도·케톤/산염기 검사가 제시되지 않아 HHS가 확진된 것은 아니며 저혈당도 즉시 혈당 측정으로 감별한다. 본문에 없는 발한·떨림·의식저하를 저혈당 증거로 덧붙이지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008501 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 D와 다른 저혈당 해설을 사례에 맞춘 HHS 의심 설명으로 교체; 본문에 없는 저혈당 소견·검사값 추가 금지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/11343900/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008501
