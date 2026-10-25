---
type: qbank
schema_version: 1
id: medqa-us-train-005095
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f6e4dfa8f4527f9175f170dd164a13ffb7469a14cfc9e39170d048e73fc1990
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "마미증후군"
  - "척추 전이"
  - "신경인성 방광"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rp4jrr7jspp3tm4TqtbAgKENhdWRhIEVxdWluYSBTeW5kcm9tZSkubWQ
difficulty: complex
answer: A
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

65세 여자가 3주 동안 날카로운 허리 통증이 오른쪽 다리 뒤쪽으로 방사되고 밤에 심해져 내원했다. 엉덩이와 허벅지 안쪽 감각이 감소하고 최근 며칠간 소변을 보기 어렵다. 3년 전 유방암으로 수술과 방사선치료를 받았다. 왼쪽 하지 근력은 4/5, 오른쪽은 2/5이며, 무릎과 발목 반사는 1+이며 안정 시 항문괄약근 긴장도는 정상이나 조일 때 감소되어 있다. 가장 가능성 높은 진단은?

## 선택지

A. 마미증후군
B. 중심척수증후군
C. 브라운-세카르 증후군
D. 전척수증후군

## 해설

방사성 요통, 엉덩이·회음부/허벅지 안쪽의 안장감각 이상, 배뇨장애와 비대칭 하지 위약·반사 저하는 마미증후군(A)을 시사한다. 마미는 척수 끝 아래의 요천수 신경근 다발로, 전방 척수 자체의 병변과 같은 말이 아니다. 유방암 병력과 야간통은 전이성 압박 가능성을 높이지만 종양 위치나 원인을 확진한 것은 아니다. 휴식 시 항문긴장도가 정상이더라도 수의 수축 감소와 다른 경고소견을 무시할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 마미증후군을 전방 척수증후군·복측 감각저하와 혼동한 해설을 교정하고 생략된 반대쪽 근력저하와 야간통을 복원했다. A와 암 전이 가능성은 유지하되 전이를 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005095
