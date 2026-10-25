---
type: qbank
schema_version: 1
id: medqa-us-train-004665
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a26711a98db924f72d2ea4062189f3551502b4bedd8dc0214862d5d8962dd9d
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "급성 요추 추간판 탈출증"
  - "좌골신경통"
  - "요통"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-y2lOqwhO2MkO2DiOy2nOymnSAoSGVybmlhdGVkIEludGVydmVydGVicmFsIERpc2MpLm1k
difficulty: standard
answer: D
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

37세 남성이 3일 전 무거운 상자를 들다가 시작된 요통으로 내원했다. 통증은 오른쪽 엉덩이에서 허벅지 뒤쪽으로 방사되고 허리를 굽히면 악화된다. 통증 강도는 10점 만점에 6점이다. 천식과 소아기에 치료받지 않은 류마티스열로 인한 승모판 폐쇄부전이 있다. 40갑년 흡연력이 있고 가족력으로 류마티스 관절염, 당뇨병과 고혈압이 있다. 활력징후는 정상 범위이다. 신체검사에서 무릎을 펴지 않고 다리를 들어 올리게 하면 통증이 유발된다. 발뒤꿈치로 걷기 어렵다. 말초 맥박은 양측에서 동일하고 빠르게 만져진다. 탈모, 체온 변화나 말초혈관질환 소견은 없다. 이 환자에게 가장 적절한 관리 방법은 무엇인가?

## 선택지

A. 스텐트 삽입
B. 관찰
C. 수술 의뢰
D. 일반의약품 NSAID

## 해설

원정답은 D, 일반의약품 NSAID이다. 무거운 물건을 든 뒤 시작된 급성 요통과 뒤쪽 허벅지 방사통은 요추 신경근 자극을 시사한다. 다만 발뒤꿈치 보행이 어렵다는 것은 발목 배측굴곡 약화 가능성을 뜻하므로 '신경학적 이상이 없다'고 설명해서는 안 된다. 실제 진료에서는 근력·감각·반사와 진행 여부를 확인한다. 중증 또는 진행성 운동결손, 마미증후군 징후가 없다면 초기에는 활동 유지 등 보존적 관리를 고려하며, NSAID는 효과 근거의 한계 및 위장관·신장·심혈관 위험을 설명하고 가능한 짧게 사용한다. 중증·진행성 근력저하나 배뇨배변장애가 있다면 이 답을 적용하지 않고 긴급 전문 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에 발뒤꿈치 보행장애가 있는데 신경학적 이상이 없다고 한 해설 오류. 3일 신경근통의 보존치료 답 D는 유지하되 운동신경 평가와 진행성 결손의 긴급 의뢰 명시.
- 영어 원문의 하지거상 설명도 표준 straight-leg raise의 무릎 신전 자세와 어긋나는 표현이 있다. 원문을 임의 재설계하지 않고, 방사통과 발뒤꿈치 보행장애를 중심으로 검토하였다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng59/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004665
