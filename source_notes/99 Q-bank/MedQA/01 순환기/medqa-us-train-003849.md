---
type: qbank
schema_version: 1
id: medqa-us-train-003849
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5184f7b106583b77476f6b5b547ea8ccfedcee16e7d073af3035fafdf9d838c7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Factor V Leiden"
  - "activated protein C resistance"
  - "recurrent DVT"
  - "hypercoagulability"
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

61세 남성이 장거리 비행 후 갑자기 발생한 왼쪽 다리의 통증과 부종으로 내원했다. 과거 폐렴으로 입원했을 때 심부정맥혈전증이 있었고, 현재 왼쪽 종아리는 붉고 압통이 있었다. 다음 중 상태의 가장 가능성 높은 원인은?

## 선택지

A. 단백질 C 결핍
B. 소변으로 안티트롬빈 III 소실
C. 단백질 C에 의한 불활성화에 저항하는 제5인자
D. 악성종양

## 해설


반복성 DVT와 장거리 비행은 Factor V Leiden 변이를 통한 활성화된 단백질 C 저항성을 가장 흔히 만든다. 이는 단백질 C에 의해 불활성화되는 것을 방해해 혈전 형성을 촉진한다. 다른 선택지는 선천적 단백질 C 결핍 등이며, 여기서는 가장 흔한 원인인 Factor V Leiden에 의한 저항성이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003849
