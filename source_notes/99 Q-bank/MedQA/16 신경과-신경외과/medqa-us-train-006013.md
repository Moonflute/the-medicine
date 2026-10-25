---
type: qbank
schema_version: 1
id: medqa-us-train-006013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:80ecf6cb1d97a7d90b2e7b0404ef88443346fad99e3a90232135b3d2bdc0fbd1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "군발두통"
  - "자율신경 증상"
  - "호너 증후군"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 남성이 3일 동안 반복되는 심한 두통으로 응급실에 왔다. 오늘 두 번째 발작이며 보통 첫 발작은 아침에 발생한다. 통증은 심하고 우측 이마와 우측 눈에 국한된다. 지난여름에도 비슷한 증상이 있었다. 대형 헤지펀드 회사의 분석가로 대부분 컴퓨터 앞에서 일하며 기한이 지난 서류 때문에 스트레스를 많이 받았다. 만성 어깨 통증이 있어 인도메타신을 6시간마다 복용했지만 효과가 없었다. 15년 동안 하루 한 갑씩 흡연했고 안절부절못해 보인다. 우측 눈꺼풀처짐, 눈물 및 콧물이 있고 우측 동공은 2mm, 좌측은 4mm이다. 우측 극상근에 국소 압통이 있으며 그 외 검사는 정상이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 편두통
B. 군발두통
C. 거대세포동맥염
D. 약물과용두통

## 해설

주기적인 야간 발작, 심한 일측 안와·전두부 통증, 같은 쪽 눈물·콧물·축동·안검하수와 안절부절못함은 군발두통(B)에 합당하다. Indomethacin에 반응하지 않는 점도 발작성 편측두통과 구별에 도움이 된다. 편두통도 흔히 일측성이며 구역·빛공포를 동반할 수 있다. 거대세포동맥염은 대개 50세 이후에 발생하고, 발열이나 시력저하가 항상 있어야 하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 B 유지. 편두통은 양측성이고 구역이 없다는 감별 오류 및 GCA 필수증상 단정 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006013
