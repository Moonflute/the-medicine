---
type: qbank
schema_version: 1
id: medqa-us-train-000025
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a04d3f0a927b72f69abcf769fc990a3cb6d84365382503132c5eabe81cf68486
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Porphyria cutanea tarda"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 3주 전부터 손, 팔뚝, 얼굴에 발생한 광과민성 수포성 발진으로 응급실에 내원했다. 병변은 가렵지 않다. 환자는 최근 소변 색이 짙은 갈색으로 변한 것을 알아차렸다. 20년 전 망막의 코츠병(Coats disease)으로 망막 경화 요법을 성공적으로 받았다. 현재 폐경기 증상으로 호르몬 대체 요법을 받고 있다. 이모와 자매가 비슷한 피부 병변의 병력이 있다. 진찰 결과 팔뚝, 양손 등, 이마에 다수의 액체로 찬 수포와 진물이 나는 미란이 관찰된다. 수포 주변으로 과색소 침착된 흉터와 탈모 반점이 있다. 혈청 페리틴 농도는 정상이다. 이 환자의 관해를 유도하기 위한 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. 간 이식 시행
B. 경구 탈리도마이드(thalidomide) 요법 시작
C. 사혈 요법(phlebotomy) 시작
D. 경구 하이드록시클로로퀸(hydroxychloroquine) 요법 시작

## 해설

광과민성 수포·미란/흉터·갈색소변과 가족력은 만발피부포르피린증(PCT)을 시사한다. 사혈(C)은 체내 철을 줄여 관해를 유도하는 표준적 방법이며 혈색소와 ferritin을 감시해 과도한 철결핍을 피한다. 저용량 hydroxychloroquine도 효과적인 대안이므로 다른 치료는 모두 효과없다고 해서는 안 된다. 이 환자는 기존 망막질환 병력이 있어 항말라리아제의 안과적 위험평가가 특히 중요하고 사혈을 선택하는 원문 의도를 지지한다. 정상 ferritin이 모든 PCT에서 치료불필요를 뜻하지는 않지만 치료는 전문적으로 개별화한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCT에서 hydroxychloroquine은 효과없다는 해설 오류 수정. 정상ferritin에도 개별 사혈가능, 기존 망막질환을 약제선택 고려로 설명. 원정답 C 유지.
- 공식/학회 근거: https://ashpublications.org/hematology/article/2024/1/450/526222/Porphyria-cutanea-tarda-a-unique-iron-related

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000025
