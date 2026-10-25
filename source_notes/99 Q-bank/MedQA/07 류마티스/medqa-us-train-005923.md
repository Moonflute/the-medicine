---
type: qbank
schema_version: 1
id: medqa-us-train-005923
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9430a0c5d653d759cf0e9515bed08ecaa24593f0687768dc618967fee5a41801
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "통풍"
  - "요산 일나트륨 결정"
  - "퓨린 섭취 감소"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: prevention
difficulty: standard
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJhdmFzdGF0aW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

45세 남성이 심한 좌측 무릎 통증과 부종으로 내원했다. 고지혈증과 고혈압이 있고 프라바스타틴과 캅토프릴을 복용한다. 생선과 잎채소를 포함한 저지방 식사를 하며 하루 커피 4~6잔을 마신다. 26년 동안 하루 한 갑씩 흡연하고 매일 맥주 2~3잔을 마신다. 좌측 무릎은 부어 있고 따뜻하며 심한 압통이 있다. 관절천자를 시행했고 그람염색은 음성이며 활액에서 요산 일나트륨 결정이 보인다. 다음 중 증상 재발을 예방하기 위한 가장 적절한 건강관리 권고는 무엇인가?

## 선택지

A. 아스피린 시작
B. 생선 섭취 감소
C. 프라바스타틴 중단
D. 콜히친 시작

## 해설


활액의 요산 일나트륨 결정은 통풍을 지지한다. 제시된 건강관리 선택지 중 퓨린이 많은 생선 섭취를 줄이는 B가 가장 적절하다. 맥주 등 음주 제한도 중요하며 식이 변화만으로 충분한 요산 조절을 보장하지 않는다. 콜히친은 발작 치료·특정 상황의 예방에 쓰이지만 이 사례의 식이 권고를 대체하는 일률적 장기 예방법은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-005923`와 직접 대조했다.
- 판정: MSU 결정으로 통풍 확진된 사례에 심인성쇼크 해설이 붙은 명백한 오연결. 식이 권고 B 유지하되 효과는 제한적이며 금주/약물 적응증 별도평가 명시.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005923
