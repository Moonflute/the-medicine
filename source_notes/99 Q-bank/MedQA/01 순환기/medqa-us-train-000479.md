---
type: qbank
schema_version: 1
id: medqa-us-train-000479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba2aa5bb15bcb93c8e617e25ff787b9e4a19c5be9dd54c9df2669c5aadc07d08
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "High-output heart failure"
  - "Arteriovenous fistula"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 혈액투석 환자에게 상완 동정맥루를 만든 뒤 호흡곤란과 부종이 생겼다. 건체중을 조정해도 증상이 지속된다. 심초음파에서 좌심실 박출률은 60%이고, 우심도자에서 충만압과 심박출량이 모두 증가했다. 동정맥루를 잠깐 압박하자 심박출량이 떨어졌다. 가장 가능성 높은 원인은?

## 선택지

A. 신부전에 의한 단순 체액과다
B. 투석불균형증후군
C. 수축성 심낭염
D. 고유량 동정맥루에 의한 고박출성 심부전

## 해설


고유량 투석 동정맥루는 전신혈관저항을 낮추고 심장으로 돌아오는 혈류를 늘린다. 울혈과 증가한 심박출량에 더해 일시 압박 때 박출량이 줄어드는 것은 동정맥루가 원인이라는 단서다. 투석 접근로를 유지해야 하므로 이후 처치는 신장·혈관접근 전문팀과 함께 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 최근 상완 AV fistula 조성 뒤 울혈·bounding pulse/빈맥은 저저항 단락에 의한 high-output HF D. 투석불균형의 급성 신경증상과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000479
- https://pubmed.ncbi.nlm.nih.gov/41770183/
