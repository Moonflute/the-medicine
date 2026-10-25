---
type: qbank
schema_version: 1
id: medqa-us-train-007980
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:804d66e60d247a1fa3acc0931c459e85a2b3c111d063e887c4c1df685cc2f309
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteoporosis"
  - "raloxifene"
  - "hot flashes"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9SYWxveGlmZW5lLm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 여성이 연례 신체검사를 받으러 왔다. 특별한 증상은 없고 계절성 알레르기로 로라타딘을 복용한다. 15년 전 담낭절제술을 받았고 마지막 월경은 9년 전이었다. 어머니와 이모가 유방암을 앓았다. 신체검사는 정상이다. 폐렴구균 결합백신과 대상포진 백신을 맞았고 DEXA 검사에서 T점수 -2.6이 나와 새 약을 처방받았다. 다음 달 얼굴 화끈거림을 호소하며 다시 내원했다. 가장 가능성 높은 처방 약물은?

## 선택지

A. 알렌드로네이트
B. 데노수맙
C. 랄록시펜
D. 졸레드론산

## 해설

골다공증 치료를 시작한 뒤 나타난 안면홍조는 보기 중 C, 랄록시펜의 알려진 부작용이다. 랄록시펜은 선택적 에스트로겐수용체 조절제로 폐경 후 골다공증에 사용하며, 일부 폐경 후 여성에서 침윤성 유방암 위험을 낮추는 적응증도 있다. 뼈에서의 작용과 달리 안면홍조를 개선하는 폐경 호르몬치료제가 아니며 오히려 홍조를 유발하거나 악화시킬 수 있다.

비스포스포네이트나 데노수맙의 다른 부작용과 구분해야 한다. 약제 선택에서는 정맥혈전색전증 위험 등도 함께 평가하지만, 이 문항은 가족력과 새로 발생한 홍조로 약제를 식별하는 문제다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신생아 호흡곤란 해설을 랄록시펜의 선택적 에스트로겐수용체 조절 및 안면홍조 부작용 해설로 교체. 유방암 가족력의 maternal aunt를 외할머니에서 이모로 수정. 원정답 C 유지.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c05521f8-95d2-44b8-8433-eba539c0f84c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007980
