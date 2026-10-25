---
type: qbank
schema_version: 1
id: medqa-us-train-003970
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7051a9a762cd353d002d8a6a1cdee59464b09441269b66379202362688ed9c08
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "오피오이드 중독"
  - "날록손"
  - "오피오이드 금단"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남자가 공원을 순찰하던 경찰에 의해 의식이 없는 상태로 발견되었다. 자극에 반응하지 않으며 주변에 주사기가 흩어져 있다. 심박수는 70회/분, 호흡수는 6회/분이다. 흐트러진 외모이고 양팔에 주사 자국이 있다. 글래스고 혼수척도는 8점이며 동공은 축동되어 있다. 구급차가 호출되고 길항제가 투여되었다. 이 환자에게 투여했을 가능성이 가장 높은 길항제에 대한 설명으로 옳은 것은 무엇인가?

## 선택지

A. 급성 금단을 유발한다
B. 도파민 수용체에 작용한다
C. 비경쟁적 억제제이다
D. 경구로 투여할 수 있다

## 해설

정답은 A, 급성 금단을 유발할 수 있다는 것이다. 주사 자국, 의식저하, 축동과 분당 6회의 심한 호흡억제는 오피오이드 중독을 시사한다. 사용했을 가능성이 높은 날록손은 오피오이드 수용체의 경쟁적 길항제로 호흡억제를 역전하지만, 의존성이 있는 사람에서는 갑작스러운 금단을 유발할 수 있다. 도파민 수용체 길항제나 비경쟁적 억제제가 아니며, 경구 투여는 응급 역전의 적절한 경로가 아니다. 응급 대응과 기도·환기 보조를 함께 시행하고 재호흡억제를 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원발성 알도스테론증/아밀로라이드 해설은 다른 케이스. 오피오이드 독성 날록손과 유발금단으로 교체. 원정답 A 유지.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/208969Orig1s000Lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003970
