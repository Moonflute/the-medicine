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
question_type: prevention
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

70세 남성이 5시간 지속된 왼쪽 위약으로 내원했다. 과거 우측 후대뇌동맥 허혈성 뇌졸중과 왼쪽 동측성 반맹, 제2형 당뇨병, 고혈압이 있다. 아스피린 81 mg, 암로디핀, 아토르바스타틴을 복용하고 뇌 MRI에서 우측 중대뇌동맥 영역의 새 급성 경색이 보인다. ECG는 정상 동리듬이고 심초음파와 경동맥 도플러에서 원인이 없다. 향후 뇌졸중 위험을 예방하기 위한 다음 단계는?

## 선택지

A. 디피리다몰을 추가한다
B. 아스피린을 325 mg으로 늘린다
C. tPA를 투여한다
D. 아스피린을 중단하고 와파린을 시작한다

## 해설

현재 평가에서는 심방세동이나 뚜렷한 심장성 색전원이 확인되지 않아 장기 재발 예방에는 항혈소판 요법이 적절하다. 아스피린과 서방형 디피리다몰 병합은 인정된 선택지이므로 선지 중 A가 가장 적절하다. 단순히 아스피린을 복용 중 재발했다는 이유만으로 이 병합이 언제나 우월하다고 확정할 근거는 부족하며, 순응도·뇌졸중 기전·장시간 심장리듬 감시 필요성과 다른 위험인자를 재평가해야 한다. 항응고 적응증 없이 와파린으로 바꾸지 않는다. 급성 재관류 적격성 평가는 장기 예방 약제 선택과 별개다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아스피린 복용 중 뇌졸중이면 디피리다몰 추가가 반드시 최선이라는 단정을 제거했다. 비심장성 뇌졸중의 장기 예방 선택지 중 A를 유지하되 재발 원인 재평가와 서방형 제제 조건을 명시했다.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002618
