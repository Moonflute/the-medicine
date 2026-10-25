---
type: qbank
schema_version: 1
id: medqa-us-train-006339
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcec4659a8807f496a5a8c89ba954963b456d928930f2207ed28cd770ffb05fa
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "성장호르몬 과다"
  - "뇌하수체 선종"
  - "거인증"
  - "Pituitary adenoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDsg5jsooUgKFBpdHVpdGFyeSBBZGVub21hKS5tZA
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvTGV0cm96b2xlLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 여아가 키가 큰 것을 평가받기 위해 아버지와 함께 내원했다. 모든 친구보다 키가 커서 걱정한다. 출생 체중과 키는 정상 범위였다. 아버지의 키는 174cm(5ft 7in), 어머니의 키는 162cm(5ft 3in)이다. 키는 98백분위수, 체질량지수는 90백분위수이다. 아직 월경을 시작하지 않았다. 어머니는 그레이브스병이 있다. 활력징후는 정상이다. 진찰에서 키가 크고 손발이 넓으며 전두부 돌출과 아래턱 돌출이 보인다. 손가락 둘레 측정은 정상이다. 그 외 진찰은 이상이 없다. 혈청검사에서 공복 혈당은 144mg/dL이다. 왼손과 손목 X선에서 골연령은 15세이다. 다음 중 어떤 처치가 이 환자의 상태를 예방했을 가능성이 가장 높은가?

## 선택지

A. 경접형동 뇌하수체선종 절제술
B. 레트로졸 치료
C. 메티마졸 치료
D. 열량 제한

## 해설


키가 크고 골연령이 정상이며 혈당 상승이 있는 경우 성장호르몬 과다 분비를 일으키는 뇌하수체 선종이 의심된다. 선종 절제는 과다 성장과 대사 합병증을 예방한다. 따라서 가장 예방 효과가 큰 조치는 경접형동 뇌하수체선종 절제술이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 성장판 폐쇄 전 GH과다 의심의 과성장은 원인 뇌하수체종양 절제 A로 예방/조절 가능. 실제 수술 전 생화학·MRI 확인은 별도.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006339
