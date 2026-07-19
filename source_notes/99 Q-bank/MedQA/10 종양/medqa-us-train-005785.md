---
type: qbank
schema_version: 1
id: medqa-us-train-005785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eac8a414f8035916ecc183020a1227c55352c6a2e5d61fa6186d824d21f5fcc9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방암 골전이"
  - "척추 전이"
  - "척추 MRI"
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

46세 여성이 일주일 동안 점점 심해지는 심한 요통으로 내원했다. 통증은 지속적이고 강도는 10점 만점에 9점이다. 6개월 전 우측 유방의 호르몬 수용체 음성 소엽암으로 유방부분절제술을 받았고 여러 차례 방사선치료를 받았다. 활력징후는 정상이다. 우측 유방의 수술 절개는 잘 아물었고 제12흉추를 누르면 심한 압통이 있다. 하지직거상검사는 음성이고 나머지 검사는 정상이다. 혈청 포도당은 76 mg/dL, 크레아티닌 1 mg/dL, 총 빌리루빈 0.8 mg/dL, 알칼리성 인산분해효소 234 U/L, AST 16 U/L, ALT 12 U/L, GGT 40 U/L(정상 5~50)이다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 양전자방출단층촬영
B. 척추 X선
C. 척추 MRI
D. 골주사검사

## 해설


요통과 T12 압통, 알칼리성 인산분해효소 상승은 골전이를 시사한다. 골전이 여부와 신경압박 위험을 평가하려면 연부조직과 골수 병변을 가장 잘 보는 영상인 척추 MRI가 필요하다. 따라서 다음 단계는 척추 MRI이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005785
