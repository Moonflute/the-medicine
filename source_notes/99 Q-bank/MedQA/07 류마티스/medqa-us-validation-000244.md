---
type: qbank
schema_version: 1
id: medqa-us-validation-000244
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a358469dcd0380b79c79d8008c0e5eefa0cf5178a3c32e029e4f6be5ab6d0676
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "강직성 척추염"
  - "염증성 척추관절염"
  - "인도메타신"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
question_type: management
difficulty: standard
answer: B
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

30세 남성이 축성 척추관절염으로 새로 진단됐다. 아침 허리 강직과 통증이 있고 말초 관절염은 없다. 신장·위장관·심혈관 금기는 없다. 운동치료와 함께 우선 사용할 약은?

## 선택지

A. 인플릭시맙부터 시작
B. 비스테로이드성 소염진통제
C. 메토트렉세이트 단독
D. 설파살라진 단독

## 해설


국내 지침은 운동과 함께 NSAID를 축성 통증·강직의 첫 약물로 권고한다. 순수 축성 증상에 메토트렉세이트나 설파살라진을 일차로 쓰지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000244 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: indomethacin을2차약/TNF억제제라고 한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000244
- https://www.kjim.org/journal/view.php?number=171179
