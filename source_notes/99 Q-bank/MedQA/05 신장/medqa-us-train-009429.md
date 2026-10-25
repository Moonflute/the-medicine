---
type: qbank
schema_version: 1
id: medqa-us-train-009429
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6a681f20e66d08ebd63c48e0452a17f65a0a1e8ffc049d5aadaa523dba12d8a
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "NSAID-induced acute kidney injury"
  - "NSAID 유발 급성 신손상"
  - "medication toxicity"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "없는 ACE억제제 복용을 삭제하고 모든 약물 무차별 중단이라는 위험한 선지를 원인 약물 재평가로 한정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

72세 남자가 행동 변화로 응급실에 왔다. 아내가 911에 신고했고 구급대가 데려왔다. 졸리고 반응이 둔해 보였다고 한다. 제2형 당뇨병, 비만, 골관절염, 편두통 병력이 있으며 나프록센, 인슐린, 아토르바스타틴, 메트포르민, 이부프로펜, 오메프라졸, 어유를 복용한다. 체온 99.5°F(37.5°C), 혈압 170/115 mmHg, 맥박 80회/분, 호흡수 19회/분, 산소포화도 98%이다. 졸리고 GCS는 11이며 양쪽 폐기저부 수포음과 경동맥으로 방사되는 수축기 잡음이 있다. 혈색소 12 g/dL, 백혈구 9,500/mm³, 혈소판 199,000/mm³, Na⁺ 144, Cl⁻ 98, K⁺ 4.0, HCO₃⁻ 16 mEq/L, BUN 44 mg/dL, 혈당 202 mg/dL, 크레아티닌 2.7 mg/dL, 칼슘 9.2 mg/dL이다. 정맥 수액을 시작했다. 다음 단계로 가장 적절한 처치는 무엇인가?

## 선택지

A. 칼륨
B. 중탄산염
C. 인슐린과 칼륨
D. NSAID를 중단하고 metformin을 보류하는 등 기존 약물을 재평가

## 해설

중복 NSAID 노출과 신기능 저하가 있으므로 NSAID를 중단하고, 산증이 동반된 동안 metformin도 보류하며 약물을 재평가한다. 제시된 약물에 ACE억제제는 없다. GCS11·수포음·음이온차 산증은 즉각적인 안정화와 lactate·ketone 등 원인 평가가 필요한 소견이며 약 중단만으로 충분하지 않다. Insulin 등 모든 필요한 약을 일률적으로 중단한다는 뜻이 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009429

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 없는 ACE억제제 복용을 삭제하고 모든 약물 무차별 중단이라는 위험한 선지를 원인 약물 재평가로 한정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b8004451-7b26-425b-b5ea-cbb1b08e30e3
