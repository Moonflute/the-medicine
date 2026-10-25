---
type: qbank
schema_version: 1
id: medqa-us-test-000614
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f106fa874ec50e2e8bf3d858160602492bfd5a606030a6c49f1598605880fd81
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "괴사성 근막염"
  - "클로스트리디움 퍼프린젠스"
  - "가스괴저"
question_type: mechanism
related_disease_slugs:
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
  - MDgg6rCQ7Je8L-qwgOyKpCDqtLTsoIAgKEdhcyBHYW5ncmVuZSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 4일 동안 지속된 왼쪽 다리 통증으로 응급실에 왔다. 주말에 친구들과 플래그 풋볼을 하다 진흙밭에서 넘어져 왼쪽 허벅지를 긁은 뒤 점점 심해지는 홍반과 통증이 생겼다. 과거력은 없었다. 체온 39.4°C(103.0°F), 심박수 120회/분, 혈압 95/60 mmHg였다. 왼쪽 허벅지에 작은 찰과상을 중심으로 반경 약 10 cm까지 경계가 불분명한 홍반이 있고 극심한 압통과 ‘바삭’거리는 촉진감이 있었다. CT에서 왼쪽 다리 연조직 내 자유 공기가 보였다. 이 환자 원인균은 다음 중 어떤 질환의 흔한 원인이기도 한가?

## 선택지

A. 세균성 폐렴
B. 세균성 부비동염
C. 식중독
D. 요로감염

## 해설

흙에 오염된 상처 뒤 심한 통증, 쇼크, 염발음과 조직 내 가스가 발생한 맥락은 Clostridium perfringens에 의한 외상성 가스괴저/근괴사를 시사한다. 이 균은 장독소에 의한 식중독도 일으키므로 C가 출제 의도에 부합한다. 다만 조직 내 가스만으로 원인균을 확정할 수 없으며, C. perfringens를 모든 괴사성 근막염의 가장 흔한 원인이라고 설명하는 것은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상성 가스괴저와 C. perfringens 식중독 연관은 유지하되 이를 모든 괴사성 근막염의 최다 원인으로 일반화한 해설을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000614
