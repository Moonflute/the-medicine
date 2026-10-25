---
type: qbank
schema_version: 1
id: medqa-us-train-008806
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ff268f7e9016bd0f2c8a1e0d0bdbd28b6f82a818a0a7642e21c568e873b2d42
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "secondary adrenal insufficiency"
  - "glucocorticoid withdrawal"
  - "hyponatremia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOywqOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadIChTZWNvbmRhcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
---

# MedQA US 임상문제

## 문제

69세 여성이 5일 동안 지속된 피로와 기면으로 응급실에 내원했다. 최근 3일 동안 쇠약과 오심도 있었다. 유육종증, 주요우울장애, 고혈압이 있고 5년 전 뇌졸중을 앓았다. 아스피린, 니페디핀, 프레드니솔론, 플루옥세틴, 로수바스타틴을 복용했지만 해외여행 때문에 7일 동안 약을 먹지 않았다. 체온 36.1°C(96.9°F), 맥박 95회/분, 혈압 85/65mmHg이다. 기면 상태지만 지남력은 정상이다. 다른 신체검사 이상은 없다. 혈색소 13.4g/dL, 백혈구 9,600/mm³이고 혈청 코르티솔과 ACTH가 모두 감소되어 있다. 다음 중 추가로 나타날 가능성이 높은 검사 이상은 무엇인가?

## 선택지

A. 고칼륨혈증
B. 고혈당
C. 저칼륨혈증
D. 저나트륨혈증

## 해설


정답 D. 장기 prednisolone 복용 후 갑작스러운 중단은 시상하부–뇌하수체–부신 축 억제 상태에서 중추성 부신기능저하를 드러낼 수 있다. Cortisol 결핍은 ADH 억제를 풀고 자유수 배설을 떨어뜨려 저나트륨혈증을 유발한다. ADH가 억제되어 물이 줄어든다는 설명은 반대다. Aldosterone은 상대적으로 보존되어 원발성 부신기능저하처럼 고칼륨이 필수적이지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008806 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: cortisol 결핍의 ADH 증가/자유수 배설 저하를 반대로 설명한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008806
