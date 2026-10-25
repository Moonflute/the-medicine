---
type: qbank
schema_version: 1
id: medqa-us-train-008447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af4c1eab138dcd69792a9d7dde1ef90c1818b03af05571c29f29757cef7c6eed
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "infertility"
  - "tubal factor infertility"
  - "hysterosalpingography"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 3년 동안 임신이 되지 않아 내원했다. 본인과 파트너는 성생활을 하고 있으며 피임은 하지 않는다. 6개월 전 이 문제에 대해 부분적인 평가를 받았다. 남편의 정액검사에서 정자 수는 정상이고 두 사람의 호르몬 검사도 정상이다. 월경은 28일 간격으로 규칙적이며 5~6일간 지속된다. 마지막 월경은 2주 전이었다. 4년 전 요로감염을 한 차례 앓아 경구 항생제로 치료받았다. 질 검사는 정상이다. 양손 진찰에서 자궁 크기는 정상이고 부속기 종괴는 만져지지 않는다. 직장검사도 정상이다. 다음 중 진단을 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 성교 후 검사
B. 자궁경검사
C. 자궁난관조영술
D. 염색체 핵형검사

## 해설

정액·호르몬 평가 후 난관 개통성과 자궁강 구조를 확인할 자궁난관조영술(C)이 적절하다. 남성 정관을 검사하는 방법은 아니다. 자궁경검사는 자궁강 병변 평가에 유용하지만 난관 개통성의 기본 검사로 HSG를 대신하지 않는다. 성교 후 검사는 일상적으로 권고하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HSG C 유지. 여성 난관 검사로 남성 정관도 검사한다는 오류와 자궁경검사 무용론 삭제.
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2021/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008447
