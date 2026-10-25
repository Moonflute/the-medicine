---
type: qbank
schema_version: 1
id: medqa-us-validation-000846
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d939b5a05ff320772dc8d30c3e4ddc3e0ee77a6f85c25e7f0ce709d61949154a
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "설파이트 유발 천식"
  - "식품첨가물"
  - "천식 악화"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: etiology
difficulty: complex
answer: B
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

27세 여성이 1시간 전 시작된 심한 천명으로 응급실에 왔다. 2년 전 경증 지속성 천식을 진단받아 흡입 코르티코스테로이드를 규칙적으로 사용하며 최근 2개월 동안 천식 증상은 없었다. 증상은 마지막 식사 약 20분 후 시작되었다. 점심에는 통조림 유제품, 시판 구운 땅콩, 집에서 만든 셀러리 샐러드, 와인이 있었다. 아침 6시 산책 뒤 다리가 아파 식사 직후 아세트아미노펜 한 정도 복용했다. 우유 단백질·땅콩·아세트아미노펜에 호흡기 증상을 겪은 적은 없다. 한 달 전 시행한 음식 알레르겐 피부단자검사는 우유와 땅콩을 포함해 음성이었다. 현재 발작의 가장 가능성 높은 유발 요인은?

## 선택지

A. Ara h-1 단백질
B. 식품첨가물
C. 아세트아미노펜
D. 운동

## 해설


천식이 있는 환자에서 와인 등 음식의 아황산염 같은 첨가물은 기관지수축을 유발할 수 있어 B가 가장 타당하다. 운동은 식사보다 훨씬 이른 시간에 있었고 기존 치료 순응도도 양호하다. 음성 피부검사만으로 음식알레르기를 완전히 배제하거나 첨가물 반응을 확진하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-validation-000846`와 직접 대조했다.
- 판정: 축약 번역이 빠뜨린 천식 병력·흡입스테로이드 순응도·아침운동과 식후약물의 시간 관계를 영어 원문에서 복구. B는 가능성 판단이며 음성 피부검사만으로 음식알레르기 배제 안 됨.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.allergy.org.au/images/pc/ASCIA_PC_Sulfite_Sensitivity_FAQ_2024.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000846
