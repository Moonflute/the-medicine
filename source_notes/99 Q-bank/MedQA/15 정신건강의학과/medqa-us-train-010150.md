---
type: qbank
schema_version: 1
id: medqa-us-train-010150
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a128cbd291cd0472e0dd8c8509373d4d5ba00b17e5c117bab31c9d56b6db7772
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경이완제 악성 증후군"
  - "메토클로프라미드"
  - "할로페리돌"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 초기 환자가 구토 때문에 메토클로프라미드를 시작한 지 사흘 뒤 고열과 혼란을 보인다. 전신에 지속적인 강직이 있고 반사가 저하됐으며 간대는 없다. 크레아틴키나아제가 상승했다. 진단은?

## 선택지

A. 신경이완제 악성증후군
B. 세로토닌 독성
C. 급성 국소 근긴장이상
D. 항콜린성 중독

## 해설

메토클로프라미드도 도파민 차단 작용으로 신경이완제 악성증후군을 일으킬 수 있다. 현저한 지속성 강직은 간대와 반사항진이 두드러지는 세로토닌 독성과 감별하는 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 같은 증후군을 추가로 일으킬 수 있는 약물을 묻는데 할로페리돌이 실제 투여된 원인 약물이라고 오인시킨 해설을 교정했다.
- https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5d31d815-50fa-4e78-8ebd-affc2514ce78

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010150
- https://pubmed.ncbi.nlm.nih.gov/27423483/
