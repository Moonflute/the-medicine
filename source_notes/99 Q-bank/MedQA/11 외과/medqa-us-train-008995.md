---
type: qbank
schema_version: 1
id: medqa-us-train-008995
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ddff659c2163aa1c302f36993d2d742deb4057fd2c331f9cb4df2aeaa7f6c737
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "bladder rupture"
  - "pelvic fracture"
  - "retrograde cystography"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0kSDtjIzsl7QgKEJsYWRkZXIgcnVwdHVyZSkubWQ
  - MjAg67mE64eo6riw6rO8L-yalOuPhCDshpDsg4EgKFVyZXRocmFsIGluanVyeSkubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 남성이 교통사고 뒤 골반 고리 골절과 육안적 혈뇨를 보인다. 현재 혈압은 안정되고 요도구 출혈은 없다. 방광 파열을 확인할 검사는?

## 선택지

A. 배설기 정맥 조영 CT만 시행
B. 역행성 요도조영술 단독
C. 방광에 조영제를 역행 주입해 CT 방광조영술 시행
D. 방광 초음파만 시행

## 해설


골반 골절과 육안적 혈뇨가 함께 있으면 방광 파열을 평가한다. 방광에 조영제를 역행 주입해 충분히 팽창시킨 방광조영술이 필요하며, 일반 배설기 조영 CT만으로 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008995 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골반골절과 도뇨 후 육안혈뇨는 방광손상 평가를 위한 역행성 방광조영술 D를 지지하며 AUA 권고와 일치한다. FAST 음성으로 방광손상이 배제되지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/education/clinical-guidance/Urotrauma.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008995
- https://uroweb.org/guidelines/urological-trauma/chapter/urogenital-trauma-guidelines
