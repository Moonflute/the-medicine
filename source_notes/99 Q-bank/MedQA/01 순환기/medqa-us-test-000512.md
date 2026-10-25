---
type: qbank
schema_version: 1
id: medqa-us-test-000512
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7ee5cc8f31ba4fca16f4d8259a18bf301a21b5762b170823ae3b3831ea5248a3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "경동맥 협착"
  - "경동맥 잡음"
  - "일과성 허혈발작"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 왼쪽 다리의 계획된 대퇴-오금동맥 우회술 전 정기검진을 받으러 왔다. 건강하지만 가끔 왼손의 쇠약과 저림이 있다. 말초동맥질환, 제2형 당뇨병, 고혈압, 고콜레스테롤혈증, 통풍 병력이 있다. 50년 동안 매일 담배 한 갑을 피웠고 매일 맥주 3캔을 마신다. 아스피린, 메트포르민, 에날라프릴, 심바스타틴, 페북소스타트를 복용한다. 체온 37.3°C(99.1°F), 맥박 86회/분, 혈압 122/76 mmHg였다. 폐와 심장 진찰은 정상이었고 오른쪽 목에서 잡음이 들렸다. 오른쪽 서혜부에 환원 가능한 탈장이 있었으나 신경학적 진찰은 정상이었다. 혈액검사와 전해질, 크레아티닌, 포도당 수치는 정상 범위였고 심전도에서 경미한 좌심실 비대, 흉부 X선은 정상이었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 목 초음파
B. 심초음파
C. 와파린 치료
D. 두부 CT 혈관조영술

## 해설

정답은 A이다. 반복되는 왼손 약화·감각저하와 우측 경동맥 잡음은 우측 경동맥 질환에 의한 일과성 뇌허혈을 의심하게 한다. 경부 경동맥 duplex 초음파로 협착을 평가하는 것이 제시된 선택지 중 적합하다. 단순히 모든 무증상 잡음에 검진 초음파를 권고한다는 의미가 아니다. 신경증상의 양상·시점도 신속하게 평가해야 하며 warfarin을 원인 확인 없이 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경동맥 잡음만의 무증상 선별이 아니라 좌측 일과성 신경증상이 있는 증상성 경동맥 평가임을 명시.
- https://esvs.org/wp-content/uploads/2023/03/ESVS-2023-Carotid-guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000512
