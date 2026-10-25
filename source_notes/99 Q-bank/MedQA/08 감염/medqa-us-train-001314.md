---
type: qbank
schema_version: 1
id: medqa-us-train-001314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31352f652f77e05b16466b36117b653a2199d857047e7004643e57ec058465ba
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "central line-associated bloodstream infection"
  - "Staphylococcus aureus bacteremia"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uPhOq0gCDqtIDroKgg6rCQ7Je8IChDYXRoZXRlci1SZWxhdGVkIEluZmVjdGlvbikubWQ
question_type: diagnosis
difficulty: standard
answer: B
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
---

# MedQA US 임상문제

## 문제

약물 유발 급성 신손상으로 중환자실에 입원한 지 5일 후 27세 여성에게 발열이 발생했다. 현재 인공호흡기와 진정제를 사용 중이다. 오른쪽 내경정맥에 삽입한 카테터로 혈액투석을 시행한다. 비위관으로 영양을 공급하고 있으며 유치 도뇨관의 소변량은 최소이다. 혈압은 85/45 mm Hg, 맥박은 112회/분, 호흡수는 32회/분, 체온은 39.6°C (103.3°F)이다. 중심정맥 카테터 삽입 부위 주위에 분비물 없이 발적이 있다. 폐 청진에서 rhonchi가 들린다. 심장 진찰에서 새 소견은 없다. 흉부 CT에서 양측 흉수가 보이나 폐 침윤은 없다. 경험적 항생제 치료를 시작했다. 말초혈액과 카테터 끝에서 채취한 혈액배양에서 동일한 항생제 감수성을 보이는 S. aureus가 자랐다. 유치 도뇨관에서 채취한 소변배양은 여러 균이 자랐다. 다음 중 최근 소견을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 카테터 연관 요로감염
B. 중심정맥 카테터 관련 균혈증
C. 심내막염
D. 인공호흡기 연관 폐렴

## 해설


카테터 삽입 부위 발적과 함께 말초혈액 및 카테터 검체에서 동일 감수성의 S. aureus가 검출되어 중심정맥 카테터 관련 균혈증 B를 가장 강하게 지지한다. 흉부 CT에 새 폐침윤이 없고 소변의 다균성 배양만으로 요로가 감염원이라고 단정할 수 없다. 새로운 심잡음이 없더라도 S. aureus 심내막염은 배제되지 않으므로 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001314 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심잡음이 없으면 심내막염 배제라는 오류를 제거; 동일S aureus의 말초·카테터 배양 근거로 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/cid/article/49/1/1/369414
- https://www.idsociety.org/practice-guideline/staphylococcus-aureus-bacteremia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001314
