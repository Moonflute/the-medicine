---
type: qbank
schema_version: 1
id: medqa-us-train-003438
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27cfc006ffd230fe38db0e5d4eef6fb41590fa5f177651574d681e459518c234
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative colitis"
  - "extensive colitis"
  - "pseudopolyps"
  - "total proctocolectomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 중증 궤양성 대장염으로 입원한 환자가 정맥 스테로이드를 3일간 받았지만 하루 9번 혈성 설사가 지속되고 염증 수치가 높은 상태다. 감염 검사와 CMV 조직검사는 음성이다. 거대결장·천공은 없고 결핵과 B형간염을 평가했다. 외과 협진과 함께 검토할 다음 약물 치료는?

## 선택지

A. 경구 메살라진 단독으로 변경
B. 아자티오프린 단독으로 빠른 관해 유도
C. 현재 스테로이드만 같은 용량으로 계속 투여
D. 인플릭시맙을 구제 치료로 시작

## 해설

급성 중증 궤양성 대장염이 정맥 스테로이드에 충분히 반응하지 않으면 인플릭시맙 또는 정맥 사이클로스포린을 구제 치료로 고려한다. 외과와 함께 경과를 평가하고 악화나 합병증이 있으면 수술을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UC의 근치치료 D를 묻는 문항이지 범위만으로 즉시 수술 적응증이라는 뜻 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003438
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714434/
