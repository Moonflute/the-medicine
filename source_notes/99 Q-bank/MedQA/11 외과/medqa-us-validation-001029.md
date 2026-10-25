---
type: qbank
schema_version: 1
id: medqa-us-validation-001029
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:c8348bd590951de71a8a4e73e340e6658a00b6681bcbd739e024e3b85ddeb92c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "화농성 관절염"
  - "관절액 그람양성 구균"
  - "무릎 관절염"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
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

6세 여아가 3일간 지속된 오른쪽 무릎 통증으로 응급실에 왔다. 걷기를 거부하며 무릎이 따뜻하고 붉고 굽히려 하면 심하게 운다. 증상은 놀다가 넘어진 뒤 시작되었다. 아버지는 혈우병 A로 경미한 외상 후 반복 관절통·종창을 겪었고 환아 예방접종은 최신이다. 체온38.1°C, 맥박120회/분, 호흡수21회/분이다. 3주 전 인후통으로 페니실린 V를 복용했다. 가장 가능성 높은 추가 검사 소견은?

## 선택지

A. 관절액에서 그람양성 구균
B. 프로트롬빈 시간 연장
C. 항연쇄구균 용혈소 O 역가 증가
D. 관절액에서 마름모꼴 결정

## 해설


열감·발적과 매우 아픈 수동운동, 보행 거부와 발열은 급성 세균성 관절염을 우선 의심하게 한다. 소아의 주요 원인인 S. aureus 등 그람양성 구균이 관절액에서 검출될 수 있어 A가 가장 적절하다. 골수염이 반드시 먼저 있어야 생기는 것은 아니며 관절액 Gram 염색 음성도 감염을 배제하지 않는다. 치료받은 인후염 과거력이나 아버지의 혈우병만으로 현재의 열성 단관절염을 설명하지 말고 관절액·혈액배양 등 신속 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001029 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 필수적으로 골수염 후 관절염이 생긴다는 오류를 제거하고 누락된 발열·외상·가족력을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001029
