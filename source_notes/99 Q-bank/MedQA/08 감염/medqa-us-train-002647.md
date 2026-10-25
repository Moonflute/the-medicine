---
type: qbank
schema_version: 1
id: medqa-us-train-002647
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ad62edd299caa654fa74d111d109a741c53acbad9921bc434c4cdb9487fe4a72
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute hepatitis B"
  - "hepatocellular injury"
  - "HBsAg"
  - "anti-HBc IgM"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQu2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBCKS5tZA
question_type: investigation
difficulty: complex
answer: D
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

35세 남성이 1주간 지속된 피부와 눈의 황달, 식욕부진, 오심, 권태감, 심한 피로로 내원했다. 두통 때문에 일반의약품 아세트아미노펜을 복용한다. 새 파트너와 성관계를 시작한 지 한 달 되었고 콘돔을 일관되게 사용하지 않으며, 중국에 거주하는 부모를 지난해 방문했다. 피부와 공막이 황달이고 오른쪽 상복부 압통과 간비대가 있다. 총 빌리루빈 3.4 mg/dL(직접 2.5), AST 2,100 U/L, ALT 2,435 U/L, ALP 130 U/L이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 복부 초음파
B. 복부 CT
C. 안심시키고 상담한다
D. HBsAg와 항-HBc IgM 검사

## 해설


AST/ALT 2,000 U/L 이상과 황달은 급성 간세포 손상으로, 선택지 중 HBsAg 및 IgM anti-HBc D가 급성 HBV 평가에 적절하다. 다만 HBV만이 가능한 원인은 아니다. 원문에는 두통 때문에 일반의약품 acetaminophen을 복용한다는 정보가 있으므로 용량·복용 시점과 약물성 손상을 확인한다. PT/INR·의식·장기기능 등 급성 간부전 위험을 함께 평가하고 다른 바이러스·담도/혈관 원인이 의심되면 해당 검사/영상도 고려한다. 영상은 영원히 불필요하다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002647 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 간세포 손상의 HBV 검사 D 유지하되 원문 acetaminophen 노출 누락 복원·다른 원인/중증도 평가 필요성 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5975958/
- https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002647
