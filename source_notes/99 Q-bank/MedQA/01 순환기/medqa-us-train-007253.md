---
type: qbank
schema_version: 1
id: medqa-us-train-007253
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d16644aaf66a919024839af25f0fa067b94a8bc0e5a79fdaeb9c7f3a1e407185
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심혈관질환 위험"
  - "당뇨병"
  - "중등도-고강도 스타틴"
  - "아토르바스타틴"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MaXJhZ2x1dGlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 아프리카계 미국인 남자가 추적 진료를 위해 내원했다. 만성 고혈압과 제2형 당뇨병 병력이 있으며 관상동맥질환은 없다. 아스피린, 히드로클로로티아지드, 로사르탄, 메트포르민을 복용한다. 매일 운동하고 건강한 식사를 하며 담배는 피우지 않는다. 술은 적당히 마신다. 가족 중 만성질환 병력은 없다. 혈압은 반복 측정에서도 125/75 mmHg이다. BMI는 23 kg/m²이다. 신체검사에서 이상은 없다. 검사 결과 당화혈색소 6.9%, 총 콜레스테롤 176 mg/dL, LDL-C 105 mg/dL, HDL-C 35 mg/dL, 중성지방 175 mg/dL이다. 10년 심혈관질환 위험도는 18.7%이다. 식이와 운동을 포함한 생활습관 교정을 시행했다. 다음 중 가장 적절한 약물치료 단계는 무엇인가?

## 선택지

A. 아토르바스타틴
B. 페노피브레이트
C. 리라글루타이드
D. 메토프롤롤

## 해설

63세 환자의 제2형 당뇨병, 고혈압 및 LDL 105 mg/dL는 선택지 A의 아토르바스타틴 사용을 지지한다. 현행 2026년 지침의 PREVENT 위험 구분은 과거 PCE 등의 구분과 다르므로, 계산식이 제시되지 않은 18.7%를 무조건 중등도 위험으로 표시하지 않는다. 치료 강도와 목표는 위험인자와 치료 반응에 따라 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Statin A는유지하되산식미상의18.7%를현행중등도라고고정한위험분류교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007253
