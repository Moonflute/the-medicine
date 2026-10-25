---
type: qbank
schema_version: 1
id: medqa-us-train-002842
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0adab37476b253b5ba61f058abfd6f9463deefb3e53726b90a28e427cbf27dc3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "cluster headache"
  - "trigeminal autonomic cephalalgia"
  - "high-flow oxygen"
  - "coronary artery disease contraindication to triptans"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0xpZG9jYWluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 한 달 동안 반복적으로 간헐적인 두통이 있어 내원했다. 하루 3~4회, 주로 밤에 발생하며 한 번에 수분에서 1~2시간 지속된다. 통증은 심하고 찌르는 듯하며 왼쪽 눈 주위에 한쪽으로 국한된다. 두통 때 왼쪽 눈의 눈물과 결막 충혈, 콧물이 자주 동반된다. 3개월 전에도 같은 두통이 3주간 반복되다가 한 달 전까지 완전히 사라졌다고 한다. 발작, 의식소실, 오심, 구토, 광선공포, 소리공포는 없다. 1년 전 스트레스 심초음파로 진단된 관상동맥질환에 의한 안정형 협심증이 있다. 가끔 술을 마시면 두통이 유발되지만 흡연이나 기분전환용 약물은 사용하지 않는다. 발열은 없고 활력징후와 신체검사는 정상이며 두부 비조영 CT도 정상이다. 다음 중 이 환자에게 가장 적절한 발작 중단 치료는?

## 선택지

A. 수마트립탄
B. 고유량 100% 산소
C. 하이드로코돈
D. 비강 내 리도카인

## 해설

반복되는 심한 일측 안와주위 통증, 동측 눈물·결막충혈·콧물 및 군집성 시간 양상은 군발두통에 합당하다. 급성 발작에는 고유량 100% 산소(B)를 비재호흡 마스크로 투여할 수 있다. 이는 저산소 치료가 아니라 고농도 산소 치료다. NICE는 최소 12 L/분을 권고한다. 수마트립탄도 일반적으로 급성기 선택지이나 이 환자는 관상동맥질환·협심증이 있어 적합하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고유량 산소를 저산소 치료라고 뒤집은 해설 오류를 교정했다. 관상동맥질환 환자의 군발두통 급성기 B를 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002842
