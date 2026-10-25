---
type: qbank
schema_version: 1
id: medqa-us-train-001293
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:767b4e1cc45b189bff353272d826c0bc1bcb29dc6ed739952960bb1caaaffe9c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ischemic colitis"
  - "hypoperfusion"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tl4jtmIjshLEg64yA7J6l7Je8IChJc2NoZW1pYyBDb2xpdGlzKS5tZA
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 여성이 심폐우회술을 이용한 판막 치환술을 받은 지 5시간 후 점점 악화되는 복통으로 내원했다. 통증은 경련성이고 배변하고 싶은 느낌과 함께 발생한다. 지난 1시간 동안 혈변을 두 번 보았다. 수술 중 상당한 출혈이 발생해 수술이 길어졌고 적혈구를 2단위 수혈받았다. 고콜레스테롤혈증과 제2형 당뇨병이 있다. 수술 전후 예방적 항생제와 회복 중 오피오이드 진통제를 투여받았다. 체온은 37.9°C (98.9°F), 맥박은 95회/분, 혈압은 115/69 mm Hg이다. 복부는 부드럽고 왼쪽 사분면에 경미한 압통이 있으나 반발통이나 근육 방어는 없다. 장음은 감소되어 있다. 직장검사에서 검사 손가락에 혈액이 묻어난다. 다음 중 증상의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 비장굽이로 가는 혈류 감소
B. 구불결장 벽의 작은 게실
C. 장 혈관의 죽상경화성 협착
D. Clostridioides difficile 감염

## 해설


심폐우회술 후 저혈압과 복통, 혈변은 장관 저관류에 의한 허혈성 대장염을 시사한다. 대장 혈류가 비장굴곡 부위에서 가장 약해지므로, 비장굴곡으로 가는 혈류 감소가 가장 가능성 높은 원인이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 A/해설 읽음. 심폐우회술 중 출혈/저관류 직후 좌측 복통·혈변은 분수령인 비장굽이 허혈성 대장염과 일치. 현재 혈압이 정상이어도 수술 중 저관류를 배제하지 않음. 원문의 Celsius/Fahrenheit 짝은 비일관적이나 원인 선택과 독립적이어서 수치 임의 변경 안 함.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001293
