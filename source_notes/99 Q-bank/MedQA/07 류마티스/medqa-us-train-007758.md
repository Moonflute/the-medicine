---
type: qbank
schema_version: 1
id: medqa-us-train-007758
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b4cb21d57516c8bac43ea644d1b140829522ddc7f5f76318fb3fb0c40643108
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "IgA vasculitis"
  - "Henoch-Schönlein purpura"
  - "IgA immune complex deposition"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Zek64W47Z2QLeyJlOudvOyduCDsnpDrsJjspp0gKEhlbm9jaC1TY2hvbmxlaW4gUHVycHVyYSkubWQ
question_type: complication
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

IgA 혈관염이 있는 6세 남아에게 갑자기 반복되는 심한 산통과 구토, 혈변이 생겼다. 복부 초음파에서 동심원 모양의 표적 징후가 보인다. 가장 가능성 높은 합병증은?

## 선택지

A. 급성 충수염
B. 마비성 장폐색
C. 장염 뒤 일시적 유당불내증
D. 장중첩증

## 해설


IgA 혈관염으로 장벽에 부종과 출혈이 생기면 장중첩증이 발생할 수 있다. 심한 간헐적 복통과 초음파 표적 징후가 있으면 응급 소아외과·영상의학 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007758 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비창백성 촉지자반을 두드러기라 부른 오류와 dysmorphic RBC 번역 교정; 장중첩과 IgA 기전을 연결.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007758
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11666671/
