---
type: qbank
schema_version: 1
id: medqa-us-train-001148
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:53b9d8dd2a8b6de50eb1c543eaba0e4723ae451b74c18dda9ec3e7a860745704
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "hemorrhoids"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
---

# MedQA US 임상문제

## 문제

28세 여성이 3일간의 혈변(bright red blood in her stools)을 주소로 내원하였다. 하루에 한 번 배변을 한다. 발열, 배변 시 통증, 복통은 없다. 약 3개월 전 레보플록사신(levofloxacin)으로 요로감염 치료를 받은 적이 있다. 월경은 28~30일 주기로 규칙적이며 3~4일간 지속된다. 아버지는 4년 전 대장암으로 사망하였다. 현재 복용 중인 약물은 철분 보충제뿐이다. 키는 162cm, 체중은 101.2kg이며, 체질량지수(BMI)는 38.3kg/m2이다. 체온은 36.5°C, 맥박은 분당 89회, 혈압은 130/80mmHg이다. 직장수지검사에서 항문 피부꼬리(anal skin tags)가 관찰된다. 항문경 검사에서 치상선(dentate line) 상방 7시 및 11시 방향에 다수의 확장된 푸른색 정맥이 관찰된다. 코를 막고 숨을 내쉬게 했을 때 덩어리가 탈출하지만 정상적으로 호흡하면 저절로 환원된다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 도큐세이트(Docusate) 요법
B. 국소 딜티아젬(Topical diltiazem)
C. 프로프라놀롤(Propranolol) 요법
D. 치질절제술(Hemorrhoidectomy)

## 해설


치상선 위 내치핵이 힘줄 때 탈출했다가 저절로 환원되므로 2도 내치핵이다. 초기에는 섬유질·수분 섭취와 배변 습관 개선 등 보존적 치료가 우선이며, 선택지 중 변을 부드럽게 하는 A가 이에 가장 가깝다. 도큐세이트가 섬유질 치료보다 우월하거나 모든 환자에게 필수라는 뜻은 아니다. 딜티아젬은 주로 치열에 사용하고, 보존치료 전 곧바로 치핵절제술을 시행할 근거는 부족하다. 대장암 가족력과 철분 복용의 이유를 별도로 평가하며 혈변을 무조건 치핵 탓으로 종결하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001148 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 자연 환원 탈출을 1도로 분류한 오류를 2도로 교정하고 보존치료·대장암 위험평가를 분리했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/2024-Hemorrhoids-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001148
