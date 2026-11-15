---
type: qbank
schema_version: 1
id: medqa-us-train-007007
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2617b665ff422ac6d963a03033c15cd5431243caa22cb9273b6ce40d5f0021b7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "기도 이물 흡인"
  - "기관지 이물"
  - "소아 응급 기도"
  - "foreign body aspiration"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riw64-EIOuCtCDsnbTrrLwgKEZvcmVpZ24gQm9keSBBc3BpcmF0aW9uKS5tZA
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

3세 아이가 땅콩을 먹다 갑자기 사레가 들린 뒤 계속 기침한다. 왼쪽보다 오른쪽 호흡음이 약하다. 아이는 안정적이고 흉부 X선에 이물은 보이지 않는다. 다음 처치는?

## 선택지

A. X선에 이물이 없으므로 기침약을 주고 귀가
B. 폐렴으로만 보고 항생제를 시작
C. 기관지확장제 반응만 보고 흡인 가능성은 배제
D. 전문팀에 의뢰해 기관지경으로 기도를 확인하고 이물이 있으면 제거

## 해설


흡인 사건과 편측 호흡음 감소는 기도 이물을 강하게 시사한다. 음식물은 X선에 직접 보이지 않을 수 있어 정상 영상만으로 배제하지 않으며, 소아에서는 제거에 흔히 경직성 기관지경을 사용한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007007
- https://www.rch.org.au/clinicalguide/guideline_index/Foreign_bodies_inhaled.aspx
