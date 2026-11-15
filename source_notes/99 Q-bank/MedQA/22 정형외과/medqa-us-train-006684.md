---
type: qbank
schema_version: 1
id: medqa-us-train-006684
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a55403e80fd99dc04f68122cea095aa9425344a23ca9923df0f872d7ea6a16c0
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "화농성 관절염"
  - "급성 세균성 관절염"
  - "경험적 광범위 항생제"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmU64aN7ISxIOq0gOygiOyXvCAoU3VwcHVyYXRpdmUgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

통풍이 있는 42세 남성이 열과 함께 무릎이 갑자기 붓고 아프다. 혼탁한 활액에 요산 결정이 보이지만 백혈구가 95,000/μL이고 수동 운동 통증이 심하다. 그람염색은 음성이다. 다음 조치는?

## 선택지

A. 통풍으로 확정하고 활액 배양을 취소한다
B. 콜히친만 처방하고 귀가시킨다
C. 항생제 없이 관절 안에 스테로이드를 주사한다
D. 감염 가능성을 열어두고 배양 후 경험적 정맥 항생제와 배액을 진행한다

## 해설

결정이 있어도 화농성 관절염이 함께 있을 수 있다. 강하게 의심되면 염색 음성만으로 배제하지 않고 배양과 신속한 항생제·배액을 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 그람염색 음성을 그람음성균 배제로 잘못 해석한 안전성 오류를 수정했다. 화농성 관절염 의심 시 배양 후 그람양성·음성 경험적 범위를 확보하는 선지 D를 유지하되 지역 내성과 위험도에 따른 선택임을 명시했다.
- 공식/학회 근거: https://jbji.copernicus.org/articles/8/29/2023/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006684
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/
