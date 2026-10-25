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

28세 남자가 1주일 동안 양쪽 눈의 충혈과 분비물, 왼쪽 둘째·셋째 발가락의 통증과 부종, 발바닥 발진으로 내원했다. 여러 성 파트너와 성관계를 하며 콘돔은 가끔 사용한다. 양측 결막염, 두 발가락의 지염, 발바닥의 딱지와 황갈색 수포가 보인다. ESR은 40 mm/h이고 발가락 X선에서 골절 없이 연조직 부종이 확인된다. 다음으로 시행할 진단검사는?

## 선택지

A. 류마티스인자
B. 항핵항체 검사
C. HLA-B27
D. Chlamydia trachomatis 핵산증폭검사

## 해설


결막염, 지염과 발바닥 각화성 병변의 조합은 반응성관절염을 시사한다. 성접촉 위험이 있어 유발 감염인 C. trachomatis를 소변 또는 적절한 검체의 NAAT로 확인하는 D가 적절하다. HLA-B27은 소인 표지일 뿐 원인 감염을 확인하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-004891`와 직접 대조했다.
- 판정: 결막염·지염·발바닥 병변과 성접촉은 반응성관절염/클라미디아 평가. MS·CSF 해설의 명백한 오연결을 이 사례용 설명으로 교체; D 유지.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm
- https://www.ecdc.europa.eu/en/chlamydia/facts

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004891
