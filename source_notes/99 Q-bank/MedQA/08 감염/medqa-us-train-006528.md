---
type: qbank
schema_version: 1
id: medqa-us-train-006528
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05b5dae2995ef4916c9d5825bca13d09ffc9634fc14bc33c972faaf83ff03c2d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "휘플병"
  - "트로페리마 휘플리 감염"
  - "감염성 심내막염"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

69세 여성이 체중 감소를 걱정하는 아들과 함께 주치의를 방문했다. 아들에 따르면 지난 2개월 동안 최소 12파운드 체중이 감소했다. 식욕 변화는 없지만 설사와 복부 불편감이 있다. 대변에서 ‘지독한 냄새’가 나서 당황스럽다고 한다. 아들은 기억력이 떨어지는 것 같다고 말한다. 전화 통화를 잊고, 전날 밤 방문을 확인했는데도 아들이 오면 깜짝 놀란다. 관절염이 점점 심해지고 있으며 위식도역류질환으로 오메프라졸을 복용한다. 최근 국립공원 관리원에서 은퇴했고 배우자와 사별했다. 체온은 100.3°F(37.9°C), 혈압은 107/68 mmHg, 맥박은 분당 88회이다. 진찰에서 왼쪽 흉골 상부에 새로운 수축기 박출 잡음이 들린다. 검사에서 정상적혈구성 빈혈이 있다. 경식도 심초음파에서 대동맥판막에 작은 이동성 종괴와 중등도 대동맥판막부전이 보인다. 대장내시경과 소장 생검을 시행했으며, 과요오드산-시프 염색에서 거품세포가 양성이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 세프트리악손과 트리메토프림-설파메톡사졸
B. 식이 변화
C. 이부프로펜과 하이드록시클로로퀸
D. 프레드니손 후 설파살라진

## 해설


PAS 양성 거품 대식세포·흡수장애·관절증상·인지변화와 판막 병변은 T.whipplei 감염에 합당하다. A는 CNS 침투성 ceftriaxone 유도 후 장기 cotrimoxazole 치료로 해석하는 유효한 접근이다. 두 약의 단기 동시 병용이 모든 경우의 유일 표준이라는 뜻은 아니다. ESC는 Whipple 심내막염에 doxycycline+hydroxychloroquine 장기 요법과 ceftriaxone 후 cotrimoxazole 대안 등을 제시하며 trimethoprim 자체의 균 활성은 없어 재발·내성·CNS 침범과 전체 요법을 전문팀이 관리해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006528 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Whipple병 장·신경·심장 침범의 A 유지; 동시 단기 병용 표준이 아닌 유도 후 장기 치료 순서 및 ESC 대안 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107?searchresult=1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006528
