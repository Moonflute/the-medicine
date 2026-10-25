---
type: qbank
schema_version: 1
id: medqa-us-train-000940
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1c81c829d611ad936f032337e78ce3c56e79471c96642109751dff59b42bc36
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "rabies"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강했던 26세 남성이 극심한 초조와 혼란으로 응급실에 내원했습니다. 환자는 명확한 병력을 제공할 수 없습니다. 환자의 어머니에 따르면 환자는 4주 전 동굴 탐험을 포함한 하이킹 여행에서 돌아왔습니다. 지난 며칠 동안 환자는 전신 발열과 권태감, 인후통을 겪었습니다. 환자는 지난 하루 동안 어떠한 액체도 마시기를 거부했습니다. 예방접종은 최신 상태입니다. 체온은 38.1°C, 맥박은 분당 92회, 호흡은 분당 18회, 혈압은 110/75 mm Hg입니다. 동공은 6 mm로 확장되어 있고 빛에 반응합니다. 환자는 상당한 양의 침을 흘리고 있습니다. 상지와 하지 모두에서 근긴장도가 크게 증가해 있습니다. 환자가 공격적으로 변하고 추가 평가를 거부하여 나머지 신체 검진은 수행되지 않았습니다. 혈청 및 소변 독성 검사는 음성입니다. 다음 중 이 환자의 상태를 예방했을 가능성이 가장 높은 것은 무엇입니까?

## 선택지

A. 혈장교환술(Plasmapheresis)
B. 항진균 치료
C. 항바이러스 치료
D. 면역글로불린 및 백신 투여

## 해설


동굴 탐험 뒤 나타난 흥분·혼란, 액체를 삼키기 꺼리는 양상, 침 흘림과 근긴장 증가가 광견병을 시사한다. 박쥐 노출은 뚜렷한 물림을 기억하지 못할 수도 있다. 이전 광견병 예방접종을 받지 않은 사람이 적절한 노출 후 예방을 증상 발생 전에 받았다면 상처 세척, 면역글로불린 및 백신으로 예방할 수 있어 D이다. 일반 예방접종이 최신이라는 말은 광견병 접종력을 뜻하지 않으며 이미 임상 광견병이 발현한 뒤의 치료를 묻는 문제는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000940 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 확인되지 않은 동물 물림을 기정사실화하지 않고 동굴·박쥐 노출 및 증상 전 예방으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000940
