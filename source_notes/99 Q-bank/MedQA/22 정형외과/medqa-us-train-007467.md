---
type: qbank
schema_version: 1
id: medqa-us-train-007467
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a4de952c55f396c29807399e53f77a63f9abb82604c5508dd83313cc9b6e930a
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "손목터널증후군"
  - "정중신경 압박"
  - "틴엘 징후"
  - "팔렌 검사"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 밤마다 엄지·검지·중지가 저려 잠에서 깬다. 손목을 굽히면 재현되며 엄지 근력과 무지구는 정상이다. 처음 시도할 비수술적 처치는?

## 선택지

A. 손목을 많이 굽힌 채 고정
B. 팔꿈치 전방전위술
C. 밤에 손목을 중립 위치로 유지하는 부목
D. 초기부터 수술적 감압

## 해설

운동결손 없는 초기 손목터널증후군에서는 중립 위치 야간 부목을 시도할 수 있다. 근력 저하나 위축이 진행하면 신경검사와 수술 평가를 앞당긴다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일상생활을 방해하는 CTS를 경증이라고 둔갑시키고 부목이 가장 효과적이라고 한 표현 수정. 정중신경 분포와 초기 중립 부목의 역할 설명, 단기 주사/수술 적응을 구분. 원정답 C 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/carpal-tunnel-syndrome/
- 공식/학회 근거: https://www.aaos.org/quality/quality-programs/upper-extremity-programs/carpal-tunnel-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007467
