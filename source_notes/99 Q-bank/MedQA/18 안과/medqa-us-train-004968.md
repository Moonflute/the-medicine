---
type: qbank
schema_version: 1
id: medqa-us-train-004968
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e134e359ff5d2be8fa8e894534f5bf1fcd4034390ceed6a6357159f3cb37891a
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "안구 파열"
  - "개방성 안구 손상"
  - "외상성 전방출혈"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-yViOq1rCDsmbjsg4EubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 남자가 설치 중이던 창문이 떨어져 다친 뒤 응급실에 왔다. 왼쪽 눈 통증, 흐린 시야, 왼쪽 시야 아래쪽 가림을 호소한다. 왼쪽 눈에 결막 충혈, 뾰족한 동공, 홍채 비대칭, 전방출혈, 유리체출혈이 있어 안저가 잘 보이지 않는다. 다음 중 진단과 치료에서 적절한 조치는?

## 선택지

A. 왼쪽 눈 초음파검사
B. 트로피카미드 점안 후 안저검사
C. 손상된 눈에 안대 부착
D. 반코마이신과 레보플록사신 전신 투여

## 해설

외상 후 뾰족한 동공, 홍채 비대칭, 전방 및 유리체 출혈은 개방성 안구 손상을 강하게 의심하게 한다. 제시된 선택지 중 D의 전신 광범위 항균 예방은 적절한 조치이다. 실제 항생제 종류·경로는 오염도, 내성·알레르기와 지역 프로토콜에 따라 안과가 정하며, 이 특정 두 약제만이 유일한 표준이라는 의미는 아니다. 안구에 압력을 가하지 않는 단단한 보호막으로 보호하고 긴급 안과 수술 평가를 진행한다. 압박성 패드나 초음파 탐촉자로 안구를 누르는 것은 피하며 검사 때문에 봉합을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 개방성 안구 손상의 항생제 D는 유지하면서 압박 안대와 비접촉 보호막을 구분하고 한 가지 고정 항생제 조합만 필수라는 설명을 완화.
- 공식/학회 근거: https://eyewiki.aao.org/Ruptured_Globe

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004968
