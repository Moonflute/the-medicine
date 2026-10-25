---
type: qbank
schema_version: 1
id: medqa-us-test-000756
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1090c0811cb8ec6abd353ab98bff66831a60d271e67b478289addf5023c20bc0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "임신 중 폐색전증"
  - "폐색전증"
  - "환기-관류 스캔"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "영어 원문에도 선행 흉부 X선 결과가 없다. 임신 중 PE 의심의 영상 평가에서는 흉부 X선을 먼저 시행하고 결과에 따라 V/Q 또는 CTPA를 선택하므로 원정답 C에서 B로 교정. 케이스와 선지는 유지."
---

# MedQA US 임상문제

## 문제

임신 28주인 31세 초임부가 흡기 시 악화되는 호흡곤란과 비특이적 오른쪽 흉통으로 병원에 왔다. 뉴욕 경제학 학회에서 돌아왔고 과거력은 반복성 부비동염뿐이다. 흡연은 하지 않고 매일 적포도주 한 잔을 마신다. 체온 36.7°C(98.0°F), 혈압 126/74 mmHg, 심박수 87회/분, 호흡 23회/분이었다. 오른쪽 폐의 공기 유입이 감소했으나 그 외에는 깨끗했고 2/6등급 범수축기 잡음이 있었다. 임신한 자궁은 특이사항이 없었다. 이후 빈맥 121회/분, 산소포화도 92%가 확인되었다. 가장 가능성 높은 진단의 평가에서 다음 단계는?

## 선택지

A. 심전도
B. 흉부 방사선촬영
C. 환기-관류 스캔
D. CT 폐혈관조영술

## 해설

장거리 이동 후 흉막성 흉통·빈맥·저산소포화도가 있어 임신 중 폐색전증을 평가해야 한다. 아직 흉부 방사선촬영 결과가 제시되지 않았으므로 영상 평가의 다음 단계는 B이다. 흉부 X선은 다른 흉부 질환을 확인하고 후속 검사 선택에 도움을 준다. 정상 흉부 X선에서는 폐관류/환기-관류 스캔을 고려하고, 비정상 소견이나 상황에 따라 CT 폐혈관조영술을 선택한다. V/Q와 CTPA 모두 이온화 방사선을 사용하며, 단순히 V/Q가 언제나 태아에 더 안전하다는 이유로 선행 평가를 생략해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영어 원문에도 선행 흉부 X선 결과가 없다. 임신 중 PE 의심의 영상 평가에서는 흉부 X선을 먼저 시행하고 결과에 따라 V/Q 또는 CTPA를 선택하므로 원정답 C에서 B로 교정. 케이스와 선지는 유지.
- 공식/학회 근거: https://member.thoracic.org/statements/resources/pvd/evaluation-of-suspected-pulmonary-embolism-in-pregnancy.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000756
