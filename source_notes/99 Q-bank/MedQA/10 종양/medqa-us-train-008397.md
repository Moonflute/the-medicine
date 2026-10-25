---
type: qbank
schema_version: 1
id: medqa-us-train-008397
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:08cc068aaff59eba0f1a843e1ffb1f806f9c382ebd2ba30f0c79130b5a2b4b71
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "carcinoid syndrome"
  - "neuroendocrine tumor"
  - "pellagra"
related_disease_slugs:
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: investigation
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
---

# MedQA US 임상문제

## 문제

65세 여성이 혼란과 행동 변화로 가족에 의해 응급실로 왔다. 가족에 따르면 지난 2주 동안 점점 더 짜증을 내고 혼란스러워했으며 낯선 사람에게 공격적으로 행동했다. 의식 변화와 함께 최근 복통과 물설사도 있었다. 복용 약물은 히드로클로로티아지드(HCTZ), 에날라프릴, 로페라미드, 칼슘 보충제이다. 최근 미국 외 지역을 여행한 적은 없다. 체온 99.5°F(37.5°C), 맥박 112회/분, 혈압 100/70mmHg, 호흡수 18회/분, 실내 공기에서 산소포화도 93%이다. 신체검사에서 마르고 병색이 있는 여성이었다. 심장검사에서 동성 빈맥이 있고 장음은 항진되어 있다. 목과 상부 흉곽, 손과 발 주위에 인설과 가피를 동반한 자주색 변색이 보인다. 흉부 방사선 사진에서 양쪽 폐야는 깨끗하지만 심초음파에서 우심실 심내막이 두꺼워지고 경미한 삼첨판 협착이 보인다. 다음 중 가장 적절한 진단 단계는 무엇인가?

## 선택지

A. 대변 배양
B. 항핵항체 역가
C. 복부 CT
D. 혈청 5-하이드록시인돌아세트산(5-HIAA) 농도

## 해설


설사·피부염·인지변화는 pellagra를 시사하고, 우심내막 섬유화와 삼첨판병변은 carcinoid syndrome을 뒷받침한다. Serotonin합성으로 tryptophan이 전환되어 niacin결핍이 동반될 수 있다. 보기 중5-HIAA D가 관련 생화학검사이다. 전통적으로24시간 urine5-HIAA를 사용하며 검증된 혈청/혈장 assay도 대안이 될 수 있으나 신기능·식이·약물과 검체별 기준치를 고려한다. 모든환자의필수단독확진검사라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008397 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 설사·광과민피부염·인지변화의 pellagra와carcinoid/5HIAA연관을보완; serum5HIAA는검증assay를전제로가능함을1차연구확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9539661/
- https://pubmed.ncbi.nlm.nih.gov/26438520/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008397
