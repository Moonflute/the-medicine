---
type: qbank
schema_version: 1
id: medqa-us-validation-000554
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0bf93dc0ecefae0854ad20b1a5cd503e5cc402f6cff6090db56a711de1343df0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "예르시니아 장염"
  - "Yersinia enterocolitica"
  - "덜 익힌 돼지고기"
  - "Yersinia enterocolitica infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yYiOultOyLnOuLiOyVhOymnSAoWWVyc2luaW9zaXMpLm1k
question_type: prevention
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

3세 남아가 3일간의 복통과 수양성 설사, 오늘 아침 붉어진 변으로 응급실에 왔다. 4일 전 가족과 여행에서 돌아왔고 동물원에서 동물을 만지고 새로운 음식을 많이 먹었다. 체온 38°C, 맥박 140회/분, 혈압 80/45 mmHg, 점막이 건조하며 오른쪽 아랫배 압통과 반발통이 있다. 대변배양에서 Yersinia enterocolitica가 자랐다. 이 상태를 예방했을 가능성이 가장 높은 것은?

## 선택지

A. 어린이집에서 손 씻기
B. 덜 익힌 돼지고기 피하기
C. 델리미트 피하기
D. 씻지 않은 채소 피하기

## 해설


Yersinia enterocolitica 감염은 주로 덜 익힌 돼지고기 섭취와 연관된다. 돼지고기를 충분히 익히면 병원균을 사멸시켜 감염을 예방할 수 있다. 따라서 가장 효과적인 예방은 덜 익힌 돼지고기 피하기이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000554 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대변배양으로 Y.enterocolitica 확인. 선택지 중 충분히 익지 않은 돼지고기 회피 B는 대표 예방 조치이며 모든 감염 경로가 돼지고기라는 의미는 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yersinia/hcp/clinical-overview/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000554
