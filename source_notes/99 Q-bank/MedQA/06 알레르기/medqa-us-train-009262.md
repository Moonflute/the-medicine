---
type: qbank
schema_version: 1
id: medqa-us-train-009262
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d568a9b46f3c8b4f115977771064039f2ead38bc1c10a1370bc3fe5ce7bc5aa1
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "purulent cellulitis"
  - "화농성 봉와직염"
  - "MRSA infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yXsOyhsOyngeyXvCAoQ2VsbHVsaXRpcykubWQ
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
question_type: management
difficulty: standard
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

63세 남자가 2일 동안 오른쪽 다리의 발적, 부종, 통증으로 내원했다. 발열, 오한, 오심도 있고 환부에서 액체가 스며 나온다. 고혈압과 위식도 역류병이 있으며 3개월 전 고관절 골절 치료로 입원했다. 현재 메토프롤롤, 에날라프릴, 오메프라졸을 복용한다. 체온 38.7°C, 맥박 106회/분, 혈압 142/94 mmHg이다. 오른쪽 하퇴에 경계가 불분명한 넓은 홍반과 고름 배액이 있고, 파동은 없으며 따뜻하고 만지면 아프다. 오른쪽 서혜부에 커지고 압통이 있는 림프절이 여러 개 만져진다. 양쪽 발목에 경미한 부종이 있다. 혈액과 상처 배양을 채취했다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 프레드니손 치료
B. 절개 및 배농
C. 반코마이신 치료
D. 디클록사실린 치료

## 해설


화농성 배액에 발열과 빈맥이 동반되어 MRSA를 포함한 중증 피부연조직감염에 대한 경험적 치료가 필요하다. 선택지 중 반코마이신(C)이 적절하다. 파동이 없어 배농할 농양이 명확하지 않으며, 모든 봉와직염에 반코마이신이 필요한 것은 아니다. 배양과 임상 경과에 따라 좁은 범위로 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009262`와 직접 대조했다.
- 판정: 화농성 감염과 발열·빈맥에서 MRSA 포함 경험적 치료 C 적절. 반코마이신이 모든 봉와직염의 최선이라는 일반화 제거. 불일치 플래그는 오연결 아님.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009262
