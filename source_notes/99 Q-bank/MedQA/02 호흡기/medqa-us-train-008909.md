---
type: qbank
schema_version: 1
id: medqa-us-train-008909
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bfc19385e1b53649b9c2d33d180b667e1310bfb513625844cf432ad68e0d0684
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "solitary pulmonary nodule"
  - "lung cancer"
  - "positron emission tomography"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 42세 남성이 자동차 충돌 1시간 후 응급실에 내원했다. 의식은 명료하고 16년 동안 하루 한 갑을 피웠으나 8년 전 금연했다. 몸통과 복부에 멍이 여러 개 있고 복부는 부드러우며 오른쪽 상복부에 압통이 있으나 방어와 반발통은 없다. 활력징후는 정상이다. 흉부 X선에서 골절은 없지만 오른쪽 상폐야 중앙에 10mm 고형 폐결절이 보인다. 이전 X선은 없다. 흉부 CT에서 결절의 경계가 불규칙하고 톱니 모양이다. 다음 중 이 폐결절 관리에서 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 항결핵 치료
B. 양전자방출단층촬영(PET)
C. 12개월 후 추적 CT
D. 안심시킨다

## 해설

10 mm 고형 결절과 불규칙 경계, 흡연력은 악성 가능성을 평가할 근거가 된다. 제시된 선택지 중 B의 PET가 추가 위험도 평가에 적합하며 단순히 12개월 뒤까지 기다리거나 안심시키지는 않는다. PET의 염증성 위양성과 작은 병변의 위음성이 있어 결과만으로 악성을 확진하지 않고, 사전 위험도에 따라 조직검사나 단기 추적 등을 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 10mm 불규칙 결절에서 PET B의 역할을 악성 확진이 아닌 위험도 평가로 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3749714/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008909
