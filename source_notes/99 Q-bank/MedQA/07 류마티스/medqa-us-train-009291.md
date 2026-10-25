---
type: qbank
schema_version: 1
id: medqa-us-train-009291
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca260461207fe0369352125202dc85a490c6395412cec314a0c3972bd0a1c4f2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "IgA vasculitis"
  - "IgA 혈관염"
  - "leukocytoclastic vasculitis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

7세 여아가 하루 동안 지속된 복통과 구토로 응급실에 왔다. 통증은 간헐적이고 전반적이며 식후 악화된다. 묽거나 피가 섞인 변은 없다. 6일 전부터 다리에 가렵지 않은 발진과 발목 부종이 있었다. 2주 전 인후통으로 경구 아목시실린을 복용했다. 예방접종은 최신이다. 활력징후는 정상이다. 하지에 눌러도 창백해지지 않는 융기된 홍반성 구진이 있고 왼쪽 발목은 붓고 따뜻하며 통증으로 운동 범위가 제한된다. 복부에서 반발통이나 근육 경직 없이 좌하복부 압통이 있다. 장음은 정상이며 대변 잠혈은 양성이다. 혈색소 10.1 g/dL, 백혈구 11,800/mm³, 혈소판 431,000/mm³, ESR 45 mm/시간, 혈당 72 mg/dL, 크레아티닌 0.9 mg/dL이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 가족성 지중해열
B. 약물 유발 과민증후군
C. 소아 특발성 관절염
D. 백혈구파괴성 혈관염

## 해설


최근 상기도감염 뒤 정상 또는 증가한 혈소판 상태의 비창백성 촉지자반, 발목관절염과 복통·잠혈양성은 IgA vasculitis(Henoch–Schönlein purpura)에 부합한다. 피부의 전형적인 조직소견은 leukocytoclastic vasculitis이므로 보기 D가 맞다. 약물 복용 뒤 생겼다는 시간관계만으로 DRESS를 진단하지 않으며 발진의 혈관염 양상과 동반 증상을 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009291 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 만들어진 질환명 히스톤-구스코증을 IgA vasculitis(Henoch-Schonlein)로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009291
