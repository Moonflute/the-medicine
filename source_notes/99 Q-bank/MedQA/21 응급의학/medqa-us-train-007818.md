---
type: qbank
schema_version: 1
id: medqa-us-train-007818
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76ec933ffbb16bf0c4dddd5fd0c88408881c19b871bd5451ed8723bdfb3d9bc4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "pulmonary embolism"
  - "hospital-acquired pneumonia"
  - "CT pulmonary angiography"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남자가 우측 하엽 폐렴으로 진단되어 상급병원에 입원했다. 검사 결과 3주 전 선택적 복부 수술을 받았던 병원에서 감염된 것으로 보인다. 1년 전 심부정맥혈전증과 폐색전증 병력이 있다. 입원 치료 5일 동안 꾸준히 호전되다가 6일째 기침, 호흡곤란, 객혈이 발생했다. 체온 38.6°C(101.5°F), 맥박 112회/분, 혈압 130/84 mm Hg, 호흡수 28회/분이다. 우측 다리 부종과 종아리 압통이 있고, 흉부 청진에서 좌측 유방 부위와 우측 견갑골 아래에 국소 수포음이 들린다. 심음은 정상이고 빈맥 외 심잡음은 없다. 다음 중 즉시 시행할 검사로 가장 적절한 것은?

## 선택지

A. 혈장 D-이합체
B. 혈청 뇌나트륨이뇨펩티드
C. 조영증강 흉부 CT
D. 환기-관류 스캔

## 해설

수술·입원, 과거 VTE, 새로운 호흡곤란과 객혈, 한쪽 다리 부종·압통은 폐색전증의 임상 확률을 높인다. 이런 고확률 환자에서는 D-dimer로 배제를 시도하기보다 조영 CT 폐혈관조영술(C)로 직접 평가하는 것이 적절하다. 기존 폐렴 소견 때문에 V/Q 검사의 해석도 어려울 수 있다. 산소포화도는 본문에 제시되지 않았으며 모든 환경에서 CTPA가 가장 빠르거나 모든 환자에게 적합하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고확률 PE의 CTPA C는 유지하되 원문에 없는 저산소증과 무조건 가장 빠르다는 표현을 제거한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007818
