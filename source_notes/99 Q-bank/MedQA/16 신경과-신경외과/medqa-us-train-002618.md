---
type: qbank
schema_version: 1
id: medqa-us-train-002618
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ecb696d57a1ac8ef72dcecd3cd53ba7c8933b0e1915014ca1f31fe8f774fbca
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "recurrent ischemic stroke"
  - "secondary stroke prevention"
  - "aspirin-dipyridamole"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlweXJpZGFtb2xlLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

다른 혈관 영역의 뇌경색을 두 번 겪은 환자다. 심전도는 동리듬이고 단기 심장 감시와 심초음파, 두경부 영상에서 원인이 확인되지 않았다. 예방치료를 구체화하기 위해 다음으로 할 검사는?

## 선택지

A. 발작성 심방세동을 찾기 위한 장기간 심전도 감시
B. 동성리듬이 확인됐으므로 심장 평가는 종료
C. 뇌파검사로 심장성 색전 여부 판단
D. 일반 흉부 X선을 매일 반복

## 해설

짧은 심전도에는 간헐적 심방세동이 잡히지 않을 수 있다. 다른 원인이 없는 색전성 뇌경색에서는 장기 심장 리듬 감시를 고려하며, 원인 없이 항응고를 일률적으로 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아스피린 복용 중 뇌졸중이면 디피리다몰 추가가 반드시 최선이라는 단정을 제거했다. 비심장성 뇌졸중의 장기 예방 선택지 중 A를 유지하되 재발 원인 재평가와 서방형 제제 조건을 명시했다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002618
- https://doi.org/10.1161/STR.0000000000000375
