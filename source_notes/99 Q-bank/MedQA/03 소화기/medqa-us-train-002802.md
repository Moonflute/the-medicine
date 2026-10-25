---
type: qbank
schema_version: 1
id: medqa-us-train-002802
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7bbb5a843e4c17153a061c458f2bc1a6f7c9ed0bdbf01b183ac5560d3bacbbdb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute colonic pseudo-obstruction"
  - "Ogilvie syndrome"
  - "cecal dilation"
  - "peritonitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

관상동맥질환으로 관상동맥우회술을 받은 지 4일 후 60세 남성이 복부 충만감과 팽만을 호소했다. 수술 후 배변을 하지 못했고 방귀도 나오지 않는다. 오심이나 구토는 없다. 수술 전에는 매일 정상적으로 배변했다. 양극성장애와 고혈압이 있으며 아스피린, 아토르바스타틴, 클로르프로마진, 암로디핀, 예방적 피하 헤파린을 복용한다. 체온은 39°C, 맥박은 110회/분, 혈압은 120/80 mmHg이다. 복부는 팽창되고 고막음이 나며 방어와 반발통이 있고 장음은 감소되어 있다. 복부 X선에서 결장 고리의 광범위한 팽창이 보이며 조영 CT에서 맹장 직경 14 cm가 확인된다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 비위관과 직장관 삽입
B. 대장내시경
C. 정맥 네오스티그민 치료
D. 개복술

## 해설

수술 후 심한 대장 확장에 고열·빈맥·방어·반발통이 동반되어 허혈 또는 천공을 의심해야 한다. 따라서 D의 즉각적인 외과 평가·수술 접근이 적절하다. 합병증 없는 가성폐쇄에서 쓰는 보존치료, neostigmine 또는 내시경 감압만으로 지연해서는 안 된다. 맹장 직경만이 아니라 복막자극 소견이 핵심이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Ogilvie에서 수술 D의 결정적 근거를 단순14cm가 아니라 고열·반발통/방어의 허혈·천공 의심으로 명시.
- https://www.asge.org/home/resources/publications/guidelines/american-society-for-gastrointestinal-endoscopy-guideline-on-the-role-of-endoscopy-in-the-management-of-acute-colonic-pseudo-obstruction-and-colonic-volvulus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002802
