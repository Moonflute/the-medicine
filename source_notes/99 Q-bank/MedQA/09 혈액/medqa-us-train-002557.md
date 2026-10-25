---
type: qbank
schema_version: 1
id: medqa-us-train-002557
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f8625fc255e81461fbf4c142a55d828b8572eb00b3aa5513e2c370a4b21b260b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hemophilia A"
  - "factor VIII deficiency"
  - "prolonged PTT"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

6세 남아가 킥보드에서 떨어져 응급실에 왔다. 왼쪽 허벅지 바깥쪽에 광범위한 멍과 압통이 있다. 부모는 아이가 어릴 때부터 쉽게 멍이 들었고 외삼촌도 비슷한 문제가 있었다고 한다. 혈색소는 14 g/dL이고 PT 13초, PTT 56초, 출혈시간 4분이다. 다음 중 이 환자 상태의 가장 가능성 높은 병태생리는?

## 선택지

A. 제8인자 결핍
B. 제8인자 항원 결핍
C. GP1b 결핍
D. 혈소판에 대한 항체

## 해설


남아의 깊은 연부조직 출혈과 모계 남성 친족의 유사 병력, 정상 PT·출혈시간과 연장된 PTT는 혈우병을 시사하며 보기 중 factor VIII 결핍 A가 적절하다. Factor VIII는 내인성 tenase의 보조인자로 factor IXa와 함께 factor X 활성화를 돕는다. 최종 fibrin 형성 단계 자체의 결핍이라고 설명하는 것은 부정확하다. 정확한 유형은 응고인자 활성도 검사로 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002557 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제VIII인자를 응고 마지막 단계라 부른 오류와 원문에 없는 혈소판 정상 수치 첨가 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002557
