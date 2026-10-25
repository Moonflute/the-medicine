---
type: qbank
schema_version: 1
id: medqa-us-train-007121
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:057361c35030de25081444b4c4b8ac738ad8ed707e4c250014233bc7597c6986
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "대뇌겸하 탈출"
  - "경막하 혈종"
  - "전대뇌동맥 압박"
  - "Subfalcine herniation"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 여자가 스키를 타다 넘어져 머리를 부딪힌 지 4시간 후 응급실에 내원했다. 처음에는 치료를 거부했지만 한 시간 전부터 심한 두통, 오심, 오른쪽 다리의 근력저하가 발생했다. 골감소증이 있다. 유일한 복용약은 매일 먹는 종합비타민이다. 시야 변화는 없고 사람·시간·장소에 대한 지남력은 정상이다. 체온은 37.2°C(99°F), 맥박은 72회/분, 호흡수는 18회/분으로 규칙적이고 혈압은 128/75 mmHg이다. 두개골 왼쪽에 5cm 멍이 있다. 동공은 양측 동일하게 둥글고 빛과 조절에 반응한다. 오른쪽 무릎과 발의 근력은 0/5이다. 이 환자의 증상을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 편도 탈출
B. 갈고리탈출(uncal herniation)
C. 대뇌겸하 탈출
D. 두개외 탈출

## 해설

좌측의 종괴효과로 대상회가 대뇌겸 아래로 밀리면 전대뇌동맥 영역이 압박되어 우측 하지 우세 약화가 나타날 수 있다. 보기 중 대뇌겸하 탈출(C)이 이 양상에 가장 잘 맞는다. 갈고리탈출은 동측 제3뇌신경 압박에 의한 동공 이상과 연결되고, 편도탈출은 연수 압박을 초래할 수 있다. 영상 없이 실제 탈출을 확진했다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대뇌겸하 탈출 C 유지. 전대뇌동맥 압박과 반대측 하지 우세 결손이라는 해부 근거를 보완하고 uncal 번역 수정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007121
