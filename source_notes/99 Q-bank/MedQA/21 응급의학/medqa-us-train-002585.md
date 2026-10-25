---
type: qbank
schema_version: 1
id: medqa-us-train-002585
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dec950d091714ddba1e78518a2df074125c8f9697c39e3b8d13edaedcd2c5799
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "circumferential full-thickness burn"
  - "eschar"
  - "vascular compromise"
  - "pulse monitoring"
  - "Burn"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 모닥불에 넘어져 입은 화상으로 응급실에 왔다. 왼쪽 다리와 몸통은 심한 통증이 있지만 오른팔은 통증이 거의 없다. 왼쪽 복부와 허벅지에는 물집 없는 압통성 홍반이 있고 오른쪽 팔꿈치 바로 위를 둘러싼 부위에는 건조하고 압통이 없는 흰색 가죽 같은 피부와 조직괴사가 있다. 정맥 수액을 시작했다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 연속 동맥혈가스 분석
B. 연부조직 초음파
C. 정맥 암피실린 치료
D. 말초 맥박과 모세혈관 충만 모니터링

## 해설

통증이 적고 건조한 흰 가죽 같은 환상성 전층 화상은 비탄성 가피를 형성한다. 이후 부종이 증가하면 가피가 조임띠처럼 작용하여 원위 관류를 떨어뜨릴 수 있으므로 말초맥박·모세혈관충만·감각·운동 등을 반복 평가하는 D가 적절하다. 이는 한 시간 만에 성숙한 흉터가 생겼다는 뜻이 아니다. 관류 장애가 나타나면 즉시 전문 평가와 가피절개 등을 시행해야 하며, 단순 관찰로 끝내지 않는다. 예방적 전신 암피실린을 일률 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 화상 한 시간 만에 흉터가 형성되었다는 오류를 비탄성 전층 가피와 진행성 부종으로 교정했다. 신경혈관 감시 D를 유지한다.
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002585
