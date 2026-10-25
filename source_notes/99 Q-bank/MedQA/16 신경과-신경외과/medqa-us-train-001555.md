---
type: qbank
schema_version: 1
id: medqa-us-train-001555
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12b828459cb795d9d6efc771334dbadca1d85f3c25dc063dd5bb32b129204809
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "encephalitis"
  - "meningitis workup"
  - "CSF PCR"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsl7wgKE1lbmluZ29lbmNlcGhhbGl0aXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 혼란으로 응급실에 내원했다. 평소 건강하지만 아내가 하루 동안 점점 혼란스러워지는 것을 알아차렸다. 약은 복용하지 않고 최근 낙상이나 외상도 없다. 체온은 102°F (38.9°C), 혈압은 126/64 mmHg, 맥박은 120회/분, 호흡수는 17회/분, 실내 공기 산소포화도는 98%이다. 혼란 때문에 신경학적 검사에 협조하지 못한다. 목 굴곡 시 증상은 없고 두통의 충격 악화는 음성이다. 초기 검사와 흉부 X선, 소변검사는 정상이며 머리 CT도 정상이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 아시클로버
B. 머리와 목 CT 혈관조영술
C. 뇌척수액 중합효소연쇄반응
D. 반코마이신, 세프트리악손, 암피실린 및 덱사메타손

## 해설

고열과 급성인지변화는 뇌염을 포함한 중추신경감염을 고려하게 한다. 의심뇌염에서는 HSV검사 결과를 기다리지 않고 IV아시클로버(A)를 시작할 수 있으며 안전하게 가능하면 CSF/PCR 및 MRI 등 원인평가를 병행한다. 본문에서 정상인 영상은 CT이지 MRI가 아니다. 음성목경직/jolt만으로 세균성수막염을 배제할 수 없고 세균성감염도 의심되면 적절한 경험적항균치료를 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CT를 MRI로 잘못 바꾼 해설과 음성수막징후로 감염배제하는 인상 수정. empiric acyclovir A의 의미 명시.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/encephalitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001555
