---
type: qbank
schema_version: 1
id: medqa-us-train-000514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3845c0724d2f56feacad97c007f24a1add73672bae38a12f69a0e0bf70c2195f
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "liver transplantation"
  - "jaundice"
  - "chronic rejection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7년 전 간 이식을 받은 37세 남성이 피부, 공막, 소변의 황달 증상으로 내원하였다. 환자는 정기적인 면역억제제 치료를 받고 있으며 치료에 잘 순응하고 있다. 동반 질환은 없으며 다른 약물은 복용하지 않고 있다. 환자는 간 이식 후 6~7회 정도 유사한 피부 황달 증상을 겪은 병력이 있다. 신체 검진상 임상적 황달이 관찰된다. 검사실 검사 결과는 다음과 같다: 백혈구(WBC) 수 4,400/mm3, 혈색소 11.1 g/dL, 혈청 크레아티닌 0.9 mg/dL, 혈청 빌리루빈(총) 44 mg/dL, 아스파르테이트 아미노전이효소(AST) 1,111 U/L, 알라닌 아미노전이효소(ALT) 671 U/L, 혈청 감마-글루타밀 전이효소(GGT) 777 U/L, 알칼리성 인산분해효소(ALP) 888 U/L, 프로트롬빈 시간 17초. 도플러 초음파 검사상 이식된 간으로의 혈류가 현저히 감소되어 있다. 이식된 간의 생검에서 나타날 가능성이 가장 높은 조직학적 소견은 무엇인가?

## 선택지

A. 담관과 간세포의 정상적인 구조
B. 미세결절 형성을 동반한 광범위한 섬유성 격벽
C. 간세포의 풍선 변성(ballooning degeneration)
D. 실질 섬유화를 동반한 간질 세포 침윤, 폐쇄성 동맥염(obliterative arteritis)

## 해설


이식 7년 뒤 반복된 황달과 심한 간기능 이상·이식간 혈류 저하는 만성 거부반응과 만성 혈관 손상 가능성을 시사한다. 선택지 중 D의 폐쇄성 동맥병증과 실질 섬유화가 가장 부합한다. 만성 간이식 거부의 특징에는 작은 담관의 소실(ductopenia)과 내막 비후를 동반한 폐쇄성 동맥병증이 있다. 간질의 염증세포 침윤을 간세포 침윤이라고 부르지 않는다. 도플러 혈류 감소만으로 거부반응을 확정할 수는 없으며 혈관 폐색 등도 감별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000514 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 만성 이식거부의 혈관병증과 섬유화는 유지하고 간세포 침윤이라는 세포 구분 오류를 고쳤다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000514
