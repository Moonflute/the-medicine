---
type: qbank
schema_version: 1
id: medqa-us-train-008930
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f77f613486734958811ad9faa2a3ac384acbe78cb3ae54c419c24e4f2a9b5787
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "Leydig cell tumor"
  - "testicular mass"
  - "androgen excess"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEuOultO2GqOumrC3rnbzsnbTrlJTtnogg7IS47Y-sIOyiheyWkSAoU2VydG9saS1MZXlkaWcgQ2VsbCBUdW1vcikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 남아가 건강검진을 위해 내원했다. 학교생활을 잘하고 농구팀과 체스 동아리에서 활동하며 친구도 많고 행복해 보인다. 부모는 걱정되는 점이 없다. 체온 99.5°F(37.5°C), 혈압 127/68mmHg, 맥박 85회/분, 호흡수 17회/분, 산소포화도 98%이다. 키와 체중이 모두 99백분위수인 키 크고 근육질의 남아이며 복부는 비만하지만 압통이나 팽만은 없다. 신경학적 검사에서 국소 소견은 없다. 고환검사에서 오른쪽 고환 종괴가 보이고 피부검사에서 여드름과 얼굴 털이 있다. 다음 중 가장 가능성 높은 기저 진단은 무엇인가?

## 선택지

A. 라이디히세포 종양
B. 비만에 따른 정상 발달
C. 뇌하수체 선종
D. 성조숙증

## 해설

고환 종괴에 강한 남성화 소견, 여드름·얼굴 털과 빠른 신체 성장 양상이 동반되어 안드로겐 분비성 Leydig 세포 종양 A가 가장 적절하다. 얼굴 털은 본문 소견이지만 남성형 탈모는 제시되지 않았다. 10세의 사춘기 징후만으로 성조숙증을 확정하는 것이 아니라 고환 종괴와 호르몬성 소견의 원인을 묻는 문항이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 실제 얼굴 털을 남성형 탈모로 바꾼 오류 교정; 종괴와 안드로겐 과다의 Leydig 종양 A 연결.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008930
