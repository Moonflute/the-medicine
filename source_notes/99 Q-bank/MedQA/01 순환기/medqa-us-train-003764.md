---
type: qbank
schema_version: 1
id: medqa-us-train-003764
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d4a5bad6d2480e39c55b5f7abaaf5f819f3b02aed8b68195c54f62bbe55e6172
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "intermittent claudication"
  - "ankle-brachial index"
  - "antiplatelet and statin"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 걷거나 오르막을 오를 때 양쪽 종아리에 생기는 1년간의 경련성 통증으로 내원했다. 흡연력과 고혈압이 있고, 양쪽 대퇴맥박은 만져지지만 발등맥박은 소실되었다. 발목상완지수는 0.6이었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 클로피도그렐과 심바스타틴
B. 혈관 재건 수술
C. 경피적 경혈관 성형술과 스텐트
D. 반코마이신과 피페라실린

## 해설

ABI0.6의 증상성 PAD에서는 항혈소판제와 statin이 심혈관 사건 예방의 핵심이므로 선택지 A가 가장 적절하다. 금연·구조화 운동을 병행하고 일반적으로 최대내약 고강도 statin을 목표로 한다. 이 문항의 simvastatin은 statin군을 가리키는 선택지이며 용량 정보 없이 모든 환자에게 충분한 강도라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성PAD 항혈소판+statin A 유지. Simvastatin을 모든 환자의 최적 강도로 일반화하지 않음.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003764
