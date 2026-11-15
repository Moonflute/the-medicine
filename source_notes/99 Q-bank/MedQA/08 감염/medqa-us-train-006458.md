---
type: qbank
schema_version: 1
id: medqa-us-train-006458
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2889a64994ad2219f5ef369c36a1a8aa51e26d576817b3b58f673a767d84b8b3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "가스괴저"
  - "괴사성 근막염"
  - "클로스트리디움 퍼프린젠스"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qwgOyKpCDqtLTsoIAgKEdhcyBHYW5ncmVuZSkubWQ
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
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
---

# MedQA US 임상문제

## 문제

농기구에 종아리를 다친 남성이 12시간 만에 심한 통증, 출혈성 물집과 피하 염발음을 보인다. 혈압은 84/53mmHg다. 소생술과 광범위 정맥 항생제를 시작하면서 감염 부위에 대해 할 처치는?

## 선택지

A. 침상에서 물집만 배액한 뒤 반응을 본다
B. MRI 결과를 확인한 뒤 수술 여부를 정한다
C. 응급 수술로 탐색하고 괴사한 조직을 제거한다
D. 고압산소치료 뒤 수술을 결정한다

## 해설


급속한 진행, 통증과 쇼크는 괴사성 연조직 감염을 시사한다. 영상이나 보조요법 때문에 응급 탐색과 변연절제술을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006458 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Gas gangrene의 C.perfringens A 유지; 모든 괴사근막염의 흔한 단일균이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006458
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5754343/
