---
type: qbank
schema_version: 1
id: medqa-us-train-009454
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d92459bbb9fb66a0617f1894c3a73dc9bc75e674ebd92d0563e04c4c00b833e8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute liver failure"
  - "급성 간부전"
  - "N-acetylcysteine"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_soITqsqnshLEg6rCE7Je8IChGdWxtaW5hbnQgSGVwYXRpdGlzKS5tZA
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
---

# MedQA US 임상문제

## 문제

44세 여성이 3일 동안 점점 심해지는 혼란으로 남편과 함께 응급실에 왔다. 남편은 6일 전부터 눈이 노랗게 변했다고 했다. 골관절염이 있고 아세트아미노펜과 비타민 보충제를 복용한다. 술은 마시지 않지만 가끔 코카인을 정맥주사한다. 체온 37.2°C, 맥박 102회/분, 호흡수 20회/분, 혈압 128/82 mmHg이다. 혼란스럽고 사람만 지남력이 있으며 공막과 피부에 황달이 있다. 손목을 펴면 손이 퍼덕이는 떨림이 있고 우측 늑골연 아래 4 cm에서 압통성 간이 만져지며 비장비대는 없다. 혈소판 100,000/mm³, PT 68초(INR 4.58), 총 빌리루빈 19.6 mg/dL, AST 1356 U/L, ALT 1853 U/L, B형간염 표면항원 양성, 표면항체 음성, C형간염 항체 음성, HAV IgM 음성, 아세트아미노펜 12 mcg/mL이다. 중환자실로 옮겨 테노포비르를 시작했다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 경구 리팍시민
B. 간이식
C. N-아세틸시스테인
D. 정맥 글루코코르티코이드

## 해설


정답 C. 급성 중증 간손상과 응고장애에 의식 변화가 동반되어 급성간부전으로 신속히 평가해야 한다. NAC는 acetaminophen 관련 간부전 치료이며 비acetaminophen 급성간부전에서도 특히 초기 뇌병증에서 고려할 수 있다. 낮은 약물 농도 하나로 과거 노출을 완전히 배제하지 않는다. HBsAg 양성만으로 급성 HBV 감염이 확진되는 것은 아니다. NAC와 원인치료는 긴급 간이식센터 평가를 대체하지 않으며, 간이식이 효과 없다는 설명은 틀리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009454 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: NAC C의 보조치료 취지 유지하되 간이식이 효과 없다는 위험한 배제를 삭제하고 급성 HBV 확진 조건·간성뇌병증 범위 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/sites/default/files/2022-07/AcuteLiverFailureUpdate201journalformat1.pdf
- https://www.dgvs.de/new-leitlinien/chapter_69dd0a7e0a788/chapter_69dd0a7e0e86a/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009454
