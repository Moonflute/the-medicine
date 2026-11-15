---
type: qbank
schema_version: 1
id: medqa-us-test-000298
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f9625c38bdb6712afe71f96d85648e24bf6834b4efeb721c993c02ccf9b74639
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "항이뇨호르몬 부적절 분비 증후군"
  - "저나트륨혈증"
  - "경막하혈종"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 여성이 경막하혈종 치료 중 혈청 Na 129 mmol/L로 확인됐다. 신경학적 증상은 없고 체액량은 정상이다. 혈청은 저장성이지만 소변은 농축돼 있고 신장·갑상선·부신기능은 정상이다. 이뇨제는 사용하지 않는다. 항이뇨 부적절 증후군으로 판단할 때 초기 처치는?

## 선택지

A. 3% 고장성 식염수 반복 투여
B. 톨밥탄 즉시 시작
C. 데스모프레신 정주
D. 수분 제한과 나트륨 추적

## 해설

중증 증상이 없는 정상체액량 항이뇨 부적절 증후군에서는 우선 수분을 제한하며 혈청 나트륨과 원인을 추적한다. 발작 등 중증 증상이 있는 경우의 응급 치료와 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: SIADH가 의심되지 않는다는 모순을 교정하고 thiazide/체액량이라는 진단 제한을 추가.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000298
- https://www.kjim.org/journal/view.php?number=170730
