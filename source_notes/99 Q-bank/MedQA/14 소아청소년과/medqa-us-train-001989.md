---
type: qbank
schema_version: 1
id: medqa-us-train-001989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6fd1f6de723d81de284a17b1ad206a12290e6191da14ff0b2d915a3c5013ebc4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "infant botulism"
  - "Clostridium botulinum"
  - "honey exposure"
  - "tetanus"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강하던 생후 10일 영아가 12시간 동안의 쇠약과 경련으로 응급실에 왔다. 수유곤란과 약한 빨기반사가 있고 발열, 기침, 설사, 구토는 없다. 39주에 집에서 합병증 없이 태어났고 어머니는 산전 예방접종을 거부했다. 5일 전 언니가 생꿀을 먹였을 가능성을 걱정한다. 보채며 전신 근육 경직과 연축이 있다. 다음 중 가장 가능성 높은 원인균은 무엇인가?

## 선택지

A. Clostridium botulinum
B. Clostridium tetani
C. Neisseria meningitidis
D. Escherichia coli

## 해설

정상적으로 지내던 신생아가 생후 10일에 빨기 어려움과 전신 경직·연축을 보이면 신생아 파상풍을 시사하며 원인균은 Clostridium tetani(B)이다. WHO도 생후 3~28일에 수유 능력이 떨어지고 경직/연축이 생기는 양상을 기술한다. 보툴리즘은 주로 이완성 하행 마비를 일으키므로 꿀 노출 가능성만으로 경직성 소견을 무시해서는 안 된다. 모체 예방접종 부재는 파상풍 보호 항체 부족의 위험 맥락이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 경직성 연축의 신생아 파상풍 정답 B에 보툴리즘 해설을 연결한 오류를 교체했다.
- https://www.who.int/news-room/fact-sheets/detail/tetanus
- https://www.cdc.gov/tetanus/hcp/clinical-overview/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001989
