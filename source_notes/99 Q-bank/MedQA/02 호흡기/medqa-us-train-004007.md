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
question_type: investigation
difficulty: simple
answer: A
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

68세 남성이 마른기침과 운동 시 호흡곤란으로 왔다. 항공기 금속부품 공장에서 일했고 베릴륨 합금을 장기간 가공했다. 폐문 림프절이 크고 폐 조직에 비괴사성 육아종이 있다. 감염 검사는 음성이다. 사르코이드증과 감별하는 데 가장 도움이 되는 검사는?

## 선택지

A. 베릴륨 림프구 증식검사(BeLPT)
B. 혈청 ACE 농도만 확인한다
C. 일산화탄소 확산능 검사만 시행한다
D. 혈청 아스페르길루스 특이 IgE 검사

## 해설

만성 베릴륨병은 폐문 림프절 비대와 비괴사성 육아종이 나타나 사르코이드증과 유사하다. 직업성 노출력을 확인하고 BeLPT로 베릴륨에 대한 감작을 평가한다. 육아종 모양이나 ACE 수치만으로 둘을 구별할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비건락성육아종은 beryllium에 특이적이지 않음. 노출선지 C를 유지하고 감별을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004007
- https://www.thoracic.org/statements/resources/eold/beryllium-full-text.pdf
