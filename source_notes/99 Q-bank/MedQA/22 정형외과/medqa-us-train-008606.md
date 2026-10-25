---
type: qbank
schema_version: 1
id: medqa-us-train-008606
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:578f59eaf3dd076ec3c0cfa262fa52b2444a787e7f16e091032d576a129eae4c
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "femoral nerve injury"
  - "hip arthroplasty complication"
  - "femoral neuropathy"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-unkOy0iOyLoOqyvSDshpDsg4EubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 고관절 통증으로 왼쪽 고관절 치환술을 받은 지 3시간 후, 62세 남성이 왼쪽 앞안쪽 허벅지와 아래다리에 따끔거리는 느낌을 호소했다. 이전에는 이런 증상이 없었다. 고지혈증과 관상동맥질환이 있다. 최근 걸을 때 오른쪽 둔부와 허벅지 통증이 있었다. 활력징후는 정상이다. 왼쪽 앞안쪽 허벅지와 안쪽 아래다리의 핀prick 및 가벼운 촉각 감각이 감소되어 있다. 신경학적 검사에서 왼쪽 다리의 고관절 굴곡은 3/5, 무릎 폄은 2/5이고 왼쪽 슬개건 반사는 감소되어 있다. 그 외 신경학적 검사는 정상이다. 양측 발등동맥, 오금동맥, 대퇴동맥 맥박은 2+이며 수술 절개 부위에 홍반이나 분비물은 없다. 다음 중 이 환자 증상의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 대퇴신경 손상
B. 수술 부위 감염
C. 비복신경 손상
D. 대퇴동맥 폐색

## 해설

고관절 수술 후 고관절 굴곡 및 무릎 신전 약화, 슬개건반사 저하와 앞안쪽 허벅지·안쪽 종아리 감각저하는 대퇴신경 손상(A)에 합당하다. 안쪽 종아리 감각은 대퇴신경의 두렁신경 분지가 담당한다. 대퇴신경은 무릎 굴곡이 아니라 대퇴사두근을 통한 신전에 관여한다. 비복신경은 주로 종아리 뒤가쪽·발 가쪽의 피부감각신경이며 종아리 근육의 운동신경이 아니다. 정상 말초맥박은 대퇴동맥 폐색보다 신경 손상을 지지한다. 수술 접근법에 따라 위험 신경은 달라진다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대퇴신경을 무릎 굴곡 신경으로 설명하고 비복신경을 운동신경처럼 설명한 해설을 교정했다. 고관절 수술에서 가장 위험한 신경이라는 일반화도 제거했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008606
