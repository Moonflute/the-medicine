---
type: qbank
schema_version: 1
id: medqa-us-train-002919
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3fe035e1155f2950353a1c728339a9e344b2fb65f585bf916a7e62bafccce894
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "basal cell carcinoma"
  - "rolled borders"
  - "ulcerated skin nodule"
  - "excisional biopsy"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-q4sOyggCDshLjtj6zslZQgKEJhc2FsIENlbGwgQ2FyY2lub21hKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 7개월 동안 목에 생긴 피부 병변으로 내원했다. 가렵거나 아프지는 않으며 일반의약품 국소제를 사용해 보았지만 효과가 없었다. 고혈압, 갑상샘기능저하증, 위식도역류질환이 있고 암로디핀, 하이드로클로로티아지드, 레보티록신, 판토프라졸을 복용한다. 농부이며 두 자녀와 함께 산다. 체온은 37.7°C, 맥박 80회/분, 호흡수 15회/분, 혈압 128/84 mmHg이다. 목 앞가쪽에 5 mm 크기의 압통 없는 단단한 결절이 있고 가장자리가 말려 있으며 중앙에 궤양 부위가 있다. 경부 림프절병증은 없고 폐와 심장 진찰은 정상이다. 피부경검사 외에 가장 적절한 다음 단계는?

## 선택지

A. 병변 중앙의 펀치 생검
B. 병변 전체의 절제 생검
C. 외부 빔 방사선치료 일정 잡기
D. 병변과 주변 조직의 쐐기 생검

## 해설

농부의 햇빛 노출 부위에 생긴 말린 경계와 중앙 궤양의 결절은 기저세포암(BCC)을 의심하게 한다. 5 mm의 작은 병변에서 전체 절제생검(B)은 진단과 조직 평가를 위한 합리적 선택이다. BCC의 생검은 형태·깊이·위치에 따라 shave·punch·절제생검 중 선택하며 항상 전체 절제만 가능한 것은 아니다. A처럼 궤양 중심만 채취하면 비진단적 조직만 얻을 수 있어 적절한 병변 부위와 깊이를 확보해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 작은 의심 BCC의 절제생검 B는 합리적이나 BCC에 항상 전체 절제생검만 필요한 것처럼 적은 해설과 베이셀 용어를 수정한다.
- 공식/학회 근거: https://www.aad.org/member/clinical-quality/guidelines/bcc
- 공식/학회 근거: https://academic.oup.com/bjd/article/185/5/899/6599942

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002919
