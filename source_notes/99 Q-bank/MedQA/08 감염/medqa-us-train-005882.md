---
type: qbank
schema_version: 1
id: medqa-us-train-005882
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0fa9100b30016d99f92fb9ea82badcacd1a5052377af4abf23b735c8e270548c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "고령자 리스테리아 감염"
  - "경험적 항생제와 덱사메타손"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
  - MDgg6rCQ7Je8L-umrOyKpO2FjOumrOyVhCAoTGlzdGVyaWEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

고열과 경부강직이 있는 67세 환자에게 의식저하와 새로운 편마비가 있다. 혈액배양은 채취했다. 국소 신경징후 때문에 요추천자 전 두부 영상이 필요하다. 영상 준비 중 항균 치료는 어떻게 하는가?

## 선택지

A. 두부 영상과 요추천자를 모두 끝낸 뒤 시작한다
B. 정맥 항생제를 즉시 시작하고, 보조 덱사메타손은 적응 시 첫 항생제 직전이나 동시에 투여한다
C. 두부 영상 결과를 확인할 때까지 덱사메타손만 투여한다
D. 뇌척수액 그람염색에서 균을 확인한 뒤 시작한다

## 해설


영상 때문에 요추천자가 지연되더라도 세균성 수막염의 경험적 항생제는 지연하지 않는다. 덱사메타손을 쓰는 경우 초기 항생제 직전 또는 동시에 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005882 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령 수막염의 경험적 C 유지; steroid의 첫 항생제 전/동시 투여와 영상으로 지연금지 맥락 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005882
- https://www.icjournal.org/DOIx.php?id=10.3947%2Fic.2012.44.3.140
- https://www.who.int/publications/i/item/9789240108042
