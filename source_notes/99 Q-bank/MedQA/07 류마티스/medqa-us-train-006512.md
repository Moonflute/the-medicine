---
type: qbank
schema_version: 1
id: medqa-us-train-006512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8fe06c12de35801b803ef8e54058429492749008a1288d0d195d094a00ccfb94
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스성 다발근통"
  - "근위부 근육통"
  - "적혈구침강속도 상승"
  - "Polymyalgia rheumatica"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: investigation
difficulty: complex
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

70세 여성이 3주 동안 진행하는 근육통과 목 경직으로 평가받았다. 아침에 목이 더 뻣뻣하고 하루 동안 점차 호전된다. 일상생활 변화는 없지만 피로감을 느낀다. 관상동맥질환으로 매일 아스피린을 복용한다. 부모는 모두 80대에 심혈관질환으로 사망했다. 혈압은 140/90 mm Hg, 심박수는 분당 88회, 호흡수는 분당 15회, 체온은 37.9°C(100.2°F)이다. 추가 진찰에서 근력은 정상이지만 앉은 자세에서 일어나기 어렵다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 요추천자
B. 적혈구침강속도 측정
C. 근전도검사
D. 항핵항체 검사

## 해설


고령의 근육통·아침 경직·피로에 비해 실제 근력이 보존된 양상은 PMR을 의심하게 한다. 선택지 중 ESR(B), 그리고 CRP 등 염증수치 평가가 적절하다. ESR 상승만으로 확진하지 않으며 감염·악성종양·내분비/근질환 등 유사 질환과 GCA 증상을 평가한다. EMG는 근병증/신경근질환 감별에 쓰지만 전형적 PMR의 첫 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006512 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ESR 단독으로 PMR을 확진한다는 표현과 EMG 역할의 잘못된 제한을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006512
