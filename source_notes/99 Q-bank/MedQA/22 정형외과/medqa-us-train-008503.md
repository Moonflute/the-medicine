---
type: qbank
schema_version: 1
id: medqa-us-train-008503
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22e861ab18c3df55663cbd2a5a754b3624d444a2c811d3b973ceb3e7681d0892
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "septic arthritis"
  - "knee effusion"
  - "arthrocentesis"
question_type: investigation
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 어제 스케이트보드를 타다 넘어진 뒤 무릎 통증으로 소아 응급실에 내원했다. 이후 무릎이 붓고 통증이 심하다고 한다. 부모는 통증 때문에 걷기 힘들어한다고 말한다. 계절성 알레르기와 천식 병력이 있고 현재 로라타딘, 알부테롤, 플루티카손을 복용한다. 체온 99.5°F(37.5°C), 혈압 95/48mmHg, 맥박 110회/분, 호흡수 17회/분, 실내 공기 산소포화도 98%이다. 진찰에서 들것에 누워 아파하는 어린 남아가 보인다. 심폐검사는 정상이다. 왼쪽 무릎은 홍반이 있고 만지면 따뜻하며 압통이 있다. 수동으로 움직이면 통증이 유발된다. 걷기를 거부해 보행은 평가할 수 없다. 다음 중 가장 적절한 초기 처치는 무엇인가?

## 선택지

A. 항생제
B. 관절천자
C. CT 촬영
D. 지지요법과 추가 신체검사

## 해설

원정답은 B, 관절천자이다. 급성 무릎 발적·열감·부종, 수동 운동 시 심한 통증 및 체중부하 거부는 외상력만으로 설명하고 넘기지 말고 세균성 관절염을 평가해야 하는 소견이다. 임상적으로 안정적이라면 관절액을 채취하여 백혈구 수·분획, 그람염색 및 배양을 시행하고 치료를 결정한다. 그러나 전신상태가 나쁘거나 감염이 급속히 진행하거나 패혈증이 의심되면, 가능한 혈액배양 후 즉시 경험적 항생제를 시작하며 관절천자 때문에 투여를 지연하지 않는다. 실제 평가에는 골절·혈관절증 등 외상성 원인도 포함한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 관절염 의심에서 관절천자 B 유지. 패혈증/급속진행 환자에게 항생제를 천자까지 지연해선 안 된다는 최신 PIDS/IDSA 예외 보완.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008503
