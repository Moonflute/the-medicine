---
type: qbank
schema_version: 1
id: medqa-us-train-002955
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8003abe40953f7900d2b6a4ed165de051133b1b66cb2cdca63e91c4832c87b8
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "acute severe asthma"
  - "chemical inhalation injury"
  - "status asthmaticus"
  - "continued albuterol therapy"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-2doeyeheyEsSDspJHrj4UubWQ
question_type: management
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 심한 호흡곤란으로 응급실에 왔다. 산업 화학자로 새 동료와 실험실에서 일하던 중 대량 화학물질 유출로 연기가 발생했다. 보호장비는 고글만 착용한 채 유출물을 치우려 했고 두 사람 모두 기침을 시작했으나 환자는 천식 병력이 있어 상태가 악화되었다. 도착 시 호흡수 42회/분, 실내 공기 산소포화도 96%이며 기침 때문에 말을 할 수 없고 흡기 시 보조근을 사용한다. 양측 천명이 들려 알부테롤 네뷸라이저를 여러 차례 투여하고 정맥 메틸프레드니솔론을 시작했다. 연속 두 차례 치료 후 동맥혈가스는 pH 7.36, PCO₂ 41 mmHg, PO₂ 79 mmHg이고 이제 말할 수 있으며 호흡수는 32회/분이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 정맥 메틸프레드니솔론에 정맥 프레드니손을 추가한다
B. 알부테롤 투여를 계속한다
C. 알부테롤 네뷸라이저를 이프라트로피움 네뷸라이저로 바꾼다
D. 삽관하고 기계환기를 시작한다

## 해설

두 차례 albuterol 후 발화와 호흡수가 호전되어 선택지 중 B로 기관지확장 치료를 지속한다. 전신 steroid는 이미 투여 중이므로 다른 전신 steroid를 중복 추가하지 않으며, ipratropium은 필요 시 병용하지 albuterol의 단순 대체가 아니다. 여전히 RR32이며 심한 발작에서 정상화된 PCO2는 피로/환기부전의 경고일 수 있어 의식·호흡노력·가스 추세를 면밀히 재평가한다. 악화·피로·환기부전이면 삽관을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 호전 중인 천식에서 albuterol B는 유지하되 정상범위 PCO2·잔여 빈호흡을 안전하다고 단정하거나 추가관리 불필요라 하지 않음.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002955
