---
type: qbank
schema_version: 1
id: medqa-us-train-008718
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:650cd83f89ca7bfba9798c93a5025841cbfae4380b4f9efe913f027b4d82d863
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "renal artery stenosis"
  - "renovascular hypertension"
  - "hypokalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGltZXBpcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여성이 이뇨제와 칼슘통로차단제를 복용해도 혈압이 170/110 mmHg이다. 리시노프릴을 추가하고 2주 뒤 혈청 크레아티닌이 0.9에서 2.1 mg/dL로 올랐다. 설사·탈수나 NSAID 사용력은 없고 배에서 혈관 잡음이 들린다. 어떤 원인을 우선 의심해야 하는가?

## 선택지

A. 당뇨병성 콩팥병의 점진적 진행
B. 다낭성 콩팥병
C. 급성 사구체신염
D. 양측 신동맥 협착

## 해설

여러 약으로도 조절되지 않는 혈압, 복부 혈관 잡음, ACE 억제제 시작 직후 큰 폭의 크레아티닌 상승은 신혈관성 고혈압을 시사한다. 특히 양쪽 신동맥이 좁으면 안지오텐신 II 차단 뒤 사구체 여과가 크게 줄 수 있다. 급성 콩팥손상의 다른 원인도 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원발성 알도스테론증/생리식염수 부하 해설을 ACE 억제제 후 급성 신기능 악화와 신동맥협착 설명으로 교체. 원정답 D 유지.
- https://www.niddk.nih.gov/health-information/kidney-disease/renal-artery-stenosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008718
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
- https://doi.org/10.1016/j.kint.2023.10.016
