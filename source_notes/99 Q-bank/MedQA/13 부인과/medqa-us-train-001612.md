---
type: qbank
schema_version: 1
id: medqa-us-train-001612
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:279ae1b0367852d8ca1fc4308e2f6d42b1a27eb956b36295fba4a99f3204e881
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervicitis"
  - "Chlamydia trachomatis"
  - "Neisseria gonorrhoeae"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyXvCAoQ2VydmljaXRpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 19세 여성이 3일 동안 질 분비물로 내원했다. 노란색 점액농성이고 악취가 나며 성관계 후 질 출혈도 있다. 가려움이나 자극은 없다. 마지막 월경은 2주 전이고 남성 파트너 한 명과 성생활을 하며 콘돔 사용은 일관되지 않다. 신속 소변 hCG는 음성이다. 체온은 37.3°C (99.1°F), 맥박은 88회/분, 혈압은 108/62 mm Hg이다. 골반검사에서 쉽게 출혈하는 자궁경부가 보이고 질경검사는 정상이다. 습윤도말은 이상이 없다. 다음 중 가장 적절한 진단검사는 무엇인가?

## 선택지

A. 자궁경부 면봉 그람염색
B. 질확대경검사
C. 자궁경부 세포검사
D. 핵산증폭검사

## 해설

점액농성 분비물과 쉽게 출혈하는 자궁경부는 자궁경부염을 시사하며 임질·클라미디아 NAAT(D)를 시행한다. 질·자궁경부·소변 검체를 사용할 수 있다. 정상 습윤도말은 이 감염들을 배제하지 않으며 소견만으로 임질 확진은 불가하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자궁경부염을 임질만으로 단정하지 않고 임질·클라미디아 NAAT 설명.
- https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001612
