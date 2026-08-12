---
type: qbank
schema_version: 1
id: medqa-us-train-008559
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28ff674da336005c860cbdc8f1197bda8791c91b0397f027bb391bedff065a0f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV/AIDS"
  - "Pneumocystis jirovecii prophylaxis"
  - "Mycobacterium avium complex prophylaxis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: prevention
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

HIV 양성인 33세 남성이 추적 진료를 위해 내원했다. HIV 약을 잘 복용하고 있는지 묻자 우울해서 6개월 동안 약을 먹지 않았다고 말한다. CD4⁺ 수치는 현재 33 cells/mm³이다. 항레트로바이러스 치료와 함께 어떤 약물을 추가로 복용해야 하는가?

## 선택지

A. 플루코나졸
B. 아지스로마이신과 트리메토프림-설파메톡사졸
C. 아지스로마이신과 플루코나졸
D. 아지스로마이신, 답손, 플루코나졸

## 해설


CD4⁺ 수치가 33 cells/mm³으로 중증 면역억제가 있으면 Pneumocystis jirovecii 폐렴 예방을 위해 트리메토프림‑설파메톡사졸이 필요하고, Mycobacterium avium complex 예방을 위해 아지스로마이신을 추가한다. 따라서 두 약을 함께 투여하는 B가 정답이다. A(플루코나졸)만은 MAC 예방에 충분하지 않다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008559
