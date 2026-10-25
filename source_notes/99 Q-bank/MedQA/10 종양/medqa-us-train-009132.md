---
type: qbank
schema_version: 1
id: medqa-us-train-009132
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c75f5026015909e494db021322e709b7b8032c48723c24d38630e5577d3cd41
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "lung adenocarcinoma"
  - "폐 선암"
  - "solitary pulmonary nodule"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
question_type: diagnosis
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

69세 여성이 기침과 점점 심해지는 피로, 그리고 지난 4개월 동안 15 kg(33 lb)의 우려스러운 체중 감소로 내원했다. 피로와 기침은 1년 전부터 있었지만 나이 탓으로 여기며 넘겼다고 한다. 기침은 점점 악화되었고 지난주에는 피가 섞인 가래가 두 번 나왔다. 과거력은 특이사항이 없으며 흡연이나 약물 사용을 하지 않는다. 비교적 활동적이고 건강한 식사를 한다. 오늘 활력징후는 정상이다. 진찰에서 쇠약하고 창백해 보이며, 폐 청진에서 약한 호기성 천명음이 들린다. 흉부 X선에서 오른쪽 폐 중엽 주변부에 동전 모양 병변이 보인다. 중재영상의학과에서 결절을 생검했다(영상 참조). 이 환자의 증상과 가장 관련이 높은 암의 유형은 무엇인가?

## 선택지

A. 중피종
B. 대세포암
C. 편평세포암
D. 선암

## 해설


비흡연 여성에서 말초 폐결절과 객혈·체중감소가 나타나 선택지 중 폐선암 D가 가장 가능하다. 편평상피암은 상대적으로 중심부 및 흡연과 더 연관되고 중피종은 주로 흉막 종양이다. 다만 병리 이미지가 자료에 없어 선구조나 점액 생성이 관찰되었다고 단정할 수 없으며, 실제 확진은 조직 병리와 적절한 면역염색에 의존한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009132 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 누락된 병리 그림의 소견을 만들어내지 않고 비흡연 여성·말초 결절로 선암 D가 가장 가능하다는 추론만 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009132
