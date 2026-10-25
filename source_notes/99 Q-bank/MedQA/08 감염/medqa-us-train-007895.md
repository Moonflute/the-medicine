---
type: qbank
schema_version: 1
id: medqa-us-train-007895
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:14a2c7f9fbb29b9e7418541f8f2af910c3b9f7b9762756a8addca977f4c7b433
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "central line-associated bloodstream infection"
  - "infective endocarditis"
  - "catheter removal"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
  - MDgg6rCQ7Je8L-uPhOq0gCDqtIDroKgg6rCQ7Je8IChDYXRoZXRlci1SZWxhdGVkIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWljYWZ1bmdpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

27세 남자가 의식변화로 응급실에 왔다. 지역 시장에서 낮잠을 자고 있는 것을 발견해 병원으로 데려왔다. 다중약물 남용 병력이 있고 노숙 중이다. 체온 104°F(40.0°C), 혈압 100/52 mmHg, 맥박 133회/분, 호흡수 25회/분, 산소포화도 99%이다. 의식이 변해 있으며 심폐 진찰에서 좌측 하부 흉골연에 심잡음이 들린다. 침상 초음파에서 삼첨판에 식생이 보인다. 정맥수액, 노르에피네프린, 바소프레신, 반코마이신, 피페라실린-타조박탐을 시작했다. 정맥로가 부족해 내경정맥과 대퇴정맥에 중심정맥관을 즉시 삽입했고 흉부외과가 식생을 제거했다. 중환자실에서 3~5일째 증상이 호전되었고 5일째 말초정맥로 2개를 추가한 후 대퇴정맥관을 제거했다. 6일째 발열과 혈역학적 상태가 악화되었다. 현재 반응하며 두통, 광선공포증, 목 경직, 통증은 없지만 쇠약감을 호소한다. 두통의 jolt accentuation은 음성이고 복부 진찰은 양성 소견이 없다. 흉부 X선, 소변검사, 심초음파는 정상이나 채취한 혈액배양은 양성이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 항생제에 미카펀진 추가
B. 모든 말초정맥로를 제거하고 배양
C. 중심정맥관을 제거하고 배양
D. 요추천자

## 해설


초기 호전 후 남아 있는 중심정맥관과 새 발열·혈역학 악화/양성 배양은 카테터 관련 혈류감염을 고려하게 한다. 선택지 C처럼 의심 중심정맥관을 제거하고 말단/적절한 혈액배양을 확보하여 감염원 관리를 한다. 모든 카테터 환자의 가벼운 발열에 무조건 제거한다는 뜻은 아니며 균종·중증도·다른 원인을 함께 평가하고 배양에 맞춰 치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007895 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 악화하는 혈역학·새 균혈증의 의심 CRBSI에서 제거 C 유지; 모든 단순 발열 카테터 제거로 일반화하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/cid/article/49/1/1/369414

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007895
