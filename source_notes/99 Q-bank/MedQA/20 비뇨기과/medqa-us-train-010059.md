---
type: qbank
schema_version: 1
id: medqa-us-train-010059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e391f612292ba1cb8f5b861fbf1e7c5a65b05fc279a67bdec3dffab24a1d25d
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "양성 전립선 비대증"
  - "피나스테리드"
  - "전립선 비대"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

82세 남성이 특히 밤에 잦은 배뇨와 배뇨 시작 곤란으로 내원했다. 2개월 전부터 테라조신을 시작한 뒤 증상이 약간 호전되었다고 한다. 안정형 협심증 병력이 있고 니트로글리세린, 메토프롤롤, 아스피린을 복용한다. 혈압 125/70 mmHg, 맥박 분당 72회이다. 방광은 만져지지 않고 항문괄약근 긴장도와 구해면체근 반사는 정상이다. 직장수지검사에서 압통이나 변동이 없는 손가락 세 마디 크기의 전립선이 만져진다. 24시간 소변량은 2.5L이다. 요검사에서 단백, 적혈구, 혈색소, 세균은 음성이고 백혈구는 고배율 시야당 1~2개이다. 초음파에서 전립선은 약 50g, 배뇨 후 잔뇨량 120mL, 수신증 없는 방광벽 섬유주가 보인다. 수분 섭취 조절과 함께 현재 추가할 가장 적절한 약물은?

## 선택지

A. 피나스테리드
B. 옥시부티닌
C. 타다라필
D. 탐스로신

## 해설

50 g 전립선과 기존 terazosin에 불충분한 반응이 있어 A, finasteride를 추가하여 장기적으로 전립선 크기와 진행 위험을 줄일 수 있다. Tadalafil은 LUTS에 효과가 있을 수 있으나 이 환자는 nitroglycerin을 사용하므로 금기이다. Tamsulosin을 기존 alpha 차단제에 단순 중복 추가하지 않으며 oxybutynin은 잔뇨·배뇨곤란 위험을 고려해야 한다. 다른 약들이 본질적으로 모두 효과가 없는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 추가 finasteride A 유지, 다른 약 모두 무효라는 설명을 nitrate-tadalafil 금기·alpha 중복·저류 위험으로 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010059
