---
type: qbank
schema_version: 1
id: medqa-us-train-006785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a714fee25496160cdc2b7a04deb0ba7a8f369e659f88a6f78b27c5d2da5e2488
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "기관지확장증"
  - "객혈"
  - "전차선 징후"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
question_type: diagnosis
difficulty: complex
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

65세 남성이 요양원에서 피가 많이 섞인 가래를 기침해 응급실로 이송되었다. 최근 상기도 감염으로 항생제 치료를 받았다. 오랫동안 생산성 기침이 있었고 3년 전 뇌졸중 이후 악화되었다. 뇌졸중 전까지 40년 동안 하루 한 갑을 피웠으나 이후 금연했다. 괴로워하고 숨이 차 보인다. 체온은 38°C(100.4°F), 맥박은 분당 92회, 혈압은 145/85 mm Hg, 실내 공기 산소포화도는 92%이다. 곤봉지와 입술 청색증이 있고 흉부에서 거친 수포음이 들린다. 흉부 X선에서 오른쪽 하폐야의 투과도 증가와 전차선 모양 음영이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 기관지확장증
B. 흡인성 폐렴
C. 폐색전증
D. 폐암

## 해설

만성화농성기침·객혈·곤봉지와 tram-track음영은 기관지확장증 A를 지지한다. Tram-track은 두꺼워진 기관지벽이 평행선처럼 보이는 소견이며 traction기관지확장과 같은 뜻은 아니다. 단순 과팽창만으로 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기관지확장 A의 tram-track을 traction과 동일시한 용어 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006785
