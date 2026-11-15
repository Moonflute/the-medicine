---
type: qbank
schema_version: 1
id: medqa-us-train-000262
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b157633dbdfb3f5baa5ce9ea9284fdcfd53a9c976f03bbef1bc12f69cd4d61e
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Actinic keratosis"
  - "Epidermoid cyst"
  - "Dermatofibroma"
  - "Squamous cell carcinoma"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-q0keyEoCDqsIHtmZTspp0gKEFjdGluaWMgS2VyYXRvc2lzKS5tZA
  - MTMg67aA7J246rO8L-yEseyImeq4sO2YleyihSAoTWF0dXJlIFRlcmF0b21hKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDtjrjtj4nsg4HtlLzslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluR2xhcmdpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 목 뒤쪽에 서서히 커지는 무통성 결절로 내원했다. 결절은 단단하고 피부 아래에서 움직이지만 바로 위 피부에 붙어 있다. 중앙에 작은 검은 개구부가 보이고 발적은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 광선각화증
B. 표피낭종
C. 피부섬유종
D. 피부 편평세포암

## 해설

천천히 커지는 가동성 피하 결절이 피부와 연결되고 중앙 개구부가 있는 소견은 표피낭종에 전형적이다. 개구부는 모낭에서 기원한 낭종이 표면과 이어지는 부분일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 움직이는 무통성 목 결절의 표피낭종 B는 본문으로 지지된다. 각질성 내용물을 케르키오이드로 오역하고 다른 병변을 모두 경계 불명확이라 한 설명을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000262
