---
type: qbank
schema_version: 1
id: medqa-us-train-007742
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e6fd89437a3a24722ecdd9d6ad18dd3cdca3aaf2d798df5c94c7f4116e7af68
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pertussis"
  - "paroxysmal cough"
  - "macrolide therapy"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

23세 남자가 기침으로 학생보건센터에 내원했다. 기침이 발작적으로 이어진 뒤 숨을 헐떡인다. 예방접종은 최신 상태이고 전반적으로 건강하다. 최근 시험 때문에 스트레스를 더 많이 받았다고 한다. 체온 101.0°F(38.3°C), 혈압 125/65 mmHg, 맥박 105회/분, 호흡수 14회/분, 실내 공기 산소포화도 98%이다. 헤모글로빈 12 g/dL, 헤마토크릿 36%, 백혈구 13,500/mm³(림프구증가), 혈소판 197,000/mm³이다. 양측 폐 청진은 깨끗하다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 아지스로마이신
B. 흉부 방사선촬영
C. Bordetella pertussis PCR
D. 페니실린

## 해설


발작기침 뒤 흡기 헐떡임과 림프구증가는 백일해를 강하게 의심하게 한다. 의심이 높으면 검체 PCR을 시행하되 치료를 지연하지 않고 선택지 A azithromycin을 시작하는 것이 적절하다. 과거 접종은 감염을 완전히 배제하지 않는다. 기침 기간·접촉자/고위험 영아 노출을 확인하여 현행 치료/격리·PEP를 계획한다. 이 사례에는 통역 필요나 가족의 진단 비공개 요청이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007742 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 백일해 문항에 통역/가족 비공개 윤리 해설이 붙은 명백한 오연결을 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007742
