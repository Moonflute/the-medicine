---
type: qbank
schema_version: 1
id: medqa-us-test-001041
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c3b73202abd241cc72a8033d330ac5404cecdf22e62763e8c2613a72bc6afc88
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "모세혈관 누출"
  - "혈관내 용적 감소"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

55세 여성이 8시간 동안 악화되는 상복부 통증으로 응급실에 왔다. 통증은 등으로 방사되고 오심이 동반되었다. 체온 37.5°C(99.5°F), 혈압 84/58 mmHg, 맥박 115회/분이며 폐는 깨끗했다. 복부팽만, 명치 압통과 방어, 감소된 장음이 있었고 사지는 따뜻했다. 헤마토크릿 48%, 백혈구 13,800/mm³, 칼슘 8.0 mg/dL, BUN 32 mg/dL, 아밀라아제 250 U/L, 심전도는 동성 빈맥이었다. 활력징후 이상을 일으킨 가장 가능성 높은 기전은?

## 선택지

A. 응고 및 섬유소용해 이상
B. 모세혈관 누출
C. 심박출량 감소
D. 가성낭종 형성

## 해설


급성 췌장염에서 염증성 매개체가 모세혈관 투과성을 증가시켜 혈관내액이 조직으로 빠져 복부 팽만과 저혈압을 일으킨다. 가장 가능성 높은 기전은 모세혈관 누출이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 등방사 상복부통증·췌장효소 상승·혈액농축/저혈압의 급성 췌장염에서 염증성 혈관 투과성 증가/제3공간 이동 기전 일치. 다른 유사 문항이 있어도 임상 중요도나 중복만으로 삭제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001041
