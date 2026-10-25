---
type: qbank
schema_version: 1
id: medqa-us-validation-001157
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e34efb74d0c778f330c8892543f33fbbe43f48b43deb18093be5f5e52a5a9c4d
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "진주종"
  - "만성 중이염"
  - "시그모이드정맥 혈전증"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: complex
answer: B
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

14세 여아가 2시간 동안 후두부 두통, 구역과 구토가 있어 응급실에 왔다. 수년간 왼쪽 귀 감염과 분비물이 반복되고 항균제에 반응이 나빴으며 왼쪽 귀의 청력이 둔하다. 고막 천공, 육아조직과 후상방의 흰색 각질성 잔해가 있고 MRI에서 왼쪽 시그모이드정맥 혈전증과 중이의 고신호 병변이 보인다. 현재 상태의 가장 가능성 높은 원인은?

## 선택지

A. 청신경초종
B. 진주종
C. 만성 장액성 중이염
D. 만성 화농성 중이염

## 해설

만성 이루, 후상방 고막의 백색 각질성 잔해와 고막 천공은 B, 진주종을 강하게 지지한다. 진주종은 각화 편평상피와 각질 잔해가 축적되어 주변 뼈를 침식할 수 있는 병변이지 콜레노이드라는 종양이 아니다. 이차 감염이 퍼지면 시그모이드정맥동 혈전증 같은 두개내 합병증이 생길 수 있다. 필요한 영상 소견이 본문에 서술되어 있어 MRI 그림 자체가 없어도 문항 판단이 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진주종을 콜레노이드 종양으로 잘못 표현한 해설을 각화 편평상피와 각질 축적의 병변으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001157
