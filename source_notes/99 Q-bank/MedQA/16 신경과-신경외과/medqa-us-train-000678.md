---
type: qbank
schema_version: 1
id: medqa-us-train-000678
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1b626af77f40c6170147e02b1af060fb174c515c315d99e2af5e7ea329fc35a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "tension-type headache"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLTsnqXtmJXrkZDthrUgKFRlbnNpb24tdHlwZSBoZWFkYWNoZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 두통을 주소로 가정의학과에 내원하였다. 환자는 증상이 약 2시간 전 잠에서 깼을 때 시작되었으며 호전되지 않았다고 보고하였다. 통증은 중등도이며, 박동성이고 조이는 듯한 양상이며 양측 후두부(occipital region)에 위치한다고 한다. 환자는 시각 및 청각 장애, 오심, 구토는 부인하였다. 지난달에 유사한 두통이 2회 있었다고 한다. 다른 관련 과거력은 없다. 현재 복용 중인 약물은 알렌드로네이트(alendronate)와 매일 복용하는 종합비타민이다. 환자는 기업 변호사로 장시간 근무한다. 계통적 문진(review of systems)에서 경미한 광선공포증(photophobia)이 확인되었다. 체온은 37.0°C, 혈압은 110/70 mmHg, 맥박은 70회/분, 호흡수는 18회/분, 실내 공기에서 산소포화도는 98%이다. 신체 검진에서 환자는 명료하고 지남력이 있다. 상부 후경부 근육과 두피의 후두부 전반에 걸쳐 중등도의 압통이 있다. 나머지 신체 검진은 정상이다. 검사실 검사는 정상이다. 소변 임신 검사는 음성이다. 다음으로 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 머리와 목의 비조영 CT
B. 머리와 목의 T1/T2 MRI
C. 고유량 산소 투여, 이부프로펜 200mg 경구 투여, 수마트립탄 6mg 피하 주사
D. 생활 습관 변화, 이완 요법, 마사지 치료 권장

## 해설

양측 압박·조임 통증, 경부·후두부 압통, 오심·구토 및 국소 신경학적 이상 부재는 긴장형 두통을 지지한다. 다만 박동성은 전형적 긴장형 두통의 특성은 아니므로 반복 시 두통 양상을 재평가한다. 제시된 선지에서는 생활습관 조정과 이완·마사지(D)가 합리적이다. 급성 통증에는 환자 특성과 금기를 고려해 단순 진통제 또는 NSAID도 사용할 수 있다. C의 고유량 산소·피하 sumatriptan 병합은 이 사례의 통상 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선지 중 D는 적절하나 박동성을 긴장형 두통의 전형으로 가르치고 비약물요법만 일차 치료라고 단정한 설명을 수정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000678
