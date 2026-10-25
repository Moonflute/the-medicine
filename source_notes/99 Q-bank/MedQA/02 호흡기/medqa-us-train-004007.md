---
type: qbank
schema_version: 1
id: medqa-us-train-004007
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f958aa0ffe72bda90c50b7c916bdfb6c7084d7264d48f264edbe73323effadf1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "유육종증"
  - "비건락성 육아종"
  - "베릴륨 노출"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
question_type: 임상증례 객관식
difficulty: simple
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

68세 남자가 점점 심해지는 호흡곤란과 기침으로 내원했다. 흉부 X선에서 폐문 림프절이 두드러지고 산재한 결절성 침윤이 보인다. 후자의 생검에서 비건락성 육아종이 확인되었다. 이 환자가 다음 중 어떤 물질에 노출된 병력이 있을 가능성이 가장 높은가?

## 선택지

A. 유기성 먼지
B. 석탄 먼지
C. 베릴륨
D. 실리카

## 해설

만성 beryllium disease는 폐문림프절병증·간질결절·비건락성 육아종으로 sarcoidosis와 유사하여 노출 선택지 중 C가 부합한다. 비건락성 육아종은 sarcoidosis·과민성폐렴 등에서도 보여 beryllium에 특이적이지 않다. 직업력과 특이검사로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비건락성육아종은 beryllium에 특이적이지 않음. 노출선지 C를 유지하고 감별을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004007
