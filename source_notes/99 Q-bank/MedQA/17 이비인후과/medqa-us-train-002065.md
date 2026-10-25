---
type: qbank
schema_version: 1
id: medqa-us-train-002065
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c7abd62eea864651ed638f47cc9941ad19c05ff5b992fdf35eb6903087431dc
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "acoustic neuroma"
  - "vestibular schwannoma"
  - "sensorineural hearing loss"
  - "Weber test"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_si6Dqsr3stIjsooUgKFNjaHdhbm5vbWEpLm1k
  - MTcg7J2067mE7J247ZuE6rO8L-uPjOuwnOyEsSDrgpzssq0gKFN1ZGRlbiBzZW5zb3JpbmV1cmFsIGhlYXJpbmcgbG9zcykubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 여성이 6개월간 지속된 이명과 왼쪽 귀의 점진적인 청력 저하로 내원했다. 제2형 당뇨병과 레이노 증후군이 있으며, 메트포르민·니페디핀·종합비타민을 복용 중이다. 전반적으로 건강해 보이고 활력징후는 정상이다. 진동하는 음차를 왼쪽 유양돌기에 대자 즉시 소리가 들리지 않았고, 음차를 왼쪽 귀 위로 옮기자 다시 소리가 들린다고 했다. 오른쪽에서도 같은 검사를 시행했을 때 동일한 양상이 나타났다. 이어 음차를 이마 중앙에 대자 오른쪽 귀에서 소리가 더 크게 들린다고 했다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 노인성 난청
B. 청신경종
C. 귀지 매복
D. 메니에르병

## 해설

양측에서 공기전도가 골전도보다 좋은 Rinne 소견이 있으며, Weber는 오른쪽으로 편위되어 있다. 왼쪽 청력이 점진적으로 감소하는 이 사례에서는 왼쪽 감각신경성 난청을 시사한다. 편측 진행성 감각신경성 난청과 이명의 조합은 B, 전정신경초종(청신경종)에 가장 합당하다. 더 잘 들리는 쪽은 오른쪽이며, 원래 해설의 왼쪽 표기는 반대이다. 노인성 난청은 보통 양측성이고 귀지 폐색은 전음성 소견을 보인다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 왼쪽 감각신경성 난청에서는 Weber가 좋은 오른쪽으로 편위됨에도 해설이 좋은 귀를 왼쪽으로 잘못 표시한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002065
