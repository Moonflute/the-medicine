---
type: qbank
schema_version: 1
id: medqa-us-train-009460
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5189d879db8a556afc00672e33c390d78114aa9991736caddf3b7a05f5525c3d
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "multiple sclerosis"
  - "다발성경화증"
  - "oligoclonal bands"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 3일 동안 다리의 근력저하와 감각저하가 점점 심해져 응급실에 왔다. 그날 아침 뜨거운 샤워 후 근력저하가 더 심해졌다. 1년 전 왼쪽 눈의 부분적 시력 소실이 3주 내 호전된 병력이 있다. 남성 3명과 성관계를 하고 콘돔은 일관되게 사용하지 않는다. 하지에 경직과 근력저하가 있고 심부건반사는 양측 4+이며 양측 족저반사는 신전반응이다. 복부반사는 소실되었지만 하지의 진동·위치감각은 정상이고 일자보행이 손상되어 있다. 뇌와 척추 MRI는 확정적이지 않다. 추가 평가에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 신속 혈장 리아진 양성
B. 신경전도 속도 저하
C. 내인자 항체 상승
D. 뇌척수액의 올리고클론 띠

## 해설

이전 시신경염을 시사하는 시력저하와 새로운 척수성 상위운동신경원 증상, 열로 악화되는 양상은 MS를 의심하게 한다. CSF에 국한된 oligoclonal band(D)는 진단을 지지할 수 있다. 그러나 감염성·다른 염증성 질환에서도 나타날 수 있어 MS에만 특이하거나 단독 확진검사는 아니다. 영상이 확정적이지 않으면 다른 원인과 진단 기준 충족 여부를 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. OCB를 MS에 가장 특이적인 검사로 단정한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009460
