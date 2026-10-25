---
type: qbank
schema_version: 1
id: medqa-us-train-005746
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd9ab86c63ec73cd0ba846f621df0645bd985227565b12295597774078a6b51f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "죽상색전증"
  - "블루토 증후군"
  - "혈관시술 합병증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
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

안정형 협심증으로 경피적 관상동맥 중재술을 받은 다음 날 63세 여성이 우측 새끼발가락에 심한 통증이 생겼다. 이런 증상은 이전에 없었다. 16년 동안 당뇨병을 앓았다. 시술 후 혈압은 145/90 mmHg, 맥박은 분당 65회, 호흡수는 분당 15회, 체온은 36.7°C(98.1°F)이다. 대퇴동맥 접근 부위는 정상이고 말초 맥박은 양측에서 잘 촉지된다. 발가락 사진이 제시되어 있다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 죽상색전증
B. 버거병
C. 봉와직염
D. 당뇨병성 족부병변

## 해설

혈관조작 후 갑작스러운 발가락 통증과 유지된 말초맥박은 죽상판에서 떨어진 물질의 소동맥 색전 A를 시사한다. 큰 혈관맥박이 유지되어도 미세색전이 가능하다. 색전이 반드시 대동맥판을 통과해 발생하는 것은 아니다. 누락 사진의 청색증을 실제 확인한 것처럼 기술하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 시술후 말단통증·보존맥박의 죽상색전 A는 유지하되 대동맥판을 통과한 색전이라는 해부 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005746
