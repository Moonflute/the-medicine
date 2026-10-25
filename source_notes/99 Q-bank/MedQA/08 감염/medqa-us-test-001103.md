---
type: qbank
schema_version: 1
id: medqa-us-test-001103
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8e1b4cef5e113b872bf3d95f83c6567ae20f52ac9d74130b3008fb09d40da0d2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 B형간염"
  - "바이러스 간염"
  - "HBc 항체"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQu2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBCKS5tZA
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 대학생이 지속적인 피로로 진료를 받으러 왔다. 수주 동안 이상하게 피곤하고 학업을 끝내기 어려웠으며 간헐적 오심과 구토로 체중이 감소했다. 교환학생이고 술을 자주 마시며 대마초를 피우고 여러 파트너와 보호되지 않은 성관계를 한다. 혈청 총 빌리루빈 2.0 mg/dL, AST 85 U/L, ALT 92 U/L였고 소변은 호박색-갈색이며 대마초, 암페타민, 코카인이 양성이었다. 생식기 진찰은 거부했다. 가장 적절한 진단검사는?

## 선택지

A. CAGE 질문
B. 요도 면봉 배양
C. 바이러스 핵심항체
D. 바이러스 표면항체

## 해설


성접촉 위험과 간효소·빌리루빈 상승에서 HBV 감염을 평가할 수 있고 선지 중 core 항체(C)가 감염 표지에 해당한다. 급성 감염을 보려면 IgM anti-HBc를 해석하며 total anti-HBc 하나로 급성 여부가 확정되지는 않는다. 실제로는 HBsAg·anti-HBs·anti-HBc와 임상 소견을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001103 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-HBc C가 선지상 HBV 감염 표지이나 total/IgM 구별 없이 급성간염 확진 최상검사라는 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001103
