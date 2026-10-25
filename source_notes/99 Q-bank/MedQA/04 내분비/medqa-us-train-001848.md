---
type: qbank
schema_version: 1
id: medqa-us-train-001848
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:485ce338e52dcdd648ecaf7bc0822c9b87d30ac3292bcf925584c7150d260627
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "hyperglycemia"
  - "insulin therapy"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluQXNwYXJ0Lm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여성이 급성 구토와 복통으로 응급실에 왔다. 3시간 전 잠든 중 시작되었다. 과거력은 없고 외할머니에게 갑상선기능저하증과 당뇨병이 있다. 과일 냄새 호흡, 피부긴장도 저하, 피로와 약간의 의식변화가 있다. 혈당 691 mg/dL, 나트륨 125 mEq/L, 혈청 케톤 상승이다. 다음 중 최선의 다음 관리 단계는 무엇인가?

## 선택지

A. 정맥 수액과 insulin을 투여한다
B. metformin을 중단하고 기저-식사 인슐린을 시작한다
C. metformin을 중단하고 식사 때 insulin aspart를 시작한다
D. sitagliptin을 중단하고 기저-식사 인슐린을 시작한다

## 해설

정답은 A이다. 심한 고혈당·케톤증·과일냄새 호흡과 탈수/의식변화는 DKA를 의심하게 하며 혈액가스·전해질을 신속히 평가한다. 등장성 수액으로 초기 순환을 회복하고 통상1시간 뒤 K확인하에 insulin주입을 시작한다. 정맥 insulin bolus나 혈당의 무리한 급속 정상화를 뜻하지 않으며 신경학적 상태를 감시한다. sodium125의 단위는 mg/dL가 아니라 mEq/L이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Na단위 mg/dL 오기를 mEq/L로 교정하고 소아 DKA 수액 후 insulin 순서 명시.
- https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001848
