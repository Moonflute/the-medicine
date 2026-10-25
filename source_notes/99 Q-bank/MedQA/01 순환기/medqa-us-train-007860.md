---
type: qbank
schema_version: 1
id: medqa-us-train-007860
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d935248c88867e0d726465bcf23de10568e1148e7787ea040973ea7cf0fd698f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute limb ischemia"
  - "arterial embolism"
  - "atrial fibrillation source"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남자가 2시간 동안 지속된 심한 급성 우측 다리 통증으로 응급실에 왔다. 집안일을 하던 중 갑자기 시작되었고 안정 시나 운동 시 다리 통증 병력은 없다. 전날 손자의 집에서 6시간 버스를 타고 돌아왔다. 라미프릴로 고혈압을 치료 중이다. 불편해 보이며 체온 37.4°C(99.3°F), 맥박 105회/분으로 불규칙하고 혈압 146/92 mm Hg이다. 우측 하지가 차갑고 압통이 있다. 사진에서 대퇴동맥 맥박은 양측에서 만져지지만 우측 슬와동맥과 족부 맥박은 감소되어 있고 우측 하지의 침 pinprick·가벼운 촉각 감각과 근력이 감소되어 있다. 다음 중 이 환자 상태의 원인을 확인하는 데 가장 도움이 되는 검사는?

## 선택지

A. 심초음파
B. 하지 도플러 초음파
C. 표재정맥 생검
D. 디지털 감산 혈관조영술

## 해설

급작스러운 통증, 맥박 감소, 냉감과 신경학적 이상은 급성 사지 허혈을 시사한다. 불규칙 맥박을 동반하므로 심방세동 관련 심장성 색전이 의심되며, A의 심초음파가 심장 내 색전 원천 평가에 도움이 된다. 다만 사지 생존이 위협받을 수 있으므로 항응고와 긴급 혈관외과 평가·재관류를 심초음파 때문에 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 색전 원천 확인용 심초음파 A와 즉시 필요한 급성 사지허혈 치료를 구별.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007860
