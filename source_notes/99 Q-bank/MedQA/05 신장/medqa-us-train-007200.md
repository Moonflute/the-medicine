---
type: qbank
schema_version: 1
id: medqa-us-train-007200
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c87dae771d6a6c77ff76abd604a688a43b76486b05400fe6d905cc8185126451
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "HIV 관련 신장병"
  - "국소 분절성 사구체경화증"
  - "신증후군"
  - "아프리카계 유전적 소인"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "Dipstick 2+만으로 신증후군을 확진하고 인종만으로 병리를 단정하는 과장 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

37세 아프리카계 미국인 남자가 약 6개월 전부터 시작된 피로와 오심으로 일차진료의를 찾아왔다. 증상이 서서히 악화되어 이제는 3층 아파트 계단을 쉬지 않고 오르기 어렵다. 조절되지 않는 HIV 감염과 과거 헤로인 중독 병력이 있다. 체온은 36.9°C(98.4°F), 혈압 118/72 mmHg, 맥박 75회/분이다. 신체검사에서 고도 비만과 양쪽 하지 1+ 함요부종이 보인다. 소변 시험지에서 단백뇨 2+이고 소변검사는 다른 이상이 없다. 이 환자의 상태를 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 아밀로이드증
B. 미세변화병
C. 국소 분절성 사구체경화증
D. 막증식성 사구체신염

## 해설

조절되지 않는 HIV 감염과 비만은 FSGS를 지지하는 배경이며 HIV 관련 신병증은 collapsing 형태를 보일 수 있다. 선택지 중 FSGS가 적합하지만 인종만으로 진단하지 않는다. 단백뇨 2+와 부종만으로 신증후군을 확진할 수 없으므로 단백 정량·albumin·신기능과 필요 생검으로 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007200

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: Dipstick 2+만으로 신증후군을 확진하고 인종만으로 병리를 단정하는 과장 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
