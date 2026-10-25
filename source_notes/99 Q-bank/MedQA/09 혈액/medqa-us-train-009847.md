---
type: qbank
schema_version: 1
id: medqa-us-train-009847
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1f7a2d32a16dec0f52610b5ce4bf6b39710daa10be0a764d6b412c302d090be
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈우병 B"
  - "제9응고인자 결핍"
  - "유전성 출혈질환"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ydkeqzoOyduOyekCDsp4jtmZgubWQ
question_type: mechanism
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

9세 남아가 지속적인 코피로 내원했다. 어머니는 2시간 전 갑자기 코피가 시작되었고 20분 넘게 압박했지만 멎지 않았다고 한다. 유아기부터 코피가 났지만 예전에는 몇 분간 압박하면 멎었다. 그 외에는 건강하고 발달 이정표도 모두 충족했다. 가족력으로 과도한 출혈 경향이 있는 할아버지와 삼촌이 있다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 제9응고인자 결핍
B. 제8응고인자 억제인자 존재
C. 비타민 K 결핍
D. 단백뇨

## 해설


유아기부터의 반복 출혈과 남성 친족의 출혈력은 유전성 출혈질환을 시사한다. 선택지 중 IX인자 결핍인 혈우병 B(A)가 가장 부합하며 X연관 유전 양상과 연결된다. 다만 코피는 VWD나 혈소판 기능장애에서도 흔하므로 실제 확진에는 응고검사와 인자활성 평가가 필요하다. 자궁경부 상피내병변은 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009847 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선천성 출혈 가족력에서 IX 결핍 A 의도 유지. 완전히 무관한 자궁경부 HSIL 첫 문장 제거하고 코피만으로 혈우병 확진하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009847
