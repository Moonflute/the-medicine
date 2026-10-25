---
type: qbank
schema_version: 1
id: medqa-us-train-003001
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c418f83c7e41d22553c377e9bed44b9259ce8947eee1c7a219110412aacda4f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "multiple myeloma"
  - "lytic bone lesions"
  - "CRAB features"
  - "monoclonal plasma cell disorder"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

72세 남성이 3개월 동안 심한 허리 통증과 피로로 내원했다. 통증은 활동할 때 심해지고 특별한 병력은 없다. 통증 완화를 위해 이부프로펜을 복용하며 흡연은 하지 않는다. 혈압 105/65 mmHg, 맥박 86회/분, 호흡수 16회/분, 체온 36.7°C이며 결막은 창백하다. 첫 번째 요추를 촉진하면 압통이 있고 심장, 폐, 복부 진찰에는 이상이 없다. 혈색소 9 g/dL, 평균적혈구용적 90 μm³, 백혈구 5,500/mm³, 혈소판 350,000/mm³, 칼슘 11.5 mg/dL, BUN 54 mg/dL, 크레아티닌 2.5 mg/dL이다. 요천추 CT에서 첫 번째 요추와 골반에 여러 개의 저밀도 병변이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 전이성 전립선암
B. 다발골수종
C. 이차성 부갑상샘기능항진증
D. 발덴스트롬 거대글로불린혈증

## 해설


빈혈, 고칼슘혈증, 신기능저하와 CT에 기술된 다발성 골용해 병변은 다발골수종 B를 강하게 시사한다. CRAB는 hyperCalcemia, Renal impairment, Anemia, Bone lesions를 뜻하며 단백뇨는 이 약어의 별도 구성요소가 아니다. 이 문항에는 단백뇨 결과도 제시되지 않았다. 전립선암의 전형적 골전이는 골형성성이고 Waldenstrom에서는 이런 골용해 병변이 비전형적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003001 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CRAB에 단백뇨를 포함한 오류와 실제 제공되지 않은 단백뇨 소견을 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003001
