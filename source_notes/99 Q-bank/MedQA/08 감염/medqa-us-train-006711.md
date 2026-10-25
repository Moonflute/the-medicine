---
type: qbank
schema_version: 1
id: medqa-us-train-006711
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ed537e776abded35c6975a792cd4a918758ac4fdd6600c9a456e46083b10be1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "주사약물사용자 감염성 심내막염"
  - "우측 심내막염"
  - "황색포도알균"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: management
difficulty: simple
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

정맥주사 약물 사용력이 있는 37세 남성이 일주일 동안 지속된 발열, 오한 및 권태감으로 응급실에 내원했다. 최근 헤로인을 정맥과 근육으로 사용했다고 한다. 체온은 40.0°C, 심박수는 분당 120회, 혈압은 110/68 mmHg, 호흡수는 분당 14회, 산소포화도는 98%이다. 진찰에서 왼쪽 흉골 하부 경계에서 가장 크게 들리는 새로운 수축기 잡음이 있다. 초기 치료로 다음 중 어떤 요법을 투여해야 하는가?

## 선택지

A. 정맥 반코마이신
B. 정맥 반코마이신과 정맥 세프트리악손
C. 정맥 반코마이신, 정맥 겐타마이신 및 경구 리팜핀
D. 정맥 반코마이신, 정맥 세프트리악손 및 정맥 플루코나졸

## 해설


주사약물 사용·고열·새 삼첨판 잡음은 IE를 의심하게 하며 특히 S.aureus가 중요하다. S.aureus와 Enterococcus는 다른 균이다. 선택지 B의 vancomycin+ceftriaxone은 배양 전 그람양성 및 추가 균 범위를 확보하는 접근으로 선택하되 모든 IE의 고정 표준은 아니다. 배양을 신속히 채취하고 판막 종류·지역 내성·급성 경과에 따라 조정하며 감수성 확인 후 좁힌다. 인공물 근거 없이 rifampin/gentamicin을 일률 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006711 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: S.aureus를 Enterococcus라 부른 명백한 균명 오류 교정; native IE 경험적 B의 조건 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107?searchresult=1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006711
