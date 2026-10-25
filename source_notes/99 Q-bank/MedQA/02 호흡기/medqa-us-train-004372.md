---
type: qbank
schema_version: 1
id: medqa-us-train-004372
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5de3da5837b16bcb580b7cc91a7a18e16efc419cb9001317fa99ee81077a96a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐결절"
  - "우연히 발견된 폐결절"
  - "고립성 폐결절"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 33세 여성이 사다리에서 떨어진 지 1시간 후 응급실에 왔다. 의식은 명료하다. 흡연, 음주 또는 불법 약물 사용은 없고, 중대한 질환의 가족력도 없다. 맥박은 분당 72회, 호흡수는 분당 17회, 혈압은 110/72 mm Hg이다. 신체검사에서 오른쪽 쇄골 위에 멍과 국소 압통이 있다. 흉부 X선에서 오른쪽 쇄골 중간부의 전위되지 않은 골절과 왼쪽 상폐야 중앙부의 3.5mm 폐결절이 보인다. 이전 흉부 X선은 없다. 골절은 진통제와 팔걸이 고정으로 치료한다. 흉부 CT에서 폐결절은 고형이며 경계가 잘 정의되고 매끈하다. 이 환자의 폐결절에 대한 다음 관리 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 안심시킨다
B. 6~12개월 후 흉부 CT 추적검사
C. 6~12개월 후 흉부 X선 추적검사
D. CT 유도 경흉부 생검

## 해설

비흡연·특별위험 없는33세의 매끈한3.5mm고형결절은 악성가능성이 매우 낮아 선택지 A처럼 안심시키고 개별평가하는 접근이 적절하다. Fleischner 우연결절 지침은 일반적으로35세이상을 대상으로 하므로 이 환자에게 기계적으로 추적표를 적용하지 않는다. 위험요인·의심형태가 있으면 별도로 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저위험3.5mm결절 A는 유지.33세에 성인≥35세 Fleischner 규칙을 기계 적용하지 않도록 범위명시.
- https://www.radiologyinfo.org/en/info/acs-incidental-pulmonary-nodule

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004372
