# 대표 범위 이론 문서 추가 보강 완료

확인일: 2026-10-08

## 작업 범위

- 이번 추가 대상 **56개 완료**: 실전문제 연결 2회 12개, 1회 9개, 연결 0회 35개.
- 앞서 완료한 연결 3회 이상 대표 범위 84개와 합쳐 **140개 대표 범위 문서 보강 완료**.
- 이번 대상은 남은 대표·그룹 범위 문서다. 모든 개별 질환 문서를 새로 검토했다는 의미는 아니다.
- 최신 학회·공공기관 지침, 공식 임상 자료와 현행 전문가 참고자료를 주제별로 확인했다. 정식 최신 가이드라인이 없는 주제를 임의로 “2026 가이드라인”이라고 표시하지 않았다.
- 각 문서 끝에 실제 참고자료 이름·발행/개정 연도·링크를 기재했다. 열람 확인 연도와 지침 발행 연도를 구분했다.

## 실제 수정 위치

최종 원본은 메인 작업공간의 `source_notes/02 Diseases`와 정식 배포 폴더 `__deploy_repo/source_notes/02 Diseases`에 동기화했다. 아래 링크는 임시 체크아웃이 아닌 최종 원본을 가리킨다.

기존 로컬 파일은 `workspace_ops/local_sync_backups/source-reconcile-20261008/`에 보존했다. 문서 이외의 기존 staged 삭제·재생성 상태와 앱 코드는 변경하지 않았다.

## 보강 내용

공통적인 병태생리·평가·처치와 하위 질환 감별을 주제에 맞춰 작성했다. 일반적인 “구성 질환을 비교한다” 문구로 대체하지 않았다.

- 이상지질혈증: ACC/AHA 2026 지침.
- 지방간: MASLD 체계·섬유화 평가와 AASLD 2025 semaglutide 실무 개정.
- 수면장애: VA/DoD 2025, AASM 2025 RLS·2023 RBD 권고 및 잘못된 NREM/REM 설명 수정.
- 인지장애·치매: 섬망·독립성·병인별 감별, 혈액 바이오마커의 제한된 적용 범위, 항아밀로이드 치료의 적응증·MRI 안전성.
- 혈관·흉부 외상: ESVS/WSES-AAST 2025 권고, 혈관 손상을 ABI만으로 배제하지 않는 접근.
- 뇌출혈: ESO/EANS 2025 ICH·ESO/EANS/ESMINT 2026 SAH, 외상성 혈종과 뇌졸중의 구분, FDA Andexxa 안전성 공지.
- 정신과: 근거 기반 치료와 약물 범위, 기질 질환과 공존하는 신체 증상 장애, 조현정동장애 등 감별 오류 수정.
- 감염·진균·기생충, 희귀 신장질환, 소아 유전질환, 피부·중독·말초신경 손상도 개별 주제에 맞춰 보강했다.

## 간단한 확인 결과

- 이번 56개 YAML 파싱 오류: 0.
- Markdown 표: 56개, 표 구조 오류: 0.
- 참고자료 항목: 157개, 고유 URL: 153개.
- 기존 분류·계통·별칭·대표 역할·하위 질환 등의 frontmatter 보존 확인: 56/56.
- 기존 포함 질환 링크와 순서 보존: 56/56.
- diff 공백 오류: 0.
- 기존 잘못된 guideline_year 3곳은 실제 참고 지침 연도에 맞춰 수정했다.
- 로컬 전체 빌드·생성 JSON 재빌드·버전 변경·배포는 이번에 진행하지 않았다.
- 문서 작성 지침을 적용해 주제별 실제 내용과 간결한 참고자료 형식으로 정리했다.

## 완료 목록

