---
type: qbank
schema_version: 1
id: medqa-us-train-008905
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ddfb7f25b4ee3c61ec65f02b95889b173b28de0bc852e2e283ca1997cb822b08
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "HIT"
  - "arterial thrombosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

자동차 충돌로 왼쪽 대퇴골 골절의 관혈적 정복 및 내고정술을 받은 지 6일 후, 67세 남성이 오른팔에 갑자기 심한 통증과 감각이상으로 내원했다. 수술과 초기 회복은 순조로웠고 입원 전 복용약은 없었다. 25년 동안 하루 한 갑을 피웠다. 체온 37.3°C(99.2°F), 맥박 105회/분, 호흡수 22회/분, 혈압 156/94mmHg이다. 오른팔에서 상완동맥과 요골동맥 맥박이 감소하고 모세혈관 재충만 시간이 6초이다. 피부는 창백하고 차갑다. 왼쪽 다리는 석고로 고정되어 있다. 현재 혈소판 60,000/mm³, 활성화 PTT 55초, PT 14초, D-dimer 양성이고 동맥 도플러에서 오른쪽 상완동맥 폐색이 보인다. 다음 중 현재 증상의 가장 가능성 높은 설명은 무엇인가?

## 선택지

A. 말초동맥질환
B. 약물 이상반응
C. 심방세동
D. 파종성 혈관내 응고

## 해설


수술 후 혈소판 감소와 혈전 생성이 동시에 나타나는 경우, 헤파린 유도 혈소판 감소증(HIT)으로 인한 동맥 혈전이 가장 가능성 높다. 따라서 HIT가 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008905
