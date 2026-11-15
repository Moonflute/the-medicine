---
type: qbank
schema_version: 1
id: medqa-us-test-000629
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4a934fe7d9ae0eebeb6e071a4aa6aa04a8825bdb61bdcdc1e26f2a2299d77fbb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "비알코올성 지방간"
  - "인슐린 저항성"
  - "대사증후군"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ruYTslYzsvZTsmKzshLEg7KeA67Cp6rCEIChOb24tYWxjb2hvbGljIEZhdHR5IExpdmVyIERpc2Vhc2UpLm1k
  - MDQg64K067aE67mEL-uMgOyCrOymne2bhOq1sCAoTWV0YWJvbGljIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 비만과 제2형 당뇨병이 있다. 술은 거의 마시지 않고 바이러스 간염 검사도 음성이다. 초음파에서 지방간이 보이며, 안정기에 계산한 FIB-4 점수는 2.1이다. 진행성 섬유화 위험을 더 평가할 다음 검사는?

## 선택지

A. 음주량과 관계없이 매일 간효소만 검사한다
B. 단순 초음파가 지방간이면 섬유화가 없다고 판단한다
C. 간 탄성도 검사
D. 간암 진단을 위해 AFP만 측정한다

## 해설


대사이상 관련 지방간질환에서 중요한 것은 지방 축적 여부뿐 아니라 섬유화 위험이다. 중간 범위 FIB-4는 진행성 섬유화를 배제하기 어려우므로 탄성도 검사로 추가 평가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 C/해설 읽음. 비만·당대사장애·ALT 우세 상승·고에코성 간과 음성 바이러스/자가면역 검사가 인슐린 저항성 관련 지방간 기전을 지지. 기존 NAFLD 용어는 역사적 표현으로 보존, 약물치료 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000629
- https://doi.org/10.3350/cmh.2025.0045
