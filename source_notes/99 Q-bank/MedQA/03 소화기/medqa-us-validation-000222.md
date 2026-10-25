---
type: qbank
schema_version: 1
id: medqa-us-validation-000222
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b4d1b4b46f42887169ed7feafc8e3d7ca639153de275e1749cc174995d857df5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "헬리코박터 파일로리 감염"
  - "소화성 궤양"
  - "위궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9ILnB5bG9yaSDqsJDsl7wgKEgucHlsb3JpIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

57세 남성이 3개월 동안 음식을 먹은 후 복부팽만과 메스꺼움이 생기고, 이 기간에 간헐적인 복통도 있어 진료를 받으러 왔다. 왼쪽 무릎 골관절염이 있으며 심각한 질환의 가족력은 없다. 21년 동안 하루 한 갑씩 담배를 피웠고 매일 맥주 2~3잔을 마신다. 현재 이부프로펜을 복용하며 아목시실린과 라텍스에 알레르기가 있다. 활력징후는 정상이고 폐와 심장 진찰에 이상이 없다. 복부는 부드럽고 명치에 경미한 압통이 있다. 직장수지검사는 정상이다. 위식도십이지장내시경에서 위점막에 얕은 궤양 3개가 보였고, 생검에서 만성 위점막 염증과 헬리코박터 파일로리가 확인되었다. 헬리코박터 파일로리 감염 치료를 위해 2주간 항생제와 오메프라졸을 처방받았다. 현재 가장 적절한 권고는?

## 선택지

A. 앞으로 2주 동안 음주를 피한다
B. 아나필락시스 예방을 위해 예방적 스테로이드 치료를 시작한다
C. 2주 후 간효소를 확인한다
D. 2주 후 요소호기검사를 시행한다

## 해설


정답 A. Amoxicillin 알레르기가 있는 환자에게 흔히 고려하는 bismuth 기반 요법에는 metronidazole이 포함된다. 이를 복용한다면 허가사항상 치료 중 및 종료 후 최소 3일까지 음주를 피해야 한다. 본문은 실제 항생제명을 명시하지 않으므로 반드시 그 약이 처방됐다고 단정하지 않는다. 제균 확인은 항생제 종료 후 최소 4주, PPI 중단 후 2주 이후 시행하므로 단순 2주 뒤 요소호기검사는 이르다. 예방적 steroid는 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000222 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: amoxicillin 알레르기 사례에서 metronidazole 포함 제균요법의 금주 주의와 제균확인 시점을 구체화; 실제 처방명 없는 부분은 조건부 표현.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=205054e1-8172-47dc-931c-a18a60e7e9f0
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000222
