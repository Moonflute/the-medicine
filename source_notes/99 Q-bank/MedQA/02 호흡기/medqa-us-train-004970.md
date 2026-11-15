---
type: qbank
schema_version: 1
id: medqa-us-train-004970
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:90ec6b204cef59ebb2edc715e0688981dc18992c9822f4599b41994d0aa00abd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "규폐증"
  - "달걀껍데기 석회화"
  - "결핵 감염 위험"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q3nO2PkOymnSAoU2lsaWNvc2lzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

54세 남성이 오랫동안 모래분사 작업을 했고 규폐증으로 추적 중이다. 최근 수주간 기침·야간 발한이 심해지고 체중이 줄었다. 영상에서 기존 폐문 림프절 석회화 외에 우상엽에 새 공동이 보인다. 우선 의심할 질환은?

## 선택지

A. 바이러스성 급성 기관지염
B. 기존 규폐증과 무관한 알레르기 천식
C. 안정기의 만성 기관지염
D. 활동성 폐결핵

## 해설


결정형 실리카에 장기간 노출된 규폐증 환자는 결핵 위험이 높다. 야간 발한, 체중 감소와 새 상엽 공동이 있으면 활동성 폐결핵을 의심해 감염 관리와 객담 도말·배양 및 핵산증폭검사를 진행한다. 잠복결핵 검사만으로 활동성 결핵을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 sandblasting·난각석회화의 규폐증은 대식세포 방어저하와 결핵 D 위험을 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004970
- https://www.kdca.go.kr/bbs/kdca/55/228178/artclView.do
