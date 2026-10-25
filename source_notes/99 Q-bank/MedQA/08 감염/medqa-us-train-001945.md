---
type: qbank
schema_version: 1
id: medqa-us-train-001945
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8cdcd99839c2bb2ab790d4e0342d787b8612baf99e233fcb45ba1048275e1382
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "bacterial meningitis"
  - "Listeria monocytogenes"
  - "empiric ampicillin"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWVyb3BlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

62세 남성이 노인요양시설에서 의식저하와 발열이 발견되어 응급실에 왔다. 대장암으로 종양 절제수술을 받은 병력이 있다. 혈압 130/80 mm Hg, 맥박 102/min, 호흡 20/min, 체온 38.8°C (101.8°F)이며 발진은 없고 목 경직, 혼란과 눈부심이 있으나 국소 신경결손은 없다. 두부 CT는 정상이고 요추천자 후 ceftriaxone과 vancomycin을 시작했다. 다음 중 추가해야 할 항균제는 무엇인가?

## 선택지

A. Ampicillin
B. Clindamycin
C. Trimethoprim-sulfamethoxazole (TMP-SMX)
D. Meropenem

## 해설


62세 환자의 발열, 목경직, 의식변화와 눈부심은 급성 세균성 수막염을 의심하게 한다. 60세 초과는 Listeria monocytogenes 위험요인으로, ceftriaxone+vancomycin에 ampicillin을 추가하는 A가 적절하다. Listeria는 cephalosporin으로 충분히 치료되지 않는다. CSF·혈액배양 결과에 따라 치료를 조정한다. 기존 MEN2A와 갑상선 수질암 설명은 이 사례와 무관한 오연결이었다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001945 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수막염 질문에 MEN2A/수질암 해설이 연결된 명백한 오연결을 Listeria 경험적 치료로 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001945
