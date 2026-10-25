---
type: qbank
schema_version: 1
id: medqa-us-train-004597
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c638714c28fb38405cb842d0f6a668a9c21117aa7d9153bdfb57ccc1f21bcb2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "굿파스처병"
  - "항사구체기저막 항체"
  - "폐신장 증후군"
related_disease_slugs:
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: simple
answer: D
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

27세 남성이 일주일 동안 매일 소량의 객혈이 있어 내원했다. 흡연, 환자 접촉이나 최근 여행은 부인한다. 흉부 방사선사진에서 여러 출혈 부위를 시사하는 반점성 폐포 침윤을 동반한 간질성 폐렴이 보인다. 소변검사에서 혈뇨와 단백뇨가 양성이다. 항사구체기저막 항체(anti-GBM Ab) 검사도 양성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 전신홍반루푸스
B. 육아종증을 동반한 다발혈관염(베게너)
C. 처그-스트라우스 증후군
D. 굿파스처병

## 해설

폐포출혈양상과 사구체성혈뇨/단백뇨, antiGBM항체양성은 Goodpasture/antiGBM disease D를 지지한다. 폐침범은 면역매개 폐포출혈이지 단순 감염성폐렴이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AntiGBM폐출혈을 감염성폐렴으로 부른 오설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004597
