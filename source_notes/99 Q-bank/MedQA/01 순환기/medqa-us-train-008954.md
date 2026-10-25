---
type: qbank
schema_version: 1
id: medqa-us-train-008954
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8cdde385d75a429976ae66485c7e3b0e2c9c7213c076aa934fc03285b8bec725
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "retroperitoneal hematoma"
  - "cardiac catheterization complication"
  - "femoral access"
  - "Retroperitoneal hematoma"
related_disease_slugs: []
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

선택적 심장도관술을 받은 지 1시간 30분 후, 53세 여성이 오른쪽 옆구리와 허리 통증을 느꼈다. 고혈압, 고콜레스테롤혈증, 제2형 당뇨병이 있고 좌전하행동맥 80% 협착으로 스텐트 2개를 삽입했다. 시술 전 비분획 헤파린을 사용했다. 입원 전 약은 에날라프릴, 심바스타틴, 메트포르민이었다. 체온 37.3°C(99.1°F), 맥박 102회/분, 혈압 109/75mmHg이다. 하복부 압통이 있으나 방어와 경직은 없고 오른쪽 서혜부 위쪽이 팽창되고 압통이 있다. 대퇴부 접근 부위에는 출혈이나 분비물이 없고 양측 대퇴·발 맥박은 만져진다. 생리식염수 주입을 시작했다. 혈구검사에서 헤마토크릿 36%, 백혈구 8,400/mm³, 혈소판 230,000/mm³이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 프로타민 황산염 투여
B. 복부 및 골반 CT
C. 정맥 아트로핀 투여
D. 심전도 시행

## 해설


대퇴동맥 접근 후 복부·골반 통증과 혈종은 레트로퍼리테랄 혈종을 의심한다. 진단을 위해 CT 스캔이 가장 신속하고 정확한 영상이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대퇴동맥 도관 후 옆구리·등 통증과 서혜부 위 팽창은 후복막출혈 의심으로 안정 시 복부골반 CT B가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008954
