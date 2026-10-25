---
type: qbank
schema_version: 1
id: medqa-us-train-004626
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:160bde2046370bc495b971866f0dbfb78c545b2ee1fbeb564407d477028f9900
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "급성 구획증후군"
  - "사지 허혈"
  - "외상성 근육 손상"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: C
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

23세 환자가 자동차 사고 후 응급실에 왔다. 안전벨트를 하지 않은 채 정면충돌에 연루되었다. 환자는 자신이 마신 것은 술뿐이라고 주장하지만 심하게 취해 있다. 초기 외상평가에서 오른쪽 아래팔에 심한 멍이 보인다. 외상 치료 구역에서 오른쪽 아래팔의 심한 통증을 호소한다. 신체검사에서 오른쪽 아래팔 피부가 창백하고 감각이 감소하며 차갑다. 오른쪽 아래팔과 손가락을 수동으로 움직일 때 통증이 유발된다. 요골동맥 맥박은 가늘게 만져진다. FAST검사는 음성이다. 체온은 99.5°F (37.5°C), 맥박은 분당 100회, 혈압은 110/70 mmHg, 호흡수는 분당 12회, 산소포화도는 98%이다. 오른쪽 아래팔 X선을 촬영할 예정이다. 환자는 여전히 심하게 취해 있다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 정맥 수액
B. 진통제
C. 근막절개술
D. 구획 내 압력 측정

## 해설

심한 통증과 수동 신장 시 통증, 감각저하·창백·차가운 피부 및 약한 맥박은 외상 후 심각한 허혈을 동반한 급성 구획증후군을 강하게 시사하므로 즉각적인 수술적 감압(C)이 적절하다. 동반 동맥 손상도 신속히 평가해야 한다. 임상적으로 진단이 분명할 때 구획압 측정 때문에 감압을 지연하지 않는다. 반면 술에 취해 평가가 불가능하거나 진단이 불확실한 경우에는 연속 임상 평가와 구획압 측정이 도움이 된다. 맥박이 정상이어도 구획증후군은 배제되지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 명확한 임상적 구획증후군에서는 압력 측정 때문에 감압을 지연하지 않는다는 점과 혈관 손상 평가도 필요함을 보완했다. 중독 자체만으로 측정이 수술보다 우선은 아니다.
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-10-pdf.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004626
