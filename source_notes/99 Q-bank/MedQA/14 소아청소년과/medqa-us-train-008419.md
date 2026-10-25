---
type: qbank
schema_version: 1
id: medqa-us-train-008419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1efb4af96ffb9ae1103ff47f60231c46d129036660bd20430071f690061bff9b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "physiologic neonatal weight loss"
  - "breastfeeding"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE64yAIOuCoOusuCDtmJHssKnspp0gKEh5cGVydHJvcGhpYyBQeWxvcmljIFN0ZW5vc2lzKS5tZA
difficulty: standard
answer: A
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

생후 7일 된 남아가 체중 감소로 소아과에 내원했다. 심하게 울거나 보채는 증상, 기면, 수유 곤란은 없다. 부모는 빠른 호흡, 입술이나 손발톱의 청색 변색, 발열, 구토, 설사, 발작 병력이 없다고 한다. 만삭으로 질식 분만되었고 주산기 합병증은 없었으며 출생 체중은 3.6kg(8파운드)이었다. 출생 이후 모유만 먹었고 하루 6~8회 소변을 본다. 활력징후를 포함한 신체검사는 완전히 정상이다. 체중은 3.3kg(7.3파운드)이며 키와 머리둘레는 연령과 성별에 적절하다. 다음 중 이 영아 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 부모를 안심시킨다
B. 저체온증을 예방하기 위해 영아를 따뜻하게 입혀야 함을 강조한다
C. 모유 수유를 적절한 영아용 분유로 보충한다
D. 경험적 정맥 항생제 치료를 위해 신생아집중치료실에 입원시킨다

## 해설

출생 3.6 kg에서 3.3 kg으로 약 8.3% 감소했으나 전신 상태·수유·소변이 양호하여 보기 중 안심(A)이 타당하다. 다만 생후 7일이므로 수유 효과와 체중 회복 추세를 확인하고 가까운 추적을 계획한다. 탈수·섭취 부족·지속 감소가 생기면 보충 등 추가 조치를 평가하며 모든 신생아 체중 감소를 생리적이라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 8.3% 체중 감소를 무조건 추가 조치 불필요로 일반화하지 않고 수유·체중 추적 명확화.
- https://www.aap.org/en/patient-care/newborn-infant-and-early-childhood-nutrition/newborn-and-infant-health-assessment-and-promotion/newborn-visit/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008419
