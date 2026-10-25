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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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


수술 후 약 6일째 발생한 혈소판감소와 새로운 동맥혈전은 수술 전후 heparin이 투여되었다면 HIT에 의한 약물 부작용(B)을 강하게 의심하게 한다. HIT 항체는 PF4-heparin 복합체와 관련되어 혈소판 활성화와 혈전을 유발한다. 다만 원문에 실제 heparin 투여 이력이 명시되어 있지 않으므로 노출·혈소판 감소 추이·다른 원인을 확인하지 않고 확진으로 단정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008905 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술 후 6일째 혈소판감소와 동맥혈전은 HIT B를 의심하게 하나 본문에 heparin 노출이 명시되지 않았으므로 확인된 사실로 만들지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008905
