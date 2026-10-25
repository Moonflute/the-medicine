---
type: qbank
schema_version: 1
id: medqa-us-train-000310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d687c1c38e51f5c5940729b0e5a6480109b28b57895401aa6ac1c411b5531948
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative colitis"
  - "colon cancer"
  - "strep throat"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성이 10일간 지속된 인후통과 발열로 내원하였다. 과거력상 궤양성 대장염(ulcerative colitis)과 만성 요통이 있다. 10년간 매일 최소 1갑의 담배를 피워왔다. 환자의 아버지는 50세에 대장암으로 사망하였다. 환자는 설파살라진(sulfasalazine)과 나프록센(naproxen)을 복용 중이다. 체온은 38.9°C(102.0°F), 혈압은 131/87 mm Hg, 맥박은 74회/분, 호흡수는 16회/분이다. 신체 검진상 환자는 피로하고 아파 보인다. 인두는 발적되어 있고 편도와(tonsillar crypts)를 따라 삼출물이 있다. 연쇄상구균 검사(strep test) 결과는 양성이다. 세균 감염 치료 외에, 현재 이 환자에게 권장할 사항은 무엇인가?

## 선택지

A. 대변 잠혈 검사
B. 유연 S상결장경검사
C. 저선량 CT
D. 대장내시경검사

## 해설

정답은 D이다. 47세이며 아버지가 50세에 대장암으로 사망한 직계가족력이 있어 대장내시경 평가가 적합하다. UC의 이형성/암 감시는 질병 기간·범위·염증 정도와 PSC 등 위험인자에 따라 추가로 결정한다. 본문에 UC가 10년 이상 지속되었다는 정보는 없으며 흡연 10년을 UC 기간으로 바꾸어 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UC가 10년 이상이라는 없는 병력 대신 50세 CRC 직계가족력과 연령으로 colonoscopy 근거를 명확히 함.
- https://gastro.org/clinical-guidance/risk-stratification-for-colorectal-cancer-screening-and-surveillance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000310
