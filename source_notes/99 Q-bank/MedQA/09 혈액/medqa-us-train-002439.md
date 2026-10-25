---
type: qbank
schema_version: 1
id: medqa-us-train-002439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48478e05523c84992205f37b3762ad40c3b3c959cf1b8df00e16da3201c5f4b4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "vitamin B12 deficiency"
  - "elevated methylmalonic acid"
  - "subacute combined degeneration"
  - "glossitis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
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

66세 노숙인 HIV 양성 남성이 손발 저림으로 내원했다. 수주 전 손끝과 발가락에서 시작된 저림이 점차 손과 발 전체로 퍼졌다. 수년 전 HIV를 진단받았지만 치료받지 않았고 만성 설사 병력이 있으며 혀가 아프다고 한다. 체질량지수 17 kg/m², 혀는 붉고 매끈하며 유두가 소실되어 있고 양쪽 손발의 2점 식별력이 감소되어 있다. 근력은 4/5, 발목 반사는 소실되며 보행실조와 롬베르그 양성이다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 메틸말론산(MMA) 수치 증가
B. 진단되지 않고 조절되지 않은 당뇨병
C. 자가면역 반응
D. 불용성 단백질 침착

## 해설


영양불량·만성 설사, 위축성 설염과 감각성 보행실조·Romberg 양성은 비타민 B12 결핍성 신경병증과 척수 아급성 연합변성을 시사한다. B12 의존성 methylmalonyl-CoA mutase 반응 장애로 MMA가 증가하므로 보기 중 A가 관련 대사 이상이다. MMA는 B12 결핍의 기능적 표지자이며, MMA 증가 하나만으로 모든 신경학적 증상의 독립적인 원인을 확정하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002439 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 깨진 질환명과 MMA 단독을 모든 신경손상의 확정 원인으로 표현한 부분 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002439
