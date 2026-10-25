---
type: qbank
schema_version: 1
id: medqa-us-train-002029
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de9be9c7e63ea5f37a1922178c454b7fde8311448f1db770a4dbcc8337393b67
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "acute bacterial rhinosinusitis"
  - "viral upper respiratory infection"
  - "sinusitis risk factor"
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-q4ieyEsSDrtoDruYTrj5nsl7wgKEFjdXRlIHNpbnVzaXRpcykubWQ
question_type: risk_factor
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성이 코막힘과 인후통으로 응급실에 왔다. 10일간 피로, 콧물과 기침이 악화되었고 최근 4일간 안면통과 진한 콧물이 있다. 비만, 제2형 당뇨병, 경한 간헐적 천식이 있고 40갑년 흡연력과 주당 맥주 6~12잔의 음주력이 있다. 체온 102.8°F (39.3°C), 혈압 145/96 mmHg, 맥박 105/min이며 화농성 콧물과 상악동 압통이 있다. 이 상태의 가장 흔한 위험요인은 무엇인가?

## 선택지

A. 천식
B. 당뇨병
C. 담배 사용
D. 바이러스 감염

## 해설

바이러스 상기도감염은 비점막·부비동 입구의 부종과 배액 장애를 유발하므로 D가 위험인자이다. 급성 비부비동염은 대개 바이러스성이며 일부만 이차 세균감염으로 진행한다. 이 사례의 지속·악화 경과와 고열·화농성 분비물은 세균성 합병을 의심하게 하지만 모든 급성 부비동염을 세균성으로 일반화해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선행 바이러스 URI D는 위험인자이나 대부분의 급성 부비동염이 세균성이라는 해설은 오류.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002029
