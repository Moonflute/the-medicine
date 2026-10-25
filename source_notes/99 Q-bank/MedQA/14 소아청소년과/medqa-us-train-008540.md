---
type: qbank
schema_version: 1
id: medqa-us-train-008540
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0783b19b429e1b75801cb3daacda574b6efca80d3fb8ad570a06bda140ee687
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Enterobius vermicularis"
  - "pinworm infection"
  - "perianal pruritus"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 여아가 며칠 동안 생식기 가려움을 호소해 어머니와 함께 소아과에 내원했다. 어머니는 지난 일주일 동안 아이가 엉덩이와 항문을 긁는 것을 보았고, 이제는 사타구니도 매우 심하게 긁는다고 한다. 증상은 밤에 더 심한 것 같다. 그 밖에는 건강하고 예방접종도 최신이며 전신 상태는 양호하다. 최근 중이염으로 아목시실린 치료를 받았다. 최근 심하고 물 같은 설사를 했으나 호전되는 중이다. 체온 98.5°F(36.9°C), 혈압 111/70mmHg, 맥박 83회/분, 호흡수 16회/분, 실내 공기 산소포화도 98%이다. 신체검사에서 항문과 질 근처에 긁힌 자국이 보인다. 다음 중 가장 가능성 높은 감염 원인은 무엇인가?

## 선택지

A. 요충(Enterobius vermicularis)
B. Gardnerella vaginalis
C. 람블편모충(Giardia lamblia)
D. 단순포진바이러스

## 해설

밤에 심한 항문·회음부 가려움은 요충(Enterobius vermicularis, A)에 특징적이다. 암컷의 항문 주변 산란과 관련되며 외음부까지 증상이 이어질 수 있다. 회충(Ascaris)과는 다른 기생충이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Enterobius를 회충으로 오역한 해설을 요충으로 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008540
