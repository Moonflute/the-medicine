---
type: qbank
schema_version: 1
id: medqa-us-train-006808
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d591e00554b4bf8e02bd710b03caa34ff6b30e400713223ee55dab1c0c564e1
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "비뇨생식기 위축"
  - "폐경 비뇨생식기 증후군"
  - "재발성 요로감염"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ychOy2leyEsSDsp4jsl7wgKEF0cm9waGljIFZhZ2luaXRpcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

폐경한 54세 여성이 질 건조와 성교통, 배양으로 확인된 반복 방광염으로 내원했다. 현재 급성 감염 치료는 끝났고 폐경 후 출혈이나 유방암 병력은 없다. 질 보습제를 써도 건조가 지속된다. 다음 치료는?

## 선택지

A. 경구 전신 에스트로겐을 요로감염 예방 목적으로 우선 사용
B. 저용량 질 에스트로겐 치료
C. 국소 고강도 스테로이드 장기 사용
D. 소변 증상이 없을 때마다 경험적 항생제 투여

## 해설

폐경 비뇨생식기증후군은 저용량 질 에스트로겐으로 건조·성교통을 완화하고 재발 요로감염 위험을 줄일 수 있다. 전신 호르몬요법과는 목적과 전신 노출이 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: GSM·재발 UTI의 국소 에스트로겐 C 유지. 최근 NSTEMI에 전신 에스트로겐을 권한 것으로 오해하지 않도록 한정.
- https://www.augs.org/wp-content/uploads/2025/12/Practice-Advisory-Removal-of-Black-Box-Warning-Label-from-Topical-Low-Dose-Vaginal-Estrogen-Products.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006808
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12438153/
