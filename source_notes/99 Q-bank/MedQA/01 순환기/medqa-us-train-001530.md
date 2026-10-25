---
type: qbank
schema_version: 1
id: medqa-us-train-001530
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:32c2c1bc41ef77cedf22e59ea4a0b7160d7691edb02c25a16303f2b3f251cfa9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute pericarditis"
  - "radiation-induced pericarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGl0YXZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 여성이 3일 동안 악화되는 호흡곤란, 비생산성 기침 및 날카로운 흉골 뒤 흉통으로 내원했다. 흉통은 흡기와 누울 때 악화된다. 2개월 전 유방암을 진단받아 유방절제술 후 보조 방사선치료를 받았다. 고혈압과 고지혈증이 있다. 타목시펜, 발사르탄 및 피타바스타틴을 복용한다. 15년 동안 하루 한 갑을 피웠으나 유방암 진단 후 금연했다. 맥박은 95회/분, 호흡수는 20회/분, 혈압은 110/60 mm Hg이다. 심장검사에서 왼쪽 하부 흉골 가장자리에서 잘 들리는 마찰음이 있다. 심전도에서 동성 빈맥과 I, II, aVF 및 V1–6 유도의 ST분절 상승이 보인다. 다음 중 증상의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 폐동맥 색전성 폐색
B. 심낭의 호중구 침윤
C. 관상동맥의 내피하 섬유화
D. 심낭의 섬유화성 비후

## 해설

흡기·누운 자세에서 악화되는 날카로운 흉통, 심낭 마찰음과 여러 유도에 걸친 ST 상승은 급성 심낭염을 지지한다. 최근 흉부 방사선치료 뒤 발생한 급성 염증에서 보기 중 B, 심낭의 호중구 침윤이 합당하다. 섬유화성 심낭 비후나 관상동맥 섬유화는 이런 급성 경과보다 만성·지연성 방사선 손상과 더 관련된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 심장 진찰의 마찰음을 흉막 마찰음으로 잘못 쓴 부분을 심낭 마찰음으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001530
