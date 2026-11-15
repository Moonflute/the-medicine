---
type: qbank
schema_version: 1
id: medqa-us-validation-000269
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:da9a5750fe8ad4194fdc47531b1fd06c519fdb335294df011f8bd284136dff7a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "바이러스성 심근염"
  - "확장성 심근병증"
  - "심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

41세 남성이 발열·근육통이 호전된 지 열흘 뒤 흉통과 호흡곤란으로 내원했다. 트로포닌이 상승했고 심초음파에서 좌심실 전반의 수축력이 떨어졌다. 관상동맥조영에서 원인이 될 폐색은 없고 혈역학적으로 안정적이다. 심근염을 평가하기에 적절한 다음 검사는?

## 선택지

A. 운동부하 심전도
B. 심장 자기공명영상
C. 경식도 심장초음파로 좌심방 혈전 확인
D. 폐 환기·관류 스캔

## 해설


관상동맥 폐색 없이 선행 감염 뒤 흉통, 심근 손상과 전반적인 수축 저하가 생겼다. 심장 MRI는 심근 부종과 비허혈성 손상 양상을 평가해 심근염 진단에 도움이 된다. 감기 병력만으로 특정 바이러스를 정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 최근 바이러스성 질환 뒤 전반적 좌심실 운동저하·확장·심근효소 상승은 심근염의 면역 염증 B를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000269
- ESC 심근염·심낭염 진료지침(2025): https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_MyoPeri.pdf
