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
explanation_status: manual-reviewed
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

23세 여자가 왼손, 특히 엄지·검지·중지의 통증과 감각이상으로 내원했다. 밤에 통증이 더 심하지만 낮에도 상당한 불편감이 있다. 일상생활을 방해할 정도로 아파서 신속한 호전을 원한다. 신체검사에서 손목을 두드리거나 양쪽 손바닥을 손목에서 굽히게 할 때 통증과 감각이상이 유발된다. 다음 중 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 코르티코스테로이드 주사
B. 비스테로이드성 항염증제
C. 부목 고정
D. 수술적 감압

## 해설

원정답은 C, 부목 고정이다. 엄지·검지·중지의 야간 통증과 감각이상 및 손목 자극에 따른 증상 유발은 손목터널증후군을 시사한다. 객관적인 근력저하나 무지구 위축이 기술되지 않은 경우, 손목 중립 위치의 부목을 특히 야간에 사용하는 것은 적절한 초기 비수술 치료이다. 본문은 증상이 일상생활을 방해한다고 했으므로 이를 '경미한 증상'으로 바꾸어 설명하면 안 된다. 국소 스테로이드 주사는 단기 완화를 위해 고려할 수 있지만 장기 호전을 보장하지 않으며, 부목이 모든 치료보다 가장 효과적이라고 단정할 근거는 없다. 지속·악화하거나 운동결손이 있으면 추가 평가와 수술적 감압을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일상생활을 방해하는 CTS를 경증이라고 둔갑시키고 부목이 가장 효과적이라고 한 표현 수정. 정중신경 분포와 초기 중립 부목의 역할 설명, 단기 주사/수술 적응을 구분. 원정답 C 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/carpal-tunnel-syndrome/
- 공식/학회 근거: https://www.aaos.org/quality/quality-programs/upper-extremity-programs/carpal-tunnel-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007467
