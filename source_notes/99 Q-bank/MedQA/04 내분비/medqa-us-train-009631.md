---
type: qbank
schema_version: 1
id: medqa-us-train-009631
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af8389dd04d88437f9ddd352d6f804894f231215b770dd4a77b408a62ce10b73
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "adrenal incidentaloma"
  - "부신 우연종"
  - "Cushing syndrome"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDsmrDsl7DsooUgKEFkcmVuYWwgSW5jaWRlbnRhbG9tYSkubWQ
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
---

# MedQA US 임상문제

## 문제

62세 남성이 다른 이유로 찍은 CT에서 3 cm 부신 결절이 우연히 발견됐다. 고혈압과 당뇨병이 있다. 뚜렷한 쿠싱 외형은 없다. 부신의 자율적 코르티솔 분비를 선별할 검사는?

## 선택지

A. 코신트로핀 자극검사
B. 무작위 코르티솔 단독 측정
C. 1 mg 야간 덱사메타손 억제검사
D. 하추체정맥동 채혈

## 해설


부신 우연종에서 1 mg 야간 덱사메타손 뒤 코르티솔 억제 여부를 본다. 영상이 양성 선종처럼 보여도 분비 여부는 별도이며, 고혈압 등 상황에 따른 다른 부신 호르몬 평가도 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009631 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 부신우연종+조절 어려운 당뇨/고혈압에서 1mg overnight DST C는 cortisol 자율분비 초기 선별에 부합.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ese-hormones.org/publications/directory/ese-clinical-practice-guideline-on-the-management-of-adrenal-incidentalomas-in-collaboration-with-the-european-network-for-the-study-of-adrenal-tumors/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009631
- https://doi.org/10.1093/ejendo/lvad066
