---
type: qbank
schema_version: 1
id: medqa-us-train-007508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab9544fc79d9f9478398ffc12d787388f77a80029d609e52c3d74a85a17eecfb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근경색"
  - "PCI 전 약물치료"
  - "고강도 스타틴"
  - "아토르바스타틴"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

혈청 트로포닌 T 농도는 6.73 ng/mL(정상 <0.01), 손가락 채혈 혈당은 145 mg/dL이다. 심장도관검사팀을 호출했다. 비분획 헤파린, 아스피린, 티카그렐러, 설하 니트로글리세린 치료를 시작했고 통증은 호전되었다. 체온은 37.3°C(99.1°F), 맥박 65회/분, 호흡수 23회/분, 혈압 91/60 mmHg, 실내 공기 산소포화도 96%이다. 다음 중 가장 적절한 추가 약물치료는 무엇인가?

## 선택지

A. 정맥 모르핀
B. 경구 아토르바스타틴
C. 정맥 인슐린
D. 정맥 니트로글리세린

## 해설

제시된 트로포닌 상승과 ACS 치료 경로에서 경구 아토르바스타틴(B)은 고강도 스타틴 치료를 위한 적절한 추가 약물이다. 혈압이 91/60 mmHg로 낮고 통증이 호전되어 추가 정맥 질산염이나 모르핀을 우선할 이유가 없다. 혈당 145 mg/dL만으로 정맥 인슐린을 시작하지 않는다. 영어 원문도 검사 결과부터 시작하므로 누락된 앞부분을 임의로 만들지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACS에 고강도 스타틴 B를 선택하되 저혈압에서 추가 질산염을 피해야 하는 이유를 보완.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007508
