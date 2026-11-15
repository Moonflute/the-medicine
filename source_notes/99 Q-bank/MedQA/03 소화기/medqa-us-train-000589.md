---
type: qbank
schema_version: 1
id: medqa-us-train-000589
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d49808c3ca74db484b769e6777c1ad4d6bf16fe1210c5fa48acc0d192a5d0c63
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "achalasia"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7J207JmE67aI64ql7KadIChBY2hhbGFzaWEpLm1k
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 5년째 고형식과 물을 삼키기 어렵고 자다가 소화되지 않은 음식이 역류한다고 한다. 바륨 식도조영에서 식도는 확장되어 있고 위식도접합부에서 매끈하게 좁아진다. 고해상도 식도내압검사에서 예상되는 소견은?

## 선택지

A. 정상 연동운동과 하부식도괄약근의 정상 이완
B. 정상 연동운동의 소실과 하부식도괄약근의 이완 장애
C. 인두 수축 약화와 상부식도괄약근의 이완 장애
D. 식도 수축력 저하와 낮은 하부식도괄약근 압력

## 해설

고형식과 액체를 모두 삼키기 어렵고 음식 역류와 위식도접합부의 매끈한 협착이 있어 식도이완불능증에 합당하다. 핵심 내압 소견은 정상 연동운동이 없고 연하 시 하부식도괄약근이 충분히 이완되지 않는 것이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: achalasia를 상부 식도 무력증으로 설명한 오류 및 LES장애와 별개라는 모순 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000589
