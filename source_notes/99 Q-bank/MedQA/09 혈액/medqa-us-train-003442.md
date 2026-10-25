---
type: qbank
schema_version: 1
id: medqa-us-train-003442
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c52fee7163544977665aa1ddfa037c5c45b9a943d446608aaa2016d2b6b3587e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "paroxysmal nocturnal hemoglobinuria"
  - "intravascular hemolysis"
  - "Budd-Chiari syndrome"
  - "flow cytometry"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
  - MDkg7ZiI7JWhL-2YiOq0gCDrgrQg7Jqp7ZiIIChJbnRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
  - MDMg7IaM7ZmU6riwL-uyhOuTnC3tgqTslYTrpqwg7Kad7ZuE6rWwIChCdWRkLUNoaWFyaSBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

27세 여성이 왼쪽 두통과 오른쪽 시야흐림으로 응급실에 왔다. 2주 전부터 짙은 소변과 복통이 있어 남아 있던 트리메토프림-설파메톡사졸을 복용했다. 검사에서 혈색소 7.0 g/dL, 망상적혈구 5.4%, LDH 3128 U/L, 간접 빌리루빈 1.4 mg/dL였다. 말초혈액도말에서 다염성이 보였고 간 도플러 초음파에서 오른쪽 간정맥 혈류가 감소했다. 다음 중 검사를 시행하면 진단을 확인할 가능성이 가장 높은 것은?

## 선택지

A. 항히스톤 항체
B. 유세포분석
C. 포도당-6-인산탈수소효소 수치
D. 헤모글로빈 전기영동

## 해설


빈혈·짙은 소변·높은 LDH와 간정맥 혈류 저하는 혈관내 용혈과 비전형 부위 정맥혈전을 함께 시사하여 PNH를 의심한다. 다염색증은 망상적혈구 증가 관련 적혈구 소견이지 다형핵백혈구가 아니다. 유세포분석 B로 GPI 연결 단백 결핍을 평가하며 적혈구 CD55/CD59 및 과립구/단핵구의 적절한 표지·FLAER 등을 사용한다. TMP-SMX 노출만으로 G6PD 용혈을 선택하면 혈전 단서를 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003442 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 다염색증을 다형핵세포, 혈관내 용혈을 삼출성 용혈이라 한 오류 교정; 비전형 부위 혈전·용혈에서 PNH 유세포분석 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1002/cyto.b.20525

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003442
