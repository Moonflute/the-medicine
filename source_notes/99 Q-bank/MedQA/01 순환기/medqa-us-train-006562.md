---
type: qbank
schema_version: 1
id: medqa-us-train-006562
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6d7573b18bd0a8323093bad44bfc98498620276075ab570d53f43ebc306569a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심인성 쇼크"
  - "급성 심부전"
  - "비침습적 양압환기"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9idXRhbWluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 호흡곤란으로 응급실에 내원했다. 이틀 전 손주의 생일파티를 주최한 뒤 전신 권태감, 발열 및 마른기침이 생겼다. 누워 있을 때와 서 있을 때 어느 쪽이 더 숨찬지는 모르지만 텔레비전을 볼 때도 호흡곤란이 있다고 한다. 아스피린, 메토프롤롤, 푸로세미드, 리시노프릴 및 스피로놀락톤을 처방대로 복용하는 울혈성 심부전과 고혈압 병력이 있다. 혈압은 90/50 mmHg, 맥박은 분당 120회, 호흡수는 분당 30회이다. 요골맥박은 거의 만져지지 않고 손목과 발목은 차갑고 축축하다. 심첨부에서 작은 전수축기 잡음과 함께 제3·4심음이 들리고, 양쪽 폐의 중간 높이까지 호흡음이 감소되어 있으며 경정맥 팽창은 귓바퀴 높이까지 보이고 허벅지 중간까지 3+ 함요부종이 있다. 심전도에서 수요성 허혈에 해당하는 ST 하강이 보인다. 침상 심초음파에서 전반적 무운동과 박출률 20%(이전 40%)가 확인된다. 이동식 흉부 방사선에서 양측 폐부종이 보인다. 메토프롤롤은 중단하고 도부타민과 푸로세미드 주입을 시작했으며 BiPAP을 20/5cm H2O로 시작했다. 15분 후 소변량이 거의 없고 혈압이 75/40 mmHg, 맥박이 분당 130회로 보고되었다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 가정 복용 메토프롤롤 재개
B. 푸로세미드 속도 감소
C. 도부타민 속도 감소
D. 흡기 양압 감소

## 해설

양압은 흉강내압을 높여 정맥환류를 줄일 수 있다. BiPAP시작후 심한 저혈압이 악화되어 선택지 D처럼 과도한 흡기압/평균기도압을 낮추는 것을 즉시 검토한다. 이는 정맥환류를 더 줄이는 처치가 아니다. 다만 양압은 LV후부하/폐부종에도 영향을 주므로 산소화·환기·혈압을 감시하며 기도전략, 약물 및 혈압지지를 함께 재평가한다. 설정조정만으로 쇼크치료가 끝나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 양압 감소가 정맥환류를 감소시킨다는 반대 기전을 교정하고 심인성쇼크의 다중 재평가 명시.
- https://academic.oup.com/eurheartj/article/42/36/3599/6358045

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006562
