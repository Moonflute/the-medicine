---
type: qbank
schema_version: 1
id: medqa-us-train-003974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20ba04a1c15aba167e2cdc2878a73b7fa042795924ebae86ba2683d49fb3c376
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "강직인간증후군"
  - "종양딸림증후군"
  - "암피피신 항체"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_si6Dqsr3qt7zsnKHsp4jtmZgubWQ
  - MTAg7KKF7JaRL-u2gOyiheyWkSDspp3tm4TqtbAgKFBhcmFuZW9wbGFzdGljIFN5bmRyb21lKS5tZA
difficulty: standard
answer: A
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
---

# MedQA US 임상문제

## 문제

64세 남자가 다리의 뚜렷한 경직으로 보행이 어려워 내원했다. 몸통을 이완할 수 없고 통증성 근육 경련이 자주 발생한다. 복시, 연하곤란, 배뇨 또는 배변 문제는 없다. 병력에 4기 폐암이 있으며 항암화학요법을 4회 받았다. 신경학적 검사에서 전신 근긴장도가 증가되어 있고, 과도한 요추 전만을 동반한 경직성 보행이 관찰된다. 침 근전도검사에서 안정 시에도 지속되는 연속적인 운동단위 활동이 보인다. 이 환자의 증상과 가장 관련이 높은 종양딸림 항체는 무엇인가?

## 선택지

A. 암피피신
B. 항-Hu 항체
C. 항-Ri 항체
D. 전압개폐 칼슘통로 항체

## 해설

정답은 A, 암피피신(amphiphysin)에 대한 항체이다. 몸통과 사지의 강직, 반복되는 통증성 근육 경련, 요추 과전만 및 안정 시에도 지속되는 근전도 운동단위 활동은 강직인간증후군을 시사한다. 폐암이 동반된 종양딸림 형태에서는 항암피피신 항체가 중요한 연관 항체이다. 일반적인 자가면역 강직인간증후군에서는 항-GAD65 항체도 잘 알려져 있지만 이 선지에는 없으며, 문제는 종양딸림 항체를 묻는다. 전압개폐 칼슘통로 항체와 연관된 Lambert-Eaton 증후군의 주된 양상은 이러한 지속적 강직보다는 근위부 근력저하이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/stiff-person-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003974
