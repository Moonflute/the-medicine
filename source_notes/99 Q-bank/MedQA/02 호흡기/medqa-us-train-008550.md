---
type: qbank
schema_version: 1
id: medqa-us-train-008550
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0e9e81c3653b10e96cf1d79705b4c0757e4be8c0994a44d33e8099124279490
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "pulmonary embolism"
  - "deep vein thrombosis"
  - "respiratory alkalosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 여성이 6시간 동안 지속된 호흡곤란으로 응급실에 내원했다. 기침, 코막힘이나 콧물, 재채기, 객혈, 두근거림은 없다. 만성 호흡기나 심혈관 질환 병력은 없지만 지난 5일 동안 왼쪽 다리에 경련이 자주 있었다고 한다. 폐경 후 호르몬 대체요법을 1년째 받고 있다. 체온 38.3°C(100.9°F), 맥박 116회/분, 혈압 136/84mmHg, 호흡수 24회/분이다. 왼쪽 종아리에 부종과 압통이 있다. 흉부 청진에서 왼쪽 견갑골 아래와 견갑부에 수포음이 들린다. 심음은 정상이고 심잡음은 없다. 다음 중 이 환자 상태의 병태생리에 가장 기여한 기전은 무엇인가?

## 선택지

A. 폐포-동맥 산소분압 차이 감소
B. 폐혈관층에서 혈관확장성 신경호르몬 물질 분비
C. 폐포 과환기
D. 우심실 전부하 증가

## 해설

호르몬요법, 종아리 부종과 압통, 급성 호흡곤란은 정맥혈전색전증을 시사한다. 폐색전증에서는 관류 장애에 따른 V/Q 불균형과 생리적 사강 증가가 발생하며 A–a 산소분압 차이는 보통 증가한다. 과환기가 흔히 동반되어 PaCO2가 감소할 수 있으므로 제시된 선택지 중 C가 적합하다. 과환기 때문에 A–a 차이가 감소하는 것이 주된 병태생리는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐색전증에서 A–a 차이가 감소한다는 역방향 기전을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008550
