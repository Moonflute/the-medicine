---
type: qbank
schema_version: 1
id: medqa-us-train-008402
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8987eda6129fb18cbb572f4884e801e1f813ea8ad74d2c2af61d8dd0fce9f8df
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "developmental dysplasia of the hip"
  - "Ortolani sign"
  - "Pavlik harness"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cc64us7ISxIOqzoOq0gOygiCDsnbTtmJXshLHspp0gKERldmVsb3BtZW50YWwgRHlzcGxhc2lhIG9mIHRoZSBIaXApLm1k
difficulty: standard
answer: D
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

생후 2주 된 신생아가 초기 신생아 검진에서 다리 비대칭이 발견되어 추적 검사를 위해 내원했다. 산모는 26세, G3P2이며 임신은 둔위 태위로 인해 응급 하부 자궁절개 횡절개 제왕절개를 시행했다. 신생아의 머리둘레는 35cm(13.7인치)이다. 키는 60백분위수, 체중은 75백분위수이다. 심장검사는 정상이고 척추도 정상이다. 골반을 감싸고 오른쪽 엉덩이와 무릎을 굽힌 상태에서 오른쪽 엉덩이를 벌리자 만져지는 딸깍 소리가 났다. 발의 변형은 없었다. 고관절 초음파에서 뼈의 비구와 장골을 따라 그은 선 사이의 각도는 50°였다. 다음 중 가장 적절한 처치는 무엇인가?

## 선택지

A. 어머니를 안심시키고 4주 후 추적 방문을 예약한다
B. 오른쪽 고관절 폐쇄 정복술을 시행한다
C. 오른쪽 고관절 MRI를 촬영한다
D. 보조기(하네스)로 치료한다

## 해설

고관절 외전 시 느껴지는 Ortolani 정복 clunk는 탈구된 대퇴골두가 비구로 들어가는 임상적 불안정성 소견이다. 둔위 병력과 이 소견이 있어 소아정형외과 평가 및 Pavlik 하네스 치료(D)가 적절하다. α각 50°만 단독으로 보면 어린 영아의 생리적 미성숙 범주와의 구별이 필요하며 그 수치 하나가 탈구를 확정하는 것은 아니다. 임상적으로 불안정한 고관절을 안정된 경도 초음파 이형성처럼 단순 관찰하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. α각 50도만으로 신생아 탈구를 확정하지 않도록 하고, 실제 Ortolani 정복 clunk와 불안정성이 보장구 D를 지지함을 설명했다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/developmental-dislocation-dysplasia-of-the-hip-ddh/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008402
