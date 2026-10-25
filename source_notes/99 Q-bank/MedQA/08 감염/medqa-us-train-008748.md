---
type: qbank
schema_version: 1
id: medqa-us-train-008748
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ed37dbd6ee0610081ce83877c60f64316a746d763583e592c5092a2ec62938d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Entamoeba histolytica"
  - "amebic dysentery"
  - "metronidazole"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ydtOyniCAoRHlzZW50ZXJ5KS5tZA
question_type: management
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUHJhemlxdWFudGVsLm1k
---

# MedQA US 임상문제

## 문제

38세 남성이 2일 동안 지속된 설사로 응급실에 내원했다. 복부 경련과 대변이 짙은 붉은색을 띠는 것도 관찰했다. 3주 전 멕시코 여행에서 마라톤을 완주하고 돌아왔다. 경미한 빈혈 병력이 있다. 흡연은 하지 않고 주말에 맥주 3~4잔을 마신다. 운동 능력 향상을 위해 어유, 종합비타민, 철분 보충제를 복용한다. 체온 101.8°F(38.8°C), 맥박 65회/분, 혈압 120/75mmHg이다. 폐와 심장검사는 정상이고 왼쪽 아랫배에 경미한 압통이 있으나 반발통과 방어는 없다. 혈액검사와 전해질은 대체로 정상이다. 대변 배양에서 적혈구를 섭취한 미생물이 확인되었다. 지지요법 외에 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 안심시키는 것만 시행
B. 프라지콴텔
C. 파로모마이신
D. 메트로니다졸

## 해설


혈성 설사와 적혈구를 포식한 영양형은 E. histolytica에 의한 침습성 장아메바증을 시사한다. 다음 단계는 조직 내 아메바에 작용하는 metronidazole(D)이며, 이후 paromomycin 같은 장내강 약제로 잔여 감염을 제거해야 한다. Paromomycin은 효과 없는 약이 아니라 필요한 후속 약제지만 침습성 장염의 단독 초기 치료로 충분하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008748 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 적혈구를 포식한 아메바의 침습성 장염에서 metronidazole D 유지. Paromomycin이 효과 없다는 오류를 교정하고 뒤따를 장내강 약제를 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yellow-book/hcp/post-travel-evaluation/post-travel-diarrhea.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008748
