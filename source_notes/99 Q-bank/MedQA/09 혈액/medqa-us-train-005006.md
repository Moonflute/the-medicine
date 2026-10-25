---
type: qbank
schema_version: 1
id: medqa-us-train-005006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8d4bb3880e2e418f39825f15c5ac1496fb58c2acea38fdb0447d0799000d197
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 림프모구성 백혈병"
  - "골수 림프모구"
  - "범혈구감소증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

5세 남아가 쇠약으로 내원했다. 쉽게 피로하고 창백한 결막, 피부긴장도와 모세혈관 재충만 저하, 경부·액와 림프절병증과 전신 멍이 있다. 백혈구 3,000/mm³, 혈색소 7.1 g/dL, 혈소판 50,000/mm³이다. 가장 특이적인 진단검사에서 예상되는 소견은?

## 선택지

A. 골수생검에서 림프모구 25% 초과
B. 유세포분석에서 말단 데옥시뉴클레오티딜 전이효소 양성
C. 형광제자리부합법에서 9;22 전좌
D. 말초혈액 도말에서 림프모구 50% 초과

## 해설


소아의 다계열 감소·멍·림프절병증은 ALL을 의심하게 한다. A의 골수 림프모구25%초과는 명백한 골수 침범으로 해당 진단을 지지하고, TdT 양성 하나나 t(9;22) 하나는 모든 ALL의 필수/특이 소견이 아니다. 실제 진단에는 골수 형태와 계열 면역표현형·유전검사를 통합하며 분류에 따라20–25% 경계가 사용되므로 이 선택지의25%를 모든 상황의 유일 절대 기준으로 외우지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005006 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ALL의 골수 림프모구 증가 A 유지;25%가 모든 현행 분류에서 유일 절대 기준이라는 설명 보정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005006
