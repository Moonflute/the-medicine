---
type: qbank
schema_version: 1
id: medqa-us-train-001023
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2de67cb31d04518f5b3c52265dd858249aca63f0bdae05895fce7fa11ccb0ff
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cholecystitis"
  - "biliary colic"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 지난 하루 동안 지속된 복통을 주소로 응급실에 내원하였다. 통증은 우상복부에 위치하며, 산통(colicky) 양상이고, 강도는 10점 만점에 8점이며, 오른쪽 어깨 끝으로 방사된다. 통증을 악화시키거나 완화시키는 요인은 없다. 통증은 오심을 동반하나 구토는 없다. 환자는 일반의약품 제산제를 복용해 보았으며, 통증이 어느 정도 완화되었으나 완전히 사라지지는 않았다. 흡연이나 음주는 하지 않는다. 과거 병력은 없다. 부친은 75세에 췌장암으로 사망하였고, 모친은 약물로 조절되는 당뇨병이 있다. 체온은 38°C, 혈압은 125/89 mm Hg, 맥박은 104회/분, 호흡수는 20회/분, BMI는 29 kg/m2이다. 복부 진찰상 우상복부의 얕은 촉진과 깊은 촉진 시 압통이 있다. 검사실 검사: 일반혈액검사(CBC) - 혈색소 13 g/dL, 백혈구 15,500/mm3, 혈소판 145,000/mm3. 기초대사검사(BMP) - 혈청 Na+ 137 mEq/L, 혈청 K+ 3.6 mEq/L, 혈청 Cl- 95 mEq/L, 혈청 HCO3- 25 mEq/L, BUN 10 mg/dL, 혈청 크레아티닌 0.8 mg/dL. 간기능검사 - 총 빌리루빈 1.3 mg/dL, AST 52 U/L, ALT 60 U/L. 복부 초음파 검사 결과는 정상이다. 이 환자의 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 응급 담낭절제술
B. 담도 신티그래피(Cholescintigraphy)
C. CT 촬영
D. 안심시키고 면밀히 추적 관찰

## 해설

정답은 B이다. 지속 우상복부통·발열·백혈구증가로 급성 담낭염이 의심되지만 초음파가 정상인 상황이다. cholescintigraphy/HIDA는 담낭 충만과 낭성관 개통을 평가하여 진단을 보완할 수 있다. 단순히 간헐적 통증이나 기능성 담석증을 확인하는 검사라고 설명하지 않는다. 다른 복부 원인 가능성에 따라 CT/MR 등도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HIDA를 기능성 담석증 확진이라 한 설명을 초음파 음성 의심 담낭염의 평가로 교정.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=132

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001023
