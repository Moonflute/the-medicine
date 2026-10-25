---
type: qbank
schema_version: 1
id: medqa-us-train-003958
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b51b578f40c0848f7d284183dfb146d5af6dc9bc7fde86c87c3f2601cc8b18d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 부신기능저하증"
  - "부신 위기"
  - "고칼륨혈증"
  - "저나트륨혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDquLDriqXsoIDtlZjspp0gKEFkcmVuYWwgSW5zdWZmaWNpZW5jeSkubWQ
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: 임상증례 객관식
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9GbHVkcm9jb3J0aXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

텍사스 출신의 23세 여자가 임신 40주에 출산한 후 중환자실로 이송되었다. 임신은 합병증 없이 진행되었고 분만 중 약간의 출혈이 있었다. 정맥 수액과 혈관수축제에 반응하지 않는 심한 저혈압으로 이송되었다. 현재 노르에피네프린과 바소프레신을 투여 중이며 평균 동맥압은 67 mmHg이다. 과거력은 접촉피부염으로 최근 5일간 알부테롤과 프레드니손 감량요법을 받은 천식 외에는 특이사항이 없다. 신체검사에서 백인 여성치고 피부가 비정상적으로 검게 보인다. 환자는 극심한 쇠약감을 호소하지만 유즙 분비는 있었고 아기에게 모유 수유도 할 수 있었다. 검사 결과 Na+ 127, Cl− 92, K+ 6.1, HCO3− 22 mEq/L, BUN 20 mg/dL, 크레아티닌 1.1 mg/dL, Ca2+ 10.2 mg/dL이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 급성 신손상
B. 결핵균 감염
C. 일차성 부신기능저하증
D. 프레드니손 사용 중단에 따른 금단

## 해설

과색소침착·저Na·고K·불응성저혈압은 일차성 부신부전 C의 위기에 부합한다. 즉시 stress-dose hydrocortisone과 적절한 수액 등 응급치료를 한다. 고용량 hydrocortisone에는 mineralocorticoid 작용이 있어 이 시기에 fludrocortisone이 반드시 추가되는 것은 아니며 감량/유지단계에서 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PAI C는 맞지만 급성위기에서 fludrocortisone 즉시필수라는 설명 수정.
- https://www.endocrine.org/-/media/endocrine/files/cpg/primary-adrenal-insufficiency-cpg-resource-page-13feb18.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003958
