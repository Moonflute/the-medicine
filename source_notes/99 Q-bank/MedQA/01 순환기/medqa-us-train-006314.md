---
type: qbank
schema_version: 1
id: medqa-us-train-006314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c255781bf09596d8bd5e33d0ed4d2c43cbcd2635174f23db6a5506410be55717
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "버거병"
  - "폐쇄성 혈전혈관염"
  - "흡연"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2PkOyHhO2YiOq0gCDtmIjsoITsl7wgKOuyhOqxsOuzkSkgKFRocm9tYm9hbmdpaXRpcyBPYmxpdGVyYW5zIChCdWVyZ2VyJ3MgRGlzZWFzZSkpLm1k
question_type: prevention
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 남성이 2개월 동안 점차 악화되는 양쪽 발 통증으로 내원했다. 처음에는 오래 걸은 후에만 통증이 생기고 쉬면 가라앉았다. 지난 일주일 동안 통증이 지속되었고 작열감이 동반되었다. 4개월 동안 다리 정맥을 따라 일시적으로 통증성 결절이 생겼다가 저절로 사라지기도 했다. 3개월 전 발생한 왼쪽 발목 염좌를 지지하기 위해 발목 보조기를 착용하고 있다. 어머니는 십대에 단백질 C 결핍을 진단받았다. 15년 동안 하루에 담배 두 갑을 피웠고 술은 마시지 않는다. 활력징후는 정상이다. 진찰에서 왼쪽 엄지발가락, 둘째 발가락 및 다섯째 발가락 끝에 궤양이 보인다. 발은 차갑고 발의 맥박은 거의 만져지지 않는다. 발목-상완지수는 왼쪽 다리 0.3, 오른쪽 다리 0.5이다. 다음 중 이 환자의 절단 위험을 줄일 가능성이 가장 높은 중재는?

## 선택지

A. 우회 혈관이식
B. 금연
C. 에녹사파린 치료
D. 심바스타틴 치료

## 해설

젊은중증흡연자·이동성 표재정맥염·말단궤양/허혈은 폐색성혈전혈관염(Buerger)을 시사한다. 완전 금연 B가 진행과 절단위험 감소의 핵심이다. 가족의 proteinC결핍만으로 이 증례를 유전혈전증으로 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은흡연자의 이동성 정맥염+말단허혈을 Buerger로 설명하고 금연 B의 핵심을 명료화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006314
