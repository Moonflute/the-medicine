---
type: qbank
schema_version: 1
id: medqa-us-train-004707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55af6e758e0d66e79febcf956286a2fee43363743b9dc60a574eec2c55e31301
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "태반조기박리"
  - "임신 중 출혈"
  - "태아 곤란"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 여성 임신 3회, 출산 2회가 임신 32주에 갑자기 시작된 심한 복통과 오심으로 응급실에 왔다. 피가 섞이지 않은 구토를 한 번 했다. 임신은 순조로웠지만 지난 산전 진료에서 혈압이 150/90 mm Hg였다. 첫 아이는 질식분만했고 둘째는 비안심 태아심박수 때문에 하부 자궁절개 횡제왕절개로 분만했다. 불안하고 창백해 보인다. 체온은 36.1°C (96°F), 맥박은 분당 115회, 혈압은 92/65 mm Hg이다. 사지가 차갑고 축축하다. 골반검사에서 자궁이 단단하고 압통이 있으며 자궁경부는 30% 소실되고 1cm 개대, 선진부는 -1 station이다. 태아심박수는 분당 100회이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 자궁 파열
B. 전치혈관 파열
C. 태반조기박리
D. 유착태반

## 해설

갑작스러운 복통, 단단하고 압통 있는 자궁, 모체 쇼크 소견과 태아 서맥은 태반조기박리(C)를 가장 시사한다. 출혈이 자궁 내에 가려지면 외부 질출혈이 뚜렷하지 않을 수도 있다. 본문은 태아 혈압이 아니라 태아 심박수를 제시했으며, 비출혈성 구토는 박리의 특징적 진단 근거가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아혈압을측정한것처럼쓴오류·비출혈성구토가특징이라는오류삭제. 단단한압통자궁/모체쇼크/태아서맥으로C.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004707
