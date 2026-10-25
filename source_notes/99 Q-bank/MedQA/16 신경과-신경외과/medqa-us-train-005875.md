---
type: qbank
schema_version: 1
id: medqa-us-train-005875
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:364783bdc60f814e07657068428bc18f95795235a570e61e6c5f034491b9c95e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "좌측 후대뇌동맥 경색"
  - "실독증과 필기 가능"
  - "동측 반맹"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9QQ0Eg6rK97IOJIChQQ0EgaW5mYXJjdGlvbikubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 2시간 동안 지속된 두통, 시야 흐림 및 우측 다리 저림으로 응급실에 왔다. 고혈압과 제2형 당뇨병이 있으며 에날라프릴과 메트포르민을 복용한다. 사람에 대해서만 지남력이 있고 체온은 37.3°C(99.1°F), 맥박은 분당 99회, 혈압은 158/94 mmHg이다. 동공은 양측 크기가 같고 빛에 반응하며 사지 근력은 정상이고 심부건반사는 양측 2+이다. 우측 하지의 미세촉각과 위치감각이 감소되어 있다. 대면 시야검사에서 좌안의 비측 시야와 우안의 이측 시야가 황반을 보존한 채 소실되어 있다. 제시한 문장을 읽을 수 없지만 받아쓰면 쓸 수 있다. 단기기억 장애도 있다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 우측 후대뇌동맥 경색
B. 우측 전대뇌동맥 경색
C. 단순포진 뇌염
D. 좌측 후대뇌동맥 경색

## 해설

좌안 비측·우안 이측 시야 소실은 우측 동명반맹이며 황반 보존은 좌측 후두엽 병변을 지지한다. 읽지 못하지만 받아쓰기는 가능한 실서증 없는 실독증은 우성 좌측 후두엽 및 뇌량 팽대부 연결 손상으로 생길 수 있다. 기억장애·우측 감각장애도 관련 후대뇌동맥 영역 침범과 함께 설명할 수 있어 좌측 후대뇌동맥(PCA) 경색(D)이 가장 합당하다. PCA는 후교통동맥(PCOM)과 다른 혈관이며 언어 이해 자체가 반드시 손상된다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCA를 PCOM으로 잘못 부르고 alexia without agraphia를 언어 이해 장애로 뭉뚱그린 해설을 우측 동명반맹·좌측 PCA의 국소화로 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005875
