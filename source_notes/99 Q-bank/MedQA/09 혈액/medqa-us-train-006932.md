---
type: qbank
schema_version: 1
id: medqa-us-train-006932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f2a85018ad033505c9b52f694a96a80c25161863b239724dad1b2677df45f128
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "AL 아밀로이드증"
  - "신증후군"
  - "제한성 심근병증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDEg7Iic7ZmY6riwL-ygnO2VnOyEsSDsi6zqt7zrs5Hspp0gKFJlc3RyaWN0aXZlIENhcmRpb215b3BhdGh5KS5tZA
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

65세 남성이 지난 2개월 동안 다리와 얼굴이 점점 붓는 증상으로 내원했다. 이완기 심장기능장애 병력이 있고 간과 비장이 늑골 아래 4cm까지 만져진다. 양쪽 하지에 무릎 위와 골반까지 이어지는 심한 함요부종이 있다. 검사에서 콜레스테롤 350 mg/dL, 중성지방 290 mg/dL, 칼슘 8 mg/dL, 알부민 2.8 g/dL, BUN 54 mg/dL, 크레아티닌 2.5 mg/dL, 소변 혈액 3+, 단백 4+, 적혈구 15~17/고배율시야, 백혈구 1~2/고배율시야, 적혈구 원주 다수이다. 심초음파에서 심실이 동심성으로 두꺼워지고 이완기 장애가 있으며 골격조사에서 골용해 병변은 없다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. AL 아밀로이드증
B. 무증상 다발성 골수종
C. 증상성 다발성 골수종
D. 발덴스트롬 거대글로불린혈증

## 해설


신증후군성 단백뇨/저알부민·부종과 두꺼운 심실벽·이완기 장애는 전신 amyloidosis를 의심하게 하여 선택지 A가 가장 부합한다. 하지만 AL 확진에는 단클론단백/유리경쇄 평가와 조직 amyloid 확인·typing이 필요하다. 특히 원문의 다수 RBC cast는 전형적인 단순 amyloid 신증에 비전형적이므로 동반 사구체염 등도 평가한다. 골용해 병변이 없다는 것만으로 모든 형질세포 질환을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006932 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AL amyloid A 가능성 유지; 활동성 요침사·단백형 확인 및 조직 typing 필요성 보강.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006932
