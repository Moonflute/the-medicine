---
type: qbank
schema_version: 1
id: medqa-us-train-007863
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1fdbb4ec506c72caee8a24fab6adfd2abdc04553358b4d0711ec0bee30bdfce
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "eosinophilic granulomatosis with polyangiitis"
  - "asthma"
  - "mononeuritis multiplex"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL01vbWV0YXNvbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
---

# MedQA US 임상문제

## 문제

55세 남자가 6개월 전부터 시작된 손가락 저림과 감각 이상으로 내과에 내원했다. 점점 악화되어 양치질 같은 일상 활동에도 영향을 준다. 18세부터 부비동염과 알레르기비염이 있었고 30세부터 간헐적 천명과 호흡곤란이 있었다. 22세에 천식, 40세에 위식도역류질환을 진단받았다. 알부테롤, 로라타딘, 모메타손, 오메프라졸을 복용한다. 혈압 128/86 mm Hg, 심박수 78회/분, 호흡수 16회/분이다. 피부가 얼룩덜룩하고 팔, 다리, 몸통에 레이스 모양의 홍반성 변색이 퍼져 있다. 우측 전완에 작은 구진성 발진도 있고 양측에서 천명음이 들린다. 가장 가능성 높은 진단은?

## 선택지

A. 호산구성 육아종증을 동반한 다발혈관염
B. 다발혈관염을 동반한 육아종증
C. CREST 증후군
D. 결절다발동맥염

## 해설


오래된 천식·상기도 알레르기 질환에 신경병증과 혈관성 피부병변이 생겨 보기 중 EGPA A가 가장 의심된다. 다만 이 문항에는 혈중 eosinophil 수치가 제시되지 않아 증가가 확인되었다고 설명하면 안 된다. 호산구, ANCA 및 조직·장기침범 평가로 다른 혈관염과 감별하여 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007863 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 미제공된 호산구증가를 관찰값으로 꾸민 부분을 제거; EGPA A는 의심 진단으로 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007863
