---
type: qbank
schema_version: 1
id: medqa-us-train-006644
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5893c5d74bf4343e6c8ae0f21859db7bf4b7d973f9fe7cf8708891519f3df6b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "베르니케 실어증"
  - "좌측 측두엽 뇌졸중"
  - "유창성 실어증"
  - "Wernicke aphasia"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
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

신경과 전공의가 병동에서 뇌졸중 환자를 진료하고 있다. 57세 남성으로 갑작스러운 오른쪽 마비 후 응급실에 내원했고, 아내가 증상을 발견하여 즉시 911에 전화해 4시간 이내 조직 플라스미노겐 활성제를 투여받았다. 어떻게 지내냐고 묻자 아파트가 메인 스트리트에 있다고 대답하며 질문에 적절히 답하지 않고 엉뚱한 말을 한다. ‘선풍기’라는 단어는 따라 말할 수 있다. 의식은 유지되고 근긴장도와 반사는 정상이다. 발바닥 가쪽을 두드리자 엄지발가락은 굴곡되고 다른 발가락은 아래로 벌어졌다. 다음 중 침범되었을 가능성이 가장 높은 부위는?

## 선택지

A. 미상핵
B. 쐐기이랑
C. 브로카 영역
D. 측두엽

## 해설

유창하지만 의미가 맞지 않는 발화와 이해력 저하는 우성반구의 후방 언어 연결망 손상을 시사하며, 보기 중 측두엽(D)이 가장 적합하다. 반복이 보존되면 고전적 Wernicke 실어증보다 초피질감각 실어증 양상을 고려한다. 다만 한 단어 반복만으로 세부 실어증 유형을 확정하지는 않는다. 정상 굴곡성 족저반사는 이러한 언어 병변의 위치를 결정하는 소견이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 유창성·이해저하·반복보존을 대조. 우측 Wernicke 영역 및 정상 족저반사로 국소화한 해설 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006644
