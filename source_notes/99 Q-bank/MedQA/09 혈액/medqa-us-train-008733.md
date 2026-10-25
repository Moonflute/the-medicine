---
type: qbank
schema_version: 1
id: medqa-us-train-008733
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15977ebe97eb5fb4df60e8ac86f3e721513b500ad228edad9e6f70f3891f6986
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Waldenström macroglobulinemia"
  - "hyperviscosity syndrome"
  - "plasmapheresis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qzoOygkOuPhCDspp3tm4TqtbAgKEh5cGVydmlzY29zaXR5IFN5bmRyb21lKS5tZA
question_type: management
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
---

# MedQA US 임상문제

## 문제

80세 남성이 2일 동안 의식 수준이 저하되어 응급실로 이송되었다. 며칠 동안 시야가 흐렸고 2주 전 오른팔이 3일 동안 일시적으로 저린 증상이 있었다. 2년 전 의미불명 단클론감마병증(MGUS)을 진단받았다. 의식이 완전히 명료하지 않고 체온 36.2°C(97.2°F), 맥박 75회/분, 호흡수 13회/분, 혈압 125/70mmHg이다. 잇몸 출혈이 있고 경부 림프절병증이 만져진다. 간과 비장이 양쪽 늑골연 아래 6cm까지 만져진다. 면역고정 혈청단백 전기영동 결과가 제시되어 있고 소변 전기영동과 골격조사는 정상이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 덱사메타손
B. 혈액투석
C. 생리식염수 정맥 수액
D. 혈장교환

## 해설


단클론감마글로불린병 병력이 있는 환자에서 점막출혈, 시야 이상과 의식변화는 증상성 과점도증후군을 시사한다. 선택지 중 즉시 혈장교환술(D)이 적절하다. Waldenström 거대글로불린혈증 등을 의심하되, 누락된 전기영동 그림으로 IgM 농도나 아형을 확정할 수는 없다. 원인 질환의 확진·치료는 별도로 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008733 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 출혈·시야 이상·의식변화의 증상성 과점도에서 응급 혈장교환 D 유지. 누락된 SPEP 그림의 IgM 수치를 보았다고 주장하지 않고 WM은 의심 진단으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ashpublications.org/blood/article/128/10/1321/35293/Treatment-recommendations-from-the-Eighth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008733
