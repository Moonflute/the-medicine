---
type: qbank
schema_version: 1
id: medqa-us-validation-000947
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:88d9983bc7af11d75d8e256affa217f240c66a7b5cecfa4ff44474e4b9baeb99
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "빈대"
  - "구진성 두드러기"
  - "노인요양시설 집단발생"
  - "Bedbug infestation"
question_type: diagnosis
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

76세 남성이 심한 가려움성 발진으로 진료를 받으러 왔다. 지난 일주일 동안 가려움과 불편감 때문에 잠을 설쳤으며 통증은 없다. 노인요양시설에 거주하고 있고 다른 거주자 몇 명도 비슷한 증상을 보인다. 얼굴과 양쪽 무릎 아래에도 비슷한 발진이 있으며 사타구니, 생식기, 항문 주위, 엉덩이와 허벅지 피부에는 이상이 없다. 이 상태의 가장 가능성 높은 원인 병원체는?

## 선택지

A. 빈대(Cimex lectularius)
B. 사람등에유충(Dermatobia hominis)
C. 수두-대상포진 바이러스
D. 옴진드기(Sarcoptes scabiei)

## 해설

여러 거주자에게 생긴 가려움에 더해 얼굴과 무릎 아래 등 노출 부위가 침범되고 사타구니·생식기·회음부·둔부·허벅지가 보존된 분포는 빈대(Cimex lectularius, A) 물림을 가장 시사한다. 사진의 구체적인 구진 배열은 현재 확인할 수 없으므로 새로 단정하지 않는다. 시설 내 옴도 중요한 감별이지만 본문의 분포는 전형적인 성인 옴보다 빈대 쪽을 지지한다. 실제 진료에서는 피부와 침구·환경을 확인해야 하며 발진만으로 빈대를 확진하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진은 없지만 노출 부위 위주의 집단 가려움과 덮인 회음부·둔부·허벅지 보존이라는 본문 분포로 빈대 A가 가장 가능하다. 해설의 사진에 없는 작은 반점·가구 주변 군집 관찰을 삭제하고 분포에 근거한 확률적 판단임을 밝혔다.
- 공식/학회 근거: https://www.cdc.gov/bed-bugs/about/
- 공식/학회 근거: https://www.cdc.gov/dpdx/scabies/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000947
