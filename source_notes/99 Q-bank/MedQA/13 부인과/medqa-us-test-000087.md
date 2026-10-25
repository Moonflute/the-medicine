---
type: qbank
schema_version: 1
id: medqa-us-test-000087
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ad05cc0be5590067f5e56fe15d7bae15245d45a0882fb4fd384528bf2f54e06a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁내막증"
  - "성교통"
  - "복강경검사"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nspp0gKEVuZG9tZXRyaW9zaXMpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 30세 여성이 6개월 동안 성교통으로 내원했다. 월경 하루 전 시작해 7일간 지속되는 경련성 골반통이 자주 있고 진통제로 호전되지 않는다. 월경은 28일 간격으로 규칙적이며 5일간 지속된다. 마지막 월경은 2주 전이고 남편과 성생활을 하며 복합 경구피임약을 사용한다. 직장질 진찰에서 압통이 있고 자궁경부 및 요도 면봉검사는 음성이며 질식 초음파는 정상이다. 다음 중 가장 적절한 처치는?

## 선택지

A. CA-125 측정
B. 자궁절제술
C. 복강경검사
D. 자궁경검사

## 해설

월경 하루 전 시작해 7일 지속되는 골반통, 성교통과 직장질 압통은 자궁내막증을 시사한다. 정상 질식 초음파만으로 자궁내막증을 배제할 수 없으며, 진통제와 복합 경구피임약을 사용하고도 증상이 지속되는 이 사례에서는 선택지 C의 복강경을 진단·치료 목적으로 고려할 수 있다. 현행 진료에서 모든 의심 환자가 약물치료 전에 반드시 수술로 확진해야 한다는 뜻은 아니다. CA-125는 진단검사로 권고되지 않고, 자궁절제술이나 자궁경검사가 이 상황의 적절한 다음 단계는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 월경 하루전부터7일을 월경전7일로 바꾼 해설오류 수정. 정상US에도 지속통증/이미COC사용에서 복강경 C 가능; 확진에 항상필수라는 단정 제거.
- https://www.nice.org.uk/guidance/ng73/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000087
