---
type: qbank
schema_version: 1
id: medqa-us-test-000578
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ef940e94e9bcc63d8d0027c73d349bab92f3a37b6db3f5335786e24496dd9596
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "우심부전"
  - "삼첨판 역류"
  - "폐고혈압"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

시골 출신 63세 남성이 다리 부종과 오른쪽 상복부 압통으로 병원에 왔다. 4년 전 심근경색 병력이 있으나 이를 뒷받침할 자료는 없다. 현재 유일한 약물은 아스피린이다. 4년 전 병원에서 ‘혈당이 높다’는 말을 들었지만 추적 관찰은 하지 않았다. 농부로 일하며 최근 며칠 동안 피로와 실신 때문에 일하기 어려워졌다. 24갑년 흡연력과 간헐적인 음주력이 있다. 혈압 150/90 mmHg, 심박수 83회/분, 호흡 16회/분, 체온 36.5℃(97.7℉)였다. 창백하고 말단 청색증이 있었으며 경정맥 팽창과 양측 하지 함요부종이 보였다. 폐에서 간헐적인 양측 천명음이 들렸고, 심장 청진에서 감소된 S1, S3 분마음, 왼쪽 제4늑간 흉골연에서 가장 큰 3/6등급 수축기 심잡음이 있었다. 복부는 복수 소견이었고 간 가장자리가 오른쪽 늑골연 아래 3 cm에서 만져졌으며 간경정맥 역류가 양성이었다. 심초음파에서 가장 가능성 높은 소견은?

## 선택지

A. 좌심실 박출률 41%
B. 삼첨판 역류 최고 속도 증가
C. 좌심실 벽 운동저하
D. 좌심실 이완 이상

## 해설

정답은 B이다. 경정맥 팽창, 간경정맥 역류, 간비대·복수·말초부종과 좌흉골연 수축기 잡음은 우심부전 및 삼첨판역류에 합당하다. B의 증가한 삼첨판역류 신호는 제시된 선택지 중 이 소견들과 가장 관련된다. TR jet 속도는 우심실-우심방 압력차와 관련되며 그 자체가 역류 중증도와 같은 말은 아니다. 폐고혈압이나 우심실 압력 과부하가 이차성 TR를 유발할 수 있으나 TR가 항상 폐고혈압을 일으킨다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 우심부전과 삼첨판역류의 연결은 유지하되 TR가 폐고혈압의 원인이라는 역방향 설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000578
