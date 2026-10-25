---
type: qbank
schema_version: 1
id: medqa-us-train-004695
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ad4e938640d9af16cc3abb3300bdb5ef05b3278c8bc905b3e2f467d37fc2eff8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "말초동맥질환"
  - "간헐적 파행"
  - "실로스타졸"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EdWxveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 6개월 동안 운동 시 다리 통증으로 내원했다. 걸으면 양쪽 종아리에 경련성 통증이 생긴다. 오른쪽 종아리가 왼쪽보다 심하고 걷기를 멈추면 사라진다. 증상이 진행되어 이전보다 더 빨리 통증이 발생한다. 제2형 당뇨병과 30갑년 흡연력이 있다. 발목상완지수는 0.80이다. 이 상태의 초기 치료로 사용할 수 있는 것은 무엇인가?

## 선택지

A. 혈관 내 재관류술
B. 둘록세틴
C. 헤파린
D. 실로스타졸

## 해설

ABI 감소와 보행 시 재현되는 통증은 증상성 PAD에 부합하며, 심부전이 없는 경우 cilostazol D가 보행증상 개선에 가능하다. 심부전 환자에게는 사용하지 않는다. 구조화 운동·금연·항혈소판제·고강도 statin 등 심혈관 위험 감소 치료를 대신하는 약은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 파행의 cilostazol D는 HF 금기를 포함한 증상개선 치료로 한정.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004695
