---
type: qbank
schema_version: 1
id: medqa-us-train-004135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:357e870484f0a67406a2eab329b1ad3c1c35e66977a7beb10cd9e4c63bbd1266
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "흉벽 통증"
  - "늑연골염"
  - "근골격계 흉통"
  - "costochondritis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uKkeyXsOqzqOyXvCAoQ29zdG9jaG9uZHJpdGlzKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여자가 흉통과 호흡곤란으로 응급실에 왔다. 집에서 아침 식사를 준비하던 중 증상이 시작되었다. 날카로운 흉통이었고 심장마비라고 생각해 곧 호흡곤란도 느꼈다. 대학생이며 최근 축구팀에 가입했다. 피임을 위해 프로게스테론 자궁내장치를 사용하고 유방 초음파에서 발견된 낭종 외에는 과거력이 없다. 지난주 러시아에서 대서양 횡단 비행을 마치고 돌아왔다. 체온 36.9°C, 혈압 137/69 mmHg, 맥박 98회/분, 호흡수 18회/분, 산소포화도 99%이다. 불안해 보이지만 심폐검사는 정상이다. 깊게 숨 쉬거나 흉벽을 누르면 통증이 유발된다. 신경학적 검사에서 보행은 안정적이고 뇌신경 II~XII는 정상이다. 가장 가능성 높은 원인을 설명하는 것은 무엇인가?

## 선택지

A. 폐동맥의 혈전
B. 심근 허혈
C. 근골격계 염증
D. 심인성 원인

## 해설

최근 운동과 연관 가능하고 촉진·심호흡으로 재현되는 흉벽통은 근골격계 염증 C에 부합한다. 장거리비행 등 위험과 경과도 고려하며 압통이나 정상 산소포화도만으로 PE를 완전히 배제하지 않는다. 이 문항은 원인기전을 묻는 것이므로 치료를 단정하는 대신 임상감별과 연결한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흉벽 압통의 근골격염증 C는 유지하되 촉진만으로 PE배제/치료약 확정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004135
