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
publication_status: "withheld"
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

38세 여성이 점점 심해지는 근력저하로 머리를 빗기 어렵다. 양쪽 근위부 근력이 떨어져 있고, 목과 위가슴에 V자 홍반이 있으며 크레아틴키나아제가 상승했다. 중증 장기침범은 없는 피부근염으로 확인됐다. 근육염을 조절하기 위한 초기 약제는?

## 선택지

A. 하이드록시클로로퀸
B. 메토트렉세이트
C. 고용량 코르티코스테로이드
D. 정맥 면역글로불린

## 해설


근위부 근력저하, 크레아틴키나아제 상승과 광노출 부위의 V자 홍반은 피부근염을 시사한다. 근육염 초기 조절에는 전신 글루코코르티코이드를 쓰며, 스테로이드 절감제와 장기침범 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004642 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: V-sign/poikiloderma를 보이는 피부근염을 PM-SLE 겹침으로 오연결한 해설을 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9398208/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004642
