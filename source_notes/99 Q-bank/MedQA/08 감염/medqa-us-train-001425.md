---
type: qbank
schema_version: 1
id: medqa-us-train-001425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:157168bf47985391610a4681d2e61cecd8cc374db05bf8f027810cfca7c3b8f6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "prosthetic valve endocarditis"
  - "Staphylococcus epidermidis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: diagnosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

63세 남성이 2주 동안의 발열과 비생산성 기침으로 내원했다. 그동안 피로, 근육통 및 호흡곤란도 있었다. 5주 전 고도 대동맥 협착으로 인공 대동맥판막 치환술을 받았다. 고혈압, 천식 및 제2형 당뇨병 병력이 있다. 2년 전 대장내시경은 정상이었다. 40년 동안 하루 한 갑을 피웠고 불법 약물 사용은 한 적이 없다. 아스피린, 와파린, 리시노프릴, 메트포르민, 흡입 알부테롤 및 종합비타민을 복용한다. 무기력해 보인다. 체온은 38.6°C (101.5°F), 맥박은 105회/분, 혈압은 140/60 mm Hg이다. 폐 청진에서 수포음이 들리고 왼쪽 흉골 가장자리에서 들려 오른쪽 흉골 가장자리로 방사되는 2/6등급 이완기 바람잡음이 있다. 오른쪽 검지 사진이 제시되어 있다. 백혈구 수는 13,800/mm3, 적혈구 침강속도는 48 mm/h이다. 다음 중 가장 가능성 높은 원인균은 무엇인가?

## 선택지

A. Streptococcus gallolyticus
B. Staphylococcus epidermidis
C. Viridans 연쇄구균
D. Streptococcus pyogenes

## 해설


판막치환 5주 뒤 발열, 새 역류성 잡음과 염증 소견은 조기 인공판막 심내막염을 의심하게 한다. 표피포도알균(Staphylococcus epidermidis)은 보철물에 부착하여 biofilm을 형성하는 대표적 원인으로 보기 중 B가 가장 부합한다. 모든 인공판막 감염이 이 균에 의한 것은 아니며 원인 확인에는 혈액배양 등이 필요하다. 제공되지 않은 손가락 사진의 병변 종류는 추정하여 덧붙이지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001425 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가공된 균명과 모든 인공판막 감염 원인 일반화를 교정. 사진 없이도 조기 인공판막 심내막염의 보기 선택 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001425
