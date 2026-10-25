---
type: qbank
schema_version: 1
id: medqa-us-train-003440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6339b8eafb945508f6907ef60e50e4e867f13f79d4aee0e20c0532a5134546cc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hyperchloremic metabolic acidosis"
  - "postoperative fistula"
  - "bicarbonate loss"
  - "pancreatic surgery"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: mechanism
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

췌장암으로 췌십이지장절제술을 받은 46세 여성이 5일 후 비담즙성 구토 2회와 경한 심와부 통증을 보였다. 검사에서 Na+ 133, K+ 3.4, Cl- 115 mEq/L였고 동맥혈가스는 pH 7.20, pCO2 23 mmHg, HCO3- 10 mEq/L였다. 이 산-염기 이상의 가장 가능성 높은 원인은?

## 선택지

A. 부신 기능부전
B. 과도한 알코올 섭취
C. 약물 이상반응
D. 누공

## 해설

pH 7.20과 HCO₃⁻ 10 mEq/L는 대사성 산증이며, 음이온차는 133−(115+10)=8 mEq/L로 증가하지 않았다. 췌장 수술 후 췌장액·장액처럼 중탄산염이 많은 액체가 누공으로 소실되면 고염소혈증성 정상 음이온차 대사성 산증이 생길 수 있으므로 보기 중 D가 가장 합당하다.

구토로 위산을 잃는 현상 자체는 대사성 알칼리증을 유발하므로 현재의 산증을 설명하지 못한다. 과음에 따른 케톤산증은 보통 음이온차 증가를 보인다. 실제 누공 여부는 배액 성상과 추가 평가로 확인하며 산염기 검사만으로 해부학적 누공을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 누공 손실액을 위액으로 오해하지 않도록 췌장액/장액 중탄산염 소실로 구체화하고 AG 계산과 구토의 반대 기전 설명.
- https://site.thoracic.org/assemblies/cc/clinical-education/interpretation-of-abgs

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003440
