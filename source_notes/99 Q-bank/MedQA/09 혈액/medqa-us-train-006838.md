---
type: qbank
schema_version: 1
id: medqa-us-train-006838
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff4b61f9e82278aa5dcb4d65a8f642defaf5baafdc968437d1a6487e93e4e17d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "백혈병양 반응"
  - "호중구 증가"
  - "백혈구 알칼리성 인산분해효소 상승"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 남성이 6개월 동안 지속된 기침, 호흡곤란 및 피로감으로 내원했다. 이 기간 동안 체중이 8kg(17.6lb) 감소하고 야간 발한이 있었다. 창백해 보이며 활력징후는 정상이다. 간비장비대가 있고 백혈구는 78,000/mm³이다. 말초혈액도말에서 호중구가 80% 이상이고 띠 형태 및 미성숙·성숙 호중구 전구세포가 보인다. 골수 생검에서 모든 골수계 세포의 증식과 백혈구 알칼리성 인산분해효소 활성 증가가 보인다. 흉부 X선에서 오른쪽 폐문 인접 8mm 결절이 있다. 다음 중 검사 결과의 가장 가능성 높은 원인은?

## 선택지

A. 급성 골수성 백혈병
B. 급성 림프모구성 백혈병
C. 백혈병양 반응
D. 결핵

## 해설


주로 성숙/여러 성숙단계 호중구가 증가하고 LAP가 높은 양상은 선택지 중 leukemoid reaction C가 가장 부합한다. 모세포 중심의 급성 백혈병과 다르지만 LAP만으로 CML 등 모든 클론 질환을 배제할 수 없다. 만성 기침·체중감소·폐결절은 감염/악성 원인 평가가 필요하며8mm 결절만으로 특정 종양이나 결핵을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006838 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 성숙 호중구 계열·LAP 증가의 반응 C 유지; 원인과 확진을 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006838
