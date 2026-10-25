---
type: qbank
schema_version: 1
id: medqa-us-train-000248
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24f48ecc23db5f12433e971083bda183f0923a6320d372e9e12a6d27230ec5c6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "disseminated gonococcal infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 파종성 임균 감염의 항생제 조합 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
curation_status: "revised"
curation_reason: "파종성 임균 감염의 항생제 조합 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

27세 여성이 지난 일주일간 지속된 발열과 심한 왼쪽 무릎 통증으로 응급실에 내원했다. 해당 부위에 외상이나 손상을 입은 적은 없으며, 최근 여행을 다녀오거나 야외 활동을 한 적도 없다. 한 명의 남성 파트너와 성생활을 하고 있으며, 콘돔을 일관되게 사용하지 않는다. 환자는 아파 보인다. 체온은 38°C, 맥박은 98회/분, 호흡은 17회/분, 혈압은 106/72 mm Hg이다. 신체 검진상 양측 발목과 발등 및 발바닥에 통증이 없는 다수의 농포성 병변이 관찰되며, 왼쪽 무릎은 부어 있고 발적을 동반하며 매우 심한 압통이 있다. 손목 또한 경미한 부종과 압통이 있으며 신전 시 통증이 있다. 무릎 X-선 검사상 연조직 부종이 관찰된다. 무릎 관절천자 결과 황색의 화농성 액체가 확인되었다. 그람 염색은 음성이다. 활액 분석 결과 백혈구 수는 58,000/mm3, 중성구 93%였으며 결정은 관찰되지 않았다. 다음 중 가장 적절한 약물 치료는 무엇인가?

## 선택지

A. 경구 페니실린 V
B. 세프트리악손 1 g IM/IV 매 24시간과, 클라미디아 미배제 시 독시사이클린 경구 7일
C. 경구 독시사이클린
D. 세프트리악손 500 mg 근육주사 1회만 투여

## 해설

농포성 피부병변·건초염·화농성 관절염은 파종성 임균 감염을 시사한다. 관절액 그람염색 음성으로 배제할 수 없다. 초기에는 ceftriaxone 1 g IM/IV를 매 24시간 투여하며, Chlamydia가 배제되지 않았다면 적합한 환자에서 doxycycline을 7일 추가한다. 관절 배액 필요성·배양/NAAT·성접촉자 평가도 병행한다. 무조건 azithromycin을 병용하는 과거 요법과 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 파종성 임균 감염의 항생제 조합 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000248

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
