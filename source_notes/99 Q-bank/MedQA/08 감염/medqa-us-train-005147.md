---
type: qbank
schema_version: 1
id: medqa-us-train-005147
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89a38e85ddb39c6ff02d2add73bc03d6ba10277d7af15236fc7f39cb29ddb3a2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "면역저하 환자 수막염"
  - "경험적 광범위 항생제"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

비호지킨 림프종이 있는 63세 남자가 3일 동안 악화된 발열과 혼돈으로 내원했다. 최근 항암화학요법을 받았고, 2주 전 프랑스 시골에서 수제 치즈 등을 먹고 돌아왔으며 3일간 묽은 변도 있었다. 뇌척수액에서 백혈구 1,200/mm³(호중구 76%), 단백 113 mg/dL, 포도당 21 mg/dL이다. 다음 중 가장 적절한 초기 약물치료는?

## 선택지

A. 암피실린과 세포탁심
B. 아시클로버와 덱사메타손
C. 아시클로버
D. 반코마이신, 암피실린과 세페핌

## 해설


고령·최근 항암 환자의 호중구성 저당 CSF는 급성 세균성 수막염으로 신속한 경험적 치료가 필요하다. D의 vancomycin+ampicillin+cefepime은 면역억제 맥락에서 저항성 폐렴구균·Listeria 및 그람음성균을 포함한다. 특히 ampicillin은 Listeria 범위를 위해 중요하다. 원문에는 프랑스 방문과 수제 치즈 등 섭취·설사가 있어 이 위험을 고려하지만 원인균이 확정된 것은 아니다. 배양/감수성에 따라 좁힌다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005147 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령·면역억제에서 ampicillin의 Listeria 범위와 원문 음식 노출 단서 복원; D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005147
