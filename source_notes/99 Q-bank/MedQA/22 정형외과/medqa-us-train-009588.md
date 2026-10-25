---
type: qbank
schema_version: 1
id: medqa-us-train-009588
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27081de33381fb3ddbf403738083988b0928285b8a7c34f2d87a0174a155f643
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "muscle strain"
  - "근육 염좌"
  - "acute low back pain"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남자가 요통으로 응급실에 왔다. 어제 시작되어 점점 악화되며 움직이고 들어 올릴 때 악화되고 휴식과 이부프로펜으로 호전된다. 흡연과 정맥주사 약물 사용력이 있고 2일 전 마지막으로 사용했다. 무거운 상자를 든 것과 관련 있다고 생각한다. 체온 99.3°F(37.4°C), 혈압 122/88 mmHg, 맥박 77회/분, 호흡수 14회/분, 산소포화도 99%이다. 척추 왼쪽 옆에 국소 통증이 있지만 정중선 압통은 없고 나머지 진찰과 CRP는 정상이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 압박골절
B. 경막외 농양
C. 경막외혈종
D. 근육 염좌

## 해설

무거운 물건을 든 뒤 하루 동안 생긴 척추 옆 국소 통증, 움직임으로 악화·휴식으로 완화, 정상 신경학적 진찰과 CRP는 주어진 선지 중 근육 염좌(D)를 가장 지지한다. 하지만 2일 전 정맥주사 약물을 사용한 것은 척추 감염의 위험인자이며 정상 체온·CRP·정중선 압통 부재만으로 초기 경막외 농양을 완전히 배제할 수 없다. 경과 악화·발열·신경결손 또는 감염 의심이 있으면 즉시 재평가와 적절한 MRI를 고려해야 한다. 가장 가능성 높은 진단 선택을 무조건적인 무검사·귀가 지침으로 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 근육 염좌 D가 가장 가능하지만 최근 IVDU라는 감염 위험을 무시하고 정상 CRP로 감염을 확정 배제하지 않도록 설명을 제한했다.
- 공식/학회 근거: https://acsearch.acr.org/docs/3148734/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009588
