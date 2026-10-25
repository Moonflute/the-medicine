---
type: qbank
schema_version: 1
id: medqa-us-train-004908
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b0e39823996ebc764210ac5688da03397c0d687224423f9acda939bf8531b0e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "장출혈성 대장균"
  - "용혈성요독증후군"
  - "시가 독소"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDsmpTrj4Ug7Kad7ZuE6rWwIChIZW1vbHl0aWMgVXJlbWljIFN5bmRyb21lLCBIVVMpLm1k
  - MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ
question_type: diagnosis
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

24세 남자가 3일째 호전되지 않는 혈성 설사로 응급실에 왔다. 최근 캠핑에서 계곡물을 마셨고 소고기, 닭고기, 돼지고기, 연어를 덜 익혀 먹었다. 체온 36.8°C, 혈압 107/58 mmHg, 맥박 127회/분이다. 혈색소 9.2 g/dL, 혈소판 87,000/mm³, LDH 327 IU/L, 합토글로빈 5 mg/dL, 크레아티닌 1.1 mg/dL이다. 다음 중 이 환자의 증상을 가장 잘 일으킨 원인은?

## 선택지

A. Campylobacter jejuni
B. 대장암
C. Escherichia coli
D. Giardia lamblia

## 해설


덜 익힌 소고기 등 노출 뒤 혈성 설사와 용혈성 빈혈·혈소판감소는 Shiga toxin 생성 E. coli C 및 HUS 발생 가능성을 시사한다. 다만 creatinine1.1mg/dL 단일값만으로 명백한 신기능 악화를 확정할 수는 없다. 원문 BUN39·K5.9·HCO₃19도 있어 체액·전해질·신기능 추적이 필요하며 전형적 신장 삼징이 모두 이미 확정되었다고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004908 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: STEC 관련 미세혈관성 용혈·혈소판감소 C 유지;Cr1.1만으로 확정 AKI를 만들어낸 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004908
