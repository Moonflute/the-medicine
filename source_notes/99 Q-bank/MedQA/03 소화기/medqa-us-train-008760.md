---
type: qbank
schema_version: 1
id: medqa-us-train-008760
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8646f36216cdc3b985a37e63ede505c97f803152c94f0a38340b2964c90848f1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Gilbert syndrome"
  - "unconjugated hyperbilirubinemia"
  - "UGT1A1"
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

16세 여아가 2주간 과테말라로 학급여행을 다녀온 뒤 2일 전부터 눈이 노랗게 변하고 전신 피로가 있어 내원했다. 여행 중 3일 동안 물설사, 오심, 식욕부진이 있었으나 치료 없이 호전되었다. 말라리아 예방을 위해 프리마퀸도 복용했다. 3주 전 요로감염으로 니트로푸란토인 치료를 받았다. 예방접종은 최신이다. 체온 37.1°C(98.8°F), 맥박 82회/분, 혈압 110/74mmHg이다. 공막 황달이 있고 림프절병증은 없다. 혈색소 12.1g/dL, 백혈구 6,400/mm³, 혈소판 234,000/mm³, 망상적혈구 1.1%, PT 12초(INR 1)이다. 총 빌리루빈 2.8mg/dL, 직접 빌리루빈 0.2mg/dL, ALP 43U/L, AST 16U/L, ALT 17U/L, γ-GT 38U/L이며 항-HAV IgG와 항-HBs는 양성이다. 말초혈액 도말은 정상이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 길버트 증후군
B. 로터 증후군
C. 두빈-존슨 증후군
D. B형간염 감염

## 해설


비결합성 빌리루빈이 경미하게 상승하고 간 효소는 정상이며, 간염 바이러스 항체는 음성인 경우 선천성 비결합성 고빌리루빈혈증인 길버트 증후군이 의심된다. 이는 UGT1A1 효소 활성이 감소해 발생한다. 따라서 길버트 증후군이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008760
