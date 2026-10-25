---
type: qbank
schema_version: 1
id: medqa-us-train-008939
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d41e55f65f2743f3bac1da354a7c9a803eb2341557b7fddd9c1ca8df382b2a33
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "regular insulin"
  - "intravenous insulin"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
---

# MedQA US 임상문제

## 문제

14세 남아가 갑작스러운 혼란, 권태감, 광범위한 복통, 오심, 한 차례 구토로 응급실에 내원했다. 의심스러운 음식을 먹거나 발열, 호흡기 증상은 없었다. 하지만 지난 6개월 동안 물을 많이 마시고 소변을 자주 봤다. 반응은 하지만 졸려 하고 혈압 90/50mmHg, 맥박 101회/분, 호흡수 21회/분, 체온 36.0°C(96.8°F), 산소포화도 96%이다. 안색이 창백하고 피부와 점막이 건조하며 복부는 부드럽고 반발통이 없다. 모든 사지 심부건반사는 1+이다. 소변 시험지에서 케톤 3+, 포도당 3+이고 혈당 565mg/dL, 칼륨 5.8mEq/L, 나트륨 136mEq/L, 중탄산염 19mEq/L, pH 7.3이다. 다음 중 어떤 약물을 정맥으로 투여해야 하는가?

## 선택지

A. 인슐린 데테미르
B. 세파졸린
C. 속효성 인슐린
D. 염화칼륨

## 해설


정답 C. 심한 고혈당·ketonuria·탈수와 의식 변화에서 인슐린 결핍성 고혈당 위기를 우려한다. 정맥으로 투여할 인슐린은 선택지 중 regular insulin이다. 소아에서는 수액 치료를 먼저 시작하고 보통 1시간 후 적절한 인슐린 주입을 시작하며 bolus를 피한다. K5.8이어도 총체내 K는 부족할 수 있어 추적해야 한다. pH7.30·HCO3 19는 전형적 DKA 산증 기준의 경계/외부이므로 제시값만으로 산증을 과장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008939 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경계 산염기 수치에서 확진을 과장하지 않고 IV regular C 및 소아 수액 선행/K 추적 원칙 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ispad.org/static/6dd62eae-c8cb-4b4a-84e1efc768505746/Ch11PediatricDiabetes.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008939
