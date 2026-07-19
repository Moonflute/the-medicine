---
type: qbank
schema_version: 1
id: medqa-us-train-007719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1f843c6c996adfddcf4558ae35f45f615eb610cf9d81869b0be45aea3ec4b7cf
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "pulmonary embolism"
  - "deep vein thrombosis"
  - "thromboembolism"
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

67세 남자가 30분 전부터 갑자기 시작된 호흡곤란으로 응급실에 왔다. 처음에는 어지럽고 쓰러질 것 같았지만 의식을 잃지는 않았다. 깊게 숨쉴 때 악화되는 좌측 흉통을 호소한다. 심폐질환 병력은 없다. 일주일 전 좌측 고관절 전치환술을 받았고 퇴원 후 통증 조절이 잘 되지 않아 5일간 침상안정을 했다. 이후 우측 종아리가 부어올랐고 진찰에서 압통이 있다. 현재 체온 38.0°C(100.4°F), 심박수 112회/분, 혈압 95/65 mm Hg, 실내 공기 산소포화도 91%이다. CT 폐혈관조영술에서 부분적인 혈관 내 충만 결손이 보인다. 다음 중 이 환자 질환의 기전은?

## 선택지

A. 폐 실질의 염증
B. 관상동맥을 막는 혈전
C. 심낭 내 체액 축적
D. 폐혈관에 걸린 혈전

## 해설


심부정맥 혈전이 폐동맥으로 이동해 폐혈관을 막는 것이 폐색전증의 병인이다. CT 폐혈관조영술에서 혈관 내 결손이 보이는 것은 폐혈관에 혈전이 존재함을 의미한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007719
