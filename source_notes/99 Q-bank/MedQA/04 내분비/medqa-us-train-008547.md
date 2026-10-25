---
type: qbank
schema_version: 1
id: medqa-us-train-008547
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:577d5c24ab429ee20b5b2f1b0c9f3035f4d2afa2e6c14d47293274beba852943
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "cerebral edema"
  - "papilledema"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 27세 남성이 혈당 492mg/dL를 측정하고 응급실에서 재확인된 뒤 급히 내원했다. 가벼운 산통 외에는 특별한 증상이 없다. 체온 37°C(98.6°F), 호흡수 15회/분, 맥박 67회/분, 혈압 122/88mmHg이다. 혈액검사 결과는 다음과 같다.
혈청 pH 7.0, pCO₂ 32mmHg, HCO₃⁻ 15.2mEq/L, 나트륨 122mEq/L, 칼륨 4.8mEq/L
소변검사에서 케톤체 양성이다. 입원해 정맥 중탄산염을 투여한 뒤 인슐린 지속주입과 생리식염수를 시작했다. 7시간 후 혼란스러워하며 심한 두통을 호소하는 상태로 발견되었다. 체온 37°C(98.6°F), 맥박 50회/분, 호흡수 13회/분의 불규칙 호흡, 혈압 137/95mmHg이다. 이 환자에게서 예상되는 추가 검사 소견은 무엇인가?

## 선택지

A. 저혈당
B. 췌장염
C. 유두부종
D. 말초부종

## 해설


정답 C. DKA 치료 중 새 심한 두통·혼란, 서맥·혈압상승·불규칙 호흡은 뇌부종/두개내압 상승을 우려하게 하며 유두부종이 동반될 수 있다. 성인에서는 드물지만 응급 평가가 필요하고 유두부종이 없다고 배제되지 않는다. 치료 후 pH가 급격히 낮아졌다는 자료는 없다. 현행 권고는 bicarbonate를 일률적으로 사용하지 않으며 통상 pH <7.0의 심한 산증에서 고려한다. 원문 pH·pCO2·HCO3 수치도 상호 완전히 일치하지 않아 임의 재계산으로 덮어쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008547 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 치료 중 새 Cushing 반응/의식저하는 두개내압 상승 의심이지 치료 후 pH하강 때문이 아님. pH7.0 bicarbonate 통상 비권고와 원문 ABG 불일치 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/11343900/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008547
