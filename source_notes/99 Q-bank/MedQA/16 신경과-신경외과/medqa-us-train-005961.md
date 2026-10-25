---
type: qbank
schema_version: 1
id: medqa-us-train-005961
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b06c33c73fd0a6b9896e5b96cdeae71db9bc5926eaa7c131ed820b283164249
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈 의심"
  - "벼락두통"
  - "음성 두부 CT 후 요추천자"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: complex
answer: A
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

52세 남성이 2시간 동안 지속된 갑작스럽고 심한 전신성 두통으로 응급실에 왔다. 오심과 한 차례 구토가 생겼다. 집에서 TV를 보던 중 증상이 시작되었고 6일 전에도 치료 없이 호전된 심한 두통이 있었다. 고혈압과 고지혈증이 있고 30년 동안 하루 두 갑씩 흡연했다. 체온은 38.1°C(100.6°F), 맥박은 분당 82회, 호흡수는 분당 16회, 혈압은 162/98 mmHg이다. 동공은 정상이고 시신경유두 부종은 없으며 뇌신경과 운동·감각검사는 정상이다. 두부 CT에서 이상은 없다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 요추천자 시행
B. 100% 산소와 비강 내 수마트립탄 투여
C. 뇌실복강 단락술
D. 두부 MRI 시행

## 해설

갑작스러운 심한 두통과 6일 전 선행 두통은 지주막하출혈에 대한 의심을 남긴다. 제시된 선택지 중 요추천자(A)는 CT가 음성이어도 의심이 남을 때 출혈 또는 감염 평가에 도움이 된다. 다만 신경학적으로 정상인 환자가 발병 6시간 이내 고품질 CT를 적절한 전문 판독으로 받은 경우에는 급성 지주막하출혈을 배제할 수 있어, CT 음성이라는 이유만으로 모두 요추천자를 시행하지는 않는다. 이 문항에는 그런 CT 조건이 명시되어 있지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CT 음성인 모든 두통에서 LP가 필수라는 과잉 일반화를 제거. 선행 경고두통과 발열 및 CT 판독조건 미상으로 추가평가 A 유지.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000436
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG228/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005961
