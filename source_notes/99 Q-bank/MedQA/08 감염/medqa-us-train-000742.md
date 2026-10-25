---
type: qbank
schema_version: 1
id: medqa-us-train-000742
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc5817857320dd6541dbb8df104500f1cf53c9e3d9def4e9b40f280ed93b876c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "splenic laceration"
  - "splenectomy"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA
question_type: management
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 비장절제 후 접종을 고정 PCV13에서 접종력 기반 현행 백신으로 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "비장절제 후 접종을 고정 PCV13에서 접종력 기반 현행 백신으로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

29세 남성이 퇴원 후 추적 관찰을 위해 6월에 일차 진료 클리닉에 내원하였다. 환자는 최근 교통사고 후 병원에 입원한 적이 있다. 당시 환자는 의식이 없고 저혈압 및 빈맥 상태로 응급실에 도착하였다. 복부 CT에서 큰 비장 열상으로 인한 복강 내 출혈(hemoperitoneum)이 확인되어 응급 비장 절제술을 받기 위해 수술실로 이송되었다. 그 이후로 합병증 없이 잘 회복되었다. 사고 전, 환자는 모든 예방접종을 최신 상태로 완료하였다. 현재 시점에서 다음 중 어떤 예방접종을 시행해야 하는가?

## 선택지

A. 이전 접종력을 확인해 위험군 일정에 맞는 폐렴구균 백신을 접종한다(예: 미접종 성인은 PCV20/21 또는 PCV15 후 PPSV23)
B. 불활성화(근육주사) 인플루엔자 백신
C. 홍역-볼거리-풍진(MMR) 백신
D. 파상풍 추가 접종 백신

## 해설

무비증은 침습성 폐렴구균 감염의 위험인자이므로 이전 접종력을 확인하여 현재의 위험군 접종 일정을 보완한다. PCV 미접종 성인은 PCV20/21 단독 또는 PCV15 후 PPSV23 등의 경로가 가능하다. 과거 PCV를 받은 경우에는 해당 접종력별 일정이 달라진다. 수막구균·Hib 및 매년 인플루엔자 예방도 함께 점검하지만, 6월이라는 이유로 불필요한 MMR·파상풍 재접종을 하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 비장절제 후 접종을 고정 PCV13에서 접종력 기반 현행 백신으로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/pneumococcal/vaccines/adults.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000742

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
