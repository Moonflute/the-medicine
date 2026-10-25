---
type: qbank
schema_version: 1
id: medqa-us-test-000808
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:47b74d3708d8d691258d8ccd266713fa2ea047132d429eb39fdf76fcb537ba82
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심장눌림증"
  - "외상성 쇼크"
  - "심낭혈종"
question_type: mechanism
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGhlbnlsZXBocmluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 신체 여러 부위를 12차례 찔린 뒤 응급실에 왔다. 현장에서 많은 출혈이 있었고 글래스고 혼수척도 3점으로 도착 전 기관삽관과 큰 정맥로를 확보했다. 대량수혈 프로토콜로 적극 소생하면서 탐색적 개복술을 준비했고 동맥관과 중심정맥로를 삽입했다. 체온 95°F(35°C), 혈압 50/40 mmHg, 맥박 80회/분, 인공호흡기에서 호흡 20회/분이었다. 적혈구·혈장·혈소판을 6:6:1로 투여하고 페닐에프린을 지속 주입했지만 활력징후는 변하지 않았고 수술팀은 활동성 출혈이 없다고 했다. ScvO₂ 39%, 100% 산소에서 SaO₂ 100%였으며 실내 온도를 높여도 사지는 차가웠다. 가장 가능성 높은 원인은?

## 선택지

A. 심장눌림증
B. 경추 척수 절단
C. 폐색전증
D. 진단되지 않은 폐렴

## 해설

다발성 자상 후 출혈 소생에도 지속되는 심한 저혈압·차가운 사지·낮은 ScvO₂는 심박출량 저하와 산소 전달 부족을 시사한다. 선지 중 심장압전(A)의 폐쇄성 쇼크가 외상 상황에 가장 부합한다. 낮은 ScvO₂ 자체가 압전에 특이적이지 않으며 초음파와 지속 출혈 등 다른 원인 평가가 필요하다. FiO₂ 100%는 고농도 산소 투여이지 고압산소치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 심장압전 A를 유지하되 100% 산소를 고압산소로 오역하고 낮은 ScvO₂만으로 압전을 확진한 설명을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000808
