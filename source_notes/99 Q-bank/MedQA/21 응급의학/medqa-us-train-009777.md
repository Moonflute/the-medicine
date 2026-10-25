---
type: qbank
schema_version: 1
id: medqa-us-train-009777
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b16e17f384a0331eb83a2d4940276e1fce1a58c4d5172820b691090a586362d8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "폐색전증"
  - "D-이합체"
  - "경구피임약"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 35세 여성이 그날 아침 잠에서 깬 뒤 갑자기 호흡이 곤란해져 응급실에 내원했다. 마른기침과 숨을 들이쉴 때 악화되는 흉통도 있다. 담배, 술, 불법 약물은 사용하지 않는다. 유일한 약물은 경구피임약이다. 체온 38°C, 맥박 분당 90회, 호흡수 분당 22회, 혈압 120/70 mmHg, 실내 공기 산소포화도 93%이다. 신체검사는 특이사항이 없다. 심전도에서 비특이적 ST 분절 변화가 보이고 흉부 X선은 정상이다. 산소를 보충하는 것 외에 다음 중 가장 적절한 처치는?

## 선택지

A. 비침습적 양압환기 시작
B. 섬유소 분해산물 측정
C. 폐혈관조영술 시행
D. 환기-관류 섬광조영술 의뢰

## 해설

경구피임약 복용 중 발생한 흉막성 흉통과 저산소혈증은 폐색전증 평가가 필요하다. 먼저 임상 확률을 평가하고 비고위험으로 판단되면 고감도 D-dimer를 측정하여 음성일 때 배제에 활용한다. 보기 B의 섬유소 분해산물 측정은 이 문맥에서 D-dimer 검사를 뜻하는 것으로 해석해야 하며, 모든 비특이 FDP 검사가 같은 검증 성능을 갖는 것은 아니다. 양성은 확진이 아니므로 영상 평가가 필요하고, 고위험 임상 확률이라면 D-dimer보다 직접 영상 검사를 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. B의 취지를 검증된 고감도 D-dimer로 명확히 한다. 사전확률을 생략한 선별이나 비특이 FDP를 모두 같은 검사로 간주하지 않는다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009777
