---
type: qbank
schema_version: 1
id: medqa-us-train-006933
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f2756dc13f34613eece352545e444e388bb61238c0505a012e0f7d0f51d61ae6
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "당뇨병성 위마비"
  - "위 배출 지연"
  - "메토클로프라미드"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: investigation
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제1형 당뇨병을 오래 앓은 45세 여성이 조기 포만감과 식후 구토로 내원했다. 내시경에서 유문이나 십이지장의 기계적 폐쇄는 없다. 위마비를 의심하며 위 배출을 지연시키는 약은 복용하지 않는다. 진단을 확인할 검사는?

## 선택지

A. 위식도 산도 검사
B. 표준 고형식으로 시행하는 4시간 위 배출 신티그래피
C. 복부 단순 X선
D. 대장 통과 시간 검사

## 해설

위마비는 증상과 함께 기계적 폐쇄가 없고 위 배출이 지연된 것이 확인돼야 한다. 표준 고형식을 이용한 4시간 위 배출 검사가 적합하다. 검사 때 심한 고혈당이나 약물이 결과에 영향을 줄 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 당뇨성 위마비 의심 B를 확진으로 단정하지 않고 진단/안전성·신장용량 평가에 연결.
- https://gastro.org/clinical-guidance/clinical-guidance-on-the-management-of-gastroparesis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006933
