---
type: qbank
schema_version: 1
id: medqa-us-validation-001223
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fbe6ca90457df05949738a9ee06a5ccac7eabd7874dffe892608f7de40e5e4bb
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "막성 루푸스 신염"
  - "신증후군"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 피로, 무기력, 양쪽 다리 부종과 광과민성 피부병변으로 진료를 받으러 왔다. 양측 발목과 손목의 관절통, 얼굴의 홍반성 인설반, 단백뇨4+와 다수의 지방원주가 있다. 소변 혈액은 음성이고 creatinine0.9 mg/dL, 총콜레스테롤275 mg/dL이다. 신장 생검에서 가장 가능성 높은 소견은?

## 선택지

A. 모세혈관 고리 비후
B. 분절성 경화
C. 반월체 형성
D. 과세포성 사구체

## 해설


SLE를 시사하는 임상상에 많은 단백뇨·지방원주와 부종, 혈뇨 없는 정상 creatinine은 membranous(classV) lupus nephritis를 고려하게 한다. Subepithelial immune deposits 등에 의한 capillary wall/loop thickening A가 보기 중 부합한다. 모든 lupus nephritis의 주병변이 동일한 고리비후인 것은 아니고 classIII/IV의 증식성 병변과 구별하며 실제 분류는 생검으로 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001223 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 순수 신증후군형 lupus에서 classV membranous capillary wall thickening과 모든 lupus신염을 wire-loop로 설명한 혼동 교정. 혈뇨음성/정상Cr복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001223
