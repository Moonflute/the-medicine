---
type: qbank
schema_version: 1
id: medqa-us-validation-001112
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ea3c2aca16b9b971ff5022417d19ecb28cd9ca5c2ff89abfec977e57ea926c48
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전"
  - "이차성 알도스테론증"
  - "이뇨제 유발 대사성 알칼리증"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOywqOyEsSDslYzrj4TsiqTthYzroaDspp0gKFNlY29uZGFyeSBBbGRvc3Rlcm9uaXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

66세 남성이 일주일간 악화되는 호흡곤란과 다리 부종으로 응급실에 왔다. 양측 폐에서 거친 수포음과 S3 분마음, 경정맥 팽창과 발목 함요부종이 있다. 정맥 부메타니드를 시작한 지 5일 후 혈액가스에서 대사성 알칼리증과 저산소혈증이 나타났다. 추가 평가에서 예상되는 소견은?

## 선택지

A. 혈청 알도스테론 상승
B. 소변 염화물 감소
C. 혈청 레닌 감소
D. 혈청 칼륨 상승

## 해설

부메타니드에 따른 염소·칼륨 손실과 유효 순환혈액량 감소는 레닌–안지오텐신–알도스테론계를 활성화하여 A의 알도스테론 상승을 일으킬 수 있다. 약효가 지속되는 동안 소변 염화물은 높을 수 있어 B를 항상 기대하지는 않는다. 원문의 pH, PaCO2, HCO3 조합은 완전히 일치하지 않아 혈액가스 재확인이 필요하지만, 이뇨제의 RAAS 활성화 기전과는 구별된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 루프이뇨제의 RAAS 활성화 A를 설명하면서 소변Cl은 투여 시점에 따라 달라짐을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001112
