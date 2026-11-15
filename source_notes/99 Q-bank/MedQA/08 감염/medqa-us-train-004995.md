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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

류마티스관절염으로 면역억제제를 복용하는 60세 환자가 열과 갑작스러운 무릎 부종으로 왔다. 관절액이 혼탁하고 호중구가 우세하다. 피로인산칼슘 결정도 보이지만 세균배양은 아직 나오지 않았다. 다음 조치는?

## 선택지

A. 결정성 관절염 치료에 반응하지 않을 때까지 감염 평가를 미룬다
B. 가성통풍으로 보고 관절강 스테로이드를 바로 주사한다
C. 그람염색이 음성이면 감염을 배제하고 배양은 취소한다
D. 결정만으로 감염을 배제하지 말고 배양 채취 뒤 경험적 정맥 항생제와 배액 평가를 시작한다

## 해설


관절액에서 결정이 보여도 감염성 관절염이 함께 있을 수 있다. 발열, 면역저하, 심한 국소 염증이 있으므로 배양을 채취하고 항생제 및 배액 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004995 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 위험군 화농성 관절염의 vancomycin C 유지; 배양·배액 및 필요 범위 추가와 결정이 감염 배제 못함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004995
- https://jbji.copernicus.org/articles/8/29/2023/
