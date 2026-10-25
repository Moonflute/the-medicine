---
type: qbank
schema_version: 1
id: medqa-us-train-000345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea9aa6eb3b1c1892b694a1368d0dd62df5f52cc1ed1795a467442b7e28e7717e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Lyme arthritis"
  - "Acute rheumatic fever"
  - "Disseminated gonococcal infection"
  - "Reactive arthritis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: standard
answer: C
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

17세 소년이 3일 전부터 시작된 왼쪽 손목 통증으로 응급실에 내원했다. 오늘 아침 통증이 심해졌고 오한과 권태감이 시작되었다. 지난주에는 저절로 호전된 왼쪽 무릎 통증이 있었다. 평소 건강하며 손목에 외상을 입은 적은 없다. 최근 미네소타로 캠핑 여행을 다녀왔다. 성생활을 하고 있으며 여성 파트너 한 명과 관계를 맺고 있고, 파트너는 피임을 위해 다이어프램(diaphragm)을 사용한다. 체온은 37.7°C(99.9°F)이다. 진찰 결과 양쪽 손목과 손등에 통증이 없는 여러 개의 보라색 수포성 농포 병변이 관찰되며, 왼쪽 손바닥에도 두 개의 병변이 있다. 왼쪽 손목에 부종과 발적이 있고 촉진 및 수동적 움직임 시 심한 압통이 있다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 라임 관절염(Lyme arthritis)
B. 급성 류마티스열(Acute rheumatic fever)
C. 파종성 임균 감염(Disseminated gonococcal infection)
D. 반응성 관절염(Reactive arthritis)

## 해설


젊은 성인에서 이동성 관절통 뒤 손목의 급성 관절염과 손발의 소수 무통성 보라색 수포농포는 파종성 임균 감염(C)을 지지한다. Diaphragm은 피임 수단이지 STI 예방용 장벽이 아니므로 사용했다고 임균 감염을 배제할 수 없다. 그러나 사용 자체가 감염을 일으켰다고 단정하지 않는다. Lyme 관절염은 대개 큰관절 중심이고 이러한 농포성 피부병변을 잘 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000345 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 본문의 보라색 농포를 황색으로 바꾼 설명과 diaphragm 자체가 감염 위험을 높인다는 인과 단정을 제거했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000345
