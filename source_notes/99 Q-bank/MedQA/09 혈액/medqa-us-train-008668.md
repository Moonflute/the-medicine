---
type: qbank
schema_version: 1
id: medqa-us-train-008668
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cbb4001b222df191c0d2a8e1d7b3f6f6aa6f13243fc6c09cc727f1c5fd80de4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "G6PD deficiency"
  - "oxidative hemolysis"
  - "ciprofloxacin-triggered hemolysis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
---

# MedQA US 임상문제

## 문제

22세 남성이 발열, 설사, 복부 경련으로 일차진료를 받으러 왔다. 최근 방글라데시 다카에서 친척을 방문하고 돌아왔다. 시겔라 감염으로 진단되어 시프로플록사신을 시작했다. 2일 후 심한 오심과 쇠약이 생기고 소변이 짙어졌다고 호소한다. 검사에서 혈색소 7.9g/dL, 비포합 빌리루빈 상승, 망상적혈구 증가, 젖산탈수소효소 증가, 혈액 요소 증가가 확인되었다. 다음 중 이 환자 상태의 진단을 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 혈색소 전기영동
B. Eosin-5-maleimide(EMA) 결합검사
C. ADAMTS13 활성도 검사
D. 포도당-6-인산 탈수소효소 분광광도검사

## 해설


간접 빌리루빈·LDH·망상적혈구 증가와 급성 빈혈은 용혈을 시사하며, 선택지 중 정량 G6PD 효소활성 분광광도검사(D)가 G6PD 결핍 평가에 맞는다. 다만 ciprofloxacin은 CPIC에서 표준 용량의 용혈 위험이 낮거나 없는 약물로 분류되므로 복용 시점만으로 약물성 용혈을 확정하지 않는다. 감염 자체도 용혈을 촉발할 수 있다. 급성 용혈 중에는 결핍 적혈구가 소실되고 망상적혈구 비율이 증가하여 효소활성이 위정상일 수 있어 회복 후 재검이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008668 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 용혈 후 정량 G6PD 검사 D의 의도는 유지하되 ciprofloxacin을 확립된 고위험 유발약으로 단정하지 않는다. CPIC는 표준 용량에서 low-to-no risk로 분류하며 감염 자체도 유발요인이다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10281211/
- https://medlineplus.gov/ency/article/003671.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008668
