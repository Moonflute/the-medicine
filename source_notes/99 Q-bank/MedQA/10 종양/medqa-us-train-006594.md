---
type: qbank
schema_version: 1
id: medqa-us-train-006594
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d1f91390df1af7918cfae81aad662a1779d197a5763ea1c68683a1aca23ee9a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "악성 종양성 고칼슘혈증"
  - "폐 편평세포암"
  - "PTHrP"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
---

# MedQA US 임상문제

## 문제

62세 여성이 2개월 동안 지속된 ‘멍한 느낌’으로 내원했다. 최근 몇 달 동안 생각이 명료하지 않고 한 단계 뒤처진 느낌이 들며, 차를 어디에 주차했는지 또는 집을 나서며 현관문을 잠갔는지를 자주 잊는다고 한다. 기분도 저하되어 있다. 가벼운 변비가 있고, 지난 몇 달 동안 점점 심해지는 성가신 기침과 의도하지 않은 6.8kg(15lb) 체중 감소가 있었다. 고혈압으로 매일 암로디핀을 복용한다. 40년 동안 하루 1.5갑을 피웠다. 신체진찰은 정상이다. 검사에서 Na+ 138 mEq/L, K+ 3.9 mEq/L, Cl− 101 mEq/L, HCO3− 24 mEq/L, BUN 10 mg/dL, 크레아티닌 0.6 mg/dL, 포도당 86 mg/dL, 칼슘 13.6 mg/dL, 마그네슘 1.9 mg/dL, PTH 2 pg/mL(10~65), 1,25-디하이드록시비타민 D 15 pg/mL(20~45), 퀀티페론 골드 음성이다. 다음 중 이 환자의 가장 가능성 높은 기저 병리를 가장 잘 설명하는 것은?

## 선택지

A. 내분비성
B. 염증성
C. 종양성
D. 외인성 독성

## 해설


PTH가 억제된 고칼슘혈증에 장기 흡연, 기침과 체중감소가 동반되어 보기 중 종양성 원인 C가 가장 부합한다. 폐 편평세포암의 PTHrP 분비는 가능한 기전이지만 PTHrP 검사나 종양 조직 없이 확진한 것은 아니다. 낮은 활성 비타민D는 calcitriol 과다 기전보다 PTHrP성 고칼슘혈증에 더 부합한다. Na/K/Cl/HCO3 수치는 통상 mEq/L로 해석해야 하며 원문의 mg/dL 표기는 단위 오류이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006594 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문부터 잘못된 전해질 mg/dL를mEq/L로 단위 교정하고1,25(OH)2D 명칭 복구; 종양성 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006594
