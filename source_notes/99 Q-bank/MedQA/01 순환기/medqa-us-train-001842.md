---
type: qbank
schema_version: 1
id: medqa-us-train-001842
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d47a9a5af160d1160332702e894f8c395d1decc939f9c7895551a62149379283
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hereditary hemorrhagic telangiectasia"
  - "arteriovenous malformation"
  - "high-output heart failure"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rj5nsoJXrp6Ug7KeI7ZmYIChBcnRlcmlvdmVub3VzIG1hbGZvcm1hdGlvbikubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: mechanism
difficulty: simple
answer: C
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

45세 여성이 반복적인 코피와 입술·손가락의 모세혈관확장으로 유전성 출혈성 모세혈관확장증을 진단받았다. 최근 운동 시 호흡곤란과 다리 부종이 생겼다. 빈혈은 없고 좌심실 박출률은 보존돼 있다. 간 도플러에서 굵어진 간동맥과 비정상적으로 빠른 동정맥 혈류가 보인다. 심부전을 설명하는 기전은?

## 선택지

A. 간경변으로 인한 혈장 교질삼투압 감소
B. 폐동맥 혈전으로 인한 우심실 후부하 상승
C. 간 동정맥 단락에 의한 고박출 상태
D. 좌우 심실 사이 단락에 의한 폐혈류 증가

## 해설


간 혈관기형의 동정맥 단락이 크면 전신혈관저항이 낮아지고 정맥환류가 늘어 고박출성 심부전이 생길 수 있다. 박출률이 정상이라는 이유로 심부전을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 가족성 코피·입술/비부/손가락 telangiectasia는 HHT. 큰 AV shunt로 high-outputHF C 위험이 증가.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001842
- https://hhtguidelines.org/liver/
