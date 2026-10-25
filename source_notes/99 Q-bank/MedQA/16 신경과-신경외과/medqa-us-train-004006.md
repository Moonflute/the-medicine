---
type: qbank
schema_version: 1
id: medqa-us-train-004006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ec3eb35b63664be50ac7fa6c3c5a3a01f41b434298f89d292df0919ef61967f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "외측대퇴피신경통"
  - "감각신경 포착"
  - "서혜인대"
  - "meralgia paresthetica"
question_type: 임상증례 객관식
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 33세 여자가 2개월간 지속된 오른쪽 허벅지 통증과 간헐적 저림으로 내원했다. 걷거나 서 있을 때 악화되고 앉으면 호전된다. 3개월 전부터 일주일에 몇 번 피트니스 수업을 시작했다. 키 163cm, 체중 88kg, BMI 33.1kg/m²이다. 활력징후는 정상이다. 피부검사도 정상이다. 오른쪽 앞가쪽 허벅지에서 가벼운 촉각 감각이 감소되어 있고 근력은 정상이다. 오른쪽 서혜인대를 두드리면 해당 허벅지의 저림이 심해진다. 하지직거상검사는 음성이다. 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 요추 MRI
B. 염증 표지자 혈액검사
C. 헐렁한 바지를 입도록 권고
D. 신체활동 감소

## 해설

비만한 환자의 앞가쪽 허벅지 감각이상, 정상 근력과 서혜인대 부위 자극 시 증상 악화는 외측대퇴피신경 압박에 의한 감각이상성 대퇴신경통(meralgia paresthetica)에 합당하다. 이 신경은 순수 감각신경이므로 운동마비가 없는 것이 단서다. 조이는 옷·벨트를 피하고 헐렁한 바지를 입는 C가 적절한 초기 조치이며 체중 조절도 도움이 된다. 대퇴근막 자체의 질환을 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 질환명을 대퇴근막증후군으로 잘못 부른 해설을 외측대퇴피신경 압박성 감각신경병증으로 교정했다. 압박을 줄이는 C를 유지한다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/burning-thigh-pain-meralgia-paresthetica/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004006
