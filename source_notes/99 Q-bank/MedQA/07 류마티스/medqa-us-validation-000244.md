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

56세 남성이 20대부터 지속된 허리 문제로 가정의학과를 방문했다. 최근 6개월 동안 목이 매우 뻣뻣해져 고개를 뒤로 젖힐 수 없고, 심한 후만증과 운동 범위 제한이 있다. 매일 8시간 이상 자려고 하지만 거의 개운하지 않다고 한다. 능동·수동 운동에서 통증은 없고 경추가 중등도로 뻣뻣하며 신전, 굴곡, 회전이 제한되어 있다. 손목 관절의 경미한 부종도 보인다. 요추 X선 촬영을 위해 의뢰되었으며, 경제적 어려움으로 수년간 진료를 받지 못했다. 이 질환 초기 증상 개선을 위한 일차 치료는 무엇이었을까?

## 선택지

A. 인플릭시맙
B. 인도메타신
C. 메토트렉세이트
D. 설파살라진

## 해설


젊은 나이에 시작한 만성 축성 증상과 후만·척추 운동제한은 ankylosing spondylitis를 시사한다. 초기 증상 조절은 운동과 NSAID이며 indomethacin B는 NSAID의 하나이다. NSAID 실패 뒤 사용하는 별개 TNF 억제제가 아니고, TNF억제제인 infliximab은 다른 약이다. Methotrexate·sulfasalazine은 순수 축성 증상의 표준 초기 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000244 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: indomethacin을2차약/TNF억제제라고 한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000244
