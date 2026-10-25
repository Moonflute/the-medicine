---
type: qbank
schema_version: 1
id: medqa-us-train-006303
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f4694d9985e56925306f09e9ce7fc23dc609fea363ba8ca898a9ba8785bdb6e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "복부 장기 천공"
  - "급성 복막염"
  - "복강 내 자유 공기"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDrs7Xspp0gKEFjdXRlIEFiZG9tZW4pLm1k
question_type: investigation
difficulty: complex
answer: B
original_answer: A
answer_change_reason: "WSES 천공성 소화성궤양 지침은 CT가 신속히 가능할 때 CT를 권고하며 단순촬영 우선은 CT 즉시 이용 불가에 한정한다. 이 문항에는 CT 이용 제한이나 영상 불가 쇼크가 없어 A→B로 수정. 근거: https://doi.org/10.1186/s13017-019-0283-9"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

42세 남성이 복통으로 응급실에 내원했다. 집에서 텔레비전을 보던 중 갑작스럽고 심한 복통이 발생하여 즉시 응급의료서비스에 전화했다. 과거력으로 비만, 흡연, 알코올 사용장애, 고혈압 및 골관절염이 있다. 현재 리시노프릴과 이부프로펜을 복용한다. 체온은 98.5°F(36.9°C), 혈압은 120/97 mmHg, 맥박은 분당 130회, 호흡수는 분당 22회, 실내 공기에서 산소포화도는 97%이다. 들것 위에서 통증을 피하는 자세를 취하고 있다. 복부는 단단하고 반발통과 감소된 장음이 있다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 복부 방사선 촬영
B. 복부 CT
C. 응급 복강경검사
D. 응급 개복술

## 해설


갑작스러운 심한 복통·경직·반발통과 NSAID 사용은 소화성 궤양 천공 등 수술성 급성복증을 의심하게 한다. 소생·금식·신속한 외과 평가와 함께, 혈역학적으로 영상검사가 가능하고 CT 이용 제한이 없는 제시 조건에서는 복부 CT(B)가 천공과 위치·다른 원인 평가에 적절하다. WSES는 의심 천공에서 CT를 권고하며 단순 흉부/복부 X선(A)은 CT를 신속히 시행할 수 없을 때 초기 대안이다. 환자가 불안정하거나 검사 때문에 응급 감염원 제어가 지연될 상황이면 영상검사를 기다리며 수술을 미루지 않는다. 원정답 A와 변경 이유를 보존했다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006303 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 A에서 B로 변경. NSAID 노출·갑작스러운 복통·복막자극징후의 천공 의심 급성복증에서 WSES는 CT가 신속히 가능하면 CT를 권고하고 단순촬영은 CT 즉시 이용 불가 때 대안으로 명시한다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1186/s13017-019-0283-9

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006303
