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
question_type: management
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

45세 여성이 3개월 동안 조기 포만감과 간헐적 오심으로 내원했다. 식후 불편하게 꽉 찬 느낌과 간헐적 구토가 있지만 흉골 뒤나 심와부 통증은 없다. 제1형 당뇨병, 당뇨병성 신장병증 및 범불안장애가 있으며 인슐린, 라미프릴 및 에스시탈로프람을 복용한다. 활력징후는 정상이고 점막이 건조하며 심와부에 경미한 압통이 있다. 3주 전 HbA1C는 12.2%였다. 현재 상태 치료에 가장 적절한 약물은?

## 선택지

A. 오메프라졸
B. 메토클로프라미드
C. 온단세트론
D. 탄산칼슘

## 해설

장기T1D·고A1c와 식후포만/오심은 위마비를 의심하게 하며 제시중 prokinetic metoclopramide B가 적합하다. 실제로 기계적폐색을 배제하고 표준위배출검사로 지연을 확인하며 혈당/영양을 관리한다. 신장병증의 용량조정과 지연운동장애 등 위험·제한된 투여기간도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 당뇨성 위마비 의심 B를 확진으로 단정하지 않고 진단/안전성·신장용량 평가에 연결.
- https://gastro.org/clinical-guidance/clinical-guidance-on-the-management-of-gastroparesis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006933
