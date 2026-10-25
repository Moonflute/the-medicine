---
type: qbank
schema_version: 1
id: medqa-us-train-009520
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:11271459d4f97ef822b93e4484ce5f745a1356fe8da99e245b9f03de9c2e4128
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "reactive arthritis"
  - "반응성 관절염"
  - "postinfectious arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: prognosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남자가 몇 시간 전부터 발열과 오른쪽 무릎 및 왼쪽 발목의 통증과 부종이 갑자기 발생해 응급실에 왔다. 외상은 없으며 최근 캠핑 중 덜 익힌 닭고기를 먹고 심한 복통과 혈변이 있었던 위장염에서 4주 전 회복했다. 혈압 124/76 mmHg, 맥박 76회/분, 체온 36.9℃이다. 오른쪽 무릎과 왼쪽 발목 압통, 결막 발적이 있다. 이 질환에서 발생할 가능성이 가장 낮은 소견은 무엇인가?

## 선택지

A. 피부 발진
B. 생식기 궤양
C. 원위지절관절 부종
D. 환상 귀두염

## 해설


장염4주 뒤 하지의 비대칭 oligoarthritis와 결막염은 reactive arthritis에 부합한다. 피부발진·생식기 점막병변 및 circinate balanitis는 알려진 관절외 소견이다. 보기 중 손발가락 끝마디인 DIP 관절의 부종 C가 전형성이 가장 낮다는 출제 의도이다. DIP는 무릎이나 발목을 뜻하지 않으며 circinate balanitis가 전혀 무관해서 정답이라는 기존 해설은 잘못이다. Reactive arthritis에서 dactylitis나 말단관절 증상이 절대 불가능하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009520 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: DIP를 무릎/발목이라 부르고 해설 결론을 D로 뒤집은 자기모순 교정. 원정답 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009520
