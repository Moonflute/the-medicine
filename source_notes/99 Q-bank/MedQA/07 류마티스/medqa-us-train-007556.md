---
type: qbank
schema_version: 1
id: medqa-us-train-007556
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:940f20efde1c16a28c4d3e896011de622c0dc1ab0ae6c6e5e1116ba0ea358ec4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염 급성 악화"
  - "류마티스 결절"
  - "소화성 궤양 병력"
  - "프레드니솔론"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
question_type: management
difficulty: complex
answer: B
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

45세 여자가 24시간 동안 지속된 양쪽 손목과 손가락 관절의 심한 통증으로 응급실에 내원했다. 6개월 동안 비슷한 에피소드가 있었고 아침에 일어나면 약 90분간 강직이 동반된다. 고지혈증과 고혈압이 있고 2년 전 소화성 궤양으로 치료받았다. 페노피브레이트와 암로디핀을 복용한다. 활력징후는 정상이다. 양쪽 손목과 중수지관절에 부종과 압통이 있고 통증 때문에 운동 범위가 감소되어 있다. 전완 신전면에 피부가 정상인 피하 결절이 여러 개 있으며 압통 없이 단단하고 움직인다. 다음 중 현재 증상에 가장 적절한 치료는 무엇인가?

## 선택지

A. 인도메타신
B. 프레드니솔론
C. 비타민 D와 칼슘 보충제
D. 설파살라진

## 해설


대칭성 손목·MCP 활막염, 장시간 아침강직과 피하결절은 RA를 시사한다. 현재 심한 염증 증상에는 보기 중 prednisolone B를 단기간 사용할 수 있다. 소화성궤양 병력으로 NSAID의 위험을 고려하되 steroid도 위해가 없는 것은 아니므로 최소 유효용량·최단기간으로 정한다. 무조건 고용량을 쓰거나 장기간 단독 유지하는 치료가 아니고 조기에 DMARD 기반 조절을 계획해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007556 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: steroid 금기라고 하면서 고용량 steroid를 권하는 자기모순 교정; 단기 최소용량 및 DMARD 필요성.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1016/j.ard.2026.01.023

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007556
