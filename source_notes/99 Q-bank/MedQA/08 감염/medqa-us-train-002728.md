---
type: qbank
schema_version: 1
id: medqa-us-train-002728
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8dbdc6a2fb20610ec029ed2b19d84e0f733bee995d45a359e15458ca05fef83
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cryptococcal meningitis"
  - "advanced HIV infection"
  - "CD4 lymphocytopenia"
  - "amphotericin B plus flucytosine"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2BrOumve2GoOy9lOy_oOyKpOymnSAoQ3J5cHRvY29jY29zaXMpLm1k
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

23세 여성이 악화되는 두통으로 응급실에 내원했다. 한 달 전 시작된 두통이 지속적으로 머리 전체에 있으며, 누워 있거나 밝은 빛에 노출되면 악화된다. 미열, 야간 발한, 기침, 권태감, 식욕부진이 있고 지난 2개월 동안 의도치 않게 12파운드의 체중이 감소했다. 여러 남성과 성관계를 하며 콘돔 사용이 일관되지 않고, 정맥주사 약물 사용력이 있으며 지난 2년간 의사를 방문하지 않았다. 체온은 38.0°C, 혈압은 110/78 mmHg, 맥박은 88회/분, 호흡수는 14회/분, 실내 공기 산소포화도는 98%이다. 수동적으로 목을 굽히면 통증이 유발된다. CT에서 뇌실 확장이 보이고 CD4+ 세포 수는 혈액 1 μL당 57개이다. 요추천자 결과는 다음과 같다: 개방압 210 mmH₂O, 포도당 32 mg/dL, 단백질 204 mg/dL, 인디아 잉크 염색 양성. 백혈구 200/mm³(림프구 100%), 적혈구 2개/mm³이다. 다음 중 치료의 다음 단계로 가장 적절한 것은?

## 선택지

A. 플루코나졸 투여
B. 암포테리신 B와 5-플루시토신 투여
C. 아시클로버 투여
D. 덱사메타손 투여

## 해설


CD4 57/µL·아급성 수막 증상과 India ink 양성은 크립토코쿠스 수막염에 부합한다. 선택지 B의 amphotericin B와 flucytosine은 적절한 유도치료이며 제형·기간·다른 병용약은 자원환경과 공식 요법에 맞춘다. Fluconazole 단독은 통상 우선 유도요법을 대체하지 않는다. 개방압 210mmH₂O는21cmH₂O로서 압력 수치·증상 및 뇌실확장을 함께 평가하며 반복 압력 측정·필요시 치료적 CSF 배액을 고려한다. 해당 수치만으로 극심한 압력 상승이라 단정하거나 corticosteroid를 일률 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002728 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 크립토코쿠스 수막염의 유도요법 B 유지;21cmH₂O를 무조건 중증 두개내고혈압이라 단정한 설명과 자원별 요법 구분 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/cryptococcosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002728
