---
type: qbank
schema_version: 1
id: medqa-us-train-010174
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:39c1e575a8d5f91e173e2d6b70a2f36484aad9ca3b5e5ee7f9df5ef9b4cd89a6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "중추성 요붕증"
  - "데스모프레신"
  - "수분 제한검사"
related_disease_slugs:
  - MDQg64K067aE67mEL-ykkey2lOyEsSDsmpTrtpXspp0gKENlbnRyYWwgRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

뇌하수체 수술 뒤 60세 남성의 소변량이 시간당 350–450 mL로 5시간 지속됐다. 혈청 Na는 150 mmol/L로 오르고 소변 삼투질농도는 110 mOsm/kg다. 혈당은 정상이고 이뇨제는 쓰지 않는다. 수분을 보충하면서 사용할 약은?

## 선택지

A. 데메클로사이클린
B. 데스모프레신
C. 푸로세미드
D. 톨밥탄

## 해설


뇌하수체 수술 뒤 고나트륨혈증과 함께 대량의 묽은 소변이 나오면 중추성 바소프레신 결핍에 맞는다. 데스모프레신 사용 뒤 소변량과 혈청 Na를 추적해 과교정이나 저나트륨혈증을 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010174 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수분제한 무반응만으로 중추성 DI 확진 불가. Desmopressin B는 감별 반응 관찰 단계로 설명, 신성 DI와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/kidney-disease/diabetes-insipidus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010174
- https://academic.oup.com/jcem/article/108/1/198/6775276