| 번호 | 분과 | 문서 | 실전 연결 빈도 | 참고자료 수 |
| --- | --- | --- | --- | --- |
| 1 | 01 순환기 | [무해성 심잡음](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EB%AC%B4%ED%95%B4%EC%84%B1%20%EC%8B%AC%EC%9E%A1%EC%9D%8C.md) | 2 | 1 |
| 2 | 01 순환기 | [실신](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EC%8B%A4%EC%8B%A0.md) | 2 | 2 |
| 3 | 02 호흡기 | [기침](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EA%B8%B0%EC%B9%A8.md) | 2 | 1 |
| 4 | 05 신장 | [세관기능장애](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%84%B8%EA%B4%80%EA%B8%B0%EB%8A%A5%EC%9E%A5%EC%95%A0.md) | 2 | 3 |
| 5 | 05 신장 | [신혈관 질환](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%8B%A0%ED%98%88%EA%B4%80%20%EC%A7%88%ED%99%98.md) | 2 | 1 |
| 6 | 06 알레르기 | [Type II](../../source_notes/02%20Diseases/06%20%EC%95%8C%EB%A0%88%EB%A5%B4%EA%B8%B0/Type%20II.md) | 2 | 2 |
| 7 | 08 감염 | [기타 감염질환](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EA%B8%B0%ED%83%80%20%EA%B0%90%EC%97%BC%EC%A7%88%ED%99%98.md) | 2 | 3 |
| 8 | 08 감염 | [여행자·수인성 감염](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EC%97%AC%ED%96%89%EC%9E%90%C2%B7%EC%88%98%EC%9D%B8%EC%84%B1%20%EA%B0%90%EC%97%BC.md) | 2 | 3 |
| 9 | 08 감염 | [원생동물](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EC%9B%90%EC%83%9D%EB%8F%99%EB%AC%BC.md) | 2 | 4 |
| 10 | 15 정신건강의학과 | [물질 관련 및 중독성 장애 (Substance-Related and Addictive Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EB%AC%BC%EC%A7%88%20%EA%B4%80%EB%A0%A8%20%EB%B0%8F%20%EC%A4%91%EB%8F%85%EC%84%B1%20%EC%9E%A5%EC%95%A0%20(Substance-Related%20and%20Addictive%20Disorders).md) | 2 | 4 |
| 11 | 16 신경과-신경외과 | [척수 외상 (Spinal cord trauma)](../../source_notes/02%20Diseases/16%20%EC%8B%A0%EA%B2%BD%EA%B3%BC-%EC%8B%A0%EA%B2%BD%EC%99%B8%EA%B3%BC/%EC%B2%99%EC%88%98%20%EC%99%B8%EC%83%81%20(Spinal%20cord%20trauma).md) | 2 | 1 |
| 12 | 02 호흡기 | [환기장애](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%ED%99%98%EA%B8%B0%EC%9E%A5%EC%95%A0.md) | 1 | 2 |
| 13 | 03 소화기 | [삼킴곤란](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%82%BC%ED%82%B4%EA%B3%A4%EB%9E%80.md) | 1 | 1 |
| 14 | 04 내분비 | [지질 질환](../../source_notes/02%20Diseases/04%20%EB%82%B4%EB%B6%84%EB%B9%84/%EC%A7%80%EC%A7%88%20%EC%A7%88%ED%99%98.md) | 1 | 2 |
| 15 | 12 산과 | [쌍둥이 임신 (Multiple Gestation)](../../source_notes/02%20Diseases/12%20%EC%82%B0%EA%B3%BC/%EC%8C%8D%EB%91%A5%EC%9D%B4%20%EC%9E%84%EC%8B%A0%20(Multiple%20Gestation).md) | 1 | 2 |
| 16 | 15 정신건강의학과 | [소아 정신 의학 (Child and Adolescent Psychiatric Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%86%8C%EC%95%84%20%EC%A0%95%EC%8B%A0%20%EC%9D%98%ED%95%99%20(Child%20and%20Adolescent%20Psychiatric%20Disorders).md) | 1 | 3 |
| 17 | 16 신경과-신경외과 | [두통](../../source_notes/02%20Diseases/16%20%EC%8B%A0%EA%B2%BD%EA%B3%BC-%EC%8B%A0%EA%B2%BD%EC%99%B8%EA%B3%BC/%EB%91%90%ED%86%B5.md) | 1 | 2 |
| 18 | 16 신경과-신경외과 | [신경근육질환](../../source_notes/02%20Diseases/16%20%EC%8B%A0%EA%B2%BD%EA%B3%BC-%EC%8B%A0%EA%B2%BD%EC%99%B8%EA%B3%BC/%EC%8B%A0%EA%B2%BD%EA%B7%BC%EC%9C%A1%EC%A7%88%ED%99%98.md) | 1 | 2 |
| 19 | 17 이비인후과 | [중이염 (Otitis media)](../../source_notes/02%20Diseases/17%20%EC%9D%B4%EB%B9%84%EC%9D%B8%ED%9B%84%EA%B3%BC/%EC%A4%91%EC%9D%B4%EC%97%BC%20(Otitis%20media).md) | 1 | 2 |
| 20 | 19 피부과 | [습진성피부질환](../../source_notes/02%20Diseases/19%20%ED%94%BC%EB%B6%80%EA%B3%BC/%EC%8A%B5%EC%A7%84%EC%84%B1%ED%94%BC%EB%B6%80%EC%A7%88%ED%99%98.md) | 1 | 2 |
| 21 | 02 호흡기 | [종격동질환](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EC%A2%85%EA%B2%A9%EB%8F%99%EC%A7%88%ED%99%98.md) | 0 | 2 |
| 22 | 02 호흡기 | [호산구 폐렴 (Eosinophilic Pneumonia)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%ED%98%B8%EC%82%B0%EA%B5%AC%20%ED%8F%90%EB%A0%B4%20(Eosinophilic%20Pneumonia).md) | 0 | 3 |
| 23 | 02 호흡기 | [ILD – 직업성](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/ILD%20%E2%80%93%20%EC%A7%81%EC%97%85%EC%84%B1.md) | 0 | 3 |
| 24 | 03 소화기 | [지방간](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%A7%80%EB%B0%A9%EA%B0%84.md) | 0 | 2 |
| 25 | 03 소화기 | [배변이상](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EB%B0%B0%EB%B3%80%EC%9D%B4%EC%83%81.md) | 0 | 3 |
| 26 | 03 소화기 | [흡수장애](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%ED%9D%A1%EC%88%98%EC%9E%A5%EC%95%A0.md) | 0 | 3 |
| 27 | 05 신장 | [세관사이질 질환](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%84%B8%EA%B4%80%EC%82%AC%EC%9D%B4%EC%A7%88%20%EC%A7%88%ED%99%98.md) | 0 | 1 |
| 28 | 06 알레르기 | [Type III](../../source_notes/02%20Diseases/06%20%EC%95%8C%EB%A0%88%EB%A5%B4%EA%B8%B0/Type%20III.md) | 0 | 3 |
| 29 | 06 알레르기 | [Type IV](../../source_notes/02%20Diseases/06%20%EC%95%8C%EB%A0%88%EB%A5%B4%EA%B8%B0/Type%20IV.md) | 0 | 2 |
| 30 | 08 감염 | [기생충](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EA%B8%B0%EC%83%9D%EC%B6%A9.md) | 0 | 3 |
| 31 | 08 감염 | [물림 및 교상 감염](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EB%AC%BC%EB%A6%BC%20%EB%B0%8F%20%EA%B5%90%EC%83%81%20%EA%B0%90%EC%97%BC.md) | 0 | 1 |
| 32 | 08 감염 | [진균](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EC%A7%84%EA%B7%A0.md) | 0 | 5 |
| 33 | 09 혈액 | [림프구 질환](../../source_notes/02%20Diseases/09%20%ED%98%88%EC%95%A1/%EB%A6%BC%ED%94%84%EA%B5%AC%20%EC%A7%88%ED%99%98.md) | 0 | 2 |
| 34 | 09 혈액 | [림프종 (Lymphoma)](../../source_notes/02%20Diseases/09%20%ED%98%88%EC%95%A1/%EB%A6%BC%ED%94%84%EC%A2%85%20(Lymphoma).md) | 0 | 2 |
| 35 | 11 외과 | [혈관 손상](../../source_notes/02%20Diseases/11%20%EC%99%B8%EA%B3%BC/%ED%98%88%EA%B4%80%20%EC%86%90%EC%83%81.md) | 0 | 2 |
| 36 | 11 외과 | [흉부 외상](../../source_notes/02%20Diseases/11%20%EC%99%B8%EA%B3%BC/%ED%9D%89%EB%B6%80%20%EC%99%B8%EC%83%81.md) | 0 | 1 |
| 37 | 14 소아청소년과 | [소아 유전질환](../../source_notes/02%20Diseases/14%20%EC%86%8C%EC%95%84%EC%B2%AD%EC%86%8C%EB%85%84%EA%B3%BC/%EC%86%8C%EC%95%84%EA%B3%BC%20%EC%B4%9D%EB%A1%A0/%EC%86%8C%EC%95%84%20%EC%9C%A0%EC%A0%84%EC%A7%88%ED%99%98.md) | 0 | 11 |
| 38 | 14 소아청소년과 | [아동학대 및 비우발적 손상](../../source_notes/02%20Diseases/14%20%EC%86%8C%EC%95%84%EC%B2%AD%EC%86%8C%EB%85%84%EA%B3%BC/%EC%86%8C%EC%95%84%EA%B3%BC%20%EC%B4%9D%EB%A1%A0/%EC%95%84%EB%8F%99%ED%95%99%EB%8C%80%20%EB%B0%8F%20%EB%B9%84%EC%9A%B0%EB%B0%9C%EC%A0%81%20%EC%86%90%EC%83%81.md) | 2 | 2 |
| 39 | 15 정신건강의학과 | [기분 장애 (Bipolar and Related Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EA%B8%B0%EB%B6%84%20%EC%9E%A5%EC%95%A0%20(Bipolar%20and%20Related%20Disorders).md) | 0 | 2 |
| 40 | 15 정신건강의학과 | [불안 장애 (Anxiety Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EB%B6%88%EC%95%88%20%EC%9E%A5%EC%95%A0%20(Anxiety%20Disorders).md) | 0 | 3 |
| 41 | 15 정신건강의학과 | [수면 관련 장애 (Sleep-Wake Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%88%98%EB%A9%B4%20%EA%B4%80%EB%A0%A8%20%EC%9E%A5%EC%95%A0%20(Sleep-Wake%20Disorders).md) | 0 | 3 |
| 42 | 15 정신건강의학과 | [신경인지장애 (Neurocognitive Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%8B%A0%EA%B2%BD%EC%9D%B8%EC%A7%80%EC%9E%A5%EC%95%A0%20(Neurocognitive%20Disorders).md) | 0 | 3 |
| 43 | 15 정신건강의학과 | [신체 증상 및 관련 장애 (Somatic Symptom and Related Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%8B%A0%EC%B2%B4%20%EC%A6%9D%EC%83%81%20%EB%B0%8F%20%EA%B4%80%EB%A0%A8%20%EC%9E%A5%EC%95%A0%20(Somatic%20Symptom%20and%20Related%20Disorders).md) | 0 | 4 |
| 44 | 15 정신건강의학과 | [외상 및 스트레스 관련 장애 (Trauma- and Stressor-Related Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%99%B8%EC%83%81%20%EB%B0%8F%20%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4%20%EA%B4%80%EB%A0%A8%20%EC%9E%A5%EC%95%A0%20(Trauma-%20and%20Stressor-Related%20Disorders).md) | 0 | 4 |
| 45 | 15 정신건강의학과 | [조현병 스펙트럼 장애 (Schizophrenia Spectrum and Other Psychotic Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%A1%B0%ED%98%84%EB%B3%91%20%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC%20%EC%9E%A5%EC%95%A0%20(Schizophrenia%20Spectrum%20and%20Other%20Psychotic%20Disorders).md) | 0 | 3 |
| 46 | 15 정신건강의학과 | [치매 (Dementia)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%EC%B9%98%EB%A7%A4%20(Dementia).md) | 0 | 3 |
| 47 | 15 정신건강의학과 | [파괴적 충동 조절 및 행동 장애 (Disruptive, Impulse-Control, and Conduct Disorders)](../../source_notes/02%20Diseases/15%20%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95%EC%9D%98%ED%95%99%EA%B3%BC/%ED%8C%8C%EA%B4%B4%EC%A0%81%20%EC%B6%A9%EB%8F%99%20%EC%A1%B0%EC%A0%88%20%EB%B0%8F%20%ED%96%89%EB%8F%99%20%EC%9E%A5%EC%95%A0%20(Disruptive,%20Impulse-Control,%20and%20Conduct%20Disorders).md) | 0 | 2 |
| 48 | 16 신경과-신경외과 | [이상운동질환](../../source_notes/02%20Diseases/16%20%EC%8B%A0%EA%B2%BD%EA%B3%BC-%EC%8B%A0%EA%B2%BD%EC%99%B8%EA%B3%BC/%EC%9D%B4%EC%83%81%EC%9A%B4%EB%8F%99%EC%A7%88%ED%99%98.md) | 0 | 4 |
| 49 | 16 신경과-신경외과 | [출혈성 뇌졸중 (Hemorrhagic Stroke)](../../source_notes/02%20Diseases/16%20%EC%8B%A0%EA%B2%BD%EA%B3%BC-%EC%8B%A0%EA%B2%BD%EC%99%B8%EA%B3%BC/%EC%B6%9C%ED%98%88%EC%84%B1%20%EB%87%8C%EC%A1%B8%EC%A4%91%20(Hemorrhagic%20Stroke).md) | 0 | 6 |
| 50 | 18 안과 | [안구 외상](../../source_notes/02%20Diseases/18%20%EC%95%88%EA%B3%BC/%EC%95%88%EA%B5%AC%20%EC%99%B8%EC%83%81.md) | 0 | 3 |
| 51 | 19 피부과 | [구진인설성질환](../../source_notes/02%20Diseases/19%20%ED%94%BC%EB%B6%80%EA%B3%BC/%EA%B5%AC%EC%A7%84%EC%9D%B8%EC%84%A4%EC%84%B1%EC%A7%88%ED%99%98.md) | 0 | 4 |
| 52 | 19 피부과 | [홍반성피부질환](../../source_notes/02%20Diseases/19%20%ED%94%BC%EB%B6%80%EA%B3%BC/%ED%99%8D%EB%B0%98%EC%84%B1%ED%94%BC%EB%B6%80%EC%A7%88%ED%99%98.md) | 0 | 4 |
| 53 | 21 응급의학 | [독성 알코올](../../source_notes/02%20Diseases/21%20%EC%9D%91%EA%B8%89%EC%9D%98%ED%95%99/%EB%8F%85%EC%84%B1%20%EC%95%8C%EC%BD%94%EC%98%AC.md) | 0 | 4 |
| 54 | 21 응급의학 | [생물 독소](../../source_notes/02%20Diseases/21%20%EC%9D%91%EA%B8%89%EC%9D%98%ED%95%99/%EC%83%9D%EB%AC%BC%20%EB%8F%85%EC%86%8C.md) | 0 | 4 |
| 55 | 21 응급의학 | [흡입성 중독](../../source_notes/02%20Diseases/21%20%EC%9D%91%EA%B8%89%EC%9D%98%ED%95%99/%ED%9D%A1%EC%9E%85%EC%84%B1%20%EC%A4%91%EB%8F%85.md) | 0 | 4 |
| 56 | 22 정형외과 | [말초신경 손상](../../source_notes/02%20Diseases/22%20%EC%A0%95%ED%98%95%EC%99%B8%EA%B3%BC/%EB%A7%90%EC%B4%88%EC%8B%A0%EA%B2%BD%20%EC%86%90%EC%83%81.md) | 0 | 3 |


## 2026-10-08 원본 정리

140개 보강 결과를 최종 원본 폴더에 동기화했다. 이후 미커밋 112개 문서의 누락 내용도 최신 GitHub 기준으로 선택 병합했다. 대표 범위 메타데이터는 새 포함 질환에 맞춰 정규화했으며, 문서 구조 검사는 Python 5개·Node 7개를 통과했다. 전체 로컬 빌드는 생략한다. 상세 내역은 [원본 병합 보고서](../source-reconciliation-2026-10-08/summary.md)를 참고한다.
