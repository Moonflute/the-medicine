---
type: qbank
schema_version: 1
id: medqa-us-validation-000431
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7fcd15d201708ef45698f60baa68180e56db070c76d7b6d2bdc9bfb26d40926c
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "곤봉지"
  - "만성 간질성 폐질환"
  - "거대핵세포 포획"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
question_type: mechanism
difficulty: complex
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

32세 여성이 2개월간 점점 악화되는 호흡곤란으로 진료를 받으러 왔다. 전신홍반루푸스의 합병증으로 빈혈, 심낭염, 만성 간질성 폐질환이 있고 약물 순응도가 낮다. 손발톱에 심한 곤봉지가 보인다. 이 손발톱 소견의 병인은?

## 선택지

A. 패혈성 색전
B. 죽상경화성 색전
C. 손발톱바닥에 거대핵세포가 포획됨
D. 만성 저산소혈증

## 해설

곤봉지의 제안된 기전 중 하나는 폐에서 정상적으로 분해되거나 여과될 거대핵세포·혈소판 덩어리가 말초 손발톱바닥에 도달하는 것이다. 여기서 PDGF와 VEGF 등 성장인자가 방출되어 혈관과 결합조직 증식을 촉진하므로 C가 적합하다. 이는 루푸스만의 특이 병명인 ‘손발톱 이제증’을 뜻하지 않으며 단순 만성 저산소혈증만으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 곤봉지 기전에 없는 ‘손발톱 이제증’ 명칭을 제거하고 거대핵세포·성장인자 가설을 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000431
