---
type: qbank
schema_version: 1
id: medqa-us-validation-000989
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:315ed703926b71f3921a7cfa371a334cf73684814f9c7c2deebd5c1baca42528
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "급성호흡곤란증후군"
  - "패혈증"
  - "저일회호흡량 환기"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신우신염과 패혈증으로 입원한 지 이틀 된 48세 여성이 갑자기 심한 호흡곤란을 일으켰다. 산소포화도는 60% 흡입산소에서도 80%이고, 심한 호흡근 사용과 양측 폐야의 흡기 수포음이 있다. 기관삽관 전 흉부 X선이 제시되었다. 가장 적절한 다음 처치는?

## 선택지

A. 광범위 항생제
B. 고용량 글루코코르티코이드
C. 정맥 수액
D. 낮은 일회호흡량 환기

## 해설

패혈증 뒤 심한 저산소혈증과 호흡 노력이 발생하여 삽관이 필요한 상황에서는 저일회호흡량의 폐보호 환기(D)를 시작하는 것이 적절하다. ARDS가 의심되지만 누락된 X선을 보았다고 할 수는 없고 양측 음영과 다른 원인을 실제로 평가해야 한다. ARDS에서는 예측체중 기준 낮은 일회호흡량과 압력 제한을 사용하고 산소화·혈역학에 맞춰 PEEP를 조절한다. 원인 감염의 항생제 치료는 여전히 중요하며, 현행 지침은 적절한 ARDS 환자에서 스테로이드도 조건부로 고려하므로 다른 치료가 모두 무효라고 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 중증 급성 호흡부전의 폐보호 환기 D는 유지한다. 영상이 없어 ARDS를 확진했다고 주장하지 않으며 항생제·스테로이드가 전혀 효과 없다는 단정을 제거한다.
- 공식/학회 근거: https://doi.org/10.1164/rccm.202311-2011ST

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000989
