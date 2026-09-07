# 실전문제 연동

문제 선택은 이론·임상·실전 탭으로 나뉜다. 선택은 상위 컴포넌트에서 보관하고 페이지별 sessionStorage에 임시 저장한다. 이론 그룹 전체 선택은 다른 이론 그룹을 지우지 않는다. 실전 필터는 책을 반드시 선택하며, 책·분과·출제년도 사이에는 AND, 같은 항목 안에서는 OR를 적용한다. BANK의 미상 출제년도와 책 발행년도를 구분한다.

## 비공개 데이터 계약

앱 소스나 public/generated에는 스캔 콘텐츠와 실전 인덱스를 넣지 않는다. 클라이언트는 기존 Supabase 세션으로 아래 RPC를 호출한다. DB 구조와 RLS는 `supabase/migrations/20260907150953_private_qbank_approved_access.sql`에 기록되어 있다.

- `private_qbank_index()` → `PracticeIndex[]` 형태의 JSON 배열. 승인되지 않은 계정에는 빈 배열을 반환한다. JSON 반환으로 기본 REST 행 제한에 따른 전체 인덱스 잘림을 피한다.
- `private_qbank_questions(requested_ids text[])` → `QbankQuestion[]` 형태의 JSON 배열. 각 요청을 승인 목록 및 RLS로 검사한다. 요청에 없는 ID는 반환하지 않는다.
- `private-qbank` Storage 버킷은 private이어야 한다. `figures` 배열에는 문제 풀이에 필요한 사진·영상·도표만 넣는다. 문제 전체 캡처와 해설 페이지는 업로드하지 않는다. 클라이언트는 인증된 download 후 메모리 Blob URL로 표시하며 공개 URL·서명 URL·이미지 프록시를 사용하지 않는다.

`private_qbank_access`에 등록된 사용자 UUID의 `enabled`가 true일 때만 목록·문항·Storage를 읽을 수 있다. 사용자는 승인 목록을 수정할 권한이 없다. RPC는 security invoker로 실행되어 직접 테이블 조회와 동일한 RLS를 적용한다. 승인 대상의 이메일과 UUID는 공개 저장소에 기록하지 않는다. 클라이언트에는 관리자 키를 넣지 않는다.

## 로컬 데이터 준비

실제 콘텐츠는 Git에서 제외된 작업공간 `Qbank book/_private/practice-package/`에 별도로 생성한다. `index.json`과 `questions.json`은 위 RPC의 반환 구조에 대응한다. 그림은 `figure-review/approved.json`에서 확인된 `figures/` 파일만 사용한다. 전체 스캔과 검토용 이미지는 로컬에 보존한다. 링크는 기존 diseases/chief-complaints/drugs의 slug를 사용하고, 관련 이론문항은 해당 문서를 target으로 갖는 기존 theory question ID를 사용한다.

분류는 모델이 제안한 연결이며 `linkReview`에 신뢰도·근거·연결하지 못한 개념을 보존한다. 기존 이론문항이 없는 경우 빈 배열을 유지한다. OCR 검수 상태와 이론 연결 상태는 별개다. 5지선다 E 및 정답 null을 지원하며, 정답 미확인 문항은 정오답 집계에서 제외한다.

## 검증

`node --experimental-strip-types --test scripts/test-practice-selection.mjs`로 그룹 선택 보존과 실전 필터 교집합·미상년도를 검사한다. 브라우저에서 세 탭, 혼합 선택 URL, 새로고침 복원, 키보드 이동, 모바일 가로 넘침을 검증했다.

실제 DB의 authenticated 역할과 사용자 JWT claim을 사용한 트랜잭션 검사에서 승인 계정은 전체 인덱스, 미승인 계정과 비활성 계정은 문제·이미지 0건을 조회했다. anon HTTP의 RPC 및 테이블 읽기는 401로 차단되었다. 승인 목록을 사용자가 직접 수정할 수 없음을 확인했다. 기존 풀이 기록 RPC의 E 답안 저장도 롤백 트랜잭션으로 검증했다. 실제 두 기기 Google 로그인 후 화면과 기록을 주고받는 검증은 별도로 남아 있다.

문제별 기록은 1,000행씩 페이지를 나누어 읽어 대량 풀이 기록이 기본 응답 제한으로 잘리지 않게 한다. 임시 업로드 기능은 가져오기 완료 후 토큰을 폐기하고 닫아야 한다. 파일별 원본 해시와 진행 보고서는 공개 저장소에 포함하지 않는다.
