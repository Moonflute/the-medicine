---
type: qbank
schema_version: 1
id: medqa-us-train-000091
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68c48f7ab3bd3c2a223fa9811e39e3ccee5f0e6d0de3617e781ae518c7ef7a0c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "osteoarthritis"
  - "diabetes"
  - "hyperlipidemia"
  - "hypertension"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU2ltdmFzdGF0aW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
---

# MedQA US 임상문제

## 문제

68세 남성이 무릎 인공관절 수술 12일 뒤 고름과 관절통으로 내원했다. 증상은 이틀째이고 깊은 인공관절 감염이 확인됐다. 인공관절은 단단히 고정돼 있고 누공은 없으며 연조직 봉합이 가능하다. 우선 고려할 치료는?

## 선택지

A. 경구 항생제만 장기 투여
B. 상처 드레싱과 관절 운동만 시행
C. 신속히 수술로 변연절제하고 교체 가능한 부품을 바꾼 뒤 항생제를 사용한다
D. 항상 인공관절 전체를 제거하는 2단계 재치환술을 시행한다

## 해설


수술 직후 발생한 급성 인공관절 감염에서 증상이 짧고 고정이 안정적이며 연조직이 양호하면 변연절제, 교체 가능한 부품 교환, 배양에 따른 항생제로 고정된 인공관절을 보존할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000091 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인공관절 수술 5일 후 괴사 피부·창상 열림·농성 배액은 조기 수술적 변연절제 A를 지지한다. 원문·선지·정답·해설 일치; 심부감염 평가와 배양·항생제 필요성을 배제하는 답은 아니다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aaos.org/globalassets/quality-and-practice-resources/surgical-site-infections/ssi-companion-consensus-statements_-6.20.2018.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000091
- https://pubmed.ncbi.nlm.nih.gov/40463685/
