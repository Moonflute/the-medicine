---
type: qbank
schema_version: 1
id: medqa-us-train-000494
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4137b3f2671674287aac6ae0ca96f7cb5a2b8fec91bfd62918b1182af522ff44
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "amyotrophic lateral sclerosis"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qt7zsnITstpXshLEg7Lih7IKtIOqyve2ZlOymnSAoQW15b3Ryb3BoaWMgbGF0ZXJhbCBzY2xlcm9zaXMpLm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 남성이 상하지의 근력 약화를 주소로 내원하였다. 환자는 삼킴 곤란도 경험하였다. 신체 검진상 비대칭적인 양상의 과다반사(hyperreflexia), 강직(spasticity), 근섬유다발수축(fasciculations) 및 근위축이 관찰된다. 혀의 근섬유다발수축도 관찰된다. 감각 소실은 없다. 환자는 장이나 방광 기능의 이상은 보고하지 않았다. 근육 생검에서 가장 가능성이 높은 소견은 무엇인가?

## 선택지

A. 고모리 삼색 염색(Gomori trichrome stain)에서 너덜너덜한(ragged) 외관을 유발하는 미토콘드리아 증식
B. 근육다발주위(perimysial) CD4+ 침윤 및 근육다발주위 위축(perifascicular atrophy)
C. 근육의 신경제거(denervation) 및 재신경지배(reinnervation)
D. 유충 낭종(larval cysts)

## 해설

상·하위 운동신경원 징후가 함께 있고 감각이 보존되는 양상은 ALS를 시사한다. 하위 운동신경원 소실로 근섬유가 탈신경되며, 살아남은 운동축삭의 측부 발아로 재신경지배가 일어난다. 따라서 근육 생검 소견은 탈신경과 재신경지배(C)이다. 근섬유군 위축과 섬유형 군집화가 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. ALS의 탈신경 및 재신경지배 C는 맞으나 탈신경을 재신경화·신경절거로 잘못 적은 해설을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000494
