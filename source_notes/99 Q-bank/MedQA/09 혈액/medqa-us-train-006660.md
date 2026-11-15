---
type: qbank
schema_version: 1
id: medqa-us-train-006660
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a9d60241ac007fc9db1dda9787f9e92fe6b50b81f92d55dbe34933d23115ae8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "과호산구증후군"
  - "호산구성 심근병증"
  - "심장 내 혈전"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOq1rCDsp4jtmZgubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

6주 넘게 절대호산구 수가 8,000/μL 이상인 환자에게 호흡곤란과 부종이 생겼다. 심장 MRI에서 심내막 섬유화와 심첨부 혈전이 보인다. 약물·기생충 감염 등 이차 원인과 혈관염을 평가했으나 설명할 원인은 없다. 가장 가능성이 높은 진단은?

## 선택지

A. 과호산구증후군의 심장 침범
B. 알레르기 비염에 동반된 단순 호산구증가
C. 원발성 확장성 심근병증
D. 약물과민반응증후군

## 해설


현저한 호산구증가에 심내막 섬유화·혈전 같은 장기 손상이 동반되면 과호산구증후군에 부합한다. 혈액학적 클론성 원인을 추가 평가하고 심장 침범은 신속히 치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006660 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 현저 호산구증가·심내막 섬유화/혈전·전신장기 침범의 과호산구증후군 C를 원문 대조 유지. 이차 원인 배제가 실제 평가에 필요.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006660
- https://doi.org/10.1186/s13023-023-02696-4
