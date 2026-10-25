---
type: qbank
schema_version: 1
id: medqa-us-train-006147
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dac620470edd3c1153d8373a2646cc3442d5bc01c6c7f528a26179cf0d3ece47
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "포르피리아 피부근육증"
  - "소변 유로포르피린"
  - "광과민성 수포"
  - "porphyria cutanea tarda"
question_type: investigation
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 인도인 남성이 2개월 동안 양손에 생긴 수포로 내원했다. 고속도로에서 야외 포장공으로 일하며 3개월 전 시멘트 작업 중 허벅지와 허리에 날카로운 통증이 생겨 나프록센을 하루 두 번 복용해 왔다. 허리 통증은 호전되었지만 양손에 수포가 생겼다. 얼굴과 사지 피부는 정상이고 양손 등쪽에 정상 피부 위로 2mm 크기의 과다색소 침착 흉터와 수포, 그 주위에 작은 흰색 구진이 있다. 다음 중 관리의 다음 단계는 무엇인가?

## 선택지

A. 글루텐을 식단에서 제거하는 것을 고려
B. 대변잠혈검사
C. 소변 유로포르피린 수치 측정
D. 항핵항체 및 신장 패널 검사

## 해설

손등의 광노출 수포·흉터·비립종은 PCT 또는 pseudoporphyria를 시사한다. Naproxen은 pseudoporphyria를 유발할 수 있으므로 소변 uroporphyrin 등 porphyrin 검사(C)로 감별하는 것이 적절하다. PCT는 porphyrin이 증가하지만 pseudoporphyria에서는 보통 정상이다. 임상 모습만으로 PCT를 확정하거나 피부근육증으로 부르지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Naproxen 관련 pseudoporphyria 감별을 놓치고 PCT로 확정한 설명을 교체한다. 소변 porphyrin 검사 C는 유지한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/porphyria-cutanea-tarda
- 공식/학회 근거: https://www.pcds.org.uk/clinical-guidance/porphyria

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006147
