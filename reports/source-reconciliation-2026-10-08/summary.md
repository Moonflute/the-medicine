# 미커밋 문서 112개와 최신 GitHub 원본 병합

확인일: 2026-10-08

## 결과

- 비교 대상: 본문이 달랐던 원본 Markdown 112개(CC 7, 질병 81, 약물 15, 검사 4, 술기 5).
- 111개: 최신본에 누락된 설명·감별·검사·치료·안전 기준 또는 관련 문서 연결을 선택 반영.
- 1개(산염기 질환): 최신본에 해당 설명이 이미 포함되어 임상 본문 유지.
- 기존 대표 범위 140개 보강 결과도 최종 원본으로 동기화. 이번 112개 중 13개가 그 대상과 겹친다.
- 대표 문서에서 새로 참조하는 미배포 문서 5개(타코츠보 심근병증, 범세기관지염, 자가면역 췌장염, CMV 식도염, HSV 식도염)도 원본으로 포함.

## 기준과 보존

최신 GitHub 내용을 기준으로 분류·목차·별칭·대표 역할·현재 안전 지침을 유지했다. 예전 로컬 파일 전체를 최신본에 덮어쓰지 않았다. CC의 병동 대응 목차와 술기 및 처치의 공통 목차를 유지하고 누락 내용만 해당 문단에 넣었다. 중복 출처를 정리하고 일부 잘못된 참고 링크를 바로잡았다.

크론병 문서에 혼입됐던 급성 중증 UC 구제 알고리즘은 크론병 권고로 교정했다. B형간염·간신증후군의 새 국내 기준은 KASL/EALA 2026, KASL 2026임을 본문에 명시하여 타 지침 기준과 혼동하지 않도록 했다.

이 문서 비교는 112개에 한정된다. 모든 질병의 최신 치료를 새로 전수 검증했다는 의미는 아니다. 예전 로컬 문서를 통째로 덮어쓰지 않고 기존 최신 내용과 비교·선별했으며, 필요 시 학회 공식 지침을 대조했다.

## 최종 위치

- 편집 원본: `source_notes/`
- 정식 배포 폴더의 동일 문서: `__deploy_repo/source_notes/`
- 두 위치에 244개 원본 동기화(140개 대표 범위 + 중복을 제외한 추가 99개 + 참조 문서 5개).
- 임시 작업 체크아웃은 최종 원본이 아니다. 진행 보고서의 링크도 `source_notes/`로 정리했다.
- 덮어쓰기 전 문서: `workspace_ops/local_sync_backups/source-reconcile-20261008/{root,deploy}/`
- 이전 tracked 변경의 Git 안전 스냅샷: `d4b79d5179735b63cda49494c43d95598ed72ae6`
- 앱 코드·기존 Git 인덱스·이번 작업과 무관한 미커밋 변경은 보존했다.

## 배포 실패 수정

