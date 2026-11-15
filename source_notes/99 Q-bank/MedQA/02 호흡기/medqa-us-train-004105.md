---
type: qbank
schema_version: 1
id: medqa-us-train-004105
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:393fe3906e64935f5ac870bb31ff9b4732ecdbd5d3eee164ead9dad177a4e019
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환 악화"
  - "급성 저산소혈증"
  - "만성 기관지염"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: 임상증례 객관식
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
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

COPD 급성 악화로 내원한 63세 남성이 조절 산소와 기관지확장제 치료 후에도 보조근을 써서 숨 쉰다. 산소포화도는 90%이고 동맥혈 pH 7.30, PaCO₂ 62 mmHg이다. 의식은 명료하고 혈압은 안정적이며 가래를 뱉을 수 있다. 다음 호흡 보조 처치는?

## 선택지

A. 고농도 산소만 투여해 산소포화도를 100%까지 올린다
B. 산소를 모두 중단하고 관찰한다
C. 비침습적 양압환기를 시작한다
D. 기관지확장제 투여를 중단하고 경과만 본다

## 해설

조절 산소와 초기 치료 후에도 고탄산성 호흡성 산증과 호흡 부담이 지속되면 비침습적 양압환기가 적절하다. 산소는 일반적으로 산소포화도 88–92%를 목표로 조절한다. 의식 악화나 비침습 환기 실패가 있으면 삽관을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. COPD 저산소혈증의 산소 투여를 88~92% 목표의 조절산소로 구체화하고 고탄산성 산증에서 NIV 평가 필요성 보완.
- https://www.safetyandquality.gov.au/standards/clinical-care-standards/chronic-obstructive-pulmonary-disease-clinical-care-standard

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004105
- https://new.lungkorea.org/board/guide/view/13792
