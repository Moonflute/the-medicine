---
type: qbank
schema_version: 1
id: medqa-us-train-007843
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52b6c76a4db2fc831428c2f5af52a973c809c98cbc03670bd31315d95568034a
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "warfarin-associated coagulopathy"
  - "supratherapeutic INR"
  - "fresh frozen plasma"
  - "Warfarin overdose"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 응급 수술 전 와파린 역전 선택지를 현행 권고로 교정"
curation_status: "revised"
curation_reason: "응급 수술 전 와파린 역전 선택지를 현행 권고로 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

정맥주사 약물·메스암페타민 사용력과 만성 혈전색전성 폐고혈압(CTEPH) 병력이 있는 30세 남자가 악화되는 복통과 발열로 여자친구와 함께 응급실에 왔다. 처음에는 배꼽 주위가 아팠지만 현재는 사타구니 근처에 심한 압통이 있다. CTEPH 치료로 처음 리바록사반을 처방받았으나 보험 문제로 2주 전 와파린으로 변경했다. 체온 102°F(38.9°C), 혈압 95/60 mmHg, 맥박 95회/분, 호흡수 22회/분이다. 평소 혈압이 낮다고 한다. 심장 진찰은 정상이지만 양측 폐기저부 수포음과 우하복부 압통이 있고 좌하복부를 누르면 반발통이 발생한다. 백혈구 16,000/mm³, 헤모글로빈 11 g/dL, 혈소판 190,000/mm³, INR 6.2, PT 40초, aPTT 70초이다. 혈액형 O형, Rh 양성, 항체 선별검사는 음성이다. 영상검사 없이 수술 자문팀이 임상적으로 진단했고, 추가 수술을 위한 수술실은 5시간 후에야 이용 가능하다. 적절한 내과적 치료를 시작했다. 수술 전 최적화를 위한 가장 적절한 다음 단계는?

## 선택지

A. 아무것도 하지 않음
B. 출혈·혈전 위험을 평가하며 4인자 프로트롬빈복합체농축제(PCC)와 정맥 비타민 K를 투여하고 INR 재확인
C. 비타민 K만 투여하고 INR 재확인 없이 예정 시각에 수술
D. 프로타민

## 해설

와파린 복용 중 INR 6.2이고 응급 복부 수술이 예정되어 있어 수술 전 신속한 항응고 역전이 필요하다. 4인자 PCC로 응고인자를 빠르게 보충하고 비타민 K를 함께 투여해 효과를 유지하며 INR을 재확인한다. 투여량과 시점은 INR·체중·수술 시급성에 맞추고 기존 혈전색전 질환에 따른 위험도 고려한다. PCC를 사용할 수 없을 때 신선동결혈장이 대안이 될 수 있으나 일률적인 우선 선택은 아니다. 프로타민은 와파린의 해독제가 아니다. 메스암페타민 사용을 CTEPH의 직접 원인으로 표현하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 응급 수술 전 와파린 역전 선택지를 현행 권고로 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.fda.gov/media/85512/download
- https://www.nice.org.uk/guidance/ng24/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007843

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
