---
type: qbank
schema_version: 1
id: medqa-us-train-005187
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c3e9893cea511846db2765461879c6162bdd58ce4ad63e617e043d08a1835c4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "후천성 폰 빌레브란트 증후군"
  - "대동맥판막 협착"
  - "장출혈"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 여자가 갑자기 발생한 심한 직장출혈로 내원했다. 힘든 배변 후 선홍색 출혈이 시작되어 처음에는 많았지만 현재는 멎었다. 최근 3개월 동안 손발톱 손질 중 출혈이 쉽게 생겼고, 2~3개월 동안 운동 시 경한 호흡곤란이 있다. 심첨부가 아닌 우측 상흉골연에서 수축기 잡음이 들리고 대변잠혈검사는 양성이다. 다음 중 상태의 가장 가능성 높은 원인은?

## 선택지

A. 항트롬빈 III
B. 폰 빌레브란트 인자
C. 제8응고인자
D. ADAMTS13 유전자 돌연변이

## 해설

AS 의심 잡음과 새 GI/점막출혈은 후천성 von Willebrand증후군 B를 시사한다. 높은 전단력으로 큰 vWF multimer가 소실되어 혈소판 부착이 저하된다. 정상 vWF는 부착을 돕는 인자이지 억제하는 인자가 아니며 무조건 선천성 결핍도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: vWF가 부착을 억제한다는 역기전과 선천성 단정을 AS의 후천성 vWF소실로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005187
