---
type: qbank
schema_version: 1
id: medqa-us-train-006326
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ec2111b534c360784d273365cbdab8a92e803f8069cfb98f3da6308886e1f10
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "긴장성 기흉"
  - "인공호흡기 관련 기흉"
  - "심부 고랑 징후"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4tOyepeyEsSDquLDtnYkgKFRlbnNpb24gUG5ldW1vdGhvcmF4KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 고속 교통사고를 당한 지 30분 후 응급실에 이송되었다. 도착 당시 의식이 저하되어 기관삽관 후 기계환기를 시작했다. 인공호흡기는 FiO2 60%, 일회호흡량 440mL, 호기말 양압 4cm H2O로 설정되어 있다. 기관삽관 3일째 체온은 37.3°C(99.1°F), 맥박은 분당 91회, 혈압은 103/60 mm Hg이다. 왼쪽 폐기저부의 호흡음이 감소되어 있다. 심장 진찰은 정상이며 복부는 부드럽고 팽만되지 않았다. 동맥혈가스검사에서 pH 7.49, pCO2 29 mm Hg, pO2 73 mm Hg, HCO3− 20 mEq/L, O2 포화도 89%이다. 모니터링 중 기도 고평부압이 갑자기 상승했다. 흉부 X선에서 왼쪽 늑횡격막각이 깊어져 있다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 레보플록사신 투여
B. 흉관 삽입
C. 흉부 CT 촬영
D. 면밀한 관찰

## 해설

인공호흡 중 갑자기 기도 압력이 상승하고 한쪽 호흡음이 감소하면 기흉을 의심한다. 누운 자세 흉부 X선에서 깊어진 늑골횡격막각인 deep sulcus sign은 흉막강 공기를 시사한다. 양압환기 중인 환자의 기흉은 악화될 수 있으므로 흉관 배액(B)이 적절하다. 현재 활력징후만으로 반드시 긴장성 기흉이라고 단정할 필요는 없으며, 순환 장애가 진행하면 즉시 감압해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 누운 환자의 깊은 늑골횡격막각과 일측 호흡음 감소는 기흉을 지지한다. 긴장성 기흉을 무조건 단정하지 않고 양압환기 중 흉관 배액 B의 근거를 설명한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006326
