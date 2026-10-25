---
type: qbank
schema_version: 1
id: medqa-us-train-009647
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae732f1771b707a00fcaa7311362c957682f8ee09df8ffcd1a44a299820a30bc
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "amaurosis fugax"
  - "일과성 흑암시"
  - "carotid artery stenosis"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남자가 갑자기 오른쪽 눈의 시력을 잃었다가 구급대가 도착할 때쯤 회복되어 내원했다. 당뇨병과 고혈압이 있으며 리시노프릴, 아토르바스타틴, 메트포르민, 인슐린을 복용한다. 혈압 140/95 mmHg이고 오른쪽 흉골연에서 경동맥으로 방사되는 수축기 잡음이 있다. 신경학적 검사에서 국소 이상은 없고 두부 CT는 경도 뇌 위축 외에 정상이다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 조직 플라스미노겐 활성제
B. 뇌 MRI
C. 헤파린에서 와파린으로 연결
D. 경부 초음파

## 해설

일과성 단안 시력소실은 망막 허혈과 색전 가능성을 우려하게 하므로 경동맥 평가를 위한 D의 경부 초음파가 적합하다. 증상이 회복되었다고 평가를 생략하지 않으며 심장성 원인도 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경동맥 방사 잡음의 위치를 영어 원문의 우측 흉골연으로 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009647
