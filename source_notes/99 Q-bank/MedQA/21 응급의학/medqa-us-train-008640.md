---
type: qbank
schema_version: 1
id: medqa-us-train-008640
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:45b7413241003269e13b60fea59394f98d1d51cc08ee335454fa301e96422d7e
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "animal bite"
  - "hand puncture wound"
  - "amoxicillin-clavulanate"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uPmeusvCDrrLzrprwgKEFuaW1hbCBCaXRlKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 몇 시간 전부터 오른쪽 검지손가락이 부어 가족의학과에 내원했다. 과거력은 없고 처방약도 복용하지 않는다. 필요할 때 이부프로펜을 가끔 복용한다. 지난 1년 동안 하루에 담배 몇 개비를 피웠다고 한다. 추가로 물어보자 집에서 개와 고양이를 키운다. 혈압 108/67mmHg, 심박수 94회/분, 호흡수 12회/분, 체온 37.8°C(100.1°F)이다. 오른쪽 두 번째 손가락 등쪽에 국소 홍반과 경결이 동반된 깨끗한 천자상 두 개가 보인다. 모세혈관 재충만 시간은 2초이며 양측 감각과 운동기능은 정상이다. 다음 중 가장 적절한 치료는 무엇인가?

## 선택지

A. 아목시실린
B. 아목시실린-클라불란산
C. 클린다마이신
D. 아지스로마이신

## 해설

반려동물 노출과 손가락의 두 천자상, 홍반·경결은 동물 교상에 의한 감염을 시사한다. 아목시실린-클라불라네이트(B)는 Pasteurella 등 호기성균과 구강 혐기성균을 함께 고려하는 선택이다. 클린다마이신 단독이나 아목시실린 단독은 필요한 범위를 충분히 보장하지 못할 수 있다. 상처 세척과 힘줄·관절 침범 평가를 병행하고, 파상풍 및 광견병 예방 필요성은 노출과 접종력에 따라 별도로 평가한다. 항생제 치료는 파상풍 예방접종이나 면역글로불린을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아목시실린-클라불라네이트 B의 교상 혼합균 치료 근거를 유지하되 파상풍 예방을 항생제로 대신하는 듯한 설명을 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG184/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008640
