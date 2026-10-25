---
type: qbank
schema_version: 1
id: medqa-us-test-000572
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:16269c464345c68f829c14f8e584f0b8587268a9b686a0c706f4d8e2b44910b0
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "수술 후 폐렴"
  - "지역사회획득폐렴"
  - "발열과 기침"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
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

복강경 담낭절제술 3일 후 비만한 57세 여성에게 발열, 오한, 두통이 생겼다. 오른쪽 흉통이 흡기 시 악화되고 지난 12시간 동안 가래가 섞인 기침이 있었다. 수술 후 저혈압이 있었으나 정맥 수액으로 호전되었다. 16년 전 자궁근종으로 복식 자궁절제술을 받았고 17년 동안 하루 담배 한 갑을 피웠다. 체온 39°C(102.2°F), 맥박 98회/분, 호흡 18회/분, 혈압 128/82 mmHg였다. 오른쪽 폐 기저부에서 흡기 수포음이 들렸고 복부는 부드럽고 압통이 없었다. 오른쪽 늑골 아래 수술 절개는 치유 중이었다. 가장 가능성 높은 진단은?

## 선택지

A. 폐색전증
B. 횡격막하 농양
C. 폐렴
D. 기흉

## 해설

정답은 C이다. 수술 후 3일째 고열·오한, 새로 생긴 농성 기침, 흉막성 흉통과 국소 흡기 수포음은 제시된 선택지 중 폐렴을 가장 지지한다. 폐색전증도 수술 후 감별이지만 객담과 국소 감염 소견을 함께 고려하면 C가 우선한다. 본문에는 흉부 X선 결과가 없으므로 침윤을 관찰했다고 단정하지 않으며 실제 임상에서는 영상 등으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문에 없는 흉부 X선 소견을 근거로 든 해설을 임상 소견 중심으로 교체.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000572
