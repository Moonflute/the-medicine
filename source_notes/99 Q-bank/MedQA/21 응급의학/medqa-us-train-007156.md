---
type: qbank
schema_version: 1
id: medqa-us-train-007156
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a7db6bdddea519f43679120d4b93e1a3f8fd8f8cddfca5f37b9b0491736b19a2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "폐색전증 배제"
  - "D-이합체"
  - "저위험 폐색전증"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여자가 3일 동안 지속된 경미한 호흡곤란과 오른쪽 흉통으로 일차진료의를 찾아왔다. 최근 마른기침과 미열이 있다고 한다. 활력징후는 체온 99.1°F(37.3°C), 혈압 115/70 mmHg, 맥박 91회/분, 호흡수 17회/분, 실내 공기 산소포화도 97%이다. 전반적으로 상태가 좋아 보이고 호흡 노력은 정상이며 다리 부종은 없다. 그 외에는 건강하고 과거 병력이나 수술력도 없으며 현재 복용 약물도 없다. 담당 의사는 가장 우려되는 진단의 가능성이 낮지만 매우 민감하나 비특이적인 검사로 이를 배제하려 한다. 다음 중 어떤 검사를 주문해야 하는가?

## 선택지

A. 정맥 조영제를 사용한 나선형 흉부 CT
B. 환기-관류 스캔
C. 흉부 방사선촬영
D. D-이합체 검사

## 해설

D-dimer(D)는 민감도가 높지만 특이도가 낮아 임상 확률이 낮은 폐색전증 의심 환자에서 배제 목적으로 사용한다. 음성 결과는 적절한 임상 확률 조건에서 배제에 도움이 되지만, 양성만으로 확진할 수는 없다. 감염·염증 등에서도 상승할 수 있다. 매우 낮은 위험에서는 PERC 등으로 검사 자체가 불필요한지도 먼저 평가할 수 있으며, 모든 저위험 흉통 환자에게 D-dimer를 주문한다는 뜻은 아니다. 문항이 요구한 민감하지만 비특이적인 검사는 D이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. D-dimer가 고특이도라는 오류를 저특이도로 교정한다. 낮은 임상 확률에서 배제를 위한 검사라는 D의 맥락을 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007156
