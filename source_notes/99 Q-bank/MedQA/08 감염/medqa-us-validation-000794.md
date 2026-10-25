---
type: qbank
schema_version: 1
id: medqa-us-validation-000794
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:95cf927ddb02474bd0bced0651ff0a7bbb4e86361e7104a35907381227b7373c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "경험적 광범위 항생제"
  - "덱사메타손"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

55세 여성이 발열, 생산성 기침, 혼란, 광공포, 목 경직으로 응급실에 왔다. 뇌척수액은 혼탁하고 개방압 35 cmH₂O, 호중구 1,500/μL, 단백질 50 mg/dL, 포도당 30 mg/dL이다. 가장 적절한 초기 치료는?

## 선택지

A. 아시클로버
B. 세프트리악손과 덱사메타손
C. 반코마이신, 세프트리악손, 암피실린과 덱사메타손
D. 반코마이신, 세프트리악손과 암피실린

## 해설


급성 혼란·경부강직과 호중구 우세 저당 CSF는 세균성 수막염을 시사한다. 선택지 중 ceftriaxone·vancomycin·ampicillin과 dexamethasone(C)이 내성 폐렴구균 및 Listeria를 포함하는 경험적 조합이다. 일부 지침은 50세 초과에 Listeria 보완을 권고하며, WHO 2025는 60세 초과·임신·면역억제 등 위험인자를 사용하므로 지역 지침과 위험에 맞춘다. Dexamethasone은 가능하면 첫 항생제 직전 또는 동시에 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000794 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 세균성 수막염의 항균제+초기 dexamethasone C 유지. >50세 Listeria 포함 기준을 쓰는 미국식/전문학회 경로와 최신 WHO의 위험기반 원칙을 구분해 모든55세에 동일 기준처럼 과장하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6734471/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000794
