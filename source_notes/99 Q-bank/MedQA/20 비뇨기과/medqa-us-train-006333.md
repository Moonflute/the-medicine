---
type: qbank
schema_version: 1
id: medqa-us-train-006333
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:414b2dfca997c4ebd6ae7a7b979297d2816c733e45cd354445547208e2f401ff
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "급성 부고환염"
  - "성매개 감염"
  - "임균 및 클라미디아 감염"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-q4ieyEsSDrtoDqs6DtmZjsl7wgKEFjdXRlIGVwaWRpZHltaXRpcykubWQ
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 5일에 걸쳐 심해진 음낭 통증과 배뇨통, 요도 분비물로 내원했다. 도플러에서 고환 혈류는 보존되고 부고환의 혈류는 증가했다. 전신 상태는 안정적이고 임균·클라미디아에 의한 부고환염을 의심한다. 가장 적절한 경험적 치료는?

## 선택지

A. 경구 메트로니다졸 단독
B. 경구 니트로푸란토인 단독
C. 세프트리악손 근육주사와 경구 독시사이클린
D. 경구 독시사이클린 단독

## 해설

임균과 클라미디아가 모두 의심되는 급성 부고환염에서는 두 균을 함께 치료한다. 핵산증폭검사 등을 시행하고 결과에 따라 조정한다. 음낭 급성 통증에서는 먼저 염전 가능성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 A도 IV이나 안정된 외래 STI 의심 급성 부고환염의 CDC 표준 투여경로는 ceftriaxone IM이므로 약물 조합·정답 A를 유지하며 경로만 교정.
- 공식/학회 근거: https://www.cdc.gov/std/treatment-guidelines/epididymitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006333
- https://uroweb.org/guidelines/urological-infections/chapter/the-guideline
- https://www.sjcidc.or.kr/board/bbs_download2.php?code=tb_inf_dise&dn=2&fn=2&idx=42&sd=%2FbbsDown%2Finf_dise
