---
type: qbank
schema_version: 1
id: medqa-us-train-004611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16748adaf7f806c26fe3a1d87b64df44aa8b4742559071378151dcb1c8224d74
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "요관결석"
  - "신장산통"
  - "폐쇄성 요로병증"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
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
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 2시간 동안 지속된 심한 오른쪽 옆구리 통증으로 응급실에 왔다. 통증은 산통 양상이고 강도는 10점 만점에 9점이다. 구토를 두 차례 했다. 이전에 비슷한 증상은 없었다. 키는 160cm (5피트 3인치), 체중은 104kg (229lb), BMI는 41kg/m2이다. 체온은 37.3°C (99.1°F), 맥박은 분당 96회, 호흡수는 분당 16회, 혈압은 116/76 mm Hg이다. 복부는 부드럽고 오른쪽 하복부에 경한 압통이 있다. 장음은 감소되어 있다. 그 외에는 이상이 없다. 백혈구는 7,400/mm3이다. 저선량 복부 및 골반 CT에서 오른쪽 원위 요관에 둥근 12mm 결석이 보인다. 소변검사지는 혈액에 약하게 양성이고 현미경검사에서 적혈구는 보이지만 백혈구는 없다. 0.9% 생리식염수 주입과 정맥 케토롤락 투여를 시작했다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 요관경검사
B. 관찰
C. 요관 스텐트 삽입
D. 티아지드 이뇨제 치료

## 해설

정답은 A, 요관경을 이용한 결석 제거이다. 원위 요관의 12 mm 결석은 자연배출 가능성이 낮아 관찰만 지속하기보다 적극적 제거가 적절하다. 제시된 선지에서는 요관경 치료가 적합하며 비만도 치료방식 선택에 고려한다. 스텐트는 필요한 경우 감압에 쓰지만 그 자체가 항상 근본적 결석제거는 아니다. 발열·감염을 동반한 폐쇄가 있으면 우선 긴급 감압과 항균치료가 필요하나 이 문항에는 감염 소견이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 12mm 결석을5–10mm로 바꾸고 관찰 B라고 결론낸 명백한 정답모순 해설 교체. A 요관경 치료 유지.
- 공식/학회 근거: https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004611
