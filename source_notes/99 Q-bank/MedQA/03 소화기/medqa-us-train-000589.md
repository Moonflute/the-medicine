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

37세 남성이 지난 5년간 지속된 연하곤란과 역류 증상으로 내원하였다. 최근 몇 주 동안 고형식이나 액체 음식을 섭취하는 것이 매우 어려워졌다. 이 기간 동안 체중이 3kg(6lb) 감소하였다. 작년에 폐렴으로 입원한 적이 있다. 3년 전에는 연하곤란 증상이 부분적으로 호전되었던 내시경 시술을 받았다. 환자는 식사 전에 암로디핀(amlodipine)과 니트로글리세린(nitroglycerine)을 복용한다. 활력 징후는 정상 범위 내에 있다. 체질량지수(BMI)는 19kg/m2이다. 신체 검진상 이상 소견은 없다. 바륨 연하 검사(barium swallow) X-선 사진이 제시되었다. 다음 중 이 환자의 상태를 유발한 식도 침범 양상으로 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 연하 시 비정상적인 식도 수축 및 하부 식도 괄약근 이완
B. 연동 운동 소실 및 하부 식도 괄약근 이완 장애
C. 인두 추진력 저하 및 상부 식도 괄약근 폐쇄
D. 심하게 약해진 연동 운동 및 이완된 하부 식도 괄약근

## 해설

정답은 B이다. 수년간 고형식과 액체 모두의 연하곤란·역류, 이전 내시경적 치료와 식전 nitrate/CCB 사용은 achalasia의 맥락이다. 기전은 식도 체부의 연동운동 소실과 하부식도괄약근 이완 장애이다. 상부 괄약근 병변과 구별하며 LES 장애와 별개 질환이라고 설명하지 않는다. 누락된 barium 영상의 특정 모양을 보았다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: achalasia를 상부 식도 무력증으로 설명한 오류 및 LES장애와 별개라는 모순 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000589
