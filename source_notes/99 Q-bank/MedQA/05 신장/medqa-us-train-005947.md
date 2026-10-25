---
type: qbank
schema_version: 1
id: medqa-us-train-005947
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:980d258c6cb72cd328a0080aa161a00a1d3988e1ef046f1c097789e4144060a3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "상염색체 우성 다낭성 신장질환"
  - "가족 선별검사"
  - "신장 초음파"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 어두운 소변과 간헐적인 옆구리 통증으로 내원했다. 특별한 병력 없이 건강하게 지냈다. 체온은 97.5°F(36.4°C), 혈압은 182/112 mmHg, 맥박은 분당 85회, 호흡수는 분당 15회, 산소포화도는 98%이다. 양측 옆구리에 종괴가 만져지고 늑골척추각을 두드리면 불편하다. 소변검사에서 세균이나 아질산염 없이 적혈구가 양성이다. 다음 중 가족 구성원이 같은 질환에 걸렸는지 선별하기 위해 사용해야 할 진단법은 무엇인가?

## 선택지

A. 복부 CT
B. 신장 생검
C. 신장 초음파
D. 배뇨방광요도조영술

## 해설

고혈압, 혈뇨, 옆구리 통증과 양측 신장 종대는 상염색체우성 다낭신장병(ADPKD)을 의심하게 한다. 위험가족을 평가하는 첫 영상검사로 보기 중 C, 신장 초음파가 적절하다.

가족에게 질환의 유전 양상과 검사 결과의 의미를 상담하고, 연령별 낭종 기준을 적용한다. 특히 젊은 사람에서 정상 초음파가 질환을 완전히 배제하지 못할 수 있다. 가족의 나이·상황을 고려하지 않고 모든 미성년자에게 일괄 검사하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. ADPKD 가족 선별 초음파의 적절성을 유지하되 성인 위험가족의 상담·연령별 해석 범위를 명시.
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2025-ADPKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005947
