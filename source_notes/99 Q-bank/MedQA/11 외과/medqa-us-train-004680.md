---
type: qbank
schema_version: 1
id: medqa-us-train-004680
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd3b25405ae26f0b03d17031a0bbbba07a6e69cf317d5dbec0caa94d2db52d0a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "간 열상"
  - "복부 둔상"
  - "모리슨 주머니 혈액"
  - "splenic injury"
related_disease_slugs:
  - MTEg7Jm46rO8L-u5hOyepSDshpDsg4EgKFNwbGVuaWMgSW5qdXJ5KS5tZA
question_type: association
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvTGFuc29wcmF6b2xlLm1k
---

# MedQA US 임상문제

## 문제

66세 남성이 자동차 사고 후 응급실에 왔다. 교차로를 지나던 중 조수석 쪽을 충돌당한 차의 안전벨트를 한 조수석 승객이었다. 의식은 명료하지만 복통을 호소한다. 고지혈증, 위식도 역류질환, 만성 신장질환과 4년 전 간격 충수절제술을 받은 천공성 충수염 병력이 있다. 집에서 로수바스타틴과 란소프라졸을 복용한다. 체온은 99.2°F (37.3°C), 혈압은 120/87 mmHg, 맥박은 분당 96회, 호흡수는 분당 20회이다. 양쪽 폐의 호흡음은 정상이다. 왼쪽 9번째 갈비뼈와 심와부를 누르면 압통이 있다. 사지 네 개를 모두 움직인다. FAST검사에서 모리슨 주머니에 액체가 보인다. 이 환자에게 다음 중 어떤 추가 소견이나 증상이 나타날 가능성이 가장 높은가?

## 선택지

A. 등으로 방사되는 통증
B. 육안적 혈뇨
C. 어깨 통증
D. 심음 감소

## 해설


왼쪽 하부 늑골 부위 외상과 복강내 자유액은 비장 손상·복강내 출혈을 의심하게 한다. 혈액이 횡격막 복막면을 자극하면 횡격신경(C3–5)을 통해 어깨, 특히 왼쪽으로 연관통(Kehr 징후, C)이 생길 수 있다. 이를 위해 횡격막이 파열되거나 혈액이 흉강으로 이동해야 하는 것은 아니다. Morrison 주머니의 자유액만으로 간이나 비장 중 어느 장기가 손상됐는지 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004680 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비장 손상에 의한 횡격막 자극·연관통을 횡격막 파열과 흉강내 혈액 이동으로 잘못 설명한 기전을 교체했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004680
