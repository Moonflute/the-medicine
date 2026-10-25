---
type: qbank
schema_version: 1
id: medqa-us-train-007006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5d4a16070891cc522106053820159f308985c73f06f36e3f910f85ab8d7786d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "당뇨병성 신장질환"
  - "미세알부민뇨"
  - "고혈압"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남자가 2개월 동안 지속된 피로와 잦은 소변으로 내원했다. 계속 목이 말라 평소보다 물을 많이 마신다고 한다. 간헐적으로 시야가 흐려지는 증상이 있어 8주 동안 운전을 피했다. 이전 진료에서 혈압이 높았지만 그 외에는 건강하다. 바쁜 업무 일정 때문에 주로 패스트푸드를 먹는다. 담배와 술은 하지 않는다. 키는 178cm(5피트 10인치), 체중은 109kg(240lb), BMI는 34 kg/m²이다. 맥박은 75회/분, 혈압은 148/95 mmHg이다. 심폐검사에서 이상은 없다. 검사 결과는 다음과 같다.
당화혈색소 6.8%
혈청 포도당 180 mg/dL
크레아티닌 1.0 mg/dL
총 콜레스테롤 220 mg/dL
HDL 콜레스테롤 50 mg/dL
중성지방 140 mg/dL
소변: 혈액 음성, 포도당 2+, 단백 1+, 케톤 음성
다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 인슐린 치료
B. ACE 억제제 치료
C. 아스피린 치료
D. 저탄수화물 식이

## 해설

반복고혈압과 당뇨·단백뇨는 제시중 ACE억제제 B를 선택할 근거다. 실제로 UACR정량/지속성·Cr/K와 혈압반응을 확인하며 생활습관·혈당치료도 병행한다. 모든당뇨환자에서 다른약보다 무조건우월한 단독치료라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복HTN+당뇨/단백뇨 B는 지지하되 ACE억제제가 모든당뇨의유일최강약이라는 과장 한정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007006
