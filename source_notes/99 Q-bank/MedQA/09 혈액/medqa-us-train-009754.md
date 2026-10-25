---
type: qbank
schema_version: 1
id: medqa-us-train-009754
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:452239c5d98a0ed926fb28d0af6314329c8ac394cf4b7848966cd1a6a8bad264
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "자가면역 용혈성 빈혈"
  - "용혈"
  - "직접 쿰스 검사"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남성이 피로, 운동 시 호흡곤란, 귀에서 심장박동이 울리는 느낌이 2일간 지속되어 응급실에 내원했다. 최근 급성 상기도 감염을 앓았다고 한다. 은퇴한 자동차 판매원이며 동반자와 열대 지방 여행을 즐긴다. 과거력으로 통풍, 고혈압, 고콜레스테롤혈증, 제2형 당뇨병, 얼굴과 목의 다발성 기저세포암이 있다. 현재 하루 한 갑의 담배를 피우고 하루에 맥주 6캔을 마시며 불법 약물은 사용하지 않는다. 활력징후는 체온 36.7°C, 혈압 126/74 mmHg, 심박수 분당 111회, 호흡수 분당 23회이다. 진찰에서 맥박은 강하게 뛰고, 안색은 창백하며 공막 황달이 보인다. 비장은 중등도로 커져 있다. 실내 공기에서 산소포화도는 처음 81%였고, 안면 마스크로 분당 8L의 산소가 새로 필요했다. 혈색소는 7.1 g/dL이고 총 빌리루빈이 상승해 있다. 다음 중 진단에 도움이 되는 검사실 검사는?

## 선택지

A. 혈청 페리틴
B. 방사성알레르기흡착검사(RAST)
C. 혈색소 전기영동
D. 직접 쿰스 검사

## 해설


빈혈, 황달, 비장비대는 용혈을 시사한다. 선택지 중 직접 항글로불린검사(DAT, D)가 적혈구에 결합한 IgG 또는 보체를 검출하여 면역성 용혈 감별에 도움이 된다. 정상 DAT가 모든 용혈을 배제하는 것은 아니다. 빈혈만으로 SpO₂ 81%를 설명할 수 없으므로 저산소증의 동반 심폐 원인도 별도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009754 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 용혈에서 DAT D는 IgG만 아니라 적혈구 결합 보체도 검출. 심한 저산소증을 빈혈 자체로만 설명하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009754
