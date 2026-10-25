---
type: qbank
schema_version: 1
id: medqa-us-train-008732
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc874943cf230649fa503d68eca150479d365ebc3a7710ca96d61a4b5635bbfb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "primary hyperaldosteronism"
  - "Conn syndrome"
  - "saline infusion test"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
---

# MedQA US 임상문제

## 문제

35세 아프리카계 미국인 여성이 2주 동안 간헐적인 두근거림으로 내원했다. 이 기간 동안 변비가 있고 평소보다 피곤했다. 4주 전 고혈압을 진단받아 클로르탈리돈을 시작했다. 체온 36.5°C(97.7°F), 맥박 75회/분, 혈압 158/97mmHg이다. 복부는 부드럽고 압통이 없으며 상·하지에 경미한 근력 약화와 양측 심부건반사 1+가 있다. 혈청 Na⁺ 146mEq/L, Cl⁻ 100mEq/L, K⁺ 2.8mEq/L, HCO₃⁻ 30mEq/L, 포도당 97mg/dL, BUN 10mg/dL, 크레아티닌 0.8mg/dL이다. 대변잠혈검사는 음성이고 심전도에서 심방조기수축이 보인다. 클로르탈리돈을 중단하고 경구 염화칼륨을 시작했다. 일주일 후 혈장 알도스테론 26ng/dL(정상 3.6~24.0), 혈장 레닌 활성도 0.8ng/mL/h(정상 0.3~4.2)였다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 부신절제술
B. 복부 CT
C. 덱사메타손 억제검사
D. 생리식염수 주입검사

## 해설


정답 D. Aldosterone 26ng/dL, PRA0.8에서 ARR은 약32.5로 고혈압·저칼륨혈증과 함께 원발성 알도스테론증을 의심한다. 수술적 치료를 고려하며 생화학적 확률이 중간인 경우 saline 억제검사를 사용할 수 있다. 먼저 K 교정과 간섭 약물 영향을 평가해야 하며 이뇨제 중단 1주는 일반적인 충분한 washout이라고 할 수 없다. 보정 재검 여부·혈압·체액부하 금기를 확인하고 검사한다. 억제검사가 모든 양성 선별 환자에게 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008732 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ARR 약32.5와 낮은 renin의 PA 의심에서 D는 조건부 억제검사; 최근 이뇨제 중단/저K 교정과 수술 의향 등 2025 원칙 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008732
