---
type: qbank
schema_version: 1
id: medqa-us-train-003755
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a1a98a6ce6fe9ab5279f46253e23cdebb3f8ef4112997926bab4d4250a0242a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Whipple disease"
  - "malabsorption"
  - "Tropheryma whipplei"
  - "small bowel biopsy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-2cmO2UjOuzkSAoV2hpcHBsZSBEaXNlYXNlKS5tZA
question_type: diagnosis
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

25세 남성이 평생 반복된 피로, 복통, 설사, 체중감소로 내원했다. 과거 교통사고 후 수혈 중 아나필락시스로 에피네프린 치료를 받은 병력이 있다. 대변은 많고 악취가 나며 신경학적 검사에서 운동조절 저하와 보행실조가 있었다. 빈혈과 용혈 소견, 경골 스트레스 골절이 보였다. 다음 중 상태를 확진하는 가장 좋은 검사는?

## 선택지

A. 대변 ELISA
B. 비타민 E 수치
C. 비타민 B12와 엽산 수치
D. 장벽 생검

## 해설

평생 지속된 흡수장애에 골질환, 지방용해성 vitamin 결핍 가능성, 빈혈이 동반되어 celiac disease 등을 의심한다. 과거 수혈 아나필락시스는 IgA결핍 가능성을 시사하되 확진 소견은 아니다. 선택지 중 소장점막 생검 D가 장병증 확인에 적절하며 villous atrophy·crypt hyperplasia·상피내 림프구 증가 등을 평가한다. 혈청 IgA와 적절한 IgG 기반 검사를 병행하고 IgA 음성검사만으로 배제하지 않는다. 이 사례를 특정 근거 없이 Whipple병으로 확정한 기존 해설은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 평생 흡수장애·수혈 아나필락시스는 IgA결핍 관련 celiac 가능성을 시사하는데 해설이 Whipple로 오연결. 원문 중요 병력 복원.
- https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/diagnosis
- https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/digestive-diseases/celiac-disease-health-care-professionals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003755
