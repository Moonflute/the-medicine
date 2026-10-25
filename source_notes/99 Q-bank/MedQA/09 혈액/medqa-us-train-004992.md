---
type: qbank
schema_version: 1
id: medqa-us-train-004992
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37ddd5863e873b704e4ca31f1daa91c4c2fc080dc1c0ed409a4667e4f6d01758
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철적아구성 빈혈"
  - "파펜하이머 소체"
  - "환상 철적아구"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
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

42세 남자가 발열감, 기침, 야간발한으로 내원했다. HIV가 있으나 항레트로바이러스제를 일관되게 복용하지 않는다. 흉부 X선에서 좌상엽 공동 병변이 보이고 인터페론감마 분비검사가 양성이어서 항균제를 시작했다. 한 달 후 혈색소 9.2 g/dL, MCV 75 μm³이며 말초혈액 도말에서 파펜하이머 소체가 보인다. 환자의 진단에 가장 정확한 검사는?

## 선택지

A. 유전자검사
B. 철분검사
C. 메틸말론산 수치
D. 프러시안 블루 염색

## 해설


Pappenheimer 소체는 적혈구 내 철 함유 과립이며 철결핍의 특징이 아니다. 항결핵 치료 뒤 소구성 빈혈에서는 isoniazid 관련 B6 대사 이상 등에 따른 철적모구성 빈혈을 고려한다. Prussian blue D로 철을 확인하며 골수에서 핵 주위 ring sideroblasts를 평가할 수 있다. 말초의 철 과립만으로 모든 병인을 확정하지 않고 약물·영양·골수 원인을 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004992 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철 함유 Pappenheimer 소체를 철결핍으로 설명한 반대 오류 교정; 철염색 D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004992
