---
type: qbank
schema_version: 1
id: medqa-us-validation-000732
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6f58d9ee0b08d9d32e2ef0476c9ffe17718623fbc9a39d4d5e883f28915764d8
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "편도인두암"
  - "두경부 편평세포암"
  - "범내시경검사"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: complex
answer: B
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

56세 환자에게 수개월간 한쪽 인후통, 연하곤란과 귀 통증이 있다. 귀 진찰은 정상이나 같은 쪽 편도에 궤양성 종괴와 단단한 경부 림프절이 만져진다. 다음 조치는?

## 선택지

A. 중이염으로 보고 경구 항생제만 처방한다
B. 두경부암이 의심돼 신속히 전문의에 의뢰하고 조직 진단을 진행한다
C. 역류로 판단해 제산제 반응만 본다
D. 정기 청력검사만 예약한다

## 해설

정상 이경 소견의 지속성 편측 이통에 편도 종괴와 경부 림프절이 있으면 구인두암을 의심한다. 병변 조직검사를 포함한 두경부 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원정답 B의 내시경 평가를 유지하며 암 확진에 조직검사가 필요하고 영상만으로 확정하지 않음을 명확히 함.
- 공식/학회 근거: https://www.cancer.gov/types/head-and-neck/hp/adult/oropharyngeal-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000732
- https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer
