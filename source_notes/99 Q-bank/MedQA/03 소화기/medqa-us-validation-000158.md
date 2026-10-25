---
type: qbank
schema_version: 1
id: medqa-us-validation-000158
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8d0bf46925eba55d12510244e8c32042d084f7241be48201d39c985d99a27bca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "ASCA 항체"
  - "구강 궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 남성이 4일간 복통, 설사, 쇠약, 주관적 발열과 체중 11파운드 감소로 응급실에 왔다. 셀리악병 병력이 있고 전반적 복통, 증가된 장음, 다발성 얕고 통증성 구강궤양, 대변 잠혈 양성이 있었다. 가장 가능성 높은 진단을 설명하는 소견은?

## 선택지

A. ANCA 양성
B. ASCA 양성
C. 항문관의 확장된 혈관 구조
D. 점막 손상

## 해설


정답 B. 구강 아프타, 복통·설사와 체중감소/잠혈은 Crohn병을 고려하게 하며 ASCA 양성은 이 질환과 연관된 소견이다. 다만 ASCA의 민감도·특이도가 충분하지 않아 단독 확진검사가 아니며 4일의 급성 설사만으로 만성 염증성 장질환을 확정할 수 없다. 본 문항은 선택지 중 Crohn병과의 전형적 연관성을 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000158 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 4일 증상만으로 Crohn 확진/ASCA를 확진 검사로 오해하지 않도록 항체 연관성 B 범위를 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000158
