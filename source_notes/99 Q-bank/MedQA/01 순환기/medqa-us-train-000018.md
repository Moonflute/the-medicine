---
type: qbank
schema_version: 1
id: medqa-us-train-000018
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d23320984da39413ff5a2853f2421f5182660bd081a4fd116c27cf3dfe7b3b7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "메스꺼움"
  - "복부 불편감"
  - "제2형 당뇨병"
  - "고혈압"
  - "말초동맥질환"
  - "비만"
  - "식도위십이지장내시경술"
  - "수소 호기 검사"
  - "심장 스트레스 검사"
  - "복부 초음파 검사"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 4개월째 빠르게 걷거나 계단을 오를 때 명치가 조이고 메스껍다. 멈춰 쉬면 수분 안에 가라앉고 최근 강도와 발생 거리는 일정하다. 당뇨병과 말초동맥질환이 있으며, 안정 시 심전도와 복부 진찰은 정상이다. 가장 우선 의심할 원인은?

## 선택지

A. 소화성 궤양
B. 담도산통
C. 안정형 심근허혈의 협심증 등가 증상
D. 위마비

## 해설


전형적인 가슴 통증이 아니어도 일정한 운동 부하에서 반복되고 휴식하면 가라앉는 상복부 불편감은 심근허혈을 시사한다. 당뇨병과 말초동맥질환은 가능성을 높이며 안정 시 정상 심전도로 배제되지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DM/PAD/흡연 위험에서 운동에 악화되는 상복부 불편감은 협심증 등가증상. 정상 안정 ECG로 배제할 수 없어 C 부하검사 맥락 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000018
- ESC 만성 관상동맥증후군 진료지침(2024): https://doi.org/10.1093/eurheartj/ehae177
