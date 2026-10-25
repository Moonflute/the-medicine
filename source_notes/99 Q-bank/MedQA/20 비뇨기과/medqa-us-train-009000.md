---
type: qbank
schema_version: 1
id: medqa-us-train-009000
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c4a1229f7f9f980a0c15061bba15c869b3fb078c1df012e74b9a6f031913baa
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "seminoma"
  - "testicular cancer"
  - "metastatic seminoma"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 3개월 동안 지속된 둔한 음낭 통증과 허리 통증으로 내원했다. 민간 IT 회사의 컴퓨터 엔지니어로 일하며 과거력은 22세 때 합병증 없는 충수절제술 외에는 특이사항이 없다. 주말에 담배 2~3개비를 피우고 가끔 음주하며 아내와 성생활을 한다. 맥박 90회/분, 혈압 132/76mmHg이다. 음낭검사에서 왼쪽 고환에 단단하고 작으며 통증 없는 결절이 만져진다. 초음파에서 0.9×0.5cm의 불규칙한 비낭성 종괴가 보인다. 왼쪽 근치적 고환절제술 후 조직검사에서 균일한 종양세포, 풍부한 투명 세포질, 뚜렷한 세포 경계가 있어 정상피종(seminoma)으로 확인되었다. PET/CT에서 쇄골상부와 대동맥 주위 림프절 침범이 보인다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 관찰
B. 화학요법
C. 방사선치료
D. 면역요법

## 해설

쇄골상부와 대동맥주위 림프절 전이가 있는 정상피종은 단순 국소 방사선 대상이 아니라 전이성 병기에서 전신 치료가 필요한 상황이다. B, cisplatin 기반 화학요법이 적절하다. 정상피종이 방사선 감수성이 높다는 이유로 모든 전이성 병기에서 방사선치료를 화학요법보다 우선할 수는 없다. 구체적 조합·횟수는 위험도·장기 기능과 전문과 평가에 따른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 B 화학요법과 정반대로 방사선치료를 권한 해설 오연결 교정. Seminoma를 정상피종으로 명확히 함.
- 공식/학회 근거: https://uroweb.org/guidelines/testicular-cancer/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009000
