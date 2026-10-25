---
type: qbank
schema_version: 1
id: medqa-us-train-005882
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0fa9100b30016d99f92fb9ea82badcacd1a5052377af4abf23b735c8e270548c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 수막염"
  - "고령자 리스테리아 감염"
  - "경험적 항생제와 덱사메타손"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
  - MDgg6rCQ7Je8L-umrOyKpO2FjOumrOyVhCAoTGlzdGVyaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

67세 남성이 의식 변화로 응급실에 왔다. 은퇴자 공동체에 거주하며 평소보다 의식이 저하된 상태로 발견되었다. 알츠하이머 치매와 잘 조절되는 당뇨병 병력이 있다. 체온은 103°F(39.4°C), 혈압은 157/108 mmHg, 맥박은 분당 110회, 호흡수는 분당 17회, 산소포화도는 98%이다. 졸리고 말을 하지 않으며 기저 상태는 알려지지 않았다. 하지 근골격 검사를 하면 통증으로 움찔하고 목의 운동범위가 감소되어 있으며 목을 굽히면 불편해한다. 림프절병증은 없다. 기본검사와 소변검사를 시행했다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 세프트리악손과 반코마이신
B. 세프트리악손, 반코마이신 및 암피실린
C. 세프트리악손, 반코마이신, 암피실린 및 스테로이드
D. 두부 CT

## 해설


고열·수막자극과 의식저하로 세균성 수막염을 의심하여 배양 후 지체 없이 ceftriaxone+vancomycin과 Listeria 범위 ampicillin을 시작한다. Dexamethasone은 가능하면 첫 항생제 직전/동시에 투여하는 맥락이므로 C가 적절하다. 기도·순환 지지와 LP 전 영상 적응 평가를 병행하며 CT나 LP 때문에 치료를 늦추지 않는다. 원인균·CSF 결과에 따라 보조 steroid와 항균제를 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005882 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령 수막염의 경험적 C 유지; steroid의 첫 항생제 전/동시 투여와 영상으로 지연금지 맥락 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005882
