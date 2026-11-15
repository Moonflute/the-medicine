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
question_type: management
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

9세 6개월 여아가 9세부터 천천히 커지는 양쪽 유방 때문에 내원했다. 진찰은 유방 Tanner II이고, 키는 기존 성장곡선을 따라가며 질출혈이나 신경학적 증상은 없다. 가장 적절한 대응은?

## 선택지

A. 뇌 MRI를 즉시 시행한다
B. 정상 범위 사춘기로 설명하고 성장과 진행 속도를 추적한다
C. GnRH 작용제 치료를 시작한다
D. 난소 종양을 의심해 수술을 의뢰한다

## 해설

여아에서 8세 이후 시작해 서서히 진행하는 유방 발달은 정상 범위일 수 있다. 빠른 진행, 성장 가속, 질출혈 등 비전형적 변화가 생기면 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 유두·유륜 이차 융기는 Tanner IV인데 해설이 II로 오기. B를 유지하되 시작 나이·진행속도를 확인해야 함을 명시.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001903
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10556443/
