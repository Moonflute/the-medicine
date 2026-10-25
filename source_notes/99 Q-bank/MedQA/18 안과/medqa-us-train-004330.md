---
type: qbank
schema_version: 1
id: medqa-us-train-004330
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c5b00662ea90e205828e57c8a7868dfcc199d1b2604153d7512b8ef1e9cc5ed
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "수막종"
  - "시신경 압박"
  - "결핍성 동공반응"
  - "Meningioma"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
difficulty: complex
answer: C
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

29세 여자가 2개월간 왼쪽 눈의 진행성 시력 상실과 오른쪽 눈의 점진적 시야 흐림으로 내원했다. 간헐적 두통과 최근 후각 감소도 있다. 계절성 알레르기로 펙소페나딘만 복용한다. 키 158cm, 체중 61kg, BMI 24.7kg/m²이며 활력징후는 정상이다. 오른쪽 시력은 20/40, 왼쪽은 빛을 거의 인지하지 못한다. 우안에서 좌안으로 빛을 옮기면 양쪽 동공이 확장되고 안저검사에서 오른쪽 시신경유두부종과 왼쪽 창백한 시신경유두가 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 가성 뇌종양
B. 전방 허혈성 시신경병증
C. 수막종
D. 다발성경화증

## 해설

왼쪽 시신경 압박에 의한 창백한 시신경유두/시신경 위축과 RAPD, 반대쪽인 오른쪽 유두부종 및 후각저하는 전두개저 종괴에 의한 Foster Kennedy 증후군에 합당하다. 후각고랑 수막종 같은 병변 C가 가장 적절하다. 빛을 좋은 오른쪽에서 손상된 왼쪽으로 옮길 때 양안 동공이 상대적으로 확장되는 것은 왼쪽 구심성 신호 저하 때문이다. 본문은 양측 유두부종이 아니며 라우리 반응이라는 설명도 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 좌측 시신경 위축·우측 유두부종·후각저하의 Foster Kennedy 양상을 양측 유두부종으로 잘못 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004330
