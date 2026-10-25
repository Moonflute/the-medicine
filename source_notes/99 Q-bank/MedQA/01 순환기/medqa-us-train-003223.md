---
type: qbank
schema_version: 1
id: medqa-us-train-003223
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:936db0007f7b75a37a210872e66e8d68046fc3a1a8b2c368a17224af92d84d33
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Marfan syndrome"
  - "aortic regurgitation"
  - "aortic root dilation"
  - "water hammer pulse"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 남아가 3개월 동안 전신 피로와 운동 시 가벼운 호흡곤란으로 내원했다. 반복되는 슬개골 탈구 병력이 있고 키는 99백분위수, 체중은 30백분위수이다. 혈압 140/50 mmHg이며 척추측만증, 돌출된 흉골, 가는 사지, 평발, 양측 수정체의 위쪽 전위가 있다. 좌측 흉골연에서 3/6 초기 이완기 잡음이 들린다. 다음 중 추가 검사에서 가장 가능성 높은 소견은?

## 선택지

A. 제2심음의 역분열
B. 기이맥
C. 제2심음의 고정분열
D. 물망치맥

## 해설

큰 키와 가는 사지, 흉골 돌출, 척추측만증, 관절 문제와 수정체 상방 전위는 Marfan 증후군을 시사한다. 이 질환에서 대동맥근부 확장에 따른 대동맥판 역류가 발생할 수 있다. 좌측 흉골연의 초기 이완기 잡음과 혈압 140/50 mmHg의 넓은 맥압이 이를 뒷받침한다.

역류 때문에 수축기에는 강하게 상승하고 이완기에는 빠르게 허탈하는 물망치맥(D)이 나타날 수 있다. 제2심음의 고정분열은 심방중격결손에, 역분열은 좌심실 박출 지연에 더 합당하고, 기이맥은 이 사례의 핵심인 넓은 맥압을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AL 아밀로이드증 예후 해설을 Marfan 표현형의 대동맥판 역류 및 물망치맥 해설로 교체. 원정답 D 유지.
- https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2023/11/06/18/46/imaging-methods-for-evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003223