최근 실행 [37652670349](https://github.com/Moonflute/the-medicine/actions/runs/37652670349)은 린트·앞선 검사를 통과했으나 대표 문서 ‘기분 장애’의 하위 질환 목록 누락으로 `Verify disease structure`에서 실패했다. 검사 자체는 유지하고 원본의 `group_members`와 `포함 질환`을 정규화했다. 작업 중 올라온 v0.13.78의 네 대표 문서 메타데이터 복구도 보존했다. 병합본은 v0.13.79이며 v0.13.77 UI 변경을 유지한다.

- 최신 코드 기준 문서 구조 검사: Python 5개·Node 7개 통과.
- 전체 로컬 빌드는 생략. GitHub Actions가 최종 빌드를 담당한다.

## 임시 파일

삭제 후보는 과거 삼성 매뉴얼 배치 기록 903개와 화면 검증 결과 36개, 합계 939개(5,149,121 bytes, 약 4.9 MiB)다. 현재 앱·배포 빌드는 이 파일을 읽지 않는다. 과거 작업 이력을 보존하는 용도만 남아 있다. 원본 문서·복구 백업·라이브러리·다른 작업 체크아웃은 삭제하지 않는다. AGENTS.md에 따라 배포 확인과 명시적 삭제 승인을 기다린다.

## 문서별 반영

| 번호 | 구분 | 원본 문서 | 반영 판단 |
| --- | --- | --- | --- |
| 1 | 02 Diseases / 01 순환기 | [급성 관상동맥 증후군 (ACS)](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EA%B8%89%EC%84%B1%20%EA%B4%80%EC%83%81%EB%8F%99%EB%A7%A5%20%EC%A6%9D%ED%9B%84%EA%B5%B0%20(ACS).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 2 | 02 Diseases / 01 순환기 | [급성 동맥 폐색 (Acute Arterial Occlusion)](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EA%B8%89%EC%84%B1%20%EB%8F%99%EB%A7%A5%20%ED%8F%90%EC%83%89%20(Acute%20Arterial%20Occlusion).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 3 | 02 Diseases / 01 순환기 | [동맥경화성 만성 동맥 폐색 (Atherosclerotic Chronic Arterial Occlusion)](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EB%8F%99%EB%A7%A5%EA%B2%BD%ED%99%94%EC%84%B1%20%EB%A7%8C%EC%84%B1%20%EB%8F%99%EB%A7%A5%20%ED%8F%90%EC%83%89%20(Atherosclerotic%20Chronic%20Arterial%20Occlusion).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 4 | 02 Diseases / 01 순환기 | [변이형 협심증 (Variant Angina)](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EB%B3%80%EC%9D%B4%ED%98%95%20%ED%98%91%EC%8B%AC%EC%A6%9D%20(Variant%20Angina).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 5 | 02 Diseases / 01 순환기 | [순환기](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EC%88%9C%ED%99%98%EA%B8%B0.md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 6 | 02 Diseases / 02 호흡기 | [COPD의 급성 악화 (Acute Exacerbation of COPD)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/COPD%EC%9D%98%20%EA%B8%89%EC%84%B1%20%EC%95%85%ED%99%94%20(Acute%20Exacerbation%20of%20COPD).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 7 | 02 Diseases / 02 호흡기 | [급성 호흡곤란 증후군 (ARDS) (Acute Respiratory Distress Syndrome)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EA%B8%89%EC%84%B1%20%ED%98%B8%ED%9D%A1%EA%B3%A4%EB%9E%80%20%EC%A6%9D%ED%9B%84%EA%B5%B0%20(ARDS)%20(Acute%20Respiratory%20Distress%20Syndrome).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 8 | 02 Diseases / 02 호흡기 | [기관지 확장증 (Bronchiectasis)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EA%B8%B0%EA%B4%80%EC%A7%80%20%ED%99%95%EC%9E%A5%EC%A6%9D%20(Bronchiectasis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 9 | 02 Diseases / 02 호흡기 | [부폐렴성 흉수 (Parapneumonic Effusion)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EB%B6%80%ED%8F%90%EB%A0%B4%EC%84%B1%20%ED%9D%89%EC%88%98%20(Parapneumonic%20Effusion).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 10 | 02 Diseases / 02 호흡기 | [비특이 간질성 폐렴 (NSIP) (Nonspecific Interstitial Pneumonia)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EB%B9%84%ED%8A%B9%EC%9D%B4%20%EA%B0%84%EC%A7%88%EC%84%B1%20%ED%8F%90%EB%A0%B4%20(NSIP)%20(Nonspecific%20Interstitial%20Pneumonia).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 11 | 02 Diseases / 02 호흡기 | [악성 흉수 (Malignant Pleural Effusion)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EC%95%85%EC%84%B1%20%ED%9D%89%EC%88%98%20(Malignant%20Pleural%20Effusion).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 12 | 02 Diseases / 02 호흡기 | [조직화 폐렴 (COP) (Cryptogenic Organizing Pneumonia)](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EC%A1%B0%EC%A7%81%ED%99%94%20%ED%8F%90%EB%A0%B4%20(COP)%20(Cryptogenic%20Organizing%20Pneumonia).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 13 | 02 Diseases / 03 소화기 | [D형 간염 (HDV) (Hepatitis D (HDV))](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/D%ED%98%95%20%EA%B0%84%EC%97%BC%20(HDV)%20(Hepatitis%20D%20(HDV)).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 14 | 02 Diseases / 03 소화기 | [간 농양 (Liver Abscess)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B0%84%20%EB%86%8D%EC%96%91%20(Liver%20Abscess).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 15 | 02 Diseases / 03 소화기 | [간 농양 (아메바성) (Amoebic Liver Abscess)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B0%84%20%EB%86%8D%EC%96%91%20(%EC%95%84%EB%A9%94%EB%B0%94%EC%84%B1)%20(Amoebic%20Liver%20Abscess).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 16 | 02 Diseases / 03 소화기 | [간성 뇌증 (Hepatic Encephalopathy)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B0%84%EC%84%B1%20%EB%87%8C%EC%A6%9D%20(Hepatic%20Encephalopathy).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 17 | 02 Diseases / 03 소화기 | [간세포암 (Hepatocellular Carcinoma)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B0%84%EC%84%B8%ED%8F%AC%EC%95%94%20(Hepatocellular%20Carcinoma).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 18 | 02 Diseases / 03 소화기 | [간신 증후군 (Hepatorenal Syndrome)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B0%84%EC%8B%A0%20%EC%A6%9D%ED%9B%84%EA%B5%B0%20(Hepatorenal%20Syndrome).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 19 | 02 Diseases / 03 소화기 | [급성 A형 간염 (Acute Hepatitis A)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B8%89%EC%84%B1%20A%ED%98%95%20%EA%B0%84%EC%97%BC%20(Acute%20Hepatitis%20A).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 20 | 02 Diseases / 03 소화기 | [급성 C형 간염 (HCV) (Acute Hepatitis C)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B8%89%EC%84%B1%20C%ED%98%95%20%EA%B0%84%EC%97%BC%20(HCV)%20(Acute%20Hepatitis%20C).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 21 | 02 Diseases / 03 소화기 | [급성 쓸개염 (Acute Cholecystitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B8%89%EC%84%B1%20%EC%93%B8%EA%B0%9C%EC%97%BC%20(Acute%20Cholecystitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 22 | 02 Diseases / 03 소화기 | [급성 췌장염 (Acute Pancreatitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B8%89%EC%84%B1%20%EC%B7%8C%EC%9E%A5%EC%97%BC%20(Acute%20Pancreatitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 23 | 02 Diseases / 03 소화기 | [담관암 (Cholangiocarcinoma)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%8B%B4%EA%B4%80%EC%95%94%20(Cholangiocarcinoma).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 24 | 02 Diseases / 03 소화기 | [독성 간염 (Toxic Hepatitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%8F%85%EC%84%B1%20%EA%B0%84%EC%97%BC%20(Toxic%20Hepatitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 25 | 02 Diseases / 03 소화기 | [만성 B형 간염 (Chronic Hepatitis B (HBV))](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%A7%8C%EC%84%B1%20B%ED%98%95%20%EA%B0%84%EC%97%BC%20(Chronic%20Hepatitis%20B%20(HBV)).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 26 | 02 Diseases / 03 소화기 | [만성 C형 간염 (Chronic Hepatitis C (HCV))](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%A7%8C%EC%84%B1%20C%ED%98%95%20%EA%B0%84%EC%97%BC%20(Chronic%20Hepatitis%20C%20(HCV)).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 27 | 02 Diseases / 03 소화기 | [만성 쓸개염 (Chronic Cholecystitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%A7%8C%EC%84%B1%20%EC%93%B8%EA%B0%9C%EC%97%BC%20(Chronic%20Cholecystitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 28 | 02 Diseases / 03 소화기 | [만성 췌장염 (Chronic Pancreatitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%A7%8C%EC%84%B1%20%EC%B7%8C%EC%9E%A5%EC%97%BC%20(Chronic%20Pancreatitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 29 | 02 Diseases / 03 소화기 | [복수 (간경변) (Ascites (Cirrhosis))](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EB%B3%B5%EC%88%98%20(%EA%B0%84%EA%B2%BD%EB%B3%80)%20(Ascites%20(Cirrhosis)).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 30 | 02 Diseases / 03 소화기 | [식도 정맥류 (Esophageal Varices)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%8B%9D%EB%8F%84%20%EC%A0%95%EB%A7%A5%EB%A5%98%20(Esophageal%20Varices).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 31 | 02 Diseases / 03 소화기 | [쓸개관 낭종 (Choledochal Cyst)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%93%B8%EA%B0%9C%EA%B4%80%20%EB%82%AD%EC%A2%85%20(Choledochal%20Cyst).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 32 | 02 Diseases / 03 소화기 | [쓸개관돌 (Common Bile Duct Stone)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%93%B8%EA%B0%9C%EA%B4%80%EB%8F%8C%20(Common%20Bile%20Duct%20Stone).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 33 | 02 Diseases / 03 소화기 | [쓸개관염 (Cholangitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%93%B8%EA%B0%9C%EA%B4%80%EC%97%BC%20(Cholangitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 34 | 02 Diseases / 03 소화기 | [쓸개돌 (Gallstone)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%93%B8%EA%B0%9C%EB%8F%8C%20(Gallstone).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 35 | 02 Diseases / 03 소화기 | [알코올성 간질환 (Alcoholic Liver Disease)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%95%8C%EC%BD%94%EC%98%AC%EC%84%B1%20%EA%B0%84%EC%A7%88%ED%99%98%20(Alcoholic%20Liver%20Disease).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 36 | 02 Diseases / 03 소화기 | [원발성 경화성 담관염 (PSC) (Primary Sclerosing Cholangitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%9B%90%EB%B0%9C%EC%84%B1%20%EA%B2%BD%ED%99%94%EC%84%B1%20%EB%8B%B4%EA%B4%80%EC%97%BC%20(PSC)%20(Primary%20Sclerosing%20Cholangitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 37 | 02 Diseases / 03 소화기 | [위 정맥류 (Gastric Varices)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%9C%84%20%EC%A0%95%EB%A7%A5%EB%A5%98%20(Gastric%20Varices).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 38 | 02 Diseases / 03 소화기 | [자가면역 간염 (Autoimmune Hepatitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%9E%90%EA%B0%80%EB%A9%B4%EC%97%AD%20%EA%B0%84%EC%97%BC%20(Autoimmune%20Hepatitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 39 | 02 Diseases / 03 소화기 | [자발성 세균 복막염 (Spontaneous Bacterial Peritonitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%9E%90%EB%B0%9C%EC%84%B1%20%EC%84%B8%EA%B7%A0%20%EB%B3%B5%EB%A7%89%EC%97%BC%20(Spontaneous%20Bacterial%20Peritonitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 40 | 02 Diseases / 03 소화기 | [전격성 간염 (Fulminant Hepatitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%A0%84%EA%B2%A9%EC%84%B1%20%EA%B0%84%EC%97%BC%20(Fulminant%20Hepatitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 41 | 02 Diseases / 03 소화기 | [췌장 가성낭종 (Pancreatic Pseudocyst)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%B7%8C%EC%9E%A5%20%EA%B0%80%EC%84%B1%EB%82%AD%EC%A2%85%20(Pancreatic%20Pseudocyst).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 42 | 02 Diseases / 03 소화기 | [췌장암 (Pancreatic Cancer)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%B7%8C%EC%9E%A5%EC%95%94%20(Pancreatic%20Cancer).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 43 | 02 Diseases / 03 소화기 | [게실 (Diverticulum)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B2%8C%EC%8B%A4%20(Diverticulum).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 44 | 02 Diseases / 03 소화기 | [게실 출혈 (Diverticular Bleeding)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B2%8C%EC%8B%A4%20%EC%B6%9C%ED%98%88%20(Diverticular%20Bleeding).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 45 | 02 Diseases / 03 소화기 | [게실염 (Diverticulitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B2%8C%EC%8B%A4%EC%97%BC%20(Diverticulitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 46 | 02 Diseases / 03 소화기 | [과민성 장 증후군 (IBS) (Irritable Bowel Syndrome (IBS))](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B3%BC%EB%AF%BC%EC%84%B1%20%EC%9E%A5%20%EC%A6%9D%ED%9B%84%EA%B5%B0%20(IBS)%20(Irritable%20Bowel%20Syndrome%20(IBS)).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 47 | 02 Diseases / 03 소화기 | [구불창자 꼬임 (Sigmoid Volvulus)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B5%AC%EB%B6%88%EC%B0%BD%EC%9E%90%20%EA%BC%AC%EC%9E%84%20(Sigmoid%20Volvulus).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 48 | 02 Diseases / 03 소화기 | [궤양성 대장염 (UC) (Ulcerative Colitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B6%A4%EC%96%91%EC%84%B1%20%EB%8C%80%EC%9E%A5%EC%97%BC%20(UC)%20(Ulcerative%20Colitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 49 | 02 Diseases / 03 소화기 | [급성 장간막 허혈 (Acute Mesenteric Ischemia)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EA%B8%89%EC%84%B1%20%EC%9E%A5%EA%B0%84%EB%A7%89%20%ED%97%88%ED%98%88%20(Acute%20Mesenteric%20Ischemia).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 50 | 02 Diseases / 03 소화기 | [대장 용종 (Colonic Polyp)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EB%8C%80%EC%9E%A5%20%EC%9A%A9%EC%A2%85%20(Colonic%20Polyp).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 51 | 02 Diseases / 03 소화기 | [대장 폐쇄 (Large Bowel Obstruction)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EB%8C%80%EC%9E%A5%20%ED%8F%90%EC%87%84%20(Large%20Bowel%20Obstruction).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 52 | 02 Diseases / 03 소화기 | [만성 장간막 허혈 (Chronic Mesenteric Ischemia)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EB%A7%8C%EC%84%B1%20%EC%9E%A5%EA%B0%84%EB%A7%89%20%ED%97%88%ED%98%88%20(Chronic%20Mesenteric%20Ischemia).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 53 | 02 Diseases / 03 소화기 | [변비 (Constipation)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EB%B3%80%EB%B9%84%20(Constipation).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 54 | 02 Diseases / 03 소화기 | [상부 위장관 출혈 (Upper Gastrointestinal Tract)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%83%81%EB%B6%80%20%EC%9C%84%EC%9E%A5%EA%B4%80%20%EC%B6%9C%ED%98%88%20(Upper%20Gastrointestinal%20Tract).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 55 | 02 Diseases / 03 소화기 | [설사 (Diarrhea)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%84%A4%EC%82%AC%20(Diarrhea).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 56 | 02 Diseases / 03 소화기 | [소장 폐쇄 (Small Bowel Obstruction)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%86%8C%EC%9E%A5%20%ED%8F%90%EC%87%84%20(Small%20Bowel%20Obstruction).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 57 | 02 Diseases / 03 소화기 | [십이지장 궤양 (Duodenal Ulcer)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%8B%AD%EC%9D%B4%EC%A7%80%EC%9E%A5%20%EA%B6%A4%EC%96%91%20(Duodenal%20Ulcer).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 58 | 02 Diseases / 03 소화기 | [위 용종 (Gastric Polyp)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%9C%84%20%EC%9A%A9%EC%A2%85%20(Gastric%20Polyp).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 59 | 02 Diseases / 03 소화기 | [위궤양 (Gastric Ulcer)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%9C%84%EA%B6%A4%EC%96%91%20(Gastric%20Ulcer).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 60 | 02 Diseases / 03 소화기 | [칸디다 식도염 (Candida Esophagitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%B9%B8%EB%94%94%EB%8B%A4%20%EC%8B%9D%EB%8F%84%EC%97%BC%20(Candida%20Esophagitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 61 | 02 Diseases / 03 소화기 | [크론병 (CD) (Crohn's Disease (CD))](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%ED%81%AC%EB%A1%A0%EB%B3%91%20(CD)%20(Crohn's%20Disease%20(CD)).md) | 혼입된 UC 치료 알고리즘 교정; 크론병 분류·약물·수술·장외 증상 보충 |
| 62 | 02 Diseases / 03 소화기 | [하부 위장관 출혈 (Lower Gastrointestinal Tract)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%ED%95%98%EB%B6%80%20%EC%9C%84%EC%9E%A5%EA%B4%80%20%EC%B6%9C%ED%98%88%20(Lower%20Gastrointestinal%20Tract).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 63 | 02 Diseases / 03 소화기 | [허혈성 대장염 (Ischemic Colitis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%ED%97%88%ED%98%88%EC%84%B1%20%EB%8C%80%EC%9E%A5%EC%97%BC%20(Ischemic%20Colitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 64 | 02 Diseases / 04 내분비 | [갑상샘 기능저하증 (Hypothyroidism)](../../source_notes/02%20Diseases/04%20%EB%82%B4%EB%B6%84%EB%B9%84/%EA%B0%91%EC%83%81%EC%83%98%20%EA%B8%B0%EB%8A%A5%EC%A0%80%ED%95%98%EC%A6%9D%20(Hypothyroidism).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 65 | 02 Diseases / 04 내분비 | [부신 우연종 (Adrenal Incidentaloma)](../../source_notes/02%20Diseases/04%20%EB%82%B4%EB%B6%84%EB%B9%84/%EB%B6%80%EC%8B%A0%20%EC%9A%B0%EC%97%B0%EC%A2%85%20(Adrenal%20Incidentaloma).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 66 | 02 Diseases / 04 내분비 | [원발성 알도스테론증 (Primary Aldosteronism)](../../source_notes/02%20Diseases/04%20%EB%82%B4%EB%B6%84%EB%B9%84/%EC%9B%90%EB%B0%9C%EC%84%B1%20%EC%95%8C%EB%8F%84%EC%8A%A4%ED%85%8C%EB%A1%A0%EC%A6%9D%20(Primary%20Aldosteronism).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 67 | 02 Diseases / 05 신장 | [알포트 증후군 (Alport Syndrome)](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%95%8C%ED%8F%AC%ED%8A%B8%20%EC%A6%9D%ED%9B%84%EA%B5%B0%20(Alport%20Syndrome).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 68 | 02 Diseases / 08 감염 | [거짓막 결장염 (Pseudomembranous Colitis)](../../source_notes/02%20Diseases/08%20%EA%B0%90%EC%97%BC/%EA%B1%B0%EC%A7%93%EB%A7%89%20%EA%B2%B0%EC%9E%A5%EC%97%BC%20(Pseudomembranous%20Colitis).md) | 개별 질환의 진단·치료·합병증 내용 보충 |
| 69 | 04 Pharmacology | [Bisacodyl](../../source_notes/04%20Pharmacology/03%20%EC%86%8C%ED%99%94%EA%B8%B0/Bisacodyl.md) | 약물 용량·적응증·주의사항 보충 |
| 70 | 04 Pharmacology | [Lactulose](../../source_notes/04%20Pharmacology/03%20%EC%86%8C%ED%99%94%EA%B8%B0/Lactulose.md) | 약물 용량·적응증·주의사항 보충 |
| 71 | 04 Pharmacology | [Mesalazine](../../source_notes/04%20Pharmacology/03%20%EC%86%8C%ED%99%94%EA%B8%B0/Mesalazine.md) | 약물 용량·적응증·주의사항 보충 |
| 72 | 04 Pharmacology | [Metoclopramide](../../source_notes/04%20Pharmacology/03%20%EC%86%8C%ED%99%94%EA%B8%B0/Metoclopramide.md) | 약물 용량·적응증·주의사항 보충 |
| 73 | 04 Pharmacology | [Entecavir](../../source_notes/04%20Pharmacology/04%20%EA%B0%84%EB%8B%B4%EC%B7%8C/Entecavir.md) | 약물 용량·적응증·주의사항 보충 |
| 74 | 04 Pharmacology | [TenofovirDisoproxil](../../source_notes/04%20Pharmacology/04%20%EA%B0%84%EB%8B%B4%EC%B7%8C/TenofovirDisoproxil.md) | 약물 용량·적응증·주의사항 보충 |
| 75 | 04 Pharmacology | [UrsodeoxycholicAcid](../../source_notes/04%20Pharmacology/04%20%EA%B0%84%EB%8B%B4%EC%B7%8C/UrsodeoxycholicAcid.md) | 약물 용량·적응증·주의사항 보충 |
| 76 | 04 Pharmacology | [Infliximab](../../source_notes/04%20Pharmacology/07%20%EB%A9%B4%EC%97%AD%C2%B7%EC%97%BC%EC%A6%9D%C2%B7%EB%A5%98%EB%A7%88%ED%8B%B0%EC%8A%A4/Infliximab.md) | 약물 용량·적응증·주의사항 보충 |
| 77 | 04 Pharmacology | [Methotrexate](../../source_notes/04%20Pharmacology/07%20%EB%A9%B4%EC%97%AD%C2%B7%EC%97%BC%EC%A6%9D%C2%B7%EB%A5%98%EB%A7%88%ED%8B%B0%EC%8A%A4/Methotrexate.md) | 약물 용량·적응증·주의사항 보충 |
| 78 | 04 Pharmacology | [Sulfasalazine](../../source_notes/04%20Pharmacology/07%20%EB%A9%B4%EC%97%AD%C2%B7%EC%97%BC%EC%A6%9D%C2%B7%EB%A5%98%EB%A7%88%ED%8B%B0%EC%8A%A4/Sulfasalazine.md) | 약물 용량·적응증·주의사항 보충 |
| 79 | 04 Pharmacology | [Tofacitinib](../../source_notes/04%20Pharmacology/07%20%EB%A9%B4%EC%97%AD%C2%B7%EC%97%BC%EC%A6%9D%C2%B7%EB%A5%98%EB%A7%88%ED%8B%B0%EC%8A%A4/Tofacitinib.md) | 약물 용량·적응증·주의사항 보충 |
| 80 | 04 Pharmacology | [Acyclovir](../../source_notes/04%20Pharmacology/08%20%EA%B0%90%EC%97%BC/Acyclovir.md) | 약물 용량·적응증·주의사항 보충 |
| 81 | 04 Pharmacology | [Ganciclovir](../../source_notes/04%20Pharmacology/08%20%EA%B0%90%EC%97%BC/Ganciclovir.md) | 약물 용량·적응증·주의사항 보충 |
| 82 | 04 Pharmacology | [Valganciclovir](../../source_notes/04%20Pharmacology/08%20%EA%B0%90%EC%97%BC/Valganciclovir.md) | 약물 용량·적응증·주의사항 보충 |
| 83 | 04 Pharmacology | [IronSucrose](../../source_notes/04%20Pharmacology/09%20%ED%98%88%EC%95%A1%C2%B7%EC%9D%91%EA%B3%A0/IronSucrose.md) | 약물 용량·적응증·주의사항 보충 |
| 84 | 06 Lab & Img | [Liver Function Tests (LFT)](../../source_notes/06%20Lab%20%26%20Img/01%20%ED%98%88%EC%95%A1%EA%B2%80%EC%82%AC/Liver%20Function%20Tests%20(LFT).md) | 검사 해석·적응증·주의사항 보충 |
| 85 | 06 Lab & Img | [Magnesium](../../source_notes/06%20Lab%20%26%20Img/01%20%ED%98%88%EC%95%A1%EA%B2%80%EC%82%AC/Magnesium.md) | 검사 해석·적응증·주의사항 보충 |
| 86 | 06 Lab & Img | [Phosphate](../../source_notes/06%20Lab%20%26%20Img/01%20%ED%98%88%EC%95%A1%EA%B2%80%EC%82%AC/Phosphate.md) | 검사 해석·적응증·주의사항 보충 |
| 87 | 06 Lab & Img | [Colonoscopy](../../source_notes/06%20Lab%20%26%20Img/99%20%EA%B8%B0%ED%83%80%20%EA%B2%80%EC%82%AC/02%20%EB%82%B4%EC%8B%9C%EA%B2%BD%EA%B2%80%EC%82%AC/Colonoscopy.md) | 검사 해석·적응증·주의사항 보충 |
| 88 | 01 Chief Complaint | [관절 통증／붓기](../../source_notes/01%20Chief%20Complaint/%EA%B4%80%EC%A0%88%20%ED%86%B5%EC%A6%9D%EF%BC%8F%EB%B6%93%EA%B8%B0.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 89 | 01 Chief Complaint | [소화불량／만성 복통](../../source_notes/01%20Chief%20Complaint/%EC%86%8C%ED%99%94%EB%B6%88%EB%9F%89%EF%BC%8F%EB%A7%8C%EC%84%B1%20%EB%B3%B5%ED%86%B5.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 90 | 01 Chief Complaint | [실신](../../source_notes/01%20Chief%20Complaint/%EC%8B%A4%EC%8B%A0.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 91 | 01 Chief Complaint | [토혈](../../source_notes/01%20Chief%20Complaint/%ED%86%A0%ED%98%88.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 92 | 01 Chief Complaint | [혈변](../../source_notes/01%20Chief%20Complaint/%ED%98%88%EB%B3%80.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 93 | 01 Chief Complaint | [호흡곤란](../../source_notes/01%20Chief%20Complaint/%ED%98%B8%ED%9D%A1%EA%B3%A4%EB%9E%80.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 94 | 01 Chief Complaint | [황달](../../source_notes/01%20Chief%20Complaint/%ED%99%A9%EB%8B%AC.md) | 현재 병동 대응 목차 유지; 문진·검사·감별의 누락 내용 보충 |
| 95 | 07 Skills | [주사침 찔림 (Needlestick Injury)](../../source_notes/07%20Skills/1.%20%EC%B1%84%ED%98%88/%EC%A3%BC%EC%82%AC%EC%B9%A8%20%EC%B0%94%EB%A6%BC%20(Needlestick%20Injury).md) | 현재 공통 술기 목차와 안전 기준 유지; 누락 내용만 해당 문단에 보충 |
| 96 | 07 Skills | [뇌신경계 모니터링](../../source_notes/07%20Skills/3.%20%ED%99%98%EC%9E%90%20%EA%B0%90%EC%8B%9C/%EB%87%8C%EC%8B%A0%EA%B2%BD%EA%B3%84%20%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81.md) | 현재 공통 술기 목차와 안전 기준 유지; 누락 내용만 해당 문단에 보충 |
| 97 | 07 Skills | [중심정맥관 (C-line)](../../source_notes/07%20Skills/6.%20%ED%98%88%EA%B4%80%20%EB%9D%BC%EC%9D%B8/%EC%A4%91%EC%8B%AC%EC%A0%95%EB%A7%A5%EA%B4%80%20(C-line).md) | 현재 공통 술기 목차와 안전 기준 유지; 누락 내용만 해당 문단에 보충 |
| 98 | 07 Skills | [조영제 투여](../../source_notes/07%20Skills/7.%20%EC%A3%BC%EC%82%AC%20%EB%B0%8F%20%EC%95%BD%EB%AC%BC%20%ED%88%AC%EC%97%AC/%EC%A1%B0%EC%98%81%EC%A0%9C%20%ED%88%AC%EC%97%AC.md) | 현재 공통 술기 목차와 안전 기준 유지; 누락 내용만 해당 문단에 보충 |
| 99 | 07 Skills | [수혈](../../source_notes/07%20Skills/9.%20%EB%B3%91%EB%8F%99%20%EB%8C%80%EC%9D%91/%EC%88%98%ED%98%88.md) | 현재 공통 술기 목차와 안전 기준 유지; 누락 내용만 해당 문단에 보충 |
| 100 | 02 Diseases / 02 호흡기 | [기도폐쇄질환](../../source_notes/02%20Diseases/02%20%ED%98%B8%ED%9D%A1%EA%B8%B0/%EA%B8%B0%EB%8F%84%ED%8F%90%EC%87%84%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 101 | 02 Diseases / 03 소화기 | [위 질환](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%9C%84%20%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 102 | 02 Diseases / 03 소화기 | [췌장 질환](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%B7%8C%EC%9E%A5%20%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 103 | 02 Diseases / 03 소화기 | [식도 질환](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EC%9C%84%EC%9E%A5%EA%B4%80/%EC%8B%9D%EB%8F%84%20%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 104 | 02 Diseases / 03 소화기 | [간경변증 (Liver Cirrhosis)](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EA%B0%84%EA%B2%BD%EB%B3%80%EC%A6%9D%20(Liver%20Cirrhosis).md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 105 | 02 Diseases / 05 신장 | [신기능 이상](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%8B%A0%EA%B8%B0%EB%8A%A5%20%EC%9D%B4%EC%83%81.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 106 | 02 Diseases / 05 신장 | [사구체질환](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%82%AC%EA%B5%AC%EC%B2%B4%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 107 | 02 Diseases / 04 내분비 | [뇌하수체 질환](../../source_notes/02%20Diseases/04%20%EB%82%B4%EB%B6%84%EB%B9%84/%EB%87%8C%ED%95%98%EC%88%98%EC%B2%B4%20%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 108 | 02 Diseases / 04 내분비 | [부신(피질) 질환](../../source_notes/02%20Diseases/04%20%EB%82%B4%EB%B6%84%EB%B9%84/%EB%B6%80%EC%8B%A0(%ED%94%BC%EC%A7%88)%20%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 109 | 02 Diseases / 03 소화기 | [췌장염](../../source_notes/02%20Diseases/03%20%EC%86%8C%ED%99%94%EA%B8%B0/%EA%B0%84%EB%8B%B4%EC%B7%8C/%EC%B7%8C%EC%9E%A5%EC%97%BC.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 110 | 02 Diseases / 05 신장 | [산염기 질환](../../source_notes/02%20Diseases/05%20%EC%8B%A0%EC%9E%A5/%EC%82%B0%EC%97%BC%EA%B8%B0%20%EC%A7%88%ED%99%98.md) | 최신본에 이미 반영되어 임상 내용 유지 |
| 111 | 02 Diseases / 01 순환기 | [대동맥 질환](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EB%8C%80%EB%8F%99%EB%A7%A5%20%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
| 112 | 02 Diseases / 01 순환기 | [심근질환](../../source_notes/02%20Diseases/01%20%EC%88%9C%ED%99%98%EA%B8%B0/%EC%8B%AC%EA%B7%BC%EC%A7%88%ED%99%98.md) | 최신 가이드라인 유지; 누락된 하위 질환·감별·검사 내용 선택 보충 |
