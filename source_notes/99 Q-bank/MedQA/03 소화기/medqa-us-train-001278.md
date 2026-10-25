---
type: qbank
schema_version: 1
id: medqa-us-train-001278
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2acec0a86b0faa8b385a983121298b41566a5a9f44132e63675ff1a78037e631
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "third spacing"
  - "capillary leak"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: mechanism
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 여성이 8시간 동안 악화되는 상복부 통증으로 응급실에 내원했다. 통증은 등으로 퍼지고 오심을 동반한다. 고혈압과 고지혈증이 있어 에날라프릴, 푸로세미드, 심바스타틴을 복용 중이다. 체온은 37.5°C (99.5°F), 혈압은 84/58 mm Hg, 맥박은 115회/분이다. 폐 청진은 정상이다. 복부 팽만, 명치 압통과 근육 방어가 있고 장음은 감소되어 있다. 사지는 따뜻하다. 검사 결과는 다음과 같다: 헤마토크릿 48%, 백혈구 수 13,800/mm3, 혈소판 수 175,000/mm3, 혈청 칼슘 8.0 mg/dL, 요소질소 32 mg/dL, 아밀라아제 250 U/L. 심전도는 동성 빈맥이다. 다음 중 이 환자의 활력징후 이상을 일으킨 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 출혈성 체액 소실
B. 심박출량 감소
C. 수분 배설 증가
D. 모세혈관 누출

## 해설

급성 췌장염의 염증성 매개체는 혈관 투과성을 높여 혈장 성분을 간질·복강 등 제3공간으로 이동시키고 유효 순환혈액량을 감소시킬 수 있다. 따라서 저혈압과 빈맥의 기전으로 D, 모세혈관 누출이 합당하다. 실제 혈청 삼투질농도가 제시되지 않았으므로 삼투압 저하를 확인된 사실로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 삼투성 삼투압 저하라는 무의미한 설명을 염증성 모세혈관 누출과 혈관내 용적 감소로 정정. 유사 문항도 케이스 보존.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001278
