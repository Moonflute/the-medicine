---
type: qbank
schema_version: 1
id: medqa-us-train-008686
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8018c9f61a4d38e60059da4ae52f752c9956d8d682983c4fc5fc9692dd3bcd4
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "carpal tunnel syndrome"
  - "median neuropathy"
  - "nerve conduction study"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 양손 손바닥 쪽의 저림과 감각 이상으로 일차진료를 받으러 왔다. 엄지손가락 기저부에는 증상이 없다. 오른손(주로 사용하는 손)에서 더 심하고 운전이나 머리 빗기 같은 활동으로 악화된다. 통증 때문에 자주 잠에서 깨 손을 흔들어야 호전된다. 9년 동안 류마티스관절염을 앓아 메토트렉세이트를 복용한다. 혈압 124/76mmHg, 심박수 75회/분, 호흡수 15회/분이다. 오른쪽 손목 앞쪽 중앙을 가볍게 두드리면 손바닥에 저림이 유발된다. 이 환자의 근전도에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. C7 지배 척추주위근, 팔, 어깨 근육의 탈신경
B. 국소 이상 없이 광범위하고 대칭적인 신경병증 변화
C. 손목굴 내 정중신경 전도속도의 국소적 저하
D. 정중신경 수장측 가지의 신경병증 변화

## 해설

야간 저림·손 털기 호전·손목 Tinel 양상은 손목터널증후군을 시사한다. 전기진단검사 중 신경전도검사에서 손목터널을 지나는 정중신경의 국소 전도 지연(C)이 예상된다. 정중신경 손바닥피부가지는 터널에 들어가기 전에 갈라져 굽힘근지지띠 바깥을 지나므로 엄지두덩 피부감각은 보존되는 것이 단서다. 질문의 EMG는 넓은 전기진단 평가를 뜻하며 전도속도는 침근전도 자체가 아닌 신경전도검사에서 측정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전기진단 선지 C를 유지하며 엄지두덩 감각 보존의 해부학적 이유와 EMG/NCS 용어를 구별했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008686
