---
type: qbank
schema_version: 1
id: medqa-us-train-000752
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2860b473b51b5be0a365e39de9345a243ec040170d087de79f0ee0dd09bbe3c8
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "giardiasis"
  - "Giardiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

26세 학생이 지속적인 설사로 학생 건강 센터에 내원했다. 환자는 지난 2개월 동안 악취가 나는 설사와 복부 경련이 있었다고 말한다. 또한 복부 팽만감, 가스 참, 그리고 의도치 않은 4파운드(약 1.8kg)의 체중 감소를 보고한다. 2개월 전까지는 이러한 증상을 전혀 느낀 적이 없었다. 위장관 외 다른 증상은 부인한다. 환자는 열렬한 등산가이며 증상 때문에 최근 캠핑 여행을 가지 못했다고 말한다. 환자는 식단에 섬유질을 더 늘려보았으나 증상 완화는 없었다. 우유나 치즈를 먹으면 증상이 악화된다고 느낀다. 과거력상 특이 사항은 없으며 복용 중인 약물은 없다. 사교적으로 위스키를 마시지만, 흡연이나 불법 약물 사용은 부인한다. 2년간 사귄 남자친구와 성생활을 하고 있다. 6개월 전에 멕시코를 다녀왔고, 마지막으로 며칠간 배낭여행을 다녀온 것은 약 3개월 전 버몬트주였다. 신체 검진상 특이 소견은 없다. 대변 검체에서 분변 잠혈 반응은 음성이다. 환자의 증상을 관리하기 위한 가장 적절한 치료법의 관련 부작용으로 옳은 것은 무엇인가?

## 선택지

A. 디설피람 유사 반응(Disulfiram-like reaction)
B. 골다공증
C. 광과민성
D. 건 파열

## 해설


장기간 악취성 설사·가스·유제품 악화와 야외활동력은 Giardia 감염을 시사한다. Metronidazole 같은 nitroimidazole 치료와 음주 시 디설피람 유사 반응(A)은 전통적 시험 연관이며 미국 허가문구는 복용 중과 종료 후 최소3일간 alcohol/propylene glycol을 피하도록 경고한다. 다만 CDC는 실제 상호작용의 설득력 있는 근거가 부족하고 metronidazole이 acetaldehyde dehydrogenase를 억제하지 않는다고 설명한다. 따라서 기존 해설처럼 특정 효소 억제가 확립되었다고 가르치지 않는다. 임상 복약지도에서는 해당 제품 허가사항을 따른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000752 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Metronidazole의 aldehyde dehydrogenase 억제를 확립된 기전으로 단정한 오류를 고치고 허가문구와 임상근거를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbee69e8-029c-49d2-89cd-f504b8e0ac28
- https://www.cdc.gov/std/treatment-guidelines/bv.htm
- https://www.cdc.gov/giardia/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000752
