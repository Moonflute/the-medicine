---
type: qbank
schema_version: 1
id: medqa-us-train-007246
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0216943b871d7391ba0bd9d0041997965480cb916214bdf39b31a0569d1fd60e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "뇌농양"
  - "비리단스 연쇄상구균"
  - "치성 감염"
  - "고리 조영 병변"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5mOyEsSDqsJDsl7wgKE9kb250b2dlbmljIEluZmVjdGlvbikubWQ
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
---

# MedQA US 임상문제

## 문제

24세 여자가 전신이 1분간 경련한 에피소드로 친구들과 함께 응급실에 내원했다. 2주 동안 발열, 두통, 의식 변화가 있었다. 체온은 38.3~38.9°C(101.0~102.0°F) 사이였다. 치통과 여러 치아우식증 병력이 있다. 흡연, 음주, 약물 사용은 하지 않으며 현재 성생활도 하지 않는다. 활력징후는 혈압 110/74 mmHg, 맥박 124회/분, 호흡수 14회/분, 체온 38.9°C(102.0°F)이다. 신체검사에서 혼돈과 지남력 저하가 있고 왼쪽보다 오른쪽을 더 많이 움직인다. 조영제 없이 시행한 머리 CT에서 왼쪽 전두엽에 고리 모양으로 조영되는 병변이 보이며 뇌농양에 합당하다. 농양을 배액하여 배양검사를 의뢰했다. 배양에서 가장 가능성 높게 자랄 미생물은 무엇인가?

## 선택지

A. Actinomyces israelii
B. 녹농균
C. 황색포도상구균
D. 비리단스 연쇄상구균

## 해설


치통·다발 우식과 발열/국소 신경증상·농양 진단에서는 구강 viridans streptococci(특히 anginosus군 포함) D가 가장 관련된다. 구강 혐기균과 혼합 감염도 가능하여 배양 결과를 통합한다. 원문은 비조영 CT에서 ring enhancement라고 기술해 영상방법이 모순되므로 실제 조영 영상/원자료 확인이 필요하다. 그 모순을 임의 새 영상으로 바꾸거나 종 단위 확진으로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007246 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 치과 기원 뇌농양의 viridans D 유지; 비조영 CT 조영증강이라는 원문 모순을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007246
