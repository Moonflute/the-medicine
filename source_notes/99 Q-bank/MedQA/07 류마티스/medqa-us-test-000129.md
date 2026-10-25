---
type: qbank
schema_version: 1
id: medqa-us-test-000129
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:875397b9c41e359e8aba398c42e7470e5ea4d877775046daa3d7546f715be9e6
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발근육염"
  - "염증성 근병증"
  - "근육 생검"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmx1dmFzdGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

47세 여성이 5개월 동안 진행된 근력 약화로 내원했다. 어깨와 엉덩이 근육이 약해지고 때때로 쑤신다. 의자에서 일어나거나 계단을 오르거나 머리를 빗기 어렵고 고형식을 삼키기도 어렵지만 액체는 괜찮다. 플루바스타틴으로 조절되는 고지혈증이 5년간 있었고 외삼촌은 26세에 뒤시엔 근이영양증으로 사망했으며 어머니는 하시모토 갑상선염이 있다. 신경학적 검사에서 양측 팔 외전근과 고관절 굴곡근의 중등도 약화가 보인다. CK 212 U/L, LDH 164 U/L, AST 34 U/L, ALT 35 U/L이다. 다음 중 진단을 확진할 가능성이 가장 높은 소견은?

## 선택지

A. 근육 생검에서 근섬유속 내 침윤
B. 근육 생검에서 근섬유 주위 및 혈관 주위 침윤
C. 항아세틸콜린 수용체 항체 양성
D. 유전검사에서 디스트로핀 유전자 돌연변이

## 해설


진행성 대칭적 근위부 약화는 염증성 근병증을 시사하며, 피부 발진이 없는 이 사례의 선지 중 A가 다발근염의 근섬유속 내/근내막 염증 패턴에 해당한다. 이는 염증세포가 근섬유 세포 안에 있다는 뜻이 아니다. CK가 낮거나 경미하게 상승했다는 사실이나 먼 가족력만으로 확진할 수 없고 다른 근병증도 배제해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000129` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 근위부 약화와 A의 근섬유속 내 염증 패턴 연결 유지. CK가 정상이면 다발근염을 확진한다는 해설 및 근섬유 내부 침윤 표현 교정.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000129
