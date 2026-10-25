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

50세 남성이 정기 검진을 위해 내원하였다. 그는 2개월 전부터 목 뒤쪽의 부기가 점진적으로 커졌다고 하였다. 발열이나 부기에서 나오는 분비물은 없다. 그는 43세에 대장암으로 결장절제술(colectomy)을 받았다. 제2형 당뇨병, 고혈압, 왼쪽 무릎의 골관절염이 있다. 현재 복용 중인 약물은 인슐린 글라진(insulin glargine), 메트포르민(metformin), 에날라프릴(enalapril), 나프록센(naproxen)이다. 그는 지난 6년간 교통 정리원으로 일했으며 자주 골프를 친다. 건강해 보인다. 체온은 37.3°C, 맥박은 88회/분, 혈압은 130/86 mm Hg이다. 목 검사에서 2.5 cm 크기의 단단하고 움직임이 있으며 통증이 없는 결절이 관찰된다. 결절 위의 피부는 집어 올릴 수 없다. 폐 청진음은 정상이다. 나머지 검사 결과는 이상이 없다. 병변의 사진이 제시되었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 광선각화증(Actinic keratosis)
B. 표피낭종(Epidermoid cyst)
C. 피부섬유종(Dermatofibroma)
D. 편평세포암종(Squamous cell carcinoma)

## 해설

피부와 연결되어 그 위 피부가 따로 집히지 않는 단단하고 가동성 있는 무통성 결절은 표피낭종(B)을 지지한다. 낭종은 각질을 담은 편평상피성 벽으로 구성되며 중앙 개구부가 있을 수 있다. 실제 사진에서 개구부를 확인했다고 주장하지 않는다. 거친 각화성 반·작은 진피성 결절·불규칙 궤양성 종양보다 이 사례의 낭종 양상과 일치한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 움직이는 무통성 목 결절의 표피낭종 B는 본문으로 지지된다. 각질성 내용물을 케르키오이드로 오역하고 다른 병변을 모두 경계 불명확이라 한 설명을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000262
