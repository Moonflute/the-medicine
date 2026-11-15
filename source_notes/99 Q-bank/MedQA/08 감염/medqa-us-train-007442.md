---
type: qbank
schema_version: 1
id: medqa-us-train-007442
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a915a8cc6863eea376b31350bf4c8b5c025d4fd56362a77451af0ee381f87f7b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 HIV 감염"
  - "연하통"
  - "경부 림프절병증"
  - "보호되지 않은 성관계"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: investigation
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

HIV 노출 가능성이 있는 성접촉 2주 뒤 고열, 인후통, 발진이 생겼다. 현재 4세대 HIV 항원·항체 검사는 음성이다. 급성 HIV 감염을 놓치지 않기 위해 추가할 검사는?

## 선택지

A. HIV 내성 유전자검사를 선별 검사로 시행
B. CD4 세포 수 측정
C. HIV 항체 신속검사만 반복
D. 혈장 HIV-1 RNA 검사

## 해설


감염 초기에는 항원·항체 검사가 음성일 수 있다. 노출 시점과 증상으로 급성 감염이 의심되면 HIV-1 RNA를 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007442 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 보호 없는 노출·전신 바이러스 증후군·인두염/림프절의 acute HIV D 배제 필요성을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007442
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/special-populations-early-acute-recent-hiv-infection
