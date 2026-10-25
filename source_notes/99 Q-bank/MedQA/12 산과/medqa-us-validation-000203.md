---
type: qbank
schema_version: 1
id: medqa-us-validation-000203
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7e6aa09709b01025d98f863360fbfd57507e878547ddc38cead9e1ed9d20c233
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "분만 진행 정지"
  - "활동성 진통"
  - "양막 파수"
  - "Arrest of labor"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 여성(임신 3회, 출산 2회)이 임신 39주에 양막 파수와 자궁수축으로 입원했다. 2시간 후 자궁경부는 6 cm 개대, 70% 소실, station -1이었지만 4시간 뒤에도 변화가 없고 10분마다 강한 수축 4회가 있었다. 태아심박수는 120회/분, 중등도 가속, 후기·변이 감속 없음. 다음 중 가장 적절한 처치는?

## 선택지

A. 제왕절개 분만
B. 보조 질식분만
C. 양수주입
D. 자궁내압 카테터 삽입

## 해설

파수 후 ≥6cm에서 충분한 자궁수축에도 4시간 경부 변화가 없으면 활동기 정지로 제왕절개(A)를 고려한다. 이 문항은 강한 수축 4회/10분을 충분한 수축으로 제시한 의도이다. 실제 외부 모니터는 수축력을 정량화하지 못하므로 적절성이 불확실하면 IUPC·옥시토신 최적화 등을 평가하며 시간 경과만으로 즉시 수술을 강제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 활동기 정지의 요건과 자궁내압 평가 가능성을 명시.
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000203
