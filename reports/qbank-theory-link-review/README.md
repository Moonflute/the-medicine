# 실전문제 관련 이론 연결 전수 검토

## 범위

- 정본: Supabase `public.private_qbank_canonical_items`
- 대상: `payload.questionBank = practice`인 실전문제 2,074개
- 제외: 이론문제, MedQA 원문 자료, 불변 원본 `private_qbank_items`
- 분할 키: 문제 ID의 실전 파트 코드 `IM`, `GS`, `OG`, `PE`

## 판정 원칙

1. 문제 본문, 보기, 정답, 해설을 모두 읽고 정답을 결정하는 핵심 이론을 우선한다.
2. 확정 질환은 가장 구체적인 개별 질환 문서를 연결한다.
3. 대표 문서는 여러 하위 질환의 공통 원리나 감별을 실제로 묻는 경우에만 연결한다.
4. CC는 증상 중심 접근과 초기 감별 자체가 학습 목표일 때만 연결한다.
5. 오답 보기에만 등장하거나 병력에 우연히 언급된 질환은 연결하지 않는다.
6. 약물 모니터링·용량·상호작용 문제는 기존 약물 문서가 충분하면 질환 문서를 억지로 추가하지 않는다.
7. 적절한 문서가 없으면 넓은 분과 대표 문서로 대체하지 않고 `no-suitable-document`로 기록한다.
8. 제목으로 자동 매칭하지 않고 `(type, slug, category)`를 정본 카탈로그와 대조한다.
9. 상위 대표 문서와 하위 문서를 동시에 넣지 않는다. 문제에서 그 중첩이 명시적으로 필요할 때만 사유를 남긴다.
10. 이미지가 정답을 좌우하지만 이미지 맥락을 확정할 수 없으면 `image-dependent`와 낮춘 확신도를 기록한다.

## 검토 파일

각 JSON 행에는 다음을 기록한다.

- `id`, `payloadHash`
- `currentDocuments`
- `proposedDocuments`
- `action`: `add`, `replace`, `remove`, `keep`, `keep-drug-only`, `no-suitable-document`, `needs-review`
- `rationale`, `confidence`, `flags`
- 정확한 문서가 없으면 `noSuitableDocument: true`, `neededDocument`

## 반영 안전장치

- `payloadHash`가 검토 시점과 같은 행만 수정한다.
- 기존 drug 문서는 그대로 보존한다.
- disease/CC 문서, slug 배열, 표시용 제목 배열과 `index_data`를 한 트랜잭션에서 함께 갱신한다.
- 기존 기계 분류 결과는 `linkReview`의 이전 상태로 보존한다.
- 반영 후 미존재 slug, 오래된 제목, 중복 링크, 상·하위 중복, payload/index 불일치를 다시 검사한다.

검증 명령:

```bash
node apps/medicine-web/scripts/validate-qbank-theory-link-review.mjs
```
