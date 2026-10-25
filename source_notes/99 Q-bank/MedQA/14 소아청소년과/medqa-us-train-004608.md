---
type: qbank
schema_version: 1
id: medqa-us-train-004608
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:223c6dbed5bfaca0c555a845f44ee3f382dedc919eb94ad28f2be0255c7acd8e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "모유수유 부족 황달"
  - "신생아 비포합 고빌리루빈혈증"
  - "탈수"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
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

생후 4일 된 남아가 이틀 전부터 피부가 점점 노랗게 변해 내원했다. 임신 38주에 태어났고 출생체중은 2,466g (5lb 7oz), 현재 체중은 2,198g (4lb 14oz)이다. 임신 중 고혈압이 합병되었다. 어머니는 3시간마다 모유수유를 하고 하루에 젖은 기저귀를 3개 갈아준다고 한다. 체온은 37°C (98.6°F), 맥박은 분당 165회, 호흡수는 분당 53회이다. 진찰에서 황달과 공막 황달이 보이고 대천문이 약간 함몰되어 있다. 복부는 부드럽고 압통이 없으며 장기비대는 없다. 검사에서 헤마토크릿 58%, 총 빌리루빈 20 mg/dL, 결합 빌리루빈 0.8 mg/dL이다. 이 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 태아 적혈구의 분해 증가
B. 모유 내 β-글루쿠로니다제 증가
C. 불충분한 모유수유
D. 헤모글로빈 알파 사슬 결함

## 해설

생후 4일에 약 10.9% 체중 감소, 적은 소변과 함몰된 대천문은 유효 수유량 부족을 지지한다. 낮은 섭취에 따른 장간순환 증가로 비결합 빌리루빈이 상승할 수 있어 C가 적절하며 AAP는 이를 suboptimal intake hyperbilirubinemia로 구분한다. 3시간마다 수유한다는 빈도만으로 양이 충분하거나 부족하다고 결정할 수 없다. 탈수와 TSB 20 mg/dL를 무해한 생리적 황달로 단정하지 않으며 치료 역치는 정확한 생후 시간·재태연령·위험요인에 따라 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 10% 넘는 체중 감소·탈수와 TSB 20을 단순 생리적 황달로 설명하고 3시간 간격 수유를 무조건 낮은 빈도로 본 오류를 교정했다.
- https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/Clinical-Practice-Guideline-Revision-Management-of

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004608
