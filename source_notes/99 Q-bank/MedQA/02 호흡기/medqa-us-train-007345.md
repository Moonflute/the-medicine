---
type: qbank
schema_version: 1
id: medqa-us-train-007345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24fb4deb8a311092d7472309249c7291a301e1022ddade3fbedcfd57532d5ce9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "급성 호흡곤란 증후군"
  - "기계환기"
  - "산소화"
  - "PEEP"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 25세 여자가 점점 악화되는 호흡곤란으로 입원했다. 미열이 있다. 입원 당시 혈압은 100/70 mmHg, 심박수 111회/분, 호흡수 20회/분, 체온 38.1℃(100.6℉), 실내 공기 산소포화도 90%이다. 진찰에서 양측 폐의 폐포 호흡음이 감소하고 하엽에서 수포음이 들린다. 흉부 단순촬영에서 양쪽 하엽이 혼탁하다. 적절한 치료에도 호흡상태가 악화되어 중환자실로 옮겨 기계환기를 시행했다. 다음 중 어떤 인공호흡기 설정을 조절하면 산소화만 영향을 받는가?

## 선택지

A. 일회호흡량과 호흡수
B. 일회호흡량과 흡입산소분율
C. 흡입산소분율과 호기말양압
D. 흡입산소분율과 호흡수

## 해설

보기 중 산소화를 주로 조절하는 인공호흡기 변수는 C, 흡입산소분율(FiO₂)과 호기말양압(PEEP)이다. FiO₂를 높이면 흡입 산소 농도가 증가하며, PEEP는 허탈된 폐포의 재개방과 호기 말 폐포 유지로 폐내 단락을 줄여 산소화를 개선할 수 있다. 일회호흡량과 호흡수는 분당환기량 및 폐포환기를 통해 주로 CO₂ 배출을 조절한다.

문항의 '산소화만'은 이 기본적인 설정 구분을 묻는 시험 표현이다. 실제로 PEEP는 과팽창·사강·혈역학 및 CO₂ 제거에도 영향을 줄 수 있으므로 다른 생리 효과가 전혀 없다는 뜻은 아니다. 환자별 폐역학과 혈역학을 감시하면서 설정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FiO2만 산소화에 관여하고 PEEP는 환기라는 모순 해설을 교체. 원정답 C 유지, 산소화/환기의 시험적 구분과 실제 PEEP의 생리적 영향 구별. vesicular breath sounds 번역 오류 수정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007345
