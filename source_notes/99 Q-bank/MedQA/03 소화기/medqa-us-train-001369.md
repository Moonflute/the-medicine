---
type: qbank
schema_version: 1
id: medqa-us-train-001369
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9084c0a8964cd759f50c28ed8dfa6625787564c4bc554ab94e0717a415101456
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute mesenteric ischemia"
  - "atrial fibrillation embolus"
  - "lactic acidosis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7J6l6rCE66eJIO2XiO2YiCAoQWN1dGUgTWVzZW50ZXJpYyBJc2NoZW1pYSkubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDUg7Iug7J6lL-yCsOymnSAoQWNpZG9zaXMpLm1k
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 몇 시간 동안 악화되는 복통으로 응급실에 내원했다. 오심이 있지만 발열, 구토 또는 배변 양상의 변화는 부인한다. 제2형 당뇨병, 고혈압, 관상동맥질환, 뇌졸중, 심방세동 및 소화성 궤양 병력이 있다. 출혈성 소화성 궤양이 반복되어 와파린을 복용하지 않는다. 어린 시절 충수절제술을 받았다. 메트포르민, 리시노프릴, 메토프롤롤 및 오메프라졸을 복용한다. 50갑년의 흡연력이 있다. 체온은 37.6°C (99.7°F), 혈압은 146/80 mm Hg, 맥박은 115회/분, 호흡수는 20회/분이다. 통증으로 급성 고통 상태이며 폐 청진에서 산발적인 천명과 공기 유입 감소가 있다. 심박동은 불규칙하게 불규칙하고 잡음·마찰음·갤럽은 없다. 복부에서 장음이 감소하고 전반적인 압통이 있다. 초기 검사 결과는 Na 138 mEq/L, Cl 101 mEq/L, HCO3 12 mEq/L, BUN 21 mg/dL, Cr 0.9 mg/dL, 포도당 190 mg/dL, 아밀라아제 240 U/L(정상 <65 U/L)이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 소화성 궤양 천공
B. 급성 담낭염
C. 급성 장간막 허혈
D. 당뇨병성 케톤산증

## 해설

정답은 C이다. 항응고하지 않는 AF와 혈관질환 병력에서 심한 급성 복통은 장간막 동맥 색전/허혈을 우려하게 한다. 증가한 음이온차(138−101−12=25)는 허혈 관련 젖산산증 가능성을 지지하지만 lactate를 직접 측정한 것은 아니다. amylase 상승은 장허혈에서도 발생할 수 있어 췌장염만을 뜻하지 않는다. 고암모니아혈증은 본문에 없으며 진단 근거로 만들지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고암모니아혈증이라는 없는 소견을 제거하고 AF 색전 위험/산증·amylase 해석을 명료화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001369
