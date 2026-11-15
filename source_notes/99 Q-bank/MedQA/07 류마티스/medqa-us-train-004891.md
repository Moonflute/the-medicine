---
type: qbank
schema_version: 1
id: medqa-us-train-004891
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15c4cf6a52c4538521956e830e2514e86a892419a23522926c9f30766d65ed7b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "반응성 관절염"
  - "클라미디아 감염"
  - "지염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
question_type: investigation
difficulty: standard
answer: D
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
---

# MedQA US 임상문제

## 문제

28세 남성이 새 요도 분비물에 이어 발가락 지염과 결막염을 보인다. 반응성 관절염의 유발 감염을 확인하고 요도염 치료를 정하기 위해 할 검사는?

## 선택지

A. 혈청 류마티스인자
B. 항핵항체
C. HLA-B27 검사만 시행
D. 첫 소변으로 클라미디아·임균 핵산증폭검사

## 해설


요도염이 동반되면 클라미디아와 임균 감염을 확인한다. 남성의 첫 소변을 사용할 수 있으며 HLA-B27은 감염 원인을 확인하는 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-004891`와 직접 대조했다.
- 판정: 결막염·지염·발바닥 병변과 성접촉은 반응성관절염/클라미디아 평가. MS·CSF 해설의 명백한 오연결을 이 사례용 설명으로 교체; D 유지.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm
- https://www.ecdc.europa.eu/en/chlamydia/facts

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004891
- https://stiguide.kr/
