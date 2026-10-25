---
type: qbank
schema_version: 1
id: medqa-us-train-008595
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:676a61eaf8d041ea115c6e32ffdb4d26563d12c7c4f2195c0baa4c425c5b32a7
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "varicocele"
  - "male infertility"
  - "microsurgical varicocelectomy"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uNqeq1tOygleunpeulmCAoVmFyaWNvY2VsZSkubWQ
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 남성과 아내가 수년 동안 임신을 시도했으나 성공하지 못해 난임 전문의에게 의뢰되었다. 피임 없이 일주일에 여러 번 성관계를 한다. 중대한 질환 병력이나 복용 약물은 없다. 성욕이나 발기에는 문제가 없다. 여성 파트너는 피임약을 복용하지 않으며 이전 결혼에서 아이가 있다. 진료실 활력징후는 정상이다. 음낭의 오른쪽은 정상이나 왼쪽에는 촉진 시 벌레가 든 자루처럼 느껴지는 깊고 표재성인 관 또는 혈관이 많다. 환자가 힘을 주면 병변이 더 뚜렷해진다. 정액검사에서 정자 수가 적고 운동성이 나쁘며 비정상 정자 비율이 증가했다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 세포질 내 정자 주입술
B. 질초상돌기 결찰술
C. 미세수술적 정계정맥류 절제술
D. 현재는 치료하지 않는다

## 해설

촉지되는 임상적 정계정맥류에 난임과 비정상 정액 소견이 있어 C, 미세수술적 정계정맥류 교정을 고려할 수 있다. 여성 파트너의 현재 가임력도 함께 평가한다. ICSI는 특히 심한 남성요인 난임 등에 사용할 수 있으므로 정자 수가 충분할 때만 하는 시술이라는 설명은 틀리다. 질돌기 결찰은 수종·서혜탈장과 관련된 수술이지 비수술적 정계정맥류 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정계정맥류 수술 C는 유지하되 ICSI와 질돌기 결찰술을 잘못 설명한 오답 근거 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/male-infertility

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008595
