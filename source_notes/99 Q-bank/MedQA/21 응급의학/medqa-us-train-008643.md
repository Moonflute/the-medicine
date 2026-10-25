---
type: qbank
schema_version: 1
id: medqa-us-train-008643
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e109c63c05fe0497f7e7ffce39aff2fd8ae2698eeaffe04ed358c46a01f4c051
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "severe dehydration"
  - "hypovolemic shock"
  - "acute diarrhea"
  - "Hypovolemic shock"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmxlY2FpbmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 심한 급성 설사로 응급실에 내원했다. 졸리고 둔하며 기면 상태이다. 눈이 움푹 들어가고 피부 탄력이 저하되어 있으며 구강 점막과 혀가 건조하다. 수축기 혈압 60mmHg, 분당 33회의 호흡과 함께 맥박이 빠르고 약하다. 모세혈관 재충만 시간은 6초이다. 지난 24시간 동안 소변을 보지 못했다. 다음 중 치료에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 링거액 2L를 초기 정맥 일시주입한 뒤 농축 적혈구, 신선동결혈장, 혈소판을 1:1:1 비율로 투여
B. 생리식염수 또는 링거액으로 정맥 수액 소생을 시작하면서 활력징후와 소변량을 모니터링
C. 콜로이드 용액으로 정맥 수액 소생 시작
D. 경구 수분보충요법으로 탈수 교정

## 해설

정답은 B, 생리식염수 또는 링거액을 이용한 정맥 수액 소생과 활력징후·소변량 감시이다. 심한 설사, 저혈압, 약한 빈맥, 6초의 모세혈관 재충만 지연, 의식저하와 무뇨는 저혈량성 쇼크를 시사한다. 경구 수분보충만으로 치료할 상황이 아니며, 소아에서는 체중에 맞춘 등장성 결정질 일시주입 후 관류와 수액과다 여부를 반복 재평가한다. 성인처럼 고정된 2 L를 일괄 투여하거나 출혈 증거 없이 혈액제제를 1:1:1로 투여하는 선택지는 부적절하고, 콜로이드는 우선 선택이 아니다. 혈당·전해질 및 신장기능도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. AF/플레카이니드 해설은 다른 케이스. 중증 탈수성 쇼크의 체중기반 등장성 결정질 IV 소생·재평가 설명으로 교체. B 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng29/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008643
