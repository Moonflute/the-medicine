---
type: qbank
schema_version: 1
id: medqa-us-train-006063
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dacb3f54baf043e44ec28cb8e5b74e8b0fab0a129eceb41a288befc4d83425d6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "칼만 증후군"
  - "저성선자극성 성선기능저하증"
  - "무후각증"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5vOunjCDspp3tm4TqtbAgKEthbGxtYW4gU3luZHJvbWUpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남성 기술자가 2년 동안 시도했지만 임신이 되지 않아 생식 전문의를 찾았다. 건강하고 특별한 병력, 수술력 또는 복용 약물은 없다. 17세에 입양되었다. 외형은 정상이나 고음의 목소리와 얼굴 털이 없고 키 5피트 8인치, BMI 19kg/m²이다. 고환은 양측 음낭에 내려와 있고 정계정맥류는 없으며 양측 고환 용적은 8cc, 늘인 음경 길이는 6cm이다. 검사에서 LH, FSH 및 테스토스테론이 낮다. 다음 중 불임의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 취약 X 증후군
B. 칼만 증후군
C. 클라인펠터 증후군
D. 일차성 성선기능저하증

## 해설

낮은 LH·FSH·testosterone과 미발달 생식기는 저성선자극성 성선기능저하에 부합하며 선택지 B가 적합하다. Kallmann은 GnRH계 발달/이동 이상에 후각저하가 동반되는 질환으로 GH결핍이 정의가 아니다. 후각은 본문에서 평가되지 않았으므로 실제 감별에서는 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Kallmann B를 GH결핍/저신장 질환으로 설명한 오류를 GnRH결핍성 저성선자극으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006063
