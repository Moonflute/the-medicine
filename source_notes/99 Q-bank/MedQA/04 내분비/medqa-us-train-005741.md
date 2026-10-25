---
type: qbank
schema_version: 1
id: medqa-us-train-005741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef9f50b91525a086adf487db4eb25103dbb1de49e53b8deb2cea4997b7e120cf
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "원발성 부갑상선기능항진증"
  - "고칼슘혈증"
  - "저인산혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 아프리카계 미국인 여성이 몸이 좋지 않아 일차진료를 받으러 왔다. 일주일 동안 기침이 있었고 복통과 집중 곤란도 점점 심해지고 있다. 최근 5파운드가 감소했으며 위식도 역류질환이 최근 잘 조절되지 않는다. 비흡연자이고 제산제를 복용하는 위식도 역류질환 병력이 있다. 검사에서 혈청 Na⁺ 139 mEq/L, K⁺ 4.1 mEq/L, Cl⁻ 101 mEq/L, HCO₃⁻ 24 mEq/L, 요소질소 12 mg/dL, 포도당 70 mg/dL, 크레아티닌 0.9 mg/dL, 칼슘 12.5 mg/dL, 알칼리성 인산분해효소 35 U/L, 인 2.0 mg/dL가 확인되었다. 소변은 호박색이고 아질산염 음성, 나트륨 5 mmol/24시간, 적혈구 0/HPF이다. 다음 중 현재 증상을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 부갑상선호르몬(PTH) 증가
B. 1,25-디하이드록시비타민 D 증가
C. 제산제 과다 사용
D. 바이러스성 질환

## 해설

고Ca·저P는 PTH매개 고칼슘혈증 A를 시사하지만 실제 PTH는 제시되지 않아 측정이 필요하다. 칼슘함유 제산제 과용은 오히려 고Ca의 원인이 될 수 있으나 이 경우 대사성 알칼리증·신기능 변화 등도 평가한다. 제산제가 보통 저Ca를 일으킨다는 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고Ca/저P의 PTH A 가능성은 유지하되 미측정 PTH상승과 제산제는 저Ca라는 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005741
