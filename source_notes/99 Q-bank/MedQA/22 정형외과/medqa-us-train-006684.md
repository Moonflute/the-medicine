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
explanation_status: manual-reviewed
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

통풍과 고혈압 병력이 있는 42세 남성이 지난 2일 동안 악화된 왼쪽 무릎 통증으로 내원했다. 왼쪽 무릎이 붓고 붉어졌으며 체중을 실을 수 없다. 무릎 수술이나 외상은 없다. 체온은 97.0°F(36.1°C), 혈압은 137/98 mm Hg, 맥박은 분당 80회, 호흡수는 분당 13회, 산소포화도는 98%이다. 진찰에서 왼쪽 무릎은 홍반, 부종, 열감과 심한 압통이 있고 굴곡·신전 시에도 매우 아프며 운동 범위가 반대쪽보다 크게 감소되어 있다. 관절천자에서 혼탁한 활액, 백혈구 95,000/mm³(호중구 88%), 낮은 포도당이 확인되었고 그람염색은 음성이다. 배양 결과는 기다리는 중이다. 다음 중 가장 적절한 치료요법은?

## 선택지

A. 세프트리악손
B. 인도메타신과 콜히친
C. 피페라실린-타조박탐
D. 반코마이신과 세프타지딤

## 해설

매우 아픈 열성 단관절과 혼탁한 호중구 우세 관절액 95,000/mm³는 화농성 관절염을 강하게 의심하게 한다. 그람염색 음성은 세균 감염이나 그람음성균을 배제하지 않는다. 배양 검체를 얻은 뒤 경험적 항생제와 관절 배액을 신속히 계획하며, 주어진 선지 중 반코마이신+세프타지딤(D)은 MRSA를 포함한 그람양성균과 그람음성균을 함께 포괄하는 선택이다. 다만 모든 그람염색 음성 관절염에 이 조합이 필수인 것은 아니며 지역 내성·숙주 위험에 맞추고 배양 결과에 따라 좁혀야 한다. 통풍 병력이나 결정 확인도 동반 감염을 배제하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 그람염색 음성을 그람음성균 배제로 잘못 해석한 안전성 오류를 수정했다. 화농성 관절염 의심 시 배양 후 그람양성·음성 경험적 범위를 확보하는 선지 D를 유지하되 지역 내성과 위험도에 따른 선택임을 명시했다.
- 공식/학회 근거: https://jbji.copernicus.org/articles/8/29/2023/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006684
