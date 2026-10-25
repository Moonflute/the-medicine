---
type: qbank
schema_version: 1
id: medqa-us-train-000951
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16dde8bc5a418e9f83d774207f7d51b25cbaf1deaa9e2792ae5a4a0af93bd51b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "trauma"
  - "Cervical spine injury"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 남성이 집 지붕에서 떨어진 지 25분 만에 응급실로 이송되었다. 지붕을 청소하다가 미끄러져 떨어졌다. 의식 소실은 없었으며 구역질도 없다. 도착 시 환자는 의식이 명료하고 지남력이 있으며 목에는 경추 보호대(cervical collar)를 착용하고 있다. 맥박은 분당 96회, 호흡은 분당 18회, 혈압은 118/78 mm Hg이다. 진찰 결과 이마와 오른쪽 뺨에 다발성 타박상이 관찰된다. 동공은 양측이 동일하고 빛에 반응한다. 오른쪽 귀 아래에 2cm 크기의 열상이 있다. 양측 외이도에는 이상이 없다. 오른쪽 손목은 부어 있고 압통이 있으며 통증으로 인해 관절 가동 범위가 제한된다. 폐 청진상 깨끗하다. 경추 정중선 압통은 없다. 오른쪽 2번 및 3번 늑골을 따라 압통이 있다. 복부는 부드럽고 압통이 없다. 신경학적 검사상 국소적인 이상 소견은 없다. 두 개의 말초 정맥 카테터를 삽입하였다. 다음 중 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. 경추 X-선 촬영
B. 경추 CT 촬영
C. 외상 초음파 검사(FAST)
D. 오른쪽 손목 X-선 촬영

## 해설

지붕 낙상과 머리·늑골·손목 손상은 위험한 외상 및 주의분산 손상으로, 정중선 압통·국소 신경결손이 없다는 것만으로 경추를 임상적으로 해제할 수 없다. 성인의 의심 경추 골절·탈구 평가에는 CT(B)가 단순 X선보다 적절하다. CT는 골성 손상에 강하지만 지속 신경학적 이상이나 인대·척수 손상 의심이 있으면 MRI 등 추가 평가가 필요하며 모든 연부조직 손상을 CT만으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경추 CT B의 근거를 위험 낙상과 주의분산 손상으로 명확히 하고 CT가 척수·인대 등 모든 연부조직 손상을 배제한다는 해석을 제한했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng41/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000951
