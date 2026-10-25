---
type: qbank
schema_version: 1
id: medqa-us-train-005823
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95795339e2236ed8dcdc2e87358e60082cb08b6b7e11da3391dfccb23e1fb8ba
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "침윤성 유관암"
  - "유방보존술"
  - "감시 림프절 생검"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

47세 여성이 2일 전 유방 자가검진 중 발견한 좌측 유방 종괴로 내원했다. 레보티록신으로 치료 중인 갑상선기능저하증이 있다. 유방암 가족력은 없다. 유방은 크고 중등도로 처져 있으며, 좌측 유방에 약 1×0.5cm 크기의 단단하고 움직이며 통증 없는 종괴가 유두-유륜 복합체에서 4cm 떨어진 7시 방향에 있다. 피부나 유두 변화와 액와 림프절병증은 없고 우측 유방에는 종괴가 없다. 소변 임신검사는 음성이다. 유방촬영술에서 경계가 불명확한 연조직 종괴가 보이고, 중심침생검에서 저등급 침윤성 유관암이 확인되었다. 에스트로겐 수용체 양성, 프로게스테론 및 HER2 수용체 음성이다. 병기 설정에서 원격 전이는 없다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 액와 림프절 절제술을 동반한 유두 보존 유방절제술 후 호르몬 치료
B. 감시 림프절 생검을 동반한 유방종괴절제술 후 호르몬 치료
C. 근치적 유방절제술 후 호르몬 치료
D. 감시 림프절 생검을 동반한 유방종괴절제술 후 방사선 및 호르몬 치료

## 해설


1 cm 저등급 ER양성/HER2음성 침윤암이며 임상적으로 액와림프절이 촉지되지 않아, 보기 중 유방보존 종괴절제와 감시림프절생검 후 방사선·내분비치료 D가 적절하다. 감시림프절은 신경절이 아니며 임상 촉진음성만으로 병리적 림프절음성을 미리 확정하지 않는다. 47세의 이 환자에게 방사선을 일률적으로 생략하는 B보다 D가 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005823 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 감시림프절생검을 신경절 절제로 잘못 설명하고 촉진음성을 병리음성으로 둔갑한 오류 교정. D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/hp/breast-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005823
