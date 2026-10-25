---
type: qbank
schema_version: 1
id: medqa-us-train-001903
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69ae1e7a93d685cafa3387c955a46983ca6a2a11ffaeefcf00c3016c6a43250a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "normal puberty"
  - "Tanner stage II"
  - "precocious puberty"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
question_type: diagnosis
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 여아가 신체 변화에 대한 부모의 걱정으로 내원했다. 최근 브래지어를 착용하기 시작했고 지성 피부에 얼굴 스크럽을 사용하며 체취가 증가했다. propranolol로 조절되는 편두통 병력이 있다. 키 55백분위수, 체중 60백분위수이다. 유륜과 유방 윤곽이 분리되고 유두·유륜이 이차 융기를 형성하며 굵고 짙은 겨드랑이 털과 드문 치모가 있다. 다음 중 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 시상하부 과오종
B. 생리적 발달
C. 모자이크 G단백 돌연변이
D. 기능성 난포성 난소낭종

## 해설

유두·유륜이 유방과 분리된 이차 융기를 형성하는 것은 유방 Tanner IV 소견이지 II가 아니다. 9세의 사춘기 변화 자체는 생리적 범위에서 가능하므로 선택지 중 B가 가장 적절하다. 다만 현재 나이만으로 병적 원인을 모두 배제할 수는 없으며, 8세 이전 시작 여부와 진행 속도·성장곡선을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 유두·유륜 이차 융기는 Tanner IV인데 해설이 II로 오기. B를 유지하되 시작 나이·진행속도를 확인해야 함을 명시.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001903
