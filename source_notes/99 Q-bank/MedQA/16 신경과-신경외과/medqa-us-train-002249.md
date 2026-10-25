---
type: qbank
schema_version: 1
id: medqa-us-train-002249
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:80f0c1a7790a499c19b0515e560ac5ddb438c7d4e1b236d1db127caa31cd038f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "erectile dysfunction"
  - "pelvic fracture"
  - "pudendal nerve injury"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuPhCDshpDsg4EgKFVyZXRocmFsIGluanVyeSkubWQ
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
difficulty: standard
answer: D
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

62세 남성이 추적 진료를 위해 내원했다. 정면충돌 사고에서 앞좌석 운전자로 대퇴골과 골반이 골절되었지만 적절히 치료받았다. 3주간 입원 후 2주 전에 퇴원했다. 당뇨병, 고혈압, 이상지질혈증 병력이 있고 하루 담배 3갑과 매일 밤 술 4잔을 마신다. 아내와 성관계를 시도하지만 발기가 되지 않는다고 한다. 이전에는 이런 문제가 없었다. 새로 발생한 가벼운 두통과 수면장애로 트라조돈을 복용 중이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 죽상경화성 변화
B. 프로락틴 증가
C. 약물 변경
D. 신경학적 손상

## 해설

이전에 없던 발기부전이 골반골절 후 발생했으므로 외상성 신경혈관 손상을 우선 고려하며, 주어진 선지에서는 신경학적 손상(D)이 가장 적절하다. 발기는 S2–S4 부교감 신경 및 골반 신경총·해면체신경과 관련되고, 음부신경은 회음부 감각과 체성운동을 담당한다. 음부신경은 좌골신경의 가지가 아니다. 당뇨·죽상경화도 위험인자이지만 급성 외상 후 발생한 시간적 경과를 더 잘 설명하는 것은 외상성 손상이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 음부신경을 좌골신경의 한 부분으로 설명한 해부학 오류를 교정했다. 골반골절 직후 새 발기부전과 D의 시간적 연결은 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002249
