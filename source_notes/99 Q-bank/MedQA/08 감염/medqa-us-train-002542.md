---
type: qbank
schema_version: 1
id: medqa-us-train-002542
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48ffcc06efc7ec38a4fb633aa7a08ab705b66fb54d798910f9b743f74287c4cb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Zika virus disease"
  - "mosquito-borne infection"
  - "conjunctivitis"
  - "arthralgia"
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
  - MDgg6rCQ7Je8L-yngOy5tOuwlOydtOufrOyKpCDqsJDsl7wgKFppa2EgVmlydXMgSW5mZWN0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

38세 남성이 4일간 발열과 권태감, 두통, 관절통으로 내원했다. 전날 몸통에 가려운 발진이 생겼고 정액에 피가 두 번 섞였으며 청력이 일부 저하되었다. 10일 전 브라질에서 저녁 대부분을 야외에서 보냈고 모기 물림 예방을 하지 않았다. 체온 38.2℃, 맥박 88회/분, 호흡 13회/분, 혈압 125/60 mmHg이다. 결막충혈과 몸통·근위 사지의 반구진성 발진, 손 관절 압통이 있으나 손발바닥은 침범하지 않았다. 말초혈액도말에서 병원체는 보이지 않는다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 샤가스병
B. 말라리아
C. 록키산 홍반열
D. 지카 바이러스 감염

## 해설


브라질 방문 뒤 3–14일 잠복기에 부합하는 발열·관절통·결막충혈과 몸통/근위부 반구진 발진은 선택지 중 Zika D가 가장 잘 맞는다. 발진은 본문대로 기술하며 비대칭 말단 발진으로 바꾸지 않는다. 혈정액이나 청력 변화만으로 확진할 수 없고 덩기열·치쿤구니야 등 여행 관련 감염도 감별한다. 혈액도말 음성 하나만으로 모든 말라리아를 배제하는 것도 아니며 확진에는 적절한 바이러스 검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002542 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 몸통·근위부 발진을 비대칭 말단 발진이라고 바꾼 해설 오류 교정; 여행·발열·관절통·결막충혈의 Zika D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/zika/hcp/clinical-signs/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002542
