---
type: qbank
schema_version: 1
id: medqa-us-train-006650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a51c80380c32400a0009fecdba779eea53f55501604d619abe92b81257d2561
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "고고도 폐부종"
  - "저산소성 폐혈관수축"
  - "고산병"
  - "high altitude pulmonary edema"
related_disease_slugs: []
question_type: mechanism
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

17세 남아가 해발 3,400m인 페루 안카시 지역 레쿠아이에서 21일간 해발 0m인 리마에 머물다 돌아온 지 48시간 후 응급실에 내원했다. 과거력은 없고 안정 시 기침, 호흡곤란, 객혈, 흉통 및 구토가 있다. 혈압은 90/60 mm Hg, 심박수는 분당 149회, 호흡수는 분당 37회, 체온은 36.5°C(97.7°F), 산소포화도는 71%이다. 빈호흡, 구강주위 청색증, 늑간 함몰 및 양쪽 폐의 미만성 수포음이 보인다. 혈색소 19.2 g/dL, 헤마토크릿 60%, 백혈구 13,000(띠중성구 12%, 분절중성구 78%)이며 요소 25 mg/dL, 크레아티닌 0.96 mg/dL이다. 흉부 X선 사진이 제시되어 있다. 다음 중 이 환자 상태에 대해 참인 설명은?

## 선택지

A. 빠르고 지속적인 고도 상승 후 교감신경 활성 감소가 일시적으로 심박출량, 혈압, 심박수 및 정맥 긴장도를 증가시킨다
B. 압력 구배가 크게 증가하면 조직 저산소증이 발생할 수 있다
C. 저산소증에 대한 순변화로 뇌혈류가 감소한다
D. 폐혈관은 저산소증에 반응하여 이완한다

## 해설

고산으로 재상승한 뒤 심한 저산소·수포음·객혈은 재진입 고산폐부종을 시사한다. 저산소성 폐혈관수축의 불균일성과 높은 폐모세혈관 압력이 장벽누출/폐부종을 일으켜 가스교환을 악화시킨다는 점에서 제시 중 B가 적합하다. 폐혈관은 저산소에 확장되는 것이 아니며 교감활성/뇌혈류 변화도 A/C와 다르다. 누락 CXR소견을 임의로 판독하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고산재상승의 저산소성 폐혈관수축과 장벽누출을 조직저산소 단일 압력구배보다 명확히 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006650
