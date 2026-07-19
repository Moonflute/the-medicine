---
type: qbank
schema_version: 1
id: medqa-us-train-008743
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eae914f44af0bac4cc802eae86880b514323068ebff1629b1f49419c37b9d18e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "toxic shock syndrome"
  - "nasal packing"
  - "Staphylococcus aureus"
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

13세 남아가 3시간 동안 지속된 구토, 설사, 복통, 어지럼과 하루 동안의 발열, 오한, 근육통으로 응급실에 내원했다. 5일 전 코를 후비다가 발생한 코피로 내원해 앞쪽 비강 패킹을 시행받았다. 부모는 출혈이 멎었지만 비강 패킹을 제거하는 것을 잊었다고 한다. 체온 40.0°C(104.0°F), 맥박 124회/분, 호흡수 28회/분, 혈압 96/68mmHg이다. 혼란스러워 보이며 결막과 구인두 충혈, 손바닥과 발바닥을 포함한 전신의 광범위한 홍반성 반점 발진이 있다. 비강 패킹을 제거하자 아래 점막에 충혈과 화농성 분비물이 보인다. 백혈구 30,000/mm³, 호중구 90%, 림프구 8%, 혈소판 95,000/mm³, 혈청 크레아틴인산화효소 400IU/L이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 파종성 임균 감염
B. 독성 쇼크 증후군
C. 스티븐스-존슨 증후군
D. 홍역

## 해설


코피 후 코패킹을 제거했을 때 발생한 고열, 저혈압, 발진, 다발성 장기 부전은 독소 쇼크 증후군(TSS)과 일치한다. Staphylococcus aureus가 독소를 생산해 TSS를 일으킨다. 따라서 가장 가능성 높은 진단은 독성 쇼크 증후군이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008743
