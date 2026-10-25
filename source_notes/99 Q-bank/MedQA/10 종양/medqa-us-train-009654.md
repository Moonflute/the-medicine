---
type: qbank
schema_version: 1
id: medqa-us-train-009654
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e64720adee876ddb7a394f82d1f47eef5c5d638835413e94f92c0e5b267d596
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Paget disease of breast"
  - "유방 파제트병"
  - "invasive ductal carcinoma"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
question_type: diagnosis
difficulty: standard
answer: B
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

43세 여성이 한 달 동안 지속되는 오른쪽 유두 발진으로 내원했다. 국소 약물에도 호전되지 않는다. 오른쪽 유방과 유두 사진이 제시되었고 유륜 아래 2×2 cm 종괴와 오른쪽 겨드랑이 림프절병증이 만져진다. 유방촬영술에서 유륜하 미세석회화가 보인다. 가장 가능성 높은 유방암 유형은 무엇인가?

## 선택지

A. 관상피내암
B. 침윤성 관암
C. 침윤성 소엽암
D. 수질암

## 해설


지속되는 편측 유두 습진성 병변은 유방 Paget병을 의심하게 하며 기저 DCIS 또는 침윤성 유방암과 동반될 수 있다. 이 케이스의 유방 종괴와 액와 림프절 소견은 선택지 중 침윤성 관암 B를 더 의심하게 한다. Paget병을 단지 피부에 국한되어 종괴를 만들 수 없는 병이라고 배제하면 안 된다. 자료에 없는 사진·림프절 조직의 확진 소견을 만들어내지는 않으며 실제 조직검사로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009654 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Paget병은 피부만 침범하여 기저 종괴와 무관하다는 해설 오류를 교정; 종괴·액와 림프절이 있는 침윤암 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/breast-cancer-types/paget-disease-breast

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009654
