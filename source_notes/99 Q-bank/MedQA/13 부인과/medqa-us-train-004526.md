---
type: qbank
schema_version: 1
id: medqa-us-train-004526
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6223d1abdc4cb09f85422a336a47ff74a8a8064c0e99adfbd5680f82fd85454f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "생식기 사마귀"
  - "콘딜로마 첨형"
  - "인유두종바이러스 감염"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yDneyLneq4sCDsnbjqsIQg7Jyg65GQ7KKFIOuwlOydtOufrOyKpCAoR2VuaXRhbCB3YXJ0cykubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 2일 전 처음 발견한 외음부의 통증 없는 병변 때문에 내원했다. 배뇨 증상은 없다. 오메프라졸을 복용 중인 위식도 역류질환이 있다. 10년 동안 매일 담배 한 갑을 피웠다. 여러 파트너와 성생활을 하고 콘돔은 일관되게 사용하지 않는다. 진찰에서 외음부에 3~5mm 크기의 융기된 거친 병변 여러 개가 무리를 이루고 있다. 묽은 아세트산 용액을 바르자 병변이 하얗게 변한다. HIV 검사는 음성이다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 비경구 벤자틴 페니실린
B. 냉동요법
C. 방사선치료
D. 경구 아시클로버

## 해설

거친 외음부 구진들이 모여 있는 양상은 HPV 관련 첨형콘딜로마에 합당하다. 선택지 중 냉동요법(B)이 권고 치료다. 아시클로버는 HSV 치료제이며 HPV 사마귀 치료제가 아니다. 아세트산 백색반응만으로 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 반대로 아시클로버를 권한 명백한 해설 오류를 교정.
- https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004526
