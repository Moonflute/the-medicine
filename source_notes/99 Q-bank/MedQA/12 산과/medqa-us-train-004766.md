---
type: qbank
schema_version: 1
id: medqa-us-train-004766
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:834073b355930687453e6e83462c5dd1161678a71bdbd24031d1548b483d6958
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전치혈관"
  - "막성 제대 부착"
  - "임신 중 질출혈"
question_type: association
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg7KeI7Lac7ZiILm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 임신 2회, 출산 0회 여성이 임신 37주에 물 같은 질 분비물로 내원했다. 임신 중 20주에 비정상 초음파 소견이 있었다. 활력징후는 혈압 110/80 mm Hg, 심박수 분당 91회, 호흡수 분당 13회, 체온 36.4°C (97.5°F)이고 태아심박수는 분당 141회이다. 질경검사에서 질이나 자궁경부 병변은 없지만 피가 조금 섞인 물 같은 분비물이 계속 나온다. 분비물은 양치상과 아질산염 양성이다. 초기 검사 직후 출혈이 증가하고 태아 모니터링에서 심박수 103회와 후기 감속이 보인다. 이 환자 상태를 일으키기 쉬운 초음파 소견은 무엇이었을 가능성이 가장 높은가?

## 선택지

A. 정상 태반후 고에코 영역의 소실
B. 막성 제대 부착
C. 태반후혈종
D. 융모막하 낭종

## 해설

양막파열 뒤 출혈 증가와 태아 서맥/심박 이상이 발생한 양상은 전치혈관 파열을 시사한다. 막성 제대 부착(B)은 보호되지 않는 태아 혈관이 양막을 따라 주행해 내구 부근에 놓일 위험을 높인다. 모든 막성 부착이 전치혈관인 것은 아니다. 원문의 'nitrite-positive'는 아질산염 양성으로, 양막파열 평가의 pH 지시약인 nitrazine(니트라진) 양성과 다른 검사다. 이를 확인된 니트라진 결과로 임의 치환하지 않았으며 본문의 액체 유출·양치상 단서와 출혈 경과로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전치혈관과 막성 제대 부착의 관계는 유지하되 영어 원문의 nitrite를 양막파열의 니트라진 검사와 혼동하지 않도록 명시했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004766
