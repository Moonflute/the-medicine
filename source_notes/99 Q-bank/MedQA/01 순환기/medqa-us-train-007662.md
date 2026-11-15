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

68세 여성이 일과성 허혈발작으로 평가받았다. 심전도에서 심방세동이 확인됐고 심초음파에서는 중증 류마티스성 승모판 협착이 보인다. 뇌 영상에 출혈이 없고 장기 항응고 금기는 없다. 재발 예방에 적절한 경구약은?

## 선택지

A. 아스피린 단독
B. 와파린
C. 아픽사반
D. 클로피도그렐 단독

## 해설

심방세동에 중등도 이상의 류마티스성 승모판 협착이 동반되면 장기 항응고에 와파린을 사용한다. 그 밖의 심방세동에서 직접항응고제를 우선하는 경우와 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TIA와 심전도로 확인된 AF에는 항응고가 필요하나 모든 환자의 현행 우선약이 와파린인 것은 아님.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007662
- 대한부정맥학회 심방세동 진료지침: https://www.k-hrs.org/expert/guide/atrial
