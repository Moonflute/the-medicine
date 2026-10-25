---
type: qbank
schema_version: 1
id: medqa-us-train-002894
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13e1e351ee47026ad324aa8fa12a1448b1bd89ce68a814fe0b67052e40794fe9
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "viral encephalitis"
  - "meningoencephalitis"
  - "leptomeningeal enhancement"
  - "altered mental status"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsl7wgKE1lbmluZ29lbmNlcGhhbGl0aXMpLm1k
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 남성이 목이 옆으로 굽은 채 고정되어 응급실에 왔다. 일주일 동안 미열, 두통, 목 통증을 호소했고 동반자는 행동이 이상해졌다고 한다. 과거력은 특이사항이 없다. 체온은 38.6°C이고 목 통증과 고정된 측굴 외의 신체검사는 정상이다. 혼란스럽지만 운동 및 감각 결손은 없고 심부건반사는 항진되어 있다. 뇌 MRI에서 연수막과 뇌회 조영증강이 보인다. 다음 중 이 환자 상태를 설명하는 것은?

## 선택지

A. 유전적 돌연변이
B. D2 길항제 노출
C. 바이러스 감염
D. 항산균 감염

## 해설


급성 발열·두통·목통증과 행동/의식 변화는 감염성 수막뇌염을 시사하여 선택지 중 바이러스 감염 C가 가장 가능하다. D2 길항제 노출력 없이 단순 약물성 근긴장이상으로 설명하기 어렵다. 그러나 연수막·뇌회 조영증강은 바이러스에만 특이한 소견이 아니므로 CSF·미생물 검사와 경과로 결핵 등 감별이 필요하다. 목의 측굴만으로 병원체를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002894 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 발열·행동변화의 바이러스성 뇌수막뇌염 C를 가능한 최선 선택으로 유지하되 비특이 MRI만으로 다른 병원체가 불가능하다는 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002894
