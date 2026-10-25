---
type: qbank
schema_version: 1
id: medqa-us-test-000035
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d0ae7182cc741dacbd7085aa4a4bf8473818f896931069b88eceb1e24dd8be8c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "음이온차"
  - "인슐린 지속요법"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 노숙인 보호소 직원에게 발견되어 응급실에 내원했다. 정맥주사 약물 남용자이며 그 외 과거력은 모른다. 현재 메타돈 클리닉에 다닌다. 초기 혈청 Na⁺ 139, Cl⁻ 100, K⁺ 6.3, HCO₃⁻ 17 mEq/L, 포도당 589 mg/dL이다. 치료 후 체온 37.5°C, 혈압 117/78 mmHg, 맥박 분당 100회, 호흡수 분당 23회, 산소포화도 98%이고 Na⁺ 139, Cl⁻ 100, K⁺ 4.3, HCO₃⁻ 19 mEq/L, 포도당 90 mg/dL이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 인슐린, 칼륨, 정맥 수액, 포도당
B. 정맥 수액만
C. 경구 수분 보충
D. 지지요법과 면밀한 모니터링

## 해설

정답은 A이다. 초기 고혈당과 음이온차 대사산증은 DKA를 시사한다. 치료 뒤 혈당은 90 mg/dL로 낮아졌지만 음이온차는 139−100−19=20으로 남아 있다. 케톤과 pH를 확인하여 DKA 해소 여부를 평가하며, 산증/케톤증이 남아 있으면 포도당을 함께 투여하면서 인슐린을 지속한다. 저혈당을 즉시 방지·교정하고 수액 및 칼륨 보충은 혈역학·반복 칼륨검사에 맞춘다. 음이온차 하나만을 현대적 DKA 해소 기준으로 사용하거나 칼륨을 무조건 투여하는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈당 90만으로 DKA 종료를 판단하지 않도록 지속 산증 평가와 포도당 병용 인슐린을 설명. 섭씨 체온의 °F 오기를 교정.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000035
