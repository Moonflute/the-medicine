---
type: qbank
schema_version: 1
id: medqa-us-train-004634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4530c0b8230e3e1f07da24d8c608d552e1b70871751f3ded77e3e156c02017f9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간경변성 복수"
  - "자발성 세균성 복막염"
  - "복수천자"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 노숙자가 응급실에 이송되었다. 공원에서 의식이 없는 채 발견되었다. 정맥주사 약물 남용, C형간염, 알코올 남용, 조현병과 우울증 병력이 있다. 정기적인 진료를 받지 않는다. 체온은 102°F (38.9°C), 혈압은 97/68 mmHg, 맥박은 분당 120회, 호흡수는 분당 22회, 산소포화도는 98%이다. 신체검사에서 복부가 전반적으로 팽창되어 있고 타진 시 둔탁하며 액체 파동이 뚜렷하다. 복부검사에서 사지가 수축할 정도로 아파한다. 심장과 폐 진찰은 정상이다. 통증 자극에는 반응하고 술 냄새가 심하게 난다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 세포탁심
B. 세프트리악손
C. 복수천자
D. 초음파

## 해설

복수 환자에서 발열·복통·의식저하는 SBP를 의심하게 하므로 C의 진단적 복수천자로 세포수/PMN과 배양을 확인한다. 이는 단순 치료적 대량배액이 아니다. 패혈증 소생과 경험적 항생제도 신속히 시행하며 검체 채취가 지연된다고 항생제를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 복수·발열·의식저하에서 C는 진단적 복수천자이며 단순 배액치료라는 해설을 교정.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004634
