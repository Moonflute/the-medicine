---
type: qbank
schema_version: 1
id: medqa-us-train-007662
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:185b63b2284a75807056f580deaa98f7938f19bebfc918397479374b175f5dfa
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial fibrillation"
  - "transient ischemic attack"
  - "cardioembolic stroke prevention"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
question_type: prevention
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 여성이 급성 혼돈과 약 30분간 지속된 좌측 다리의 갑작스러운 근력저하 때문에 남편과 함께 응급실에 왔다. 내원 1시간 전에는 약 15분간 말을 이해하지 못하고 발음이 어눌했다. 제2형 당뇨병과 고혈압이 있으며 30년간 매일 담배 한 갑을 피웠다. 메트포르민과 히드로클로로티아지드를 복용한다. 맥박은 110회/분으로 불규칙하고 혈압은 135/84 mmHg이다. 사지가 차갑고 좌측 경동맥 위에서 약한 잡음이 들린다. 심장 진찰에서 중간수축기 클릭으로 시작하는 2/6등급 후기 수축기 박출성 심잡음이 들린다. 신경학적 및 정신상태검사는 정상이다. 심전도에서 P파가 보이지 않고 QRS 복합체 간격이 불규칙하다. 도플러 초음파에서 좌측 경동맥의 경미한 협착이 보인다. 뇌 CT와 확산강조 MRI는 정상이다. 다음 중 향후 신경학적 기능장애 발작을 예방할 가능성이 가장 높은 치료는?

## 선택지

A. 에날라프릴
B. 와파린
C. 알테플라제
D. 대동맥판막 치환술

## 해설

일과성 신경학적 결손과 심전도로 확인된 심방세동은 심장성 색전을 시사하므로 항응고 치료가 필요하다. 제시된 선택지 중 B의 와파린이 적합하다. 다만 기계판막이나 중등도 이상 류마티스성 승모판 협착 등의 예외가 없는 심방세동에서는 일반적으로 DOAC가 선호되므로, 와파린이 모든 환자의 유일한 우선약이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TIA와 심전도로 확인된 AF에는 항응고가 필요하나 모든 환자의 현행 우선약이 와파린인 것은 아님.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007662
