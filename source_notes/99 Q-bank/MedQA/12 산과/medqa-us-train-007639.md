---
type: qbank
schema_version: 1
id: medqa-us-train-007639
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6bf2ba1b9ec4e631918ee9a51e77710640ae9d2008cdd0eef0ecf53e031020e3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "active-phase arrest"
  - "labor arrest"
  - "cesarean delivery"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2ZnOyEseq4sCDsoJXsp4Ag7J6l7JWgIChBY3RpdmUgUGhhc2UgQXJyZXN0IERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 39주인 30세 여성(임신 2회, 출산 1회)이 통증성 자궁수축과 양막 파수를 호소하며 병원에 왔다. 몇 시간 전 시작된 자궁수축이 현재 4분마다 발생한다고 한다. 남편은 “병원으로 출발하기 한 시간 전에 양수가 터졌다”고 말한다. 질 출혈은 없고 태동은 정상이다. 산전 진찰을 모두 받았으며 임신 합병증은 없었다. 만성질환은 없고 산전 비타민만 복용한다. 혈압은 110/75 mm Hg, 맥박은 82회/분이다. 태아 심박동은 140회/분이며 변이도가 중등도이고 감속은 없다. 자궁경부는 7 cm 개대, 100% 소실되었고 태아 머리는 -1 station이다. 환자는 경막외 마취를 받지 않기로 했다. 다음 중 어떤 상황에서 제왕절개 분만을 고려해야 하는가?

## 선택지

A. 1시간 후에도 자궁경부가 7 cm이고 태아 머리가 0 station이며 자궁수축이 5분마다 발생한다
B. 2시간 후에도 자궁경부가 7 cm이고 태아 머리가 -1 station이며 자궁수축이 7분마다 발생한다
C. 4시간 후에도 자궁경부가 7 cm이고 태아 머리가 0 station이며 자궁수축이 2분마다 발생한다
D. 2시간 후 자궁경부가 10 cm, 태아 머리가 +1 station이고 자궁수축이 2분마다 발생한다

## 해설

파수 상태에서 ≥6 cm 개대 후 충분한 자궁수축에도 4시간 동안 경부 변화가 없으면 활동기 정지를 고려하므로 C가 의도된 답이다. C에서는 선진부가 -1에서 0으로 내려왔지만 개대는 7 cm로 유지된다. 단순 수축 간격만으로 충분한 수축력을 확정하지 않으며 실제로 강도·촉진 치료를 평가한다. 불충분 수축에서는 일반적으로 더 긴 관찰/옥시토신 기준을 적용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 하강이 전혀 없다는 오류 및 활동기 정지의 수축 강도 요건 수정.
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007639
