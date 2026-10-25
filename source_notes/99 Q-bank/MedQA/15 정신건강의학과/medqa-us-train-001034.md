---
type: qbank
schema_version: 1
id: medqa-us-train-001034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:679113222d2f0e5a1c1702fca6a0f67a0798bf8b620200f11826383cece87193
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Cocaine intoxication"
  - "Phencyclidine intoxication"
  - "Tetrahydrocannabinol intoxication"
  - "Thyrotoxicosis"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 오전 2시에 경찰에 의해 응급실로 이송되었다. 경찰은 지역 나이트클럽에서 그를 데려왔는데, 그는 소리를 지르며 직원들과 싸우겠다고 위협하고 있었다. 의무기록 검토 결과 특이사항은 없다. 병원에서 그의 행동은 계속해서 초조하고 기이하다. 체온은 37.0°C, 혈압은 162/98 mmHg, 심박수는 분당 120회, 호흡수는 분당 18회, 실내 공기에서의 산소 포화도는 99%이다. 신체 검진상 초조함이 두드러지지만, 그 외에는 건강해 보인다. 얇은 비점막에서 피가 배어 나오고 있으며 동공은 2mm로 양측이 동일하고 빛에 반응한다. 말은 빠르고 기이하다. 그는 "나는 FBI 요원이다"라고 주장하며 병원에서 자신을 내보내야 한다고 고집한다. 소변 독성 검사가 분석을 위해 실험실로 보내졌다. 이 환자의 증상에 대한 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 코카인 중독
B. 펜시클리딘(PCP) 중독
C. 테트라하이드로칸나비놀(THC) 중독
D. 갑상샘중독증

## 해설

비점막 손상·출혈, 초조와 과대적 사고, 고혈압·빈맥은 선택지 중 코카인 중독(A)을 가장 시사한다. 그러나 급성 코카인 교감신경흥분에서 전형적인 동공 반응은 산대이지 축소가 아니다. 원문에 2mm 동공이 기재된 것은 비전형적이며 동반 물질이나 다른 원인도 확인해야 한다. 원수치를 임의로 바꾸거나 동공 축소가 코카인의 전형이라고 합리화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 코카인의전형적동공소견을축소라고역전설명한안전오류수정. 원문2mm보존하여비전형적단서명시, A유지.
- https://medlineplus.gov/ency/article/000946.htm
- https://nida.nih.gov/sites/default/files/1141-cocaine.pdf?8YXog=VzkF6gmouU

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001034
