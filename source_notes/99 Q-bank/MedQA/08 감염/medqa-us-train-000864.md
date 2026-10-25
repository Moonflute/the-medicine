---
type: qbank
schema_version: 1
id: medqa-us-train-000864
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:afeb0ebffdd5575c6c40a27ea5139bce71d19085a986f68820506b2a3aa1bc8d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "urinary tract infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
question_type: prevention
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

23세 여성이 2일간의 빈뇨와 배뇨통으로 내원하였다. 지난 1년간 유사한 증상이 3회 있었으며 항생제 치료로 호전되었다. 심각한 질환의 과거력은 없다. 한 명의 남성 파트너와 성생활을 하고 있으며, 차단 피임법은 사용하지 않는다. 문진 결과, 성관계 후 항상 소변을 보고 뒷처리를 한다고 한다. 하루에 2~3리터의 수분을 섭취한다. 복용 중인 약물은 복합 경구 피임약뿐이다. 체온은 36.9°C, 맥박은 65회/분, 혈압은 122/65 mm Hg이다. 신체 검진상 하복부에 경미한 압통이 관찰된다. 그 외 신체 검진상 이상 소견은 없다. 소변 검사에서 백혈구와 드문 그람 양성 구균이 관찰된다. 향후 유사한 에피소드를 예방하기 위한 가장 적절한 권고 사항은 무엇인가?

## 선택지

A. 성관계 후 질 유산균(probiotics) 투여
B. 파트너의 근육주사용 세프트리악손(ceftriaxone) 치료
C. 성관계 후 경구 아목시실린-클라불라네이트(amoxicillin-clavulanate) 복용
D. 매일 경구 트리메토프림-설파메톡사졸(trimethoprim-sulfamethoxazole) 복용

## 해설


연 3회 이상 재발한 방광염에서 급성 감염을 치료하고 소변배양으로 재발을 확인한 뒤, 위험과 이득을 상의하여 저용량 지속 항생제 예방요법을 고려할 수 있다. 보기 중 D가 이에 해당한다. 성교 연관 재발에서는 적절한 약제를 이용한 성교 후 단회 예방도 효과가 있어 지속요법이 항상 더 우월한 것은 아니다. 약제는 배양 감수성·알레르기·내성·부작용에 따라 정하며 C의 amoxicillin-clavulanate는 표준 성교 후 예방 선택이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000864 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지속 예방요법이 성교 후 예방보다 일률적으로 우월하다는 오류를 제거; 배양·내성·부작용을 고려한 TMP-SMX 선택으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/Guidelines/PDF/2025%20Guidelines/rUTI%20Update/rUTI%202025%20Unabridged%20Final.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000864
