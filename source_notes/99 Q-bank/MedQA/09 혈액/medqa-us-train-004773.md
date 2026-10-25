---
type: qbank
schema_version: 1
id: medqa-us-train-004773
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:baad664348cf681c8fa363ec46fbbc8829f12ad911adf326f42e72a3170cd461
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발골수종"
  - "고칼슘혈증"
  - "골수 생검"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
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

67세 남성이 의식 변화로 응급실에 왔다. 평소에는 말을 하지 않지만 요양원 직원들이 최근 특히 졸려한다고 했다. 과거력으로 당뇨병과 알츠하이머 치매가 있다. 체온은 99.7°F (37.6°C), 혈압은 157/98 mmHg, 맥박은 분당 150회, 호흡수는 분당 16회, 실내 공기 산소포화도는 98%이다. 검사 결과 헤모글로빈 9 g/dL, 헤마토크릿 33%, 백혈구 8,500/mm3 (감별계산 정상), 혈소판 197,000/mm3, 나트륨 139 mEq/L, 염소 102 mEq/L, 칼륨 4.3 mEq/L, 중탄산염 25 mEq/L, BUN 37 mg/dL, 포도당 99 mg/dL, 크레아티닌 2.4 mg/dL, 칼슘 12.2 mg/dL이다. 지난 한 달 동안 체중이 20파운드 감소했고 부갑상샘호르몬은 정상이며 소변 칼슘은 증가했다. 신체검사에서 허리와 사지를 만질 때 불편해한다. 이 환자 기저 질환의 가장 정확한 진단검사는 무엇인가?

## 선택지

A. 골수 생검
B. 요추 방사선촬영
C. 소변, 혈액과 뇌척수액 배양
D. 소변 단백 수치

## 해설


빈혈·신손상·골통과 고칼슘혈증은 MM을 의심하게 하며 선택지 중 골수검사 A로 클론성 형질세포를 확인하는 것이 가장 확진에 가깝다. 실제 진단은 단클론단백/유리경쇄·영상 및 골수 소견을 통합한다. 한편 고칼슘혈증에서는 PTH가 억제되어야 하므로 원문의 정상범위 PTH를 곧 비PTH성 확진이라고 해석하면 안 되며 정확한 수치·동반 원인도 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004773 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CRAB 조합의 골수검사 A 유지하되 정상 PTH는 고칼슘 상황에서 부적절하게 비억제된 값일 수 있음을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004773
