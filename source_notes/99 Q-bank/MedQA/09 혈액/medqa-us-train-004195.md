---
type: qbank
schema_version: 1
id: medqa-us-train-004195
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24431a76104325651af1b4479624d85e00837cc6242717f4539d2924ef27c8d2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "진성적혈구증가증"
  - "혈소판증가증"
  - "저에리트로포이에틴혈증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

59세 여자가 3시간 전 시작된 왼손의 급성 근력저하로 응급실에 왔다. 손 저림은 없었다. 최근 흐린 시야와 두통 에피소드 외에는 병력이 없다. 23세에 다발성경화증을 진단받은 딸이 있다. 체온 36.7°C, 맥박 80회/분, 혈압 144/84 mmHg이다. 얼굴에 홍반이 있고 팔과 몸통에 가벼운 긁힌 자국이 있다. 왼손 근력이 약간 감소하고 손가락-코 검사에서 경미한 겨냥이상증이 있다. 헤마토크릿 55%, 백혈구 14,500/mm³, 호중구 61%, 호산구 3%, 림프구 29%, 단핵구 7%, 혈소판 690,000/mm³이다. 적혈구생성인자는 감소되어 있고 조영제 없는 두부 CT에서 오른쪽 두정엽에 국소 저음영 두 부위가 보인다. 기저 상태의 합병증을 예방하기 위한 가장 적절한 치료는 무엇인가?

## 선택지

A. 글루코코르티코이드 치료
B. 부설판
C. 이마티닙 치료
D. 반복적 사혈

## 해설


다계열 증가·낮은 EPO·홍조와 소양증은 PV를 시사하며 사혈 D는 hematocrit을 낮춰 혈전 위험을 줄이는 핵심 치료다. 실제3시간 전 시작된 신경결손은 별도의 급성 뇌졸중 응급평가가 우선/병행되어야 하고 사혈만으로 급성 뇌졸중 진료를 대체하지 않는다. PV는 일반적으로 Hct<45% 목표 및 금기 없는 저용량 aspirin을 고려하며 혈전 병력이 있으면 세포감소요법도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004195 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PV의 합병증 예방 사혈 D 유지; 실제 급성 뇌졸중 평가와 고위험군의 추가 치료를 누락하지 않도록 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/myeloproliferative/hp/myeloproliferative-neoplasms-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004195
