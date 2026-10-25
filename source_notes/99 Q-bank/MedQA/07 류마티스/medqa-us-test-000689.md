---
type: qbank
schema_version: 1
id: medqa-us-test-000689
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3910ec5dcd98d2d577d814f7b8bbada27eec4136e22a50ddae4aa496b9ffa2de
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "통풍"
  - "고요산혈증"
  - "요산 배설 감소"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 남성이 한 시간 동안 지속된 오른쪽 엄지발가락 통증으로 응급실에 왔다. 통증이 너무 심해 잠에서 깼다. 40년 동안 매일 담배 한 갑을 피웠고 퇴근 후와 주말에 폭음한다. 14세 때 충수절제술을 받았고 장거리 트럭 운전사이다. 체온 37.7°C(100°F), 혈압 135/75 mmHg, 맥박 102회/분, 호흡 20회/분, BMI 25 kg/m²였다. 오른쪽 첫 중족지관절이 매우 압통이 있고 부으며 뜨겁고 붉었고 통증 때문에 운동 범위는 평가할 수 없었다. 혈색소 11.5 g/dL, 백혈구 16,000/mm³, 혈소판 150,000/mm³, ESR 50 mm/h였다. 관절액은 탁하고 짙은 노란색이며 백혈구 30,000/μL, 배양 음성이었고 바늘 모양의 음성 복굴절 결정이 보였다. 이 상태의 가장 가능성 높은 원인은?

## 선택지

A. 유기산이 요산과 세뇨관 분비를 경쟁함
B. 신장에서 요산 재흡수 증가
C. HGPRT 결핍
D. 고퓨린 식이

## 해설


급성 첫 중족지관절염과 바늘 모양 결정은 통풍을 지지한다. 폭음으로 증가한 젖산 등 유기산은 요산과 세뇨관 분비를 경쟁해 요산 배설을 줄일 수 있어 A가 적절하다. 요산 재흡수를 억제해 통풍이 생긴다는 기존 해설은 방향이 잘못되었다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000689` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 podagra·결정·폭음 맥락 A 유지. 유기산이 재흡수를 억제한다는 정반대 기전 설명을 요산 세뇨관 분비 경쟁으로 교정.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000689
