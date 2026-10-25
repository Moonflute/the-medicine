---
type: qbank
schema_version: 1
id: medqa-us-train-006965
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fea5361291a480bc801bd897af2f47d48989da5d3a8591428f7f47eca5d08b8f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "펠티 증후군"
  - "류마티스관절염"
  - "호중구감소증"
  - "비장비대"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDgg6rCQ7Je8L-2YuOykkeq1rOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 여자가 2일간 지속된 발열과 인후통으로 내원했다. 15년 전 류마티스관절염을 진단받았으며, 최근 몇 년 동안 여러 차례 악화되어 입원 치료가 필요했다. 적극적인 치료에도 관절 변형이 진행되어 수술적 교정 대상이다. 체온은 38.2°C(100.9°F)이고 나머지 활력징후는 안정적이다. 손에는 백조목 변형, 단추구멍 변형, Z선 변형이 여러 개 보이며 양손 모두 척골 편위가 있다. 편평족도 있다. 오른쪽 팔꿈치 주위에서 단단하고 압통이 없는 결절 3개, 왼쪽 아킬레스건에서 1개가 만져진다. 비장은 늑골연 아래 5cm에서 만져지고 타진상 길이는 15cm이다. 림프절병증은 없다. 검사 결과는 다음과 같다.
헤모글로빈 11 g/dL
평균 적혈구 용적 90 μm³
백혈구 수 3,500/mm³
분절 호중구 20%
림프구 70%
혈소판 수 240,000/mm³
적혈구 침강 속도 65 mm/시간
류마티스인자 85 IU/mL(정상: 최대 14 IU/mL)
이 환자의 현재 상태를 가장 잘 설명하는 원인은 무엇인가?

## 선택지

A. 미만성 큰 B세포 림프종
B. 펠티 증후군
C. 사르코이드증
D. T세포 대과립 림프구 백혈병

## 해설


오래된 변형성 RA·비장비대·호중구감소(ANC 약700/mm³)는 Felty 증후군(B)을 지지한다. Felty는 RA의 전신 합병증으로 면역매개 기전·비장 저류 등이 관여하며 단순히 MTX/cyclosporine 부작용과 동일하지 않다. 실제 복용약이 원문에 명시되지도 않았다. 약물성 골수억제·감염과 T-LGL 백혈병 등은 감별해야 하고, 발열·호중구감소는 신속 감염 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006965 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Felty를 MTX/면역억제제 부작용 자체로 정의한 오류를 RA 관련 호중구감소·비장비대 증후군으로 교체했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006965
