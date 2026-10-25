---
type: qbank
schema_version: 1
id: medqa-us-train-000074
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76a0e71ab98f3ba4323edded74f475d1364c351c58e247da85b9a22a468fae57
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "조기 양막 파열"
  - "자궁 수축"
  - "조산"
  - "Premature rupture of membranes"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여성, 임신 2회, 출산 1회, 임신 32주차에 갑작스러운 맑은 질액 누출로 응급실에 내원했습니다. 그녀의 임신은 합병증 없이 진행되었습니다. 첫 아이는 만삭에 질식 분만으로 태어났습니다. 심각한 질병의 병력은 없습니다. 음주나 흡연은 하지 않습니다. 현재 복용 중인 약물은 비타민 보충제입니다. 체온은 37.2°C, 맥박은 70회/분, 호흡은 18회/분, 혈압은 128/82 mmHg입니다. 질경 검사에서 자궁경관에 맑은 액체가 관찰됩니다. 태아 심박수는 160회/분으로 반응성이 좋고 감속은 없습니다. 자궁수축도(Tocometry)는 자궁 수축을 보여줍니다. 니트라진 검사는 양성입니다. 인도메타신 투여를 시작했습니다. 다음 중 가장 적절한 다음 관리 단계는 무엇입니까?

## 선택지

A. 베타메타손, 암피실린을 투여하고 제왕절개술을 진행한다
B. 암피실린을 투여하고 양수 주입술을 시행한다
C. 베타메타손과 암피실린을 투여한다
D. 베타메타손, 암피실린을 투여하고 분만 유도를 진행한다

## 해설

32주 PPROM에서 감염·태아곤란 등 즉시 분만 적응증이 없으므로 선택지 중 베타메타손과 암피실린(C)이 적절하다. 스테로이드는 미숙아 합병증 감소를 위해, 항생제는 감염 감소 및 잠복기 연장을 위해 투여한다. 실제 잠복기 항생제는 병원 프로토콜의 병합·순차 요법을 적용하며 암피실린 단독 전체 치료로 해석하지 않는다. 지속 감시 및 분만 시점 재평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 스테로이드가 감염 예방 약물이라는 혼동 수정 및 기대요법 조건 보강.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/when-your-waters-break-prematurely/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000074
