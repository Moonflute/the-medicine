---
type: qbank
schema_version: 1
id: medqa-us-train-006829
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35a7e9e730583454ce45e468d1e285ae1bb2b2068cd3e770f8630e1a3e75432d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "임신 중 폐색전증"
  - "심부정맥혈전증"
  - "대퇴정맥 비압박"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: investigation
difficulty: complex
answer: D
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

임신 32주인 38세 여성(Gravida 2, Para 1)이 하루 동안 지속된 호흡곤란과 깊게 숨쉴 때 악화되는 왼쪽 흉통으로 내원했다. 일주일 전 칠레 여행에서 독감 유사 증상이 3일간 있었으나 치료 없이 호전되었다. 첫 임신과 분만은 합병증이 없고 특별한 병력도 없다. 체온은 37.2°C(99°F), 맥박은 분당 118회, 호흡수는 분당 28회로 약간 힘들며 혈압은 110/76 mm Hg이다. 실내 공기 산소포화도는 91%이다. 경정맥 팽창과 양쪽 무릎 아래 함요부종(왼쪽이 더 심함), 왼쪽 폐기저부 호흡음 감소가 있다. 자궁 크기는 임신 32주와 일치한다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 혈청에서 피브리노겐 감소
B. 심전도에서 PR분절 하강
C. 심장 PET에서 심근 관류 감소
D. 초음파에서 압박되지 않는 대퇴정맥

## 해설

임신·여행·좌측우세종창과저산소/흉막통은 DVT/PE를 의심하게 한다. D의 압박되지않는 대퇴정맥은 탐촉자로 압박해도 혈전이 있는 내강이 찌그러지지않는다는 뜻이다. 단순정맥압상승이나 평소외부에서 눌리지않는다는 의미가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DVT의 압박불가 D를 단순정맥압상승/외부압박부재와 혼동한 기전 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006829
