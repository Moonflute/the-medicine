---
type: qbank
schema_version: 1
id: medqa-us-train-007106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf732f4e18ca9ed567f1858bc487c769eeec7c2a8bab85e236c033d999b959d9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "조기 난소부전"
  - "원발성 난소기능부전"
  - "고FSH성 성선기능저하증"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yhsOq4sOuCnOyGjOu2gOyghCAoUHJlbWF0dXJlIE92YXJpYW4gRmFpbHVyZSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여자가 3개월 동안 성교통과 질 건조가 있어 내원했다. 이 기간 동안 간헐적인 안면홍조와 피로도 있었다. 지난 1년 동안 생리가 불규칙해졌고 마지막 월경은 6개월이 넘었다. 한 명의 파트너와 성생활을 하지만 보호나 피임은 하지 않는다. 소아기에 급성 림프모구성 백혈병을 앓았으나 현재 관해 상태이다. 골반검사에서 자궁경부와 질이 위축되어 있다. 소변 임신검사는 음성이다. 프로게스틴 부하검사에서 철회성 출혈이 나타나지 않았다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. GnRH 수치 감소
B. LH 수치 감소
C. FSH/LH 비 증가
D. TSH 수치 증가

## 해설

무월경, 저에스트로겐 증상, 프로게스틴 소퇴성 출혈이 없다는 소견과 과거 항암치료 병력은 난소기능저하를 시사한다. 난소의 에스트로겐·인히빈에 의한 음성 되먹임이 감소하면 성선자극호르몬이 상승하며 FSH가 두드러져 선택지 C의 FSH/LH 비 증가가 적절하다. LH/FSH 비 증가로 뒤집어 설명해서는 안 되며, 이 비율만으로 진단하는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: FSH/LH를 LH/FSH로 뒤집은 해설과 골반 내 FSH라는 표현을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007106
