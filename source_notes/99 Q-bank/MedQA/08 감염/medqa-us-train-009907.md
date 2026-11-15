---
type: qbank
schema_version: 1
id: medqa-us-train-009907
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6bd6f6bddc44c07e47def9783e563a0649769606737f457388c71bb81a46782c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "부비동염"
  - "경험적 항생제"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67aA67mE64-Z7Je8IChTaW51c2l0aXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
question_type: management
difficulty: simple
answer: A
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

45세 환자가 발열, 두통, 경부강직으로 내원했다. 뇌척수액에서 호중구 증가와 저당이 확인됐다. 면역저하, 신경외과 수술, 최근 입원 이력이 없는 환자에서 결과를 기다리며 투여할 경험적 항생제 조합은?

## 선택지

A. 세프트리악손과 반코마이신
B. 암피실린 단독
C. 세파졸린과 메트로니다졸
D. 시프로플록사신 단독

## 해설


국내 성인 지역사회획득 수막염에서는 원인균이 나오기 전 세프트리악손 또는 세포탁심에 반코마이신을 병용해 내성 폐렴구균을 포괄한다. 고령·면역저하 등 리스테리아 위험이 있으면 암피실린을 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009907 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 45세 지역사회 세균성 수막염의 ceftriaxone+vancomycin B 유지. Pseudomonas가 통상 주요 원인이라는 오설명 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009907
- https://www.icjournal.org/DOIx.php?id=10.3947%2Fic.2012.44.3.140
- https://www.who.int/publications/i/item/9789240108042
