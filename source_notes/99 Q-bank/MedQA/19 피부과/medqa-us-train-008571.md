---
type: qbank
schema_version: 1
id: medqa-us-train-008571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e42a161514e64cd09944176463a4612726f28aa9ea6ae38e376dfe403bca01f8
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "tinea capitis"
  - "Trichophyton tonsurans"
  - "griseofulvin"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
difficulty: standard
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

9세 아프리카계 미국인 남아가 한 달 동안 지속된 두피 오른쪽의 가려운 발진과 점점 진행하는 탈모로 어머니와 함께 내원했다. 중대한 질환 병력은 없다. 3개월 전 동생이 두부 이증으로 치료받았다. 초등학교에 다니지만 발진이 부끄러워 지난 일주일 동안 학교에 가지 않았다. 불안해 보인다. 두피 사진이 제시되어 있으며 후두 림프절병증이 있다. 나머지 검사는 정상이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 아연 피리치온 함유 샴푸
B. 국소 무피로신
C. 경구 그리세오풀빈
D. 국소 퍼메트린

## 해설

소아의 소양성 두피 병변·진행성 탈모·후두 림프절병증은 두부백선을 지지하여 경구 griseofulvin(C)이 선지 중 적절하다. 두피 진균증은 국소제만으로 충분하지 않으며 균종·지역에 따라 다른 전신 항진균제를 선택할 수도 있다. 실제 사진이나 진균 배양이 없어 원형 결절 모양이나 T. tonsurans 감염을 확정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두부백선 C는 탈모·소양·후두 림프절로 지지되지만 보지 못한 결절·원형 경계와 특정 균종을 창작한 설명을 수정한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/tinea-capitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008571
