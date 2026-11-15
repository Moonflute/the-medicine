---
type: qbank
schema_version: 1
id: medqa-us-train-010026
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:97107131f88c577a7692d5761a51a163a734f88fc80e9fa524a6483b0afca885
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "군발두통"
  - "삼차자율신경성 두통"
  - "산소요법"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DYXJiYW1hemVwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

군발두통으로 진단된 환자가 눈물·결막충혈을 동반한 익숙한 편측 안와 통증으로 왔다. 발작을 빨리 가라앉힐 치료는?

## 선택지

A. 경구 베라파밀
B. 경구 나프록센
C. 비재호흡 마스크를 이용한 고유량 100% 산소
D. 저유량 비강 산소

## 해설

군발두통 발작에는 비재호흡 마스크로 고유량 100% 산소를 투여한다. 베라파밀은 발작 빈도를 줄이는 예방치료다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 산소 D 유지. 산소의 작용을 확정적인 단순 혈관수축으로 환원한 해설 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010026
- https://www.e-hpr.org/journal/view.php?number=949
