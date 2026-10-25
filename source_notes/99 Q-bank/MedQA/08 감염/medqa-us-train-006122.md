---
type: qbank
schema_version: 1
id: medqa-us-train-006122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c5bc44f520cd1295301198ad73fa2466b95e50c21d24cac5c824a3fc132073c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "만성 C형간염"
  - "포르피리아 피부근육증"
  - "HCV RNA PCR"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
question_type: investigation
difficulty: complex
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

32세 여성이 3개월 동안 지속된 피로와 근육통으로 내원했다. 지난 한 달 동안 간헐적인 오심이 있었고 5년 전부터 불법 약물 사용을 하지 않았지만 정맥주사 약물 사용력이 있다. 14년 동안 하루 한 갑씩 흡연하고 매일 술 한 잔을 마신다. 황달과 간비장비대가 있고 양손 등쪽에 수포와 미란이 있다. 검사에서 혈색소 12 g/dL, 백혈구 8,300/mm³, 혈소판 250,000/mm³, 혈청 포도당 170 mg/dL, 알부민 3.0 g/dL, 총 빌리루빈 2.2 mg/dL, AST 92 U/L, ALT 76 U/L, B형간염 표면항원 음성, 표면항체 및 핵항체 양성, C형간염 항체 양성이다. 다음 중 진단의 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. HIV 웨스턴블롯
B. 바이러스 RNA PCR
C. 바이러스 DNA PCR
D. 간 생검

## 해설


Anti-HCV 양성은 과거 또는 현재 감염을 뜻하므로 HCV RNA PCR B로 현재 감염을 확인한다. 항체 양성만으로 활동 감염을 확정할 수 없다. HBsAg 음성·anti-HBs/anti-HBc 양성은 회복 HBV에 부합하며 HCV 평가를 HBV DNA 검사로 대체하지 않는다. 간생검은 모든 환자에서 첫 확진검사로 필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006122 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-HCV 양성을 오직 과거감염으로 설명한 오류 교정; RNA B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006122
