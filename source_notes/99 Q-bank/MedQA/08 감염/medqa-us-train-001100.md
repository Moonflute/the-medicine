---
type: qbank
schema_version: 1
id: medqa-us-train-001100
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e473cd1114df3834e86df3ef9d2914a190a9dbdfdc4baa903340b8d69f7c622
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Central line-associated blood stream infection"
  - "Catheter-associated urinary tract infection"
  - "Bowel ischemia"
  - "Surgical site infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MDgg6rCQ7Je8L-uPhOq0gCDqtIDroKgg6rCQ7Je8IChDYXRoZXRlci1SZWxhdGVkIEluZmVjdGlvbikubWQ
  - MDgg6rCQ7Je8L-ybkOuCtOqwkOyXvC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

관상동맥 우회술(coronary bypass surgery)을 받은 지 3일 후, 67세 남성이 반응이 없고 저혈압 상태가 되었습니다. 환자는 삽관 후 기계 환기를 시작하였고 중심정맥관(central line)을 삽입하였습니다. 바소프레신(vasopressin)과 노르아드레날린(noradrenaline) 주입을 시작하였고, 폴리 카테터(Foley catheter)를 삽입하였습니다. 6일 후, 환자는 고열이 지속되었습니다. 현재 주입 펌프를 통해 노르아드레날린을 투여받고 있습니다. 체온은 39.6°C(103.3°F), 맥박은 분당 113회, 혈압은 90/50 mm Hg입니다. 진찰 결과 흉골 상처 주변에 홍반이 관찰되나 상처에서 분비물은 없습니다. 양측 폐 기저부에서 수포음(crackles)이 들립니다. 심장 진찰에서는 S3 말발굽 리듬(S3 gallop)이 확인됩니다. 복부 진찰에서는 이상 소견이 없습니다. 폴리 카테터가 삽입되어 있습니다. 혈색소 농도는 10.8 g/dL, 백혈구 수는 21,700/mm3, 혈소판 수는 165,000/mm3입니다. 중심정맥관과 말초 정맥 라인에서 동시에 혈액 배양 검체를 채취하였습니다. 수술 후 8일째 중심정맥관에서 채취한 혈액 배양 검사에서 응고효소 음성 포도상구균(coagulase-negative cocci in clusters)이 확인되었고, 수술 후 10일째 말초 정맥 라인에서 채취한 혈액 배양 검사에서도 동일한 균이 확인되었습니다. 이 환자에서 가장 가능성이 높은 진단은 무엇입니까?

## 선택지

A. 중심정맥관 관련 혈류 감염(Central line-associated blood stream infection)
B. 카테터 관련 요로 감염(Catheter-associated urinary tract infection)
C. 장 허혈(Bowel ischemia)
D. 수술 부위 감염(Surgical site infection)

## 해설


동시에 채취한 카테터와 말초혈액에서 같은 coagulase-negative staphylococcus가 자라며 카테터 검체가 더 먼저 양성이 된 것은 카테터 관련 혈류감염을 지지한다. 일반적으로 같은 균의 카테터 검체가 말초보다 ≥2시간 먼저 양성이면 진단에 도움이 된다. 이 균은 피부 상재균이므로 오염 가능성과 다른 감염원도 함께 평가하며, 단지 혈액배양이 양성이라는 사실만으로 카테터 원인이 확정되는 것은 아니다. 원문은 3일째 처치 후 6일 뒤 발열이라고 하면서 8·10일째 배양 결과를 제시하는 시간축 불일치가 있어, 정확한 일수는 추가 검토가 필요하나 보기 중 A의 핵심 근거는 유지된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001100 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 단순 양성 혈액배양만으로 카테터 원인을 확정한 설명 대신 동일 균·동시 채혈 후 양성시간 차를 설명. 원문 수술일 시간축 불일치는 보존.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/cid/article/49/1/1/369414

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001100
