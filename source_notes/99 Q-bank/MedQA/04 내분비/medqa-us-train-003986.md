---
type: qbank
schema_version: 1
id: medqa-us-train-003986
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5785c18d0c4c7dab3169851592d173e9e0f31c72b9ecfa47d3b871bbe3db1fc0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "기저 인슐린"
  - "인슐린 글라진"
  - "저혈당"
question_type: 임상증례 객관식
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

71세 남자가 욕창의 황색포도알균 감염으로 입원했다. 당뇨병이 있고 체질량지수는 45이다. 체온 37°C, 호흡수 15회/분, 맥박 67회/분, 혈압 122/98 mmHg이다. 간호사가 혈당을 측정했더니 63 mg/dL였다. 간호사는 당직 전공의에게 혈당이 이 정도일 때 처방된 글라진 인슐린을 투여해야 하는지 물었다. 전공자의 가장 적절한 대답은 무엇인가?

## 선택지

A. 예. 글라진은 지속형 인슐린이므로 다음 24시간 동안 혈당을 조절하기 위해 투여해야 합니다.
B. 아니요. 저혈당 상태에서는 글라진을 투여하면 혈당이 더 내려가므로 투여하지 않아야 합니다.
C. 아니요. 글라진은 제2형 당뇨병에 권장되지 않으므로 아마 처방 오류일 것입니다.
D. 아니요. 황색포도알균 감염 때문에 저혈당 가능성이 높으므로 회복할 때까지 글라진을 중단해야 합니다.

## 해설


글라진은 지속형 인슐린으로 24시간 동안 혈당을 낮춘다. 혈당이 63 mg/dL인 저혈당 상태에서도 글라진을 투여하면 지속적인 인슐린 작용으로 혈당이 더 떨어질 위험이 있다. 따라서 투여하면 안 된다는 것이 옳다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003986
