---
type: qbank
schema_version: 1
id: medqa-us-test-000393
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:03752623a03c546235d711f702e5cf5a0e2e75202f89cd0a33752dfce78c5133
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "폐기종"
  - "폐쇄성 환기장애"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 60세 남성이 2개월 동안 점점 심해지는 호흡곤란으로 병원에 왔다. 안정 시에는 호흡곤란이 없고 간헐적인 마른기침이 있다. 발열, 오한, 야간 발한은 없었다. 40년 동안 매일 담배 한 갑을 피웠고 매일 맥주 한 병, 주말에는 가끔 더 마신다. 불법 약물은 사용하지 않는다. 키 183 cm(6피트), 체중 66 kg(145 lb), BMI 19.7 kg/m²였다. 체온 37°C(98.6°F), 맥박 94회/분, 호흡 21회/분, 혈압 136/88 mmHg였다. 폐 청진에서 호기 시간이 연장되고 호기 말 천명음이 들렸다. 폐활량검사에서 FEV1:FVC 62%, FEV1은 예측치의 60%, 총폐용량은 예측치의 125%였고 폐 확산능은 감소했다. 가장 가능성 높은 진단은?

## 선택지

A. 간질성 폐질환
B. 과민성 폐렴
C. 만성폐쇄성폐질환
D. 기관지확장증

## 해설


흡연력, 진행성 호흡곤란, 폐기능 검사에서 FEV1/FVC 감소와 폐용량 증가, 확산능 저하는 COPD(만성폐쇄성폐질환)를 특징짓는다. 따라서 C가 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 C/해설 읽음. 장기 흡연, 호기성 천명, 낮은 FEV1/FVC, 과팽창과 낮은 DLCO는 폐기종 양상의 COPD에 일치. 최신 치료 검증 아닌 진단/생리 내용 검토.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000393
