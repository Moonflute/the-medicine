---
type: qbank
schema_version: 1
id: medqa-us-train-007053
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5ffacb4e71d9194f56964c64f1cedba5c73ac0e1000dc0bf8517ac19d551da0
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "소아 배꼽탈장"
  - "정복 가능한 탈장"
  - "관찰"
related_disease_slugs:
  - MTEg7Jm46rO8L-uwsOq8vSDtg4jsnqUgKFVtYmlsaWNhbCBIZXJuaWEpLm1k
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14개월 남아가 걷기 시작한 지 2주 후부터 더 뚜렷해진 복부 돌출로 어머니와 함께 내원했다. 울 때 돌출이 커지고 누우면 사라진다. 임신 39주에 하부 자궁 횡절개 제왕절개로 태어났고 발달 단계는 모두 정상이다. 출생 이후 모유 수유를 했다. 건강하고 활동적으로 보이며 활력징후는 정상이다. 신체검사에서 압통이 없고 쉽게 정복되는 1cm 크기의 복부 중앙 종괴가 보인다. 나머지 진찰은 정상이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 선택적 개방 복원술
B. 안심시키고 관찰한다
C. 복부 초음파
D. 복부 CT

## 해설


건강한14개월 영아의 울 때 커지고 누우면 사라지는 작은 무통성·환원성 제대탈장은 안심시키고 관찰하는 B가 적절하다. 작은 제대탈장은 성장하면서 자연 폐쇄될 수 있어 이 시점의 일률적 수술이나 CT가 필요하지 않다. 전형적 진찰 소견이면 관찰 전 초음파가 필수인 것도 아니다. 통증·비환원·구토 등 감돈 징후가 생기거나 성장 후에도 지속되면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007053 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 관찰 전에 초음파가 필수라고 한 정답-해설 불일치를 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.facs.org/for-patients/the-day-of-your-surgery/pediatric-umbilical-hernia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007053
