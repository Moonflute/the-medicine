---
type: qbank
schema_version: 1
id: medqa-us-train-004074
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27dcdc07f838f3ed9b39437ad0b00b23a11f088c0f6e02664e03ff86dfe5c937
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "저체온증"
  - "스테로이드 유발 정신병"
  - "응급 보온"
  - "Hypothermia"
question_type: 임상증례 객관식
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 경찰에 이끌려 응급실에 왔다. 길 한가운데서 낯선 사람들에게 소리를 지르는 모습으로 발견되었다. 중요한 과거력은 없고 최근 덩굴옻나무 노출로 처방받은 짧은 기간의 프레드니손만 복용한다. 체온 25°C, 혈압 90/50 mmHg, 맥박 90회/분, 호흡수 17회/분, 실내 공기 산소포화도 98%이다. 속옷만 입고 있으며 정부에 대해 화난 듯 중얼거린다. 내적 자극에 반응하는 것처럼 보이고 병력 청취가 어렵다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 할로페리돌 근육주사
B. 로라제팜 투여와 스테로이드 중단
C. 따뜻한 공기 재순환기
D. 따뜻하게 데운 정맥 생리식염수와 보온 담요

## 해설

25°C의 심한 저체온은 행동 이상을 동반할 수 있으므로 재가온과 생리적 안정화가 우선이다. 보기 중 가온 정맥수액과 보온(D)이 적합하지만 핵심 체온 확인, 심전도·순환 감시 및 적극 재가온 평가가 필요하다. 불안정하면 ECLS 가능한 센터 치료를 고려한다. 최근 steroid만으로 정신병을 확정하거나 진정제를 우선 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저체온 교정 D는 적합한 초기 조치이나 25°C를 단순 담요·수액으로만 치료한다고 오해하지 않도록 보완.
- 공식/학회 근거: https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004074
