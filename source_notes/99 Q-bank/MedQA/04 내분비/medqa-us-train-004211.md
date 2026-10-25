---
type: qbank
schema_version: 1
id: medqa-us-train-004211
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b47321c627da112344c7ae053c2c33a6212054b6f5856bd5f57cc9f14901281
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 말초신경병증"
  - "신경병성 통증"
  - "벤라팍신"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여자가 4개월간 지속된 발의 저림과 작열감으로 추적검사를 받으러 왔다. 휴식과 수면 중 통증이 더 심하다. 고콜레스테롤혈증과 제2형 당뇨병이 있으며 인슐린, 메트포르민, 아토르바스타틴을 복용한다. 33년간 하루 한 갑을 피웠다. 체온 37°C, 맥박 88회/분, 혈압 124/88 mmHg이다. 사지 근력과 근긴장도는 정상이고 양쪽 발바닥의 침, 가벼운 촉각, 진동 감각이 감소되어 있다. 양측 발목반사는 1+, 상완이두근과 삼두근 반사는 2+, 바빈스키 징후는 음성이다. 헤모글로빈 11.2 g/dL, 평균적혈구용적 93 μm³, HbA1c 8.2%, 혈당 188 mg/dL이다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 발목-상완지수
B. 조영증강 척추 MRI
C. 비타민 B12 치료
D. 벤라팍신 치료

## 해설

대칭성 원위부 감각저하·작열통·발목반사 감소는 통증성 당뇨신경병증에 부합하여 선택지 D의 venlafaxine이 통증조절에 가능하다. SNRI·gabapentinoid·TCA 등 여러 계열 중 동반질환/이상반응을 고려해 선택한다. 혈당관리·발관리와 metformin 관련 B12결핍 등 다른 원인 평가도 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Venlafaxine D는 SNRI 선택지이나 유일1차약이라는 표현을 교정.
- https://doi.org/10.1212/WNL.0000000000013038

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004211
