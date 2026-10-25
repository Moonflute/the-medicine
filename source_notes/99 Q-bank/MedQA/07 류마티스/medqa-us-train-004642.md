---
type: qbank
schema_version: 1
id: medqa-us-train-004642
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c93897f87fe84ab1a84dd00ee4a35fe6b3179e6dff6cd5fc92158ea0bb93088a
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "피부근염"
  - "근위부 근육 약화"
  - "쇼울 징후"
  - "dermatomyositis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

38세 여성이 진행하는 근력 저하로 내원했다. 몇 주 전 시작되어 점점 악화되었고 최근 며칠 동안 머리를 빗기 위해 팔을 들 수 없었다고 한다. 특별한 과거력이나 현재 복용약은 없다. 어머니는 경피증, 이모는 전신홍반루푸스 병력이 있다. 신체검사에서 양쪽 상지 근력은 5점 만점에 2점이다. 팔의 폄면, 상부 흉부와 목에 'V자' 분포로 저색소와 과색소가 번갈아 나타나며 모세혈관확장증을 동반한 홍반 부위가 보인다. 추가 소견은 그림에 제시되어 있다. 항핵항체는 양성이고 크레아틴인산화효소가 상승되어 있다. 이 환자의 일차 치료로 가장 적절한 것은 무엇인가?

## 선택지

A. 하이드록시클로로퀸
B. 메토트렉세이트
C. 고용량 코르티코스테로이드
D. 정맥 면역글로불린

## 해설


근위부 근력저하·CK 상승과 광노출 부위의 V자 홍반/poikiloderma는 피부근염을 지지한다. 가족력이나 ANA 양성만으로 SLE 겹침을 진단하지 않는다. 활동성 근육염 유도치료에서 고용량 glucocorticoid(C)가 적절하며, 조기에 steroid 절감제와 장기침범·악성종양 위험 평가를 함께 계획한다. 제공되지 않은 추가 그림의 세부 소견을 보았다고 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004642 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: V-sign/poikiloderma를 보이는 피부근염을 PM-SLE 겹침으로 오연결한 해설을 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9398208/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004642
