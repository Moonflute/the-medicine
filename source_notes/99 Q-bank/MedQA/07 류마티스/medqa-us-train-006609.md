---
type: qbank
schema_version: 1
id: medqa-us-train-006609
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d825e0125c281a5613924f50a0207acc4f81aaf67072c394bcdc36e3cdb18d6
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "라기세포"
  - "활액 염증"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: investigation
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

55세 여성이 손의 관절통과 부종으로 내원했다. 아침에 통증이 약 한 시간 지속되고 관절이 ‘풀리면서’ 호전된다고 한다. 2년 동안 지속되었으나 최근 일상생활에 지장을 준다. 수년간 의사를 찾지 않았다. 고혈압으로 매일 히드로클로로티아지드를 복용한다. 할머니와 이모가 류마티스관절염을 앓았다. 현재 흡연 중이며 20년 동안 하루 반 갑을 피웠다. 체온은 37°C(98.6°F), 혈압은 125/85 mm Hg, 호흡수는 분당 17회, 심박수는 분당 98회이다. 손과 손목 관절이 붓고 압통이 있다. 혈색소 10.7 g/dL, 헤마토크릿 37.5%, 백혈구 1,400/mm³, 평균적혈구용적 81.4 μm³, 혈소판 200,000/mm³, ESR 45 mm/h, 항시트룰린화 단백 항체 55(정상 <20)이다. CT에서 중수지관절의 골감소증과 미란이 보인다. 메토트렉세이트를 시작했다. 활액검사에서 다음 중 어떤 소견이 나타날 가능성이 높은가?

## 선택지

A. 라기세포
B. 요산나트륨 결정
C. 피로인산칼슘
D. 림프구 수 증가

## 해설


RA의 염증성 활액에서 면역복합체를 포식한 과립을 가진 호중구인 ragocyte(A)를 볼 수 있다. 이는 RA에 완전히 특이적이지 않으며 단독 확진검사는 아니다. 결정 침착 선지들은 다른 결정관절염과 관련된다. 원문 WBC1,400/mm³는 현저한 백혈구감소이므로 methotrexate를 안전하게 시작해도 된다는 사례로 받아들이지 말고 원인·ANC·약물/혈액질환을 먼저 평가하며 투약 보류/조절 여부를 판단해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006609 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Ragocyte A 연관은 유지하되 비특이성과 WBC1400에서 MTX 투여의 안전성 문제를 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/008085s072lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006609
