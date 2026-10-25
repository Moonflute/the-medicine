---
type: qbank
schema_version: 1
id: medqa-us-train-005238
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:109a42d9ed1db134e95cdb2bdadde3cce98a9e356bf4b545199f30962a8a7953
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "경피증 신장위기"
  - "전신경화증"
  - "ACE 억제제 치료"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
---

# MedQA US 임상문제

## 문제

51세 여자가 12시간 동안 소변을 보지 못하고 심한 두통, 메스꺼움과 구토로 응급실에 왔다. 추위에 노출되면 손가락이 파랗다가 창백하고 붉게 변하며 통증과 무감각이 있고, 얼굴 피부가 반짝이고 두꺼워져 있다. 혈압 210/120 mmHg, 혈소판 90,000/mm³, 합토글로빈 감소, 크레아티닌 2.3 mg/dL, BUN 83.5 mg/dL이다. 말초혈액도말에서 미세혈관병성 용혈 소견이 보인다. 가장 적절한 치료는?

## 선택지

A. 니트로프루시드
B. 라베탈롤
C. 투석
D. 라미프릴

## 해설


피부경화·Raynaud 양상에 새 중증 고혈압·AKI·혈소판감소/미세혈관 용혈이 동반되어 경피증 신위기(SRC)를 의심한다. ACE 억제제를 신속히 시작하고 혈압·전해질·신기능을 감시하며 조절하므로 선택지 D ramipril이 적절하다. 목표는 과도한 신관류 저하 없이 상황에 맞게 혈압을 조절하는 것이지 무조건 급격한 정상화가 아니다. 필요시 다른 혈압약·신대체요법을 병행하지만 ACE 억제제를 단순 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005238 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경피증 신위기를 신경성으로 오역하고 혈압을 무조건 급격히 낮추라고 한 표현을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/rheumatology/article/63/11/2948/7750185

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005238
