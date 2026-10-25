---
type: qbank
schema_version: 1
id: medqa-us-train-007612
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c99487c09c9e96a5e022d6081f249b48c0f45e92bf52c20005aab812e6c862a9
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "내측 측부인대 손상"
  - "외반력"
  - "무릎 인대 손상"
  - "외반 스트레스 검사"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-uCtOy4oSDsuKHrtoAg7J2464yAIOyGkOyDgSAoTWVkaWFsIENvbGxhdGVyYWwgTGlnYW1lbnQgSW5qdXJ5KS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 남자가 어젯밤 미식축구 경기에서 태클을 당한 후 발생한 오른쪽 무릎 통증으로 내원했다. 공을 들고 달리다가 오른발을 땅에 딛은 상태에서 오른쪽 무릎 외측을 맞았다. 현재 무릎 안쪽에 압통이 있고 오른쪽 하지에 체중을 완전히 싣지 못한다. 관절삼출이 있고 관절천자에서 맑은 액체 50cc가 나왔다. 다음 중 어떤 신체검사에서 인대 이완이 가장 잘 나타나는가?

## 선택지

A. 전방 서랍검사
B. 라크만 검사
C. 피벗 시프트 검사
D. 외반 스트레스 검사

## 해설

정답은 D, 외반 스트레스 검사이다. 발이 지면에 고정된 상태에서 무릎 외측을 타격받으면 외반력이 가해져 내측 측부인대(MCL)가 손상될 수 있다. 내측 무릎 압통과 손상 기전이 이에 부합하며, 외반 스트레스로 내측 관절 간격의 벌어짐과 이완을 평가한다. 전방 서랍검사, 라크만 검사 및 피벗 시프트 검사는 주로 전방십자인대의 안정성을 평가한다. 동반 인대·반월상연골 손상 가능성도 있으므로 실제 진료에서는 전체 무릎을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://now.aapmr.org/medial-and-lateral-collateral-ligament-injuries/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007612
