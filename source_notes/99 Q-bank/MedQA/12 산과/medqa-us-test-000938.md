---
type: qbank
schema_version: 1
id: medqa-us-test-000938
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b1304840d271f9b42a0a21d3d8c3919d4169d495e3e2131dd347ce566b885827
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 급성 지방간"
  - "HELLP 증후군"
  - "재발 위험"
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDquInshLEg7KeA67Cp6rCEIChBY3V0ZSBGYXR0eSBMaXZlciBvZiBQcmVnbmFuY3kpLm1k
  - MTIg7IKw6rO8L0hFTExQIOymne2bhOq1sCAoSEVMTFAgU3luZHJvbWUpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 34주 산모가 구토, 황달과 의식 저하로 왔다. 포도당 44 mg/dL, INR 2.1이고 혈소판은 19만/μL다. 아미노전이효소는 중등도로 증가했고 용혈 증거는 없다. 이 소견에 가장 잘 맞는 진단은?

## 선택지

A. 임신성 급성 지방간
B. 임신성 간내 담즙정체
C. 임신 초기의 단순 입덧
D. 임신성 고혈압만 있는 상태

## 해설

임신 후기의 간기능 이상에 저혈당·응고장애·뇌병증이 같이 있으면 임신성 급성 지방간을 우선 의심한다. 즉시 저혈당과 응고장애를 관리하고 전문팀이 산모 안정화와 신속한 분만을 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전자간증으로 잘못 단정하고 가족력을 무의미하다고 한 해설 수정; 원문 혈소판 수 복원.
- https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/ijgo.70161

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000938
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12177296/
