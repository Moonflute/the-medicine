---
type: qbank
schema_version: 1
id: medqa-us-train-005796
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9fca33130a2d3d4ee0d0b979a9f10ef7869359d6a5caf0d983314286ee3dfe1
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "소아 신증후군"
  - "미세변화병"
  - "선택적 단백뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-uvuOyEuOuzgO2ZlOuzkSAoTWluaW1hbCBDaGFuZ2UgRGlzZWFzZSkubWQ
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
related_drug_slugs: []
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 얼굴 부종이 전신 부종으로 진행되어 부모와 함께 응급실에 왔다. 오심과 복통도 호소한다. 일주일 전까지 건강했으나 처음에는 눈 주위가 붓고 며칠 후 다리가 붓기 시작했다. 임신 39주에 정상 질식분만으로 태어났고 예방접종과 발달은 정상이다. 혈압은 104/60 mmHg, 심박수는 분당 90회, 호흡수는 분당 25회, 체온은 37.1°C(98.8°F)이다. 얼굴 부종, 복부 이동성 탁음 및 양측 무릎까지의 다리 부종이 있다. 소변검사지에서 단백 4+이고 소변검사에서 지방 원주가 보인다. 혈청 알부민은 2.2 g/dL이다. 다음 중 이 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 미세변화병
B. 급성 사구체신염
C. 울혈성 심부전
D. 단백소실성 장병증

## 해설

눈 주위 부종으로 시작한 전신 부종, 복수, 단백뇨 4+, 지방 원주와 알부민 2.2 g/dL는 신증후군을 나타낸다. 이 연령의 소아에서 가장 흔한 원인은 A, 미세변화병이다. 사구체 여과장벽 손상에 따른 단백 소실과 저알부민혈증이 부종을 설명한다.

급성 사구체신염은 혈뇨·적혈구 원주 등 신염성 단서가 더 전형적이다. 울혈성 심부전이나 단백소실성 장병증은 이 정도의 신성 단백뇨와 지방 원주를 가장 잘 설명하지 못한다. 요붕증은 희석뇨와 다뇨의 문제로, 이 문항의 부종성 신증후군과는 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 중추성 요붕증/데스모프레신 해설을 소아 신증후군의 미세변화병 설명으로 교체. 원정답 A 유지 및 데스모프레신 오연결 제거.
- https://www.niddk.nih.gov/health-information/kidney-disease/children/nephrotic-syndrome-children
- https://kdigo.org/wp-content/uploads/2025/04/KDIGO-2025-Guideline-for-Nephrotic-Syndrome-in-Children.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005796
