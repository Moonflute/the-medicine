---
type: qbank
schema_version: 1
id: medqa-us-test-000683
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:975cf9ed442cba6a268a91433eb2f5a2a7fd6552450217133275e928e107efcc
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "알레르기성 기관지폐 아스페르길루스증"
  - "Aspergillus fumigatus"
  - "천식"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yVjOugiOultOq4sOyEsSDquLDqtIDsp4Dtj5Ag7JWE7Iqk7Y6Y66W06ri466Oo7Iqk7KadIChBQlBBKSAoQWxsZXJnaWMgQnJvbmNob3B1bG1vbmFyeSBBc3BlcmdpbGxvc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2FzcG9mdW5naW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

천식 병력이 있는 22세 여성이 점점 악화되는 호흡곤란으로 병원에 왔다. ‘폐가 무너지는’ 느낌이 들고 폐 기능이 계속 악화된다고 한다. 여러 의사에게 진료받아 여러 흡입제를 처방받았지만 천식 악화를 조절하는 데 도움이 되지 않았다. 지난 3년 동안 폐렴을 4번 앓았고 무작위로 심한 기침과 천명 발작이 자주 있었다. 기침 시 녹색 가래와 피가 섞여 나오며 발열, 권태감, 갈색 점액 마개가 동반된다고 한다. 혈압 122/70 mmHg, 맥박 66회/분, 호흡 26회/분, 체온 37.0°C(98.6°F)였다. 허약해 보이고 중등도 호흡곤란이 있었으며 오른쪽 폐 기저부 흡기 수포음과 양측 상엽 거친 호흡음이 들렸다. 흉부 X선에서 오른쪽 폐 기저부 무기폐와 ‘장갑 손가락 모양’ 음영이 보였고 혈청 IgE가 증가했다. 가장 적절한 치료는?

## 선택지

A. 이소니아지드
B. 플루코나졸
C. 카스포펀진
D. 프레드니손

## 해설

정답은 D이다. 천식, 반복 악화, 갈색 점액 마개, finger-in-glove 음영 및 높은 IgE는 ABPA를 시사한다. 이는 단순 침습성 진균 폐렴이 아니라 Aspergillus에 대한 알레르기성 기도 염증이다. 급성 ABPA에는 경구 glucocorticoid 또는 적절한 항진균 치료를 상황에 맞게 선택하며, 제시된 약 중 prednisone이 적합하다. fluconazole은 ABPA의 적절한 표준 azole 선택지가 아니다. 용량·기간은 중증도와 반응에 맞추며 무조건 고용량을 장기 유지하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ABPA를 침습성 Aspergillus 폐렴으로 설명한 오류를 알레르기성 염증으로 교정.
- https://doi.org/10.1183/13993003.00061-2024

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000683
