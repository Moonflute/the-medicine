---
type: qbank
schema_version: 1
id: medqa-us-test-000718
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6a37b6bfd7d5ed0cd81fdfe058d1ce27b21c01718b9e0731ba26d17844cfe8a9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "만성신장병"
  - "이차성 부갑상샘기능항진증"
  - "신성 골이영양증"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

투석을 위해 입원한 지 2시간 후 63세 여성에게 심한 요통이 발생했다. 통증은 10점 만점에 8점이고 다리로 방사된다. 4년 전 복강경 담낭절제술을 받았다. 고혈압, 만성신장병, 제2형 당뇨병, 주요우울장애가 있으며 집에서 딸과 자주 다툰다고 한다. 세르트랄린, 인슐린, 에날라프릴, 중탄산나트륨, 세벨라머를 복용한다. 체온 37.3°C(99.1°F), 맥박 102회/분, 호흡 15회/분, 혈압 132/94 mmHg였다. L2 척추를 누르면 심한 압통이 있고 운동 범위가 제한되었으나 신경학적 국소 이상은 없었다. 혈색소 10.1 g/dL, 백혈구 8,700/mm³, 혈소판 130,000/mm³, 나트륨 136 mEq/L, 염소 101 mEq/L, 칼륨 5.1 mEq/L, 칼슘 8.2 mg/dL, 요소질소 33 mg/dL, 포도당 190 mg/dL, 크레아티닌 3.8 mg/dL였다. 척추 X선에서 L2 쐐기 압박골절이 보였다. 이 소견의 가장 가능성 높은 설명은?

## 선택지

A. 삼차성 부갑상샘기능항진증
B. 이차성 부갑상샘기능항진증
C. 노인 학대
D. 일차성 부갑상샘기능항진증

## 해설

진행된 만성신장병에서는 인산 배설 저하에 따른 인산 저류와 활성 비타민 D 생성 감소, 저칼슘 자극 등이 PTH 상승을 일으켜 이차성 부갑상샘기능항진증(B)이 발생할 수 있다. CKD-미네랄뼈질환은 골질과 강도를 떨어뜨려 골절 위험을 높인다. 이 사례의 낮은 칼슘과 신부전은 고칼슘혈증을 흔히 보이는 일차성/삼차성 형태보다 이차성 형태를 지지한다. 인산 저하를 주된 원인으로 설명하는 것은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 인산 저하가 아니라 인산 저류·활성 비타민 D 감소에 따른 CKD-MBD/이차성 PTH 상승으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000718
