---
type: qbank
schema_version: 1
id: medqa-us-train-007969
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ef5dd456a8dc933e7163f5ab1e69c836c8e16d098918ed75b6648bd541ebcf3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "acute low back pain"
  - "sciatica"
  - "conservative management"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남자가 딸의 이사를 도운 후 시작된 통증으로 일차 진료를 받으러 왔다. 여행을 많이 하고 가구를 옮긴 탓이라고 생각한다. 비만, 제2형 당뇨병, 군 복무 중 여러 차례 뇌진탕, 위식도역류질환 병력이 있으며 메트포르민, 리시노프릴, 오메프라졸, 종합비타민을 복용한다. 허리 아래를 촉진하면 통증이 유발되고 다리를 굽히면 하지로 뻗치는 통증이 생긴다. 심장, 폐, 복부 진찰은 정상이며 직장검사에서 항문괄약근 긴장도도 정상이다. 자기 관리, 배변, 배뇨에 어려움은 없다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. NSAIDs와 활동 허용
B. NSAIDs와 침상안정
C. 옥시코돈과 침상안정
D. 척추 MRI

## 해설

정답은 A, NSAID와 허용되는 범위의 활동 유지이다. 가구를 옮긴 뒤 발생한 급성 요통과 하지 방사통이 있지만, 본문에는 배뇨배변장애나 진행성 신경결손 등 응급 영상검사를 요구하는 소견이 제시되지 않았다. 초기에는 가능한 일상 활동을 유지하고 장기간 침상안정을 피한다. NSAID 사용 시 고령과 리시노프릴 병용 등을 고려하여 신장기능·위장관·심혈관 위험을 평가하며 최소 유효용량을 짧게 사용한다. 신경근통에서 약물 효과의 근거는 제한적이며, 진행성 근력저하·마미증후군 징후가 새로 생기면 즉시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 저열 해설은 다른 케이스. 급성 요통/방사통의 활동 유지 및 위험을 고려한 단기간 NSAID로 교체. A 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng59/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007969
