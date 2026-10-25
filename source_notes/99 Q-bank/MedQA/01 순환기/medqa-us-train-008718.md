---
type: qbank
schema_version: 1
id: medqa-us-train-008718
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:650cd83f89ca7bfba9798c93a5025841cbfae4380b4f9efe913f027b4d82d863
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "renal artery stenosis"
  - "renovascular hypertension"
  - "hypokalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: diagnosis
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGltZXBpcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여성이 추적검사를 위해 내원했다. 2주 전 지속적으로 높은 혈압 때문에 항고혈압제를 조절하며 리시노프릴을 처방받았다. 당시 전혈구검사와 신장기능은 정상 범위였다. 지난 한 달 동안 피로와 잦은 두통이 있었다. 고혈압, 제2형 당뇨병, 다낭성 난소질환, 고지혈증이 있다. 어머니에게 갑상선기능항진증과 고혈압이 있다. 현재 암로디핀과 히드로클로로티아지드를 최대 용량으로, 리시노프릴, 메트포르민, 글리메피리드, 아토르바스타틴을 복용한다. 흡연은 한 적 없고 매일 저녁 와인 1~2잔을 마신다. 키 167cm, 체중 81.6kg, BMI 30kg/m²이다. 양팔 혈압 170/110mmHg, 심박수 90회/분, 호흡수 12회/분이다. 비만 외 신체검사에서 이상은 없다. 혈색소 14g/dL, 백혈구 7,800/mm³, Na⁺ 139mEq/L, K⁺ 3.4mEq/L, Cl⁻ 100mEq/L, 크레아티닌 2.1mg/dL, BUN 29mg/dL, TSH 3μU/mL이다. 소변에서 혈액과 단백은 음성이고 포도당 1+이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 갑상선기능항진증
B. 당뇨병성 신장병
C. 다낭성 신장질환
D. 신동맥 협착

## 해설

리시노프릴 투여 전 정상 신기능이었으나 2주 만에 크레아티닌이 2.1 mg/dL로 상승했고, 여러 항고혈압제에도 고혈압이 지속된다. 이 조합에서는 D, 신동맥 협착을 의심한다. 특히 양측성 또는 단일 기능 신장의 협착에서는 사구체 여과 유지에 필요한 안지오텐신 II 작용을 차단하면 신기능이 악화될 수 있다.

당뇨병성 신장병의 점진적 경과보다는 약제 시작과 연관된 급격한 변화가 핵심이다. 저칼륨혈증만으로 원발성 알도스테론증을 확진할 수 없으며, 이 문항에는 알도스테론·레닌 결과가 없다. 따라서 생리식염수 부하시험을 정답 해설로 연결해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원발성 알도스테론증/생리식염수 부하 해설을 ACE 억제제 후 급성 신기능 악화와 신동맥협착 설명으로 교체. 원정답 D 유지.
- https://www.niddk.nih.gov/health-information/kidney-disease/renal-artery-stenosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008718
