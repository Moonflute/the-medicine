---
type: qbank
schema_version: 1
id: medqa-us-train-006694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4338641a4961726c99df6a519786b16781f885e00bb779d251121d5a8ccf683b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "바이러스성 기관지염"
  - "상기도 감염"
  - "지지요법"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDquLDsuagubWQ
question_type: management
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

40세 여성이 5일 동안 운동 시 경미한 호흡곤란으로 내원했다. 5일 동안 기침도 있었으며 3일 전부터 희고 피가 섞이지 않은 가래가 나왔다. 처음에는 콧물, 경미한 두통 및 전신 근육통이 있었다. 발열이나 오한은 없다. 3주 전 9세 아들이 발열성 기침과 발진성 질환을 앓았으나 치료 없이 일주일 후 호전되었다. 간헐적인 편두통이 있고, 언니는 12년 전 항인지질 증후군을 진단받았다. 흡연은 하지 않고 일주일에 와인 3~4잔을 마신다. 필요할 때 졸미트립탄을 복용한다. 체온은 37.1°C(99°F), 맥박은 분당 84회, 호흡수는 분당 17회, 혈압은 135/82 mm Hg이다. 양쪽 폐기저부에 산재한 천명음이 들리고 수포음은 없다. 음성공명은 음성이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 지지요법만 시행
B. 백일해 PCR 시행
C. 고해상도 흉부 CT
D. 클라리트로마이신 투여

## 해설

5일의 콧물/근육통 선행 기침과 안정활력·발열/국소경화소견 부재는 바이러스성 급성기관지염 등 가벼운 기도질환을 시사해 A 지지요법이 적절하다. 증상을2주로 바꿔 쓰지 않는다. 악화·저산소·지속증상 시에는 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상5일을2주로 늘린 해설을 교정하고 가벼운 바이러스성 기도질환의 지지요법 A로 정리.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006694
