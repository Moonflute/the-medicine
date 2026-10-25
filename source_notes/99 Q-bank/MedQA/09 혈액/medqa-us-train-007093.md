---
type: qbank
schema_version: 1
id: medqa-us-train-007093
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dbf90f4277ae0f62a42bbb81534442d21bb0e7010acb6708903c370390257e79
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "인자 V 라이덴"
  - "심부정맥혈전증"
  - "유전성 혈전성향"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsoITshLHtlqXspp0gKEluaGVyaXRlZCBUaHJvbWJvcGhpbGlhKS5tZA
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

26세 남자가 2일 동안 악화된 오른쪽 하퇴 통증으로 내원했다. 왼쪽 다리와 비교해 오른쪽 다리가 부은 것 같다고 한다. 범불안장애가 있지만 정신치료로 잘 조절되고 있다. 매일 담배 한 갑을 피우나 술이나 불법 약물은 사용하지 않는다. 아버지는 43세에 폐색전증으로 사망했다. 활력징후는 체온 36.7°C(98.0°F), 혈압 126/74 mmHg, 심박수 74회/분, 호흡수 14회/분이다. 신체검사에서 오른쪽 하퇴가 왼쪽보다 따뜻하고 오른발을 발등굽힘하면 통증이 발생한다. 다음 중 이 환자의 증상을 일으킨 가장 가능성 높은 상태는 무엇인가?

## 선택지

A. 인자 V 라이덴
B. 폰 빌레브란트병
C. 비타민 K 결핍
D. 혈우병 A

## 해설


젊은 환자의 DVT 의심과 이른 가족 PE 병력에서는 선택지 중 Factor V Leiden A의 유전 혈전성 소인을 고려한다. 이는 activated protein C에 대한 저항성을 일으킨다. vWD는 vWF의 양적/기능적 이상으로 출혈질환이며 protein C 결핍을 뜻하지 않는다. Homan 징후와 가족력만으로 유전자나 DVT가 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007093 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: vWD를 protein C 저하라고 한 기전 오류 교정; thrombophilia A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007093
