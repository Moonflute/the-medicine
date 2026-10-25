---
type: qbank
schema_version: 1
id: medqa-us-train-000534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8320ced22be767bc50ef8278f3ea18ea75c56a44d6b7767390463df56d6d9356
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "myasthenia gravis"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHspp0g6re866y066Cl7KadIChNeWFzdGhlbmlhIGdyYXZpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 진행성 쇠약감으로 내원하였다. 지난 한 달 동안 집안일을 하거나 반려견을 산책시키는 데 어려움이 증가하는 것을 느꼈다. 때때로 저녁 식사를 준비하기에 너무 피곤하다고 느낀다. 잠을 자고 나면 상태가 호전되는 것을 느꼈다. 흉통, 호흡곤란, 최근 질병의 병력은 없다. 심각한 질병의 개인 병력은 없으며 복용 중인 약물도 없다. 25년 동안 매일 담배 두 갑을 피웠다. 환자는 피로해 보인다. 체온은 37°C, 맥박은 88회/분, 혈압은 148/80 mm Hg이다. 맥박 산소 측정기상 실내 공기에서 산소 포화도는 98%이다. 양측 폐 기저부에서 호기 시 천명음(wheezes)이 들린다. 검사상 상안검 하수(drooping of the upper eyelids)가 관찰된다. 상지의 근력이 감소되어 있다. 감각과 반사는 정상이다. 다음 중 어떤 작용 기전을 가진 치료가 가장 효과적일 가능성이 높은가?

## 선택지

A. 아세틸콜린에스테라제(acetylcholinesterase) 억제
B. B2 아드레날린 수용체 자극
C. 혈청에서 자가항체, 면역 복합체 및 세포독성 성분 제거
D. 아세틸콜린에스테라제(acetylcholinesterase) 재활성화

## 해설

활동할수록 심해지고 수면 후 좋아지는 근력저하, 안검하수, 정상 감각·반사는 중증근무력증을 지지한다. 아세틸콜린에스테라제 억제(A)는 신경근접합부의 아세틸콜린 작용을 늘려 증상을 완화하며 pyridostigmine이 대표적이다. 본문은 호흡곤란을 부인하고 있으며 천명음 자체는 MG의 진단 근거가 아니다. 혈장교환은 위기·중증 악화 등의 별도 상황에서 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 휴식으로 호전되는 피로성 근력저하의 MG A를 유지하고 본문이 부인한 호흡곤란과 근위축을 만들어낸 해설을 교체한다.
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/wnl.0000000000002790

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000534
