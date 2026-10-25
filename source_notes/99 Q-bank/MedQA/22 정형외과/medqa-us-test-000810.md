---
type: qbank
schema_version: 1
id: medqa-us-test-000810
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:27794b5f9dd0776a1b16576607b96e1054656cf3712a1e4c8f98db4034456e82
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "세균성 관절염"
  - "패혈성 관절염"
  - "활액 분석"
question_type: investigation
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 남아가 갑자기 시작된 극심한 오른쪽 무릎 통증으로 응급실에 왔다. 최근 외상은 없으며 관절은 붉고 부어 있고 뜨거웠다. 체온 39.1°C(102.4°F), 혈압 124/82 mmHg, 호흡 17회/분, 맥박 104회/분이었다. 관절을 촉진하면 압통과 관절낭 부종이 있었고 혈청 CRP와 프로칼시토닌이 증가했다. 활액 분석에서 가장 예상되는 소견은?

## 선택지

A. 백혈구 1,600/mm³, 호중구 비율 >25%, 점도 정상
B. 백혈구 53,000/mm³, 호중구 비율 >75%, 점도 낮음
C. 백혈구 160/mm³, 호중구 비율 <20%, 점도 높음
D. 백혈구 2,400/mm³, 호중구 비율 <20%, 점도 낮음

## 해설

발열·심한 통증·열감·종창은 감염성 관절염을 의심하게 한다. 선지 중 높은 활액 백혈구와 호중구 우세, 낮은 점도를 보이는 B가 가장 적절하다. 점도 저하는 염증에 따른 hyaluronan의 분해·희석과 관련된다. 50,000/mm³ 미만이라고 감염을 배제하거나 그 이상이라고 단독 확진하지 않으며 그람염색·배양 등과 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 발열성 급성 단관절염의 B는 맞으나 점도 저하를 고형물질 농도 증가로 설명하고 5만 기준을 필수처럼 제시한 오류를 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000810
