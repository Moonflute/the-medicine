---
type: qbank
schema_version: 1
id: medqa-us-train-007088
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:574666497ad3a385614819536fb88e6bbbf868c71992a80d84af5dbd8299e4af
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "저혈량성 급성 신손상"
  - "신전성 질소혈증"
  - "탈수"
  - "설사"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: mechanism
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowNiDruYTrh6jCt-yLoOyepS9BbGZ1em9zaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "신독성과 HUS에는 반드시 혈뇨가 있다는 잘못된 배제 논리 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

59세 남자가 3일 동안 악화되는 오심과 소변량 감소로 응급실에 내원했다. 일주일 전 멕시코 여행에서 돌아온 다음 날부터 4일간 복통, 구토, 물 같은 비혈성 설사를 했다. 이후 거의 먹거나 마시지 못했지만 증상은 3일 전에 호전되었다. 긴장성 두통이 있어 한 달에 약 10번 이부프로펜을 복용한다. 위식도 역류질환과 양성 전립선 비대증도 있다. 매일 판토프라졸과 알푸조신을 복용한다. 창백해 보이며 체온은 36.9°C(98.4°F), 맥박은 120회/분, 혈압은 90/60 mmHg이다. 점막이 건조하다. 복부는 부드럽고 방어와 반발통이 없다. 검사 결과는 다음과 같다.
헤모글로빈 14.8 g/dL
혈소판 수 250,000/mm³
혈청 나트륨 147 mEq/L, 염소 102 mEq/L, 칼륨 4.7 mEq/L, 중탄산염 20 mEq/L, 요소질소 109 mg/dL, 포도당 80 mg/dL, 크레아티닌 3.1 mg/dL
소변검사는 정상이다. 이 환자의 검사 결과를 일으킨 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 저혈량
B. 직접적인 신독성
C. IgA 사구체신염
D. 용혈성 요독 증후군

## 해설

구토·설사와 섭취 부족 뒤 빈맥·저혈압·건조 점막, 높은 BUN/Cr 비는 저혈량성 신장 저관류를 가장 잘 지지한다. NSAID가 신혈류 감소에 기여할 수 있지만 본문에서 주된 맥락은 용적 감소이다. HUS를 지지할 빈혈·혈소판 감소가 없으며 단순히 소변 혈액이 없다는 이유만으로 모든 내인성 신손상을 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007088

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신독성과 HUS에는 반드시 혈뇨가 있다는 잘못된 배제 논리 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
