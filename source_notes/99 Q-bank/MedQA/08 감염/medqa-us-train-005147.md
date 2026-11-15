---
type: qbank
schema_version: 1
id: medqa-us-train-005147
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89a38e85ddb39c6ff02d2add73bc03d6ba10277d7af15236fc7f39cb29ddb3a2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "면역저하 환자 수막염"
  - "경험적 광범위 항생제"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

최근 항암화학요법을 받은 63세 환자의 뇌척수액에서 호중구가 증가하고 당이 낮다. 지역사회획득 세균성 수막염을 의심해 세프트리악손과 반코마이신을 준비 중이다. 면역저하를 고려해 추가할 항생제는?

## 선택지

A. 아지트로마이신
B. 암피실린
C. 메트로니다졸
D. 세파졸린

## 해설


고령·면역저하 환자의 지역사회획득 세균성 수막염에서는 리스테리아를 포괄하기 위해 암피실린을 더한다. 세프트리악손은 리스테리아 치료제로 쓸 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005147 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령·면역억제에서 ampicillin의 Listeria 범위와 원문 음식 노출 단서 복원; D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005147
- https://www.icjournal.org/DOIx.php?id=10.3947%2Fic.2012.44.3.140
- https://www.who.int/publications/i/item/9789240108042
