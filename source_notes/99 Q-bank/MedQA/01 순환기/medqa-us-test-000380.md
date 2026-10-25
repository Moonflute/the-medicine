---
type: qbank
schema_version: 1
id: medqa-us-test-000380
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6133dff7e7e94a7c4f89b6f7837eb453d4003dfd395cd5d78425498d55ef5a7c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장눌림증"
  - "심낭삼출"
  - "맥박압 감소"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 6시간 동안 점점 심해지는 호흡곤란으로 응급실에 왔다. 지난 5일 동안 누워 있거나 깊이 숨쉴 때 악화되는 흉부 중앙의 간헐적 찌르는 통증이 있었다. 2주 동안 콧물과 마른기침도 있었다. 고콜레스테롤혈증과 고혈압이 있고 34갑년의 흡연력이 있다. 아토르바스타틴, 에날라프릴, 히드로클로로티아지드를 복용 중이다. 창백하고 식은땀을 흘렸으며 체온 38.3°C(100.9°F), 맥박 105회/분, 호흡 25회/분이었다. 혈압은 호기 시 107/72 mmHg, 흡기 시 86/65 mmHg였다. 경정맥 팽창과 무릎 아래 함요부종이 있었다. 다음 중 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. 심방과 심실의 확장
B. 관상동맥 폐색
C. 심낭 공간의 체액 축적
D. 심낭의 섬유성 비후

## 해설

정답은 C이다. 심낭염을 시사하는 흉통 뒤 호흡곤란·경정맥 팽창이 발생하고 흡기 때 수축기혈압이 107에서 86 mmHg로 21 mmHg 떨어진다. 이는 과도한 흡기 수축기혈압 감소인 기이맥으로 심낭액 축적에 의한 심장압전을 시사한다. 수축기와 이완기 혈압의 차이인 맥압을 뜻하지 않으며 본문에 제시되지 않은 심음 소견을 만들어 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡기 수축기혈압 21 mmHg 감소를 맥압 변화로 오해한 설명 및 존재하지 않는 청진 소견 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000380
