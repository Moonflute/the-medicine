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
explanation_status: "manual-reviewed"
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

53세 여성이 대퇴동맥으로 관상동맥중재술을 받은 지 2시간 뒤 새로 심한 오른쪽 옆구리·허리 통증을 호소한다. 천자 부위에 뚜렷한 외부 출혈은 없지만 혈색소가 2.5 g/dL 떨어졌다. 현재 혈압은 118/74 mmHg로 유지되며 CT실로 이동할 수 있다. 가장 적절한 검사는?

## 선택지

A. 경흉부 심초음파
B. 복부·골반 CT
C. 뇌 CT
D. 흉부 CT 혈관조영술

## 해설


대퇴동맥 천자 뒤 옆구리나 허리 통증과 혈색소 감소가 함께 생기면 후복막 출혈을 의심한다. 이 경우 천자부위 겉으로 출혈이 보이지 않을 수 있다. 안정적이면 복부·골반 CT로 확인하고, 불안정하면 영상 때문에 소생과 지혈을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대퇴동맥 도관 후 옆구리·등 통증과 서혜부 위 팽창은 후복막출혈 의심으로 안정 시 복부골반 CT B가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008954
- https://www.scai.org/quality-improvement-tools/qi-tips/quality-initiatives-prevent-and-manage-major-femoral-access-site
