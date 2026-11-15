---
type: qbank
schema_version: 1
id: medqa-us-train-002238
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b2443acd97f8d651b44d5ad445793bb24a5376008ab9cfae05162b46ac040f6
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "menopausal vasomotor symptoms"
  - "hormone replacement therapy"
  - "breast cancer contraindication"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

타목시펜을 복용 중인 유방암 치료 후 여성이 야간 발한과 안면홍조로 잠들기 어렵다. 전신 호르몬요법은 피하기로 했다. 타목시펜과 상호작용을 고려한 약제는?

## 선택지

A. 파록세틴
B. 플루옥세틴
C. 경구 에스트로겐·프로게스토겐
D. 벤라팍신

## 해설

벤라팍신은 혈관운동 증상에 사용할 수 있고 CYP2D6 억제가 적다. 파록세틴·플루옥세틴은 강한 CYP2D6 억제로 타목시펜 활성 대사체 형성을 줄일 수 있어 피하는 편이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://www.acog.org/womens-health/faqs/hormone-therapy-for-menopause

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002238
- https://www.e-jmm.org/DOIx.php?id=10.6118%2Fjmm.25103
- https://thebms.org.uk/wp-content/uploads/2025/09/03-BMS-ConsensusStatement-Management-of-symptoms-after-breast-cancer-SEPT2025-C.pdf
