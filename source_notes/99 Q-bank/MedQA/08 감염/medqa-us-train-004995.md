---
type: qbank
schema_version: 1
id: medqa-us-train-004995
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76025016538fc7cad05db773c477c59f022ed56b6287fb96443e415368f5919b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "패혈성 관절염"
  - "면역저하"
  - "황색포도상구균 관절 감염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

60세 여자가 2일 동안 발열과 통증성 왼쪽 무릎 부종으로 내원했다. 류마티스관절염과 당뇨병이 있고 메토트렉세이트, 메트포르민, 아스피린, 프레드니솔론을 복용한다. 체온 38.5°C이고 왼쪽 무릎은 전반적으로 붓고 따뜻하며 능동·수동 운동 모두 아프다. 관절액은 혼탁한 화농성이며 백혈구 25,000~250,000/μL, 호중구 90% 이상이다. 다음 중 가장 적절한 초기 약물치료는?

## 선택지

A. 관절강 내 트리암시놀론 아세토나이드
B. 정맥 내 메틸프레드니솔론
C. 정맥 내 반코마이신
D. 경구 시프로플록사신

## 해설


발열·뜨겁고 아픈 관절과 화농성 호중구성 관절액은 감염성 관절염을 우선 의심한다. 배양을 신속히 채취하고 선택지 중 정주 vancomycin C로 포도상구균/MRSA를 포함해 치료하되 그람음성 위험·지역 내성에 따라 추가 범위를 고려한다. 관절 배액/세척과 전문평가도 필요하다. 결정이 보이더라도 동시 감염을 배제하지 않으며 감염 배제 전 관절강 steroid를 우선 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004995 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 위험군 화농성 관절염의 vancomycin C 유지; 배양·배액 및 필요 범위 추가와 결정이 감염 배제 못함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004995
