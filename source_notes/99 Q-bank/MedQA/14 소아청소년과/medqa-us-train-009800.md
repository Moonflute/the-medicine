---
type: qbank
schema_version: 1
id: medqa-us-train-009800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:11f8ce464e0eef026874897e18f7a5ae7054c164674aee1f75ca4595c1cfdcee
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "고양이 교상"
  - "골수염"
  - "파스퇴렐라 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 여아가 걷기 어려워 응급실에 내원했다. 부모에 따르면 며칠 전부터 오른쪽 다리가 아프다고 했다. 지난주 이웃집 고양이에게 물렸고, 부모는 통증이 낫고 있는 물린 상처 때문이라고 생각했다. 물린 당시 응급처치 키트의 멸균 생리식염수로 상처를 씻고 세척했다. 과거력이나 입원력은 없다. 진찰에서 체온 39°C, 혈압 118/78 mmHg, 맥박 분당 90회, 호흡수 분당 21회, 실내 공기에서 산소포화도 99%이다. 허벅지의 열린 상처가 주변 홍반과 부종을 동반한 채 남아 있다. MRI는 골수염에 합당하다. 다음 중 가장 적절한 처치는?

## 선택지

A. 아목시실린
B. 반코마이신
C. 플루코나졸
D. 암피실린-설박탐

## 해설

고양이 교상 후 발열·국소 감염과 골수염이 있어 Pasteurella 및 피부·구강의 호기성/혐기성 균을 고려한다. 보기 중 IV ampicillin–sulbactam(D)이 적절한 경험적 범위를 제공한다. 배양·필요 배농과 소아 감염/정형외과 평가를 병행하며 골수염의 기간·요법은 결과에 따라 조정한다. 균 확인 없이 내성이 없다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고양이 교상 골수염의 균을 확정하지 않고 다균성 범위·배양/전문 치료 명확화.
- https://idmp.ucsf.edu/content/bite-wound
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009800
