---
type: qbank
schema_version: 1
id: medqa-us-train-006025
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d384a4ab39b7ebc183e0311978f08afbf6727a5b79c1fe864ab516aafc7652b3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "간세포암"
  - "만성 B형간염 간경변"
  - "소라페닙"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
question_type: management
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 아프리카계 미국인 남성이 3개월 동안 지속된 복통, 피로 및 체중 감소로 응급실에 왔다. 간경변으로 합병된 만성 B형간염 병력이 오래되었다. 황달, 다리 부종 및 우상복부에 만져지는 종괴가 있다. 복부초음파에서 경계가 불분명하고 내부 에코가 거칠고 불규칙한 3cm 간 종괴가 보인다. 검사에서 AST 90 U/L, ALT 50 U/L, 총 빌리루빈 2 mg/dL, 알부민 3 g/dL, 알칼리성 인산분해효소 100 U/L, 알파태아단백 600μg/L이다. 다음 중 진행성 간암에 승인된 표적 치료제는 무엇인가?

## 선택지

A. 다클리주맙
B. 팔리비주맙
C. 압식시맙
D. 소라페닙

## 해설


Sorafenib은 multikinase 억제제로 절제 불가능한 간세포암에 승인되어 있어 보기 중 D가 맞다. Daclizumab은 IL-2 receptor 표적 면역조절제, palivizumab은 RSV 예방 항체, abciximab은 혈소판 GPIIb/IIIa 억제제로 이들을 다른 암 치료제라고 설명하면 안 된다. 본문의 3 cm 종괴만으로 진행 병기를 확정하거나 sorafenib이 이 환자의 현재 최선 치료라고 결정하는 문제는 아니다. 병기와 간기능에 따라 국소·전신 치료를 따로 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006025 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: sorafenib 승인 사실 D 유지; 다른 선지를 다른 항암제라고 잘못 설명한 오류 제거 및3cm=진행암 확정 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/drugs/sorafenibtosylate

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006025
