---
type: qbank
schema_version: 1
id: medqa-us-validation-001093
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:01fae1da1f5fdcd9655c67a540cc86bca43aa38e639a4d0e6b708d7cb1988302
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심부전"
  - "알도스테론 길항제"
  - "스피로놀락톤"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: prognosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

뉴욕심장협회 II급 심부전이 있는 59세 남성이 정기 추적 진료를 받으러 왔다. 현재 캅토프릴, 비소프롤롤과 푸로세미드를 복용 중이며 스피로놀락톤을 추가하려 한다. 심부전 환자에서 알도스테론 길항제에 관한 올바른 설명은?

## 선택지

A. 알도스테론 길항제는 신기능에 따른 용량 조절이 필요 없다
B. 모든 단계의 심부전 환자에게 알도스테론 길항제가 적응된다
C. 알도스테론 길항제는 심부전 환자의 이환율과 사망률을 감소시킨다
D. 알도스테론 길항제는 시각장애를 일으킬 수 있다

## 해설

스피로놀락톤 등 MRA는 적절한 수축기 기능저하 심부전 환자에서 이환율과 사망률을 낮추므로 C가 옳다. 모든 단계나 모든 EF의 심부전에 같은 적응증이 있는 것은 아니다. 실제 사용 전에는 EF, eGFR와 칼륨을 확인하고 투여 후에도 고칼륨혈증과 신기능을 감시해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MRA의 생존효과 C를 HFrEF와 신기능·칼륨 기준에 연결하여 모든 심부전으로 일반화하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001093
