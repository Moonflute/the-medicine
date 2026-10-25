---
type: qbank
schema_version: 1
id: medqa-us-train-004092
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:894260af82beef192e6793431d249f5cb624515a27caa013b1d3f52ece34f468
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐암 선별검사"
  - "저선량 흉부 CT"
  - "과거 흡연력"
related_disease_slugs: []
question_type: 임상증례 객관식
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남자가 정기검진을 위해 가정의를 방문했다. 건강하고 지난해 방문 이후 새로운 증상은 없다. 지난해 대장내시경에서 용종이 없었고, 저선량 흉부 CT에서도 종괴가 없었으며 공복 혈당은 93 mg/dL이었다. 비교적 활동량이 적고 BMI는 24kg/m²이다. 30세부터 하루 4~5잔의 술을 마셨고 18세부터 하루 한 갑을 피웠으며 메스암페타민도 사용한 적이 있지만, 7년 전부터 금주자 모임에 참여해 회복 중이고 그 이후 이 물질들을 사용하지 않았다. 현재 권장되는 검사는 무엇인가?

## 선택지

A. 복부 초음파
B. 흉부 저선량 CT
C. 대장내시경
D. 흉부 방사선 촬영

## 해설

18세부터 50세까지 하루1갑을 피웠으므로 약32갑년이며 금연7년의57세 환자는 연1회 LDCT B 선별 대상이다. USPSTF 기준은50–80세·20갑년 이상·현재흡연 또는 금연15년 이내이며, 치료가능 상태·선호를 함께 검토한다. 지난해 음성이어도 해당 조건의 연간 검사를 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 흡연18세 시작을30세로 번역한 오류 복원·32갑년 계산과 USPSTF현행기준 업데이트.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004092
