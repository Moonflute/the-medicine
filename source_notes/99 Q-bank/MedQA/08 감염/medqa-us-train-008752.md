---
type: qbank
schema_version: 1
id: medqa-us-train-008752
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a56210063ffecb6d47b6a504809e6cc3d61abe3a52ccaeca58597f9d0918fdc1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute HIV infection"
  - "window period"
  - "HIV seroconversion"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
question_type: investigation
difficulty: standard
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 급성 HIV 의심 시 지연 항체검사 대신 현재 항원·항체와 RNA 검사로 교정."
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "급성 HIV 의심 시 지연 항체검사 대신 현재 항원·항체와 RNA 검사로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

41세 여성이 7일 동안 지속된 두통, 인후통, 설사, 피로, 미열로 일차진료를 받으러 왔다. 특별한 과거력, 최근 여행, 감염자 접촉은 없다. 최근 몇 달 동안 돈과 기분전환용 약물을 대가로 성행위를 했다고 한다. 일차 HIV 감염을 의심했지만 환자는 추가 평가를 거부했다. 일주일 후 추적 방문에서 이전에 HIV 검사를 받았으나 음성이었다고 한다. 외부 생식기에는 이상이 없고 심장과 폐 청진도 정상이다. 혈압 123/82mmHg, 심박수 82회/분, 호흡수 16회/분이다. 다음 중 환자 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 이번 방문에서 신속 HIV 검사를 반복한다
B. 검사 동의를 구한 뒤 4세대 HIV 항원·항체 검사와 급성 감염 확인을 위한 HIV RNA 검사를 시행한다
C. 모노스팟 검사를 시행한다
D. VDRL을 시행한다

## 해설

최근 노출 위험과 급성 바이러스성 증후군이 있어 이전 항체 음성만으로 급성 HIV를 배제하지 않는다. 환자 동의를 얻어 현재의 4세대 항원·항체 검사를 시행하고, 급성 감염 의심이 높으면 HIV RNA를 함께 확인한다. 초기 음성·불확정 결과는 노출시점과 검사 종류에 따라 추적한다. 수개월 기다린 뒤 Western blot을 시행하는 구형 경로는 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 급성 HIV 의심 시 지연 항체검사 대신 현재 항원·항체와 RNA 검사로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/hiv.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008752

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
