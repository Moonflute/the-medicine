---
type: qbank
schema_version: 1
id: medqa-us-train-006237
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d9978f1e462fb48664ffbc4b18ea3d2c5ffebf46d0c76b153aac4d48d751b3e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "수막구균성 수막염"
  - "밀접 접촉자 예방"
  - "리팜핀"
  - "Meningococcal disease"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yImOunieyVjOq3oCAoTWVuaW5nb2NvY2N1cykubWQ
question_type: prevention
difficulty: standard
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

18세 여대생이 두통과 의식 변화로 구급차를 타고 응급실에 왔다. 지난 하루 몸이 좋지 않았고 12시간 동안 여러 차례 구토했다. 요추천자에서 중성구 우세 세포 증가와 그람음성 쌍알균이 보였다. 반코마이신과 세프트리악손을 시작했다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 암피실린, 덱사메타손 및 리팜핀 추가
B. 암피실린 추가
C. 남자친구에게 세프트리악손과 반코마이신 치료
D. 남자친구에게 리팜핀 예방요법

## 해설


수막구균 수막염의 동거인/구강 분비물 밀접 접촉자는 예방요법 D가 필요하다. 성인 rifampin은 통상600mg을12시간마다2일(총4회) 투여한다.2회만 복용하거나2주간 투여하는 요법이 아니다. 약물상호작용·임신·지역내성에 따라 ceftriaxone 등 대안을 선택하고 신속히 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006237 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Rifampin2회·2주라는 잘못된 용량/기간 교정; 동거 접촉자 예방 D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/surv-manual/php/table-of-contents/chapter-8-meningococcal-disease.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006237
