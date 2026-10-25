---
type: qbank
schema_version: 1
id: medqa-us-train-008458
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5357034799799e31de4908e57c538d2c4c13c146f83a2fb11e0496fc901fa16
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "acute bacterial parotitis"
  - "suppurative parotitis"
  - "Staphylococcus aureus"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

우측 관상동맥에 스텐트를 삽입하는 경피적 관상동맥 중재술을 합병증 없이 외래에서 받은 지 3일 후, 60세 여성이 왼쪽 얼굴이 아프게 부어올랐다. 씹을 때 통증이 더 심하다. 고혈압과 관상동맥질환이 있다. 현재 에날라프릴, 메토프롤롤, 아스피린, 클로피도그렐, 심바스타틴, 종합비타민을 복용한다. 흡연과 음주는 하지 않는다. 체온 38.1°C(100.5°F), 맥박 72회/분, 호흡수 16회/분, 혈압 128/86mmHg이다. 왼쪽 이하선이 부어 있고 압통이 있다. 구강 내 검사에서 홍반과 소량의 화농성 분비물이 보인다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 침샘관 확장술
B. 이하선 절제술
C. 이하선 생검
D. 나프실린과 메트로니다졸 투여

## 해설

통증성 이하선 부종, 발열과 관의 화농성 분비물은 급성 세균성 이하선염을 시사한다. S. aureus와 구강 혐기성균을 고려하여 D, nafcillin과 metronidazole 같은 항균 범위의 치료가 선지 중 적절하다. 수분 공급과 침 분비 정체 교정, 배양 및 임상반응에 따른 약제 조정도 필요하다. 농양이나 폐색·치료 실패가 있으면 배액 등 처치가 필요할 수 있으므로 수술이 언제나 불필요하다는 설명은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 화농성 이하선염의 항포도상구균·혐기성균 치료 D 유지; 모든 경우 외과적 배농이 불필요하다는 단정을 제거.
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/antimicrobial-prescribing-nhs-lothian/body-systems/ear-nose-throat-infections/parotitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008458
