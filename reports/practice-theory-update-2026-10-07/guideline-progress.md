# 실전문제 빈출 대표 범위 가이드라인 정비

기준일: 2026-10-07

대표 문서 자신과 하위 질환에 연결된 실전문항 ID의 합집합으로 빈도를 계산했다. 대표 범위 간에는 문항이 겹칠 수 있다. 대상은 3문항 이상인 84개이며, 개별 문서 311개 기준과 다르다.

완료: 84 / 84. 원본 Markdown의 분류·group_members·문항 링크 범위는 보존한다. 임상 문서는 기존 본문을 유지하고 필요한 기준을 교정하며, 간단한 대표 문서는 공통 원칙·감별·처치로 보강한다. 출처 이름·연도·URL은 각 문서 끝에 기록한다. 초안·준비 중인 지침은 확정 권고로 사용하지 않는다.

|순위|대표 범위|연결 문항|상태|
|---|---|---:|---|
|1|외과|142|반영|
|2|담도계 질환|51|반영|
|3|간 질환|48|반영|
|4|당 질환|44|반영|
|5|당뇨병 (Diabetes Mellitus)|43|반영|
|6|혈액|41|반영|
|7|부정맥|40|반영|
|8|갑상샘 질환|38|반영|
|9|류마티스|37|반영|
|10|기도폐쇄질환|32|반영|
|11|외상|31|반영|
|12|허혈성 심질환|29|반영|
|13|위 질환|28|반영|
|14|전해질 이상|27|반영|
|15|장폐색|26|반영|
|16|알레르기|25|반영|
|17|췌장 질환|25|반영|
|18|식도 질환|23|반영|
|19|Type I|23|반영|
|20|간경변증 (Liver Cirrhosis)|20|반영|
|21|비뇨기과|20|반영|
|22|신기능 이상|20|반영|
|23|기흉|18|반영|
|24|사구체질환|18|반영|
|25|소화기 암|18|반영|
|26|급성 중독 총론 (General Management of Acute Poisoning)|17|반영|
|27|산후출혈|17|반영|
|28|천식|17|반영|
|29|칼슘 질환|17|반영|
|30|G(+)|17|반영|
|31|PUD|17|반영|
|32|뇌하수체 질환|16|반영|
|33|부신(피질) 질환|16|반영|
|34|췌장염|16|반영|
|35|만성 폐쇄성 폐질환 (COPD) (Chronic Obstructive Pulmonary Disease)|15|반영|
|36|심막질환|15|반영|
|37|위장관 출혈|15|반영|
|38|임신성고혈압 (Gestational Hypertension)|15|반영|
|39|직장 및 항문질환|15|반영|
|40|폐결핵 (Pulmonary Tuberculosis)|15|반영|
|41|간염 (Hepatitis)|14|반영|
|42|산염기 질환|14|반영|
|43|원내감염|14|반영|
|44|흉수|14|반영|
|45|심부전|13|반영|
|46|약물 및 화학물질 중독|13|반영|
|47|혈관질환|13|반영|
|48|화상 (Burn)|13|반영|
|49|대동맥 질환|12|반영|
|50|고혈압 (Hypertension)|11|반영|
|51|염증성 장질환 (IBD) (Inflammatory Bowel Disease)|11|반영|
|52|적혈구 질환|11|반영|
|53|판막질환|11|반영|
|54|간암|10|반영|
|55|단백뇨|10|반영|
|56|응고인자 질환|10|반영|
|57|종양내과|10|반영|
|58|폐혈관질환|10|반영|
|59|백혈구 질환|9|반영|
|60|백혈병 (Leukemia)|9|반영|
|61|심근질환|9|반영|
|62|위장관 혈관질환|9|반영|
|63|임신 중 감염|9|반영|
|64|췌장암|9|반영|
|65|빈혈 (Anemia)|8|반영|
|66|성매개감염|8|반영|
|67|심부 정맥 혈전증 (Deep Vein Thrombosis)|8|반영|
|68|요로질환|8|반영|
|69|폐렴|8|반영|
|70|혈소판 질환|8|반영|
|71|다운 증후군 (Down Syndrome)|7|반영|
|72|수혈부작용|7|반영|
|73|위 절제 부작용|7|반영|
|74|혈뇨|7|반영|
|75|G(-)|7|반영|
|76|바이러스|6|반영|
|77|지역사회 감염|6|반영|
|78|폐종양|6|반영|
|79|식중독 및 식품매개 감염|4|반영|
|80|뇌종양 (Brain tumor)|3|반영|
|81|허혈성 뇌졸중 (Ischemic stroke)|3|반영|
|82|혈관벽 질환|3|반영|
|83|호중구감소증 (Neutropenia)|3|반영|
|84|ILD|3|반영|

## 반영 위치와 최종 점검

- 최종 반영 위치(2026-10-08 정리): `source_notes/02 Diseases/` 및 `__deploy_repo/source_notes/02 Diseases/`. 기존 로컬 문서는 별도 백업 후 최신본으로 동기화했다. 앱 코드와 Git 인덱스의 무관한 변경은 보존했다.
- 분류·계통·별칭·대표 역할·하위 질환 범위 등 기존 연결 메타데이터를 작업 전과 비교했다. 변경 0건이다.
- 84개 YAML frontmatter와 문서 끝의 참고 목록을 점검했다. 참고 항목 268개, 중복 제거한 출처 URL 227개이며 메타데이터와 일치한다.
- Markdown 표 83개를 파싱했고 열 수 오류 및 새 대체문자 오류는 발견되지 않았다. Git diff 공백 검사도 통과했다.
- 전체 로컬 빌드·배포와 생성 JSON 재빌드는 수행하지 않았다. 문서 내용 업데이트만 완료한 상태이다.

## 확인한 근거

### 1. 외과

- [ACS ATLS 11 (2025): 외상 초기 평가](https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/)
- [SCCM/ESICM Surviving Sepsis Campaign 성인 지침 (2026): 소생·감염원 교정](https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines)
- [AHA/ACC 다학회 비심장수술 심혈관 관리 지침 (2024)](https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/09/23/04/15/2024-aha-acc-perioperative-guideline-gl)

### 2. 담도계 질환

- [Tokyo Guidelines 2018: 급성 담관염 진단·중증도](https://onlinelibrary.wiley.com/doi/10.1002/jhbp.512)
- [WSES 급성 결석성 담낭염 지침 (2020)](https://wjes.biomedcentral.com/articles/10.1186/s13017-020-00336-x)
- [ASGE 총담관 결석 지침 (2019)](https://www.asge.org/home/resources/publications/guidelines/asge-guideline-on-the-role-of-endoscopy-in-the-evaluation-and-management-of-choledocholithiasis)
- [ASGE 급성 담관염 지침 (2021)](https://www.asge.org/home/resources/publications/guidelines/asge-guideline-on-the-management-of-cholangitis)
- [SAGES 수술 중 담관 영상 지침 (2025) 및 조건부 권고 설명](https://www.sages.org/publications/guidelines/guidelines-for-the-use-of-intraoperative-imaging-of-the-cbd/)

### 3. 간 질환

- [ACG 급성 간부전 진료지침, 2023](https://doi.org/10.14309/ajg.0000000000002340)
- [EASL–EASD–EASO MASLD 진료지침 (2024)](https://easlcampus.eu/sites/default/files/2024-08/EASL_CPGs_management_of_MASLD.pdf)
- [AASLD/IDSA 만성 B형간염 치료 지침 (2025), 공식 교육 슬라이드](https://www.aasld.org/sites/default/files/2025-11/CHB%20Educational%20Slide%20Set%20Final.pdf)

### 4. 당 질환

- [ADA/EASD/JBDS/AACE/DTS 성인 고혈당 위기 합의문 (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11343900/)
- [ADA Standards of Care in Diabetes (2026): 혈당·저혈당 및 합병증 관리](https://professional.diabetes.org/standards-of-care)

### 5. 당뇨병 (Diabetes Mellitus)

- [ADA Standards of Care in Diabetes (2026), 제2장 진단·제9장 약물치료](https://professional.diabetes.org/standards-of-care)
- [ADA 제9장 Pharmacologic Approaches to Glycemic Treatment (2026)](https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment)
- [ADA 제2장 Diagnosis and Classification (2026)](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes)
- [대한당뇨병학회 당뇨병 진료지침 (2025): 국내 적용](https://diabetes.or.kr/bbs/?code=guide)
- [KDIGO CKD 지침 (2024): 동반 콩팥병](https://kdigo.org/guidelines/ckd-evaluation-and-management/)

### 6. 혈액

- [ASH 빈혈 평가 교육 자료](https://www.hematology.org/education/educators/resources-for-hematology-course-directors/learning-objectives/approach-to-anemia)
- [AABB/ICTMG 혈소판 수혈 지침 (2025)](https://www.aabb.org/news-resources/news/article/2025/05/29/aabb-develops-new-platelet-transfusion-guidelines)
- [ISTH TTP 관리 지침 집중 개정 (2025)](https://www.isth.org/page/ttpguidelines)

### 7. 부정맥

- [AHA Adult Advanced Life Support (2025)](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support)
- [ESC 심방세동 지침 (2024)](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/atrial-fibrillation)
- [ESC 심방세동 지침 핵심 메시지 (2024)](https://www.escardio.org/static-file/Escardio/Guidelines/Products/Essential%20Messages/2024%20EM/Essential%20Messages_2024%20AFib.pdf)

### 8. 갑상샘 질환

- [ATA 분화 갑상샘암 지침 (2025), 공식 수술 범위 해설](https://www.thyroid.org/patient-thyroid-information/ct-for-patients/december-2025/vol-18-issue-12-p-4-5/)
- [ATA 갑상샘염 공식 자료: 항진증과 파괴성 중독증의 구분](https://www.thyroid.org/thyroiditis/)
- [ATA 지침 목록: 기능항진증 (2016)·기능저하증 (2014)·임신/산후 (2026)](https://www.thyroid.org/professionals/ata-professional-guidelines/)

### 9. 류마티스

- [EULAR RA 치료 권고 2025 update (2026 발표), 공식 개정 설명](https://www.eular.org/document/download/1406/ec021a77-cdf3-4de3-ae72-57c1757db549/1325)
- [ACR SLE 치료 지침 (2025)](https://rheumatology.org/api/asset/bltec93920aad624e33)
- [SANJO 자연 관절 감염 관절염 지침 (2023)](https://jbji.copernicus.org/articles/8/29/2023/)

### 10. 기도폐쇄질환

- [GINA Summary Guide (2026)](https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf)
- [GOLD Report/Pocket Guide (2026)](https://goldcopd.org/2026-gold-report-and-pocket-guide/)
- [GOLD 2026 공식 변경 요약: 악화 기준·초기/추적 치료](https://goldcopd.org/wp-content/uploads/2025/11/KEY-CHANGES-GOLD-2026-10Nov2025.pdf)

### 11. 외상

- [ACS ATLS 11 (2025): 외상 초기 평가](https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/)
- [European guideline on major bleeding and coagulopathy following trauma, 6판 (2023)](https://link.springer.com/article/10.1186/s13054-023-04327-7)

### 12. 허혈성 심질환

- [ACC/AHA/ACEP/NAEMSP/SCAI ACS 지침 (2025), AHA 핵심 권고](https://professional.heart.org/en/science-news/2025-guideline-for-the-management-of-patients-with-acute-coronary-syndromes/top-things-to-know)
- [ESC Chronic Coronary Syndromes 지침 (2024)](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/chronic-coronary-syndromes/)

### 13. 위 질환

- [대한위암학회 Korean Practice Guidelines for Gastric Cancer 2024 (2025 출판)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11739648/)
- [GEIS GIST 진료지침 (2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10467260/)
- [ACG Gastric Premalignant Conditions 지침 (2025), 공식 핵심 요약](https://gi.org/wp-content/uploads/2025/03/GPMC_Highlights.pdf)

### 14. 전해질 이상

- [UK Kidney Association 성인 고칼륨혈증 지침 (2026년 7월 개정)](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0)
- [Society for Endocrinology 증상성 저나트륨혈증 응급 지침 (2022)](https://www.endocrinology.org/media/xhrhxhxm/emergency-management-of-severe-and-moderately-severely-symptomatic-hyponatraemia-in-adult-patients-2022.pdf)

### 15. 장폐색

- [WSES Bologna 유착성 소장 폐색 지침, 2017 개정판 (2018 출판)](https://link.springer.com/article/10.1186/s13017-018-0185-2)
- [WSES 구불창자 꼬임 합의 지침 (2023)](https://wjes.biomedcentral.com/articles/10.1186/s13017-023-00502-x)

### 16. 알레르기

- [AAAAI/ACAAI Anaphylaxis practice parameter (2023)](https://www.allergyparameters.org/parameters-and-guidelines/anaphylaxis/2023-anaphylaxis-update)
- [AAAAI/ACAAI Drug Allergy practice parameter (2022)](https://www.allergyparameters.org/parameters-and-guidelines/drug/2022-drug-allergy-update)
- [WAO 유전성 혈관부종 지침 2025판 (2026 출판)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13184495/)

### 17. 췌장 질환

- [IAP Revised Guidelines on Acute Pancreatitis (2025)](https://www.sciencedirect.com/science/article/abs/pii/S1424390325000857)
- [ACG 급성 췌장염 지침 (2024), 공식 핵심 요약](https://webfiles.gi.org/links/journals/AJG-Clinical-Guidelines-Highlights-Acute-Pancreatitis-2024-FINAL.pdf)
- [International evidence-based Kyoto IPMN 지침 (2024)](https://pubmed.ncbi.nlm.nih.gov/38182527/?dopt=Abstract)

### 18. 식도 질환

- [ACG GERD 진료지침 (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8754510/)
- [ACG Achalasia 진료지침 (2020)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9896940/)
- [WSES Esophageal emergencies 지침 (2019)](https://link.springer.com/article/10.1186/s13017-019-0245-2)

### 19. Type I

- [International Urticaria Guideline (2026)](https://onlinelibrary.wiley.com/doi/10.1111/all.70210)
- [WAO 유전성 혈관부종 지침 2025판 (2026 출판)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13184495/)
- [WAO/EAACI HAE 지침 2021 개정판 (2022 출판)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/)
- [AAAAI/ACAAI Anaphylaxis practice parameter (2023)](https://www.allergyparameters.org/parameters-and-guidelines/anaphylaxis/2023-anaphylaxis-update)

### 20. 간경변증 (Liver Cirrhosis)

- [Baveno VIII 문맥고혈압 개정 합의문, 2026](https://doi.org/10.1016/j.jhep.2026.07.030)
- [Baveno VII 문맥고혈압 합의문 (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/)
- [AASLD 복수·SBP·HRS 진료지침 (2021)](https://www.aasld.org/practice-guidelines/diagnosis-evaluation-and-management-ascites-spontaneous-bacterial-peritonitis)
- [ADQI/ICA 간경변 AKI·HRS 합의문 (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11193657/)
- [EASL 만성 간질환 영양 지침 (2019)](https://easl.eu/wp-content/uploads/2018/10/EASL-CPG-nutrition-in-chronic-liver-disease.pdf)

### 21. 비뇨기과

- [EAU Urolithiasis 지침 (2026)](https://uroweb.org/guidelines/urolithiasis/chapter/guidelines)
- [EAU Paediatric Urology: Acute Scrotum (2026)](https://uroweb.org/guidelines/paediatric-urology/chapter/acute-scrotum)
- [EAU Urological Trauma 지침 (2026)](https://uroweb.org/guidelines/urological-trauma/chapter/urogenital-trauma-guidelines)

### 22. 신기능 이상

- [KDIGO AKI 확정 지침 (2012) 및 AKI/AKD 개정 진행 상태](https://kdigo.org/guidelines/acute-kidney-injury/)
- [KDIGO CKD Evaluation and Management 지침 (2024)](https://kdigo.org/guidelines/ckd-evaluation-and-management/)

### 23. 기흉

- [BTS Pleural Disease 지침 (2023)](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)
- [ERS/EACTS/ESTS 성인 자발성 기흉 지침 (2024)](https://publications.ersnet.org/lookup/pmid/38806203)
- [BTS Air Travel 임상 선언문 (2022)](https://thorax.bmj.com/content/77/4/329)

### 24. 사구체질환

- [KDIGO Glomerular Diseases 지침 (2021) 및 질환별 개정 체계](https://kdigo.org/guidelines/gd/)
- [KDIGO IgAN/IgAV 지침 (2025)](https://kdigo.org/wp-content/uploads/2024/08/KDIGO-2025-IgAN-IgAV-Guideline.pdf)
- [KDIGO Lupus Nephritis 지침 (2024)](https://kdigo.org/guidelines/lupus-nephritis/)
- [ERKNet/ERA/ESPN Alport 지침 (2024; 2025 권호)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12209846/)

### 25. 소화기 암

- [ACG Adenomatous Colorectal Polyposis Syndromes 지침 (2026), 공식 핵심 요약](https://webfiles.gi.org/GuidelineHighlights/polyposis-highlights.pdf)
- [ASCRS Management of Colon Cancer 지침 (2022)](https://www.ascrsu.com/ascrs/view/ASCRS-Toolkit/2851068/all/Management_of_Colon_Cancer__2022_)
- [NCI Genetics of Colorectal Cancer PDQ, 의료진용 최신 게시본](https://www.cancer.gov/types/colorectal/hp/colorectal-genetics-pdq)

### 26. 급성 중독 총론 (General Management of Acute Poisoning)

- [AHA 2025 CPR·ECC Part 10 중독 소생술](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation)

### 27. 산후출혈

- [WHO·FIGO·ICM 2025 산후출혈 통합 지침](https://www.who.int/publications/i/item/9789240115637)
- [WHO 2025 산후출혈 권고 본문](https://www.ncbi.nlm.nih.gov/books/NBK619233/?report=printable)

### 28. 천식

- [GINA 2026 Summary Guide 천식 관리·악화](https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf)

### 29. 칼슘 질환

- [제5차 국제 워크숍 2022 일차 부갑상샘항진](https://jsbmr.umin.jp/guide/pdf/Bilezikian-2022-Evaluation-and-management-of-primar.pdf)
- [Endocrine Society 2022 발표·2023 출판 악성종양 고칼슘혈증](https://www.endocrine.org/clinical-practice-guidelines/hypercalcemia)
- [ESE 2025 개정 만성 부갑상샘저하 지침](https://academic.oup.com/ejendo/article/193/5/G83/8321487)
- [Endocrine Society 2019·2020 폐경 후 골다공증 약물치료](https://www.endocrine.org/clinical-practice-guidelines/osteoporosis-in-postmenopausal-women)

### 30. G(+)

- [IDSA·ESCMID 2026년 9월 S. aureus 균혈증 합의문](https://www.idsociety.org/practice-guideline/staphylococcus-aureus-bacteremia/)
- [IDSA 2014 피부·연조직 감염 지침](https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/)

### 31. PUD

- [ACG 2024 H. pylori 제균 지침 요약](https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf)
- [WSES 2020 천공·출혈 소화성 궤양](https://link.springer.com/article/10.1186/s13017-019-0283-9)

### 32. 뇌하수체 질환

- [Pituitary Society 2025 뇌하수체 우연종 합의 지침](https://www.nature.com/articles/s41574-025-01134-8)
- [Pituitary Society 2023 prolactinoma 합의문](https://www.nature.com/articles/s41574-023-00886-5)
- [Endocrine Society 2016 성인 뇌하수체 기능저하](https://www.endocrine.org/clinical-practice-guidelines/hypopituitarism)
- [Society for Endocrinology AVP 결핍 임상 지침](https://www.endocrinology.org/clinical-practice/clinical-guidance/arginine-vasopressin-deficiency-diabetes-insipidus/)

### 33. 부신(피질) 질환

- [Endocrine Society 2025 원발성 알도스테론증](https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2)
- [ESE·ENSAT 2023 부신 우연종 공식 권고](https://www.ese-hormones.org/media/jjwm0ip2/adrenal-incidentaloma-guideline-presentation-ece-2023.pdf)
- [ESE·Endocrine Society 2024 glucocorticoid 유발 부신저하](https://www.endocrine.org/clinical-practice-guidelines/glucocorticoid-induced-adrenal-insufficiency)
- [Endocrine Society 2016 원발성 부신저하](https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency)

### 34. 췌장염

- [IAP 2025 개정 급성 췌장염 지침](https://www.sciencedirect.com/science/article/abs/pii/S1424390325000857)
- [ACG 2024 급성 췌장염 지침 요약](https://webfiles.gi.org/links/journals/AJG-Clinical-Guidelines-Highlights-Acute-Pancreatitis-2024-FINAL.pdf)
- [AGA 2020 췌장 괴사 임상 권고](https://www.sciencedirect.com/science/article/pii/S0016508519412936)

### 35. 만성 폐쇄성 폐질환 (COPD) (Chronic Obstructive Pulmonary Disease)

- [GOLD 2026 Report·Pocket Guide](https://goldcopd.org/2026-gold-report-and-pocket-guide/)
- [GOLD 2026 주요 개정 사항](https://goldcopd.org/wp-content/uploads/2025/11/KEY-CHANGES-GOLD-2026-10Nov2025.pdf)
- [GOLD 2026 이탈리아어 공식 Pocket Guide](https://goldcopd.it/wp-content/uploads/2026/01/GOLD_Pocket_Guide_2026.pdf)

### 36. 심막질환

- [ESC 2025 심근염·심막염 지침](https://academic.oup.com/eurheartj/article/46/40/3952/8234483)

### 37. 위장관 출혈

- [Baveno VIII 문맥고혈압 출혈 개정 합의, 2026](https://doi.org/10.1016/j.jhep.2026.07.030)
- [ACG 2021 상부 위장관·궤양 출혈 공식 강의](https://webfiles.gi.org/links/virtgrandround/Week40_ACGVGR_Laine_UGI_Bleeding.pdf)
- [ACG 2023 급성 하부 출혈 공식 권고](https://webfiles.gi.org/links/virtgrandround/34ACGVGRSenguptaAcuteLGIBleed.pdf)
- [Baveno VII 2022 문맥고혈압 합의](https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/)

### 38. 임신성고혈압 (Gestational Hypertension)

- [ACOG Practice Bulletin 222 2020·2026 재확인](https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/gestational-hypertension-and-preeclampsia)
- [ACOG 2025 검토 임신 고혈압 임상 설명](https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy)
- [NICE NG133 2023 개정 임신 고혈압](https://www.nice.org.uk/guidance/ng133/chapter/recommendations)

### 39. 직장 및 항문질환

- [ASCRS 2024 치핵](https://www.ascrsu.com/ascrs/view/ASCRS-Evidence-Based-Guidelines-and-Expert-Consensus/3982022/0/Management_of_Hemorrhoids__2024_)
- [ASCRS 2022 항문직장 농양·치루](https://www.ascrsu.com/ascrs/view/ASCRS-Evidence-Based-Guidelines-and-Expert-Consensus/3982014/0/Management_of_Anorectal_Abscess__Fistula_in_Ano__and_Rectovaginal_Fistula__2022_)
- [ASCRS 2023 치열](https://fascrs.org/ascrs/media/files/Education/2023-Anal-Fissures-CPG.pdf)

### 40. 폐결핵 (Pulmonary Tuberculosis)

- [ATS·CDC·ERS·IDSA 2025 결핵 치료 업데이트 공식 요약](https://www.cdc.gov/tb/php/dear-colleague-letters/2025-treatment-guidelines.html)
- [CDC 2025 결핵 임상 치료](https://www.cdc.gov/tb/hcp/treatment/index.html)

### 41. 간염 (Hepatitis)

- [AASLD/IDSA 만성 B형간염 치료 지침, 2025](https://www.aasld.org/practice-guidelines/hepatitis-b)
- [AASLD/IDSA HCV Guidance: 비간경변 초치료 성인 간소화 요법, 현행 온라인 지침(2026-10-07 확인)](https://www.hcvguidelines.org/guidance/simplified-hcv-treatment-for-treatment-naive-adults-without-cirrhosis/)
- [EASL 자가면역 간염 지침, 2025](https://www.journal-of-hepatology.eu/article/S0168-8278%2825%2900173-4/fulltext)
- [ACG 급성 간부전 지침, 2023(공식 지침 목록)](https://gi.org/guidelines/)

### 42. 산염기 질환

- [KDIGO CKD 평가·관리 지침, 2024: 대사성 산증](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)
- [AJKD Core Curriculum: 대사성 알칼리증, 2022(진단·치료 교육 논문)](https://pubmed.ncbi.nlm.nih.gov/35525634/)
- [ADA/EASD 등 고혈당 위기 합의 보고서, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11343900/)

### 43. 원내감염

- [SCCM/IDSA 성인 ICU의 새 발열 평가 지침, 2023](https://www.idsociety.org/practice-guideline/new-fever-in-critically-ill-patients/)
- [SHEA/IDSA 성인 C. difficile 감염 집중 개정, 2021](https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/)
- [IDSA/ESCMID S. aureus 균혈증 지침, 2026](https://www.idsociety.org/practice-guideline/staphylococcus-aureus-bacteremia/)

### 44. 흉수

- [BTS 흉막질환 지침, 2023](https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/pleural-disease-full-supplement/)
- [ERS/ESTS 성인 흉막감염 관리 성명, 2023](https://publications.ersnet.org/content/erj/61/2/2201062)

### 45. 심부전

- [ESC 심부전 지침, 2026](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/heart-failure/)
- [ESC 2026 심부전 공식 교육 슬라이드](https://dam-assets.escardio.org/download/b2e587389baa11f185de06bdfb3e4be9)
- [ACC HFrEF 치료 전문가 합의 경로, 2024](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/03/06/19/22/2024-acc-expert-consensus-hfref)

### 46. 약물 및 화학물질 중독

- [AHA 특수 상황 소생술 지침: 중독, 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation)
- [미국·캐나다 아세트아미노펜 중독 합의 성명, 2023](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062)
- [EXTRIP 리튬 체외 제거 권고, 2015(현행 공식 권고 확인)](https://www.extrip-workgroup.org/lithium)
- [EXTRIP 살리실산 체외 제거 권고, 2015(현행 공식 권고 확인)](https://www.extrip-workgroup.org/salicylates)

### 47. 혈관질환

- [ACC/AHA 등 하지 말초동맥질환 지침, 2024](https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251)
- [ESC 말초동맥 및 대동맥 질환 지침, 2024](https://academic.oup.com/eurheartj/article/45/36/3538/7738955)

### 48. 화상 (Burn)

- [ABA 화상 쇼크 소생술 지침, 2024](https://guidance.nattrauma.org/media/wetjtmrg/american-burn-association-clinical-practice-guidelines-on-burn-shock-resuscitation.pdf)
- [ABA 화상 전문센터 의뢰 기준, 현행 공식 기준(2026-10-07 확인)](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

### 49. 대동맥 질환

- [ESVS 하행 흉부·흉복부 대동맥 질환 지침, 2026](https://esvs.org/wp-content/uploads/2022/10/ESVS-2026-DTA-GL_compressed.pdf)
- [ESC 말초동맥 및 대동맥 질환 지침, 2024](https://academic.oup.com/eurheartj/article/45/36/3538/7738955)
- [ESVS 복부 대동맥-엉덩동맥류 지침, 2024](https://esvs.org/wp-content/uploads/2024/02/ESVS-2024-AAA-Guidelines.pdf)
- [ACC/AHA 대동맥 질환 지침, 2022: 공식 핵심 권고](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2022/11/01/12/21/2022-guideline-on-aortic-disease-2-gl-ad)

### 50. 고혈압 (Hypertension)

- [대한고혈압학회 제6판 지침 공식 하이라이트, 2026](https://doi.org/10.5646/ch.2026.32.e31)
- [대한고혈압학회 제6판 진료지침, 2026(공식 수정본 배포 페이지)](https://www.koreanhypertension.org/reference/guide?idno=10446&mode=read)
- [ACC/AHA 고혈압 지침, 2025: 공식 핵심 권고](https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know)
- [Endocrine Society 일차성 알도스테론증 지침, 2025](https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2)

### 51. 염증성 장질환 (IBD) (Inflammatory Bowel Disease)

- [ACG 성인 크론병 지침, 2025: 공식 요점](https://gi.org/wp-content/uploads/2018/04/ACG_CrohnsHighight2025.pdf)
- [ACG 성인 궤양성 대장염 지침, 2025: 공식 해설·권고](https://gi.org/journals-publications/ebgi/alkazzi_aug2025/)

### 52. 적혈구 질환

- [ASH 철 결핍 진단 지침, 2026](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/iron-deficiency-anemia/diagnosis-of-iron-deficiency)
- [NICE NG239 비타민 B12 결핍 진단·관리, 2024](https://www.nice.org.uk/guidance/ng239/chapter/Recommendations)
- [EASL 혈색소침착증 지침, 2022](https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf)

### 53. 판막질환

- [ESC/EACTS 판막질환 지침, 2025](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/valvular-heart-disease/)
- [ESC/EACTS 2025 공식 교육 슬라이드](https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf)
- [ESC 심방세동 지침, 2024](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/atrial-fibrillation)

### 54. 간암

- [EASL 간세포암 관리 지침, 2025](https://easlcampus.eu/sites/default/files/2025-02/EASL_CPG_Management_HCC.pdf)
- [ESMO 간세포암 진단·치료·추적 지침, 2025](https://pubmed.ncbi.nlm.nih.gov/39986353/)

### 55. 단백뇨

- [KDIGO CKD 평가·관리 지침, 2024: 알부민뇨 분류와 신장 보호 치료](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

### 56. 응고인자 질환

- [ASH/ISTH/NHF/WFH vWD 진단·관리 지침, 2021](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/von-willebrand-disease)
- [WFH 혈우병 관리 지침 제3판, 2020(현행 공식 판)](https://www1.wfh.org/publication/files/pdf-1863.pdf)

### 57. 종양내과

- [ACR Appropriateness Criteria: 상대정맥·팔머리정맥 폐쇄 의심 영상 평가, 2026](https://doi.org/10.1016/j.jacr.2025.10.029)
- [악성 상대정맥 증후군 관리 학술 리뷰, 2024(정식 지침이 아닌 보충 근거)](https://apm.amegroups.org/article/view/123283/html)
- [NICE NG234 척추 전이·전이성 척수 압박, 2023](https://www.nice.org.uk/guidance/ng234/chapter/recommendations)
- [BSH 성인·소아 종양용해증후군 진단·관리 지침, 2025](https://cms.b-s-h.org.uk/guidelines/guidelines/updated-guidelines-for-the-diagnosis-and-management-of-tumour-lysis-syndrome-in-adults-and-children)
- [Endocrine Society 악성종양 고칼슘혈증 지침, 2022(2023 발행)](https://www.endocrine.org/clinical-practice-guidelines/hypercalcemia)

### 58. 폐혈관질환

- [AHA/ACC 등 급성 폐색전증 지침, 2026](https://professional.heart.org/en/science-news/2026-guideline-for-the-evaluation-and-management-of-acute-pulmonary-embolism-in-adults/top-things-to-know)
- [ESC/ERS 폐고혈압 지침, 2022](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/pulmonary-hypertension/)

### 59. 백혈구 질환

- [ASH 청소년·젊은 성인 ALL 초치료 지침, 2026](https://www.hematology.org/-/media/hematology/files/clinicians/guidelines/all-in-ayas-2026/ash-all-aya-frontline-visual-summary.pdf)
- [ASH 고령 AML 초치료 지침, 2025: 공식 요약](https://www.hematology.org/-/media/hematology/files/clinicians/guidelines/ash-guidelines-update-2025/aml-snapshot-final.pdf)
- [SITC 급성 백혈병 면역치료 지침 v2.0, 2026](https://doi.org/10.1136/jitc-2026-015963)
- [ELN 성인 AML 진단·치료 권고, 2022](https://ashpublications.org/blood/article/doi/10.1182/blood.2022016867/485817)
- [ELN 저강도 치료 AML 위험 분류, 2024](https://ashpublications.org/blood/article/144/21/2169/517356/Genetic-risk-classification-for-adults-with-AML)
- [ELN AML MRD 개정 합의, 2025(2026 발행)](https://doi.org/10.1182/blood.2025031480)
- [ELN 성인 ALL 치료 권고, 2024](https://ashpublications.org/blood/article/143/19/1903/514806/Management-of-ALL-in-adults-2024-ELN)
- [ELN CML 치료 권고, 2025](https://www.leukemia-net.org/sites/leukemia-net/content/e58/e495/e496/e11522/Apperley_J.etal_Leukemia2025.2025EuropeanLeukemiaNetrecommendationsforthemanagementofchronicmyeloidleukemia.pdf)
- [ELN APL 관리 권고, 2019(응급 ATRA 근거)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/)

### 60. 백혈병 (Leukemia)

- [ASH 청소년·젊은 성인 ALL 초치료 지침, 2026](https://www.hematology.org/-/media/hematology/files/clinicians/guidelines/all-in-ayas-2026/ash-all-aya-frontline-visual-summary.pdf)
- [ASH 고령 AML 초치료 지침, 2025: 공식 요약](https://www.hematology.org/-/media/hematology/files/clinicians/guidelines/ash-guidelines-update-2025/aml-snapshot-final.pdf)
- [SITC 급성 백혈병 면역치료 지침 v2.0, 2026](https://doi.org/10.1136/jitc-2026-015963)
- [ELN 성인 AML 진단·치료 권고, 2022](https://ashpublications.org/blood/article/doi/10.1182/blood.2022016867/485817)
- [ELN 저강도 치료 AML 위험 분류, 2024](https://ashpublications.org/blood/article/144/21/2169/517356/Genetic-risk-classification-for-adults-with-AML)
- [ELN AML MRD 개정 합의, 2025(2026 발행)](https://doi.org/10.1182/blood.2025031480)
- [ELN 성인 ALL 치료 권고, 2024](https://ashpublications.org/blood/article/143/19/1903/514806/Management-of-ALL-in-adults-2024-ELN)
- [ELN CML 치료 권고, 2025](https://www.leukemia-net.org/sites/leukemia-net/content/e58/e495/e496/e11522/Apperley_J.etal_Leukemia2025.2025EuropeanLeukemiaNetrecommendationsforthemanagementofchronicmyeloidleukemia.pdf)
- [ELN APL 관리 권고, 2019(응급 ATRA 근거)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/)

### 61. 심근질환

- [ESC 심근병증 지침, 2023](https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/cardiomyopathy/)
- [AHA/ACC 다학회 HCM 지침, 2024](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/05/06/15/12/2024-hypertrophic-cardiomyopathy-gl)
- [ESC 심근염·심막염 지침, 2025](https://academic.oup.com/eurheartj/article/46/40/3952/8234483)

### 62. 위장관 혈관질환

- [ESVS 장간막·신장 동정맥 질환 지침, 2025](https://www.sciencedirect.com/science/article/pii/S1078588425005167)
- [WSES 급성 장간막 허혈 개정 지침, 2022](https://wjes.biomedcentral.com/counter/pdf/10.1186/s13017-022-00443-x.pdf)

### 63. 임신 중 감염

- [ACOG 임신 중 요로감염 합의, 2023](https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals)
- [ACOG 임신 중 매독 선별 개정, 2024](https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2024/04/screening-for-syphilis-in-pregnancy)
- [ACOG 자궁내 감염 의심 기준 개정, 2024](https://doi.org/10.1097/AOG.0000000000005593)
- [CDC STI 지침: 임신 중 매독, 2021(현행 온라인 권고)](https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm)
- [CDC 중증 수두 위험군 임상 지침, 현행(2026-10-07 확인)](https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html)

### 64. 췌장암

- [Pan-Asian ESMO 췌장암 진단·치료·추적 지침, 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12546840/)
- [ESMO 전이성 췌장암 Express Update, 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12125698/)

### 65. 빈혈 (Anemia)

- [ASH 철 결핍 진단 지침, 2026](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/iron-deficiency-anemia/diagnosis-of-iron-deficiency)
- [AABB 적혈구 수혈 지침, 2023: 공식 요약](https://www.aabb.org/docs/default-source/default-document-library/resources/updates-in-red-blood-cell-transfusion-thresholds.pdf)
- [AABB 급성 심근경색 적혈구 수혈 지침, 2025](https://www.aabb.org/news-resources/news/article/2025/08/20/expert-panel-recommends-liberal-transfusion-strategy-for-hospitalized-patients-with-ami)
- [NICE NG239 B12 결핍, 2024](https://www.nice.org.uk/guidance/ng239/chapter/Recommendations)

### 66. 성매개감염

- [CDC — STI Treatment Guidelines (2021), PID](https://www.cdc.gov/std/treatment-guidelines/pid.htm)
- [CDC — Urethritis and Cervicitis (2021)](https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm)
- [CDC — Trichomoniasis (2021)](https://www.cdc.gov/std/treatment-guidelines/trichomoniasis.htm)
- [CDC — Syphilis During Pregnancy (2021)](https://www.cdc.gov/std/treatment-guidelines/syphilis-pregnancy.htm)
- [CDC — Anogenital Warts (2021)](https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm)
- [ACOG — Screening for Syphilis in Pregnancy (2024)](https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2024/04/screening-for-syphilis-in-pregnancy)

### 67. 심부 정맥 혈전증 (Deep Vein Thrombosis)

- [ASH — Diagnosis of Venous Thromboembolism (2018)](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/venous-thromboembolism-guidelines/diagnosis)
- [ASH — Treatment of DVT and PE (2020)](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/venous-thromboembolism-guidelines/treatment)
- [CHEST — Antithrombotic Therapy for VTE Disease, Compendium and Review of 2012–2021 Guidelines (2024)](https://journal.chestnet.org/article/S0012-3692%2824%2900292-7/fulltext)

### 68. 요로질환

- [EAU — Guidelines on Urolithiasis (2026), Acute Management and Medical Expulsive Therapy](https://uroweb.org/guidelines/urolithiasis/chapter/guidelines)
- [EAU — Guidelines on Urolithiasis (2026), Metabolic Evaluation and Recurrence Prevention](https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention)

### 69. 폐렴

- [ATS — Diagnosis and Management of Community-acquired Pneumonia (2025 online publication; 2026 journal issue)](https://academic.oup.com/ajrccm/article/212/1/24/8435770)
- [IDSA — Position Statement on the ATS 2025 CAP Update (2025 online publication; 2026 journal issue)](https://academic.oup.com/cid/article/82/4/622/8364653)
- [ATS/IDSA — Adult Community-acquired Pneumonia Guideline (2019)](https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults/)
- [ATS/IDSA — Hospital-acquired and Ventilator-associated Pneumonia Guideline (2016)](https://www.idsociety.org/practice-guideline/hap_vap/)

### 70. 혈소판 질환

- [ASH — Immune Thrombocytopenia Guidelines, Adult Initial and Second-line Therapy (2026)](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/immune-thrombocytopenia-guidelines)
- [ASH — Adult ITP Teaching Slides (2026)](https://www.hematology.org/-/media/hematology/files/clinicians/guidelines/ash-2026-itp-teaching-slides_20260825_01.pdf)
- [ASH — Heparin-induced Thrombocytopenia Guideline (2018)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/)
- [AABB/ICTMG — Platelet Transfusion Guidelines (2025)](https://www.aabb.org/news-resources/news/article/2025/05/29/aabb-develops-new-platelet-transfusion-guidelines)

### 71. 다운 증후군 (Down Syndrome)

- [AAP — Health Supervision for Children and Adolescents With Down Syndrome (2022)](https://publications.aap.org/pediatrics/article/149/5/e2022057010/186778/Health-Supervision-for-Children-and-Adolescents)

### 72. 수혈부작용

- [BSH — Investigation and Management of Acute Transfusion Reactions (2023)](https://b-s-h.org.uk/guidelines/guidelines/guideline-on-the-investigation-and-management-of-acute-transfusion-reactions)
- [AABB — Association Bulletin 15-02, TACO (March 2026 revision)](https://www.aabb.org/docs/default-source/default-document-library/resources/association-bulletins/ab15-02-revised.pdf)
- [BSH — Use of Irradiated Blood Components (2020)](https://b-s-h.org.uk/guidelines/guidelines/guidelines-on-the-use-of-irradiated-blood-components)

### 73. 위 절제 부작용

- [International Consensus — Diagnosis and Management of Dumping Syndrome (2020)](https://www.nature.com/articles/s41574-020-0357-5)
- [AGA — Management of Gastroparesis Guideline (2025)](https://gastro.org/clinical-guidance/management-of-gastroparesis/)
- [AGA — Gastroparesis Guideline Evidence and Recommendations (2025)](https://aga-fileuploader-bucket.s3.us-east-2.amazonaws.com/AGA%20Gastroparesis%20Guideline%202025-04-15-6.pdf)

### 74. 혈뇨

- [AUA/SUFU — Microhematuria Guideline (2020; amended 2025)](https://www.auanet.org/documents/Guidelines/PDF/2025%20Guidelines/MH%20Unabridged%2002.2025FINAL3-1.pdf)
- [ERKNet/ERA/ESPN — Alport Syndrome Guideline (2024; published 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12209846/)

### 75. G(-)

- [IDSA — Treatment of Antimicrobial Resistant Gram-Negative Infections (2026)](https://www.idsociety.org/practice-guideline/amr-guidance/)
- [CDC — Clinical Overview of Brucellosis (2026 update)](https://www.cdc.gov/brucellosis/hcp/clinical-overview/index.html)
- [CDC — Gonococcal Infections Among Adolescents and Adults, STI Guidelines (2021)](https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm)
- [Surviving Sepsis Campaign — Adult Guidelines (2026)](https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines)

### 76. 바이러스

- [CDC. Influenza Antiviral Medications: Summary for Clinicians — 현행 임상 안내, 2026 확인](https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html)
- [IDSA. COVID-19 Treatment and Management Guideline — 항바이러스제 권고 2025 개정](https://www.idsociety.org/practice-guideline/covid-19-guideline-treatment-and-management/)
- [NIH. Adult and Adolescent ARV Guidelines: Initiation of Antiretroviral Therapy — 2025](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/initiation-antiretroviral-therapy)
- [WHO. Clinical Management of Arboviral Diseases — 2025](https://www.who.int/publications/i/item/9789240111110)
- [CDC. Rabies Post-exposure Prophylaxis Guidance — 2026](https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html)

### 77. 지역사회 감염

- [IDSA. Diagnosis and Management of Infectious Diarrhea — 2017, 현행 지침](https://www.idsociety.org/practice-guideline/infectious-diarrhea/)
- [CDC Yellow Book 2026. Travelers’ Diarrhea](https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html)
- [NICE NG184. Human and Animal Bites: Antimicrobial Prescribing — 2020, 현행 지침](https://www.nice.org.uk/guidance/ng184/chapter/Recommendations)

### 78. 폐종양

- [Fleischner Society. Management of Incidental Pulmonary Nodules — 2017, 현행 기준](https://pubs.rsna.org/doi/10.1148/radiol.2017161659)
- [ASCO. Stage IV NSCLC With Driver Alterations: Living Guideline v2026.3.3 — 2026](https://ascopubs.org/nsclc-da-living-guideline)
- [NCI. Non-Small Cell Lung Cancer Treatment, PDQ Health Professional Version — 지속 갱신 근거 요약, 2026 확인](https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq)
- [NCI. Small Cell Lung Cancer Treatment, PDQ Health Professional Version — 지속 갱신 근거 요약, 2026 확인](https://www.cancer.gov/types/lung/hp/small-cell-lung-treatment-pdq)

### 79. 식중독 및 식품매개 감염

- [CDC. Confirming an Etiology in Foodborne Outbreaks — 원인별 잠복기·증후군 공식 기준, 2026 확인](https://www.cdc.gov/foodborne-outbreaks/php/confirming-cause/index.html)
- [IDSA. Diagnosis and Management of Infectious Diarrhea — 2017, 현행 지침](https://www.idsociety.org/practice-guideline/infectious-diarrhea/)
- [CDC. Clinical Guidelines for Diagnosis and Treatment of Botulism — 2021, 현행 지침](https://www.cdc.gov/mmwr/volumes/70/rr/rr7002a1.htm)

### 80. 뇌종양 (Brain tumor)

- [EANO. Diagnosis and Treatment of Diffuse Gliomas of Adulthood — 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC7904519/)
- [EANO. Diagnosis and Management of Meningiomas — 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8563316/)
- [SNO/EANO. Anticonvulsant Prophylaxis in Newly Diagnosed Brain Tumors — 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8563323/)
- [EANO/ESMO. Neurological and Vascular Complications of Brain Tumours — 2021](https://doi.org/10.1016/j.annonc.2020.11.003)
- [ASCO-SNO. Diffuse Astrocytic and Oligodendroglial Tumors: Rapid Recommendation Update — 2025](https://ascopubs.org/doi/10.1200/JCO-25-00250)
- [ASCO-SNO-ASTRO. Treatment for Brain Metastases — 2021 온라인/2022 저널 발행](https://pmc.ncbi.nlm.nih.gov/articles/PMC8917399/)

### 81. 허혈성 뇌졸중 (Ischemic stroke)

- [AHA/ASA. Early Management of Acute Ischemic Stroke — 2026](https://www.ahajournals.org/doi/10.1161/STR.0000000000000513)
- [AHA/ASA. 2026 AIS Guideline: Top Things to Know — 공식 핵심 권고](https://professional.heart.org/en/science-news/2026-guideline-for-the-early-management-of-patients-with-acute-ischemic-stroke/top-things-to-know)

### 82. 혈관벽 질환

- [ISTH. Diagnosis of Thrombotic Thrombocytopenic Purpura — 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC8146131/)
- [ISTH. Focused Update of TTP Management Guidelines — 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC13470878/)
- [ISTH SSC. Updated Definition and Scoring of DIC — 2025, SSC communication](https://www.jthjournal.org/article/S1538-7836(25)00220-X/fulltext)
- [KDIGO. Atypical HUS and C3 Glomerulopathy — 2017, Controversies Conference 합의 보고서](https://kdigo.org/wp-content/uploads/2017/02/KDIGO-Complement-conference-rpt-FINAL.pdf)
- [IDSA. Diagnosis and Management of Infectious Diarrhea — 2017, STEC/HUS 관련 권고](https://www.idsociety.org/practice-guideline/infectious-diarrhea/)

### 83. 호중구감소증 (Neutropenia)

- [AGIHO/DGHO. Adult Neutropenic FUO: 2024 Guideline Update — 2025 발행](https://pmc.ncbi.nlm.nih.gov/articles/PMC11836497/)
- [ASCO/IDSA. Outpatient Management of Fever and Neutropenia in Adults — 2018](https://www.idsociety.org/globalassets/idsa/practice-guidelines/outpatient-management-of-fever-and-neutropenia.pdf)
- [IDSA. Antimicrobial Agents in Neutropenic Patients With Cancer — 2010 개정/2011 발행, 기본 정의·고위험 평가](https://doi.org/10.1093/cid/cir073)

### 84. ILD

- [ATS/ERS/JRS/ALAT. IPF Update and Progressive Pulmonary Fibrosis — 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9851481/)
- [ACR/CHEST. Treatment of ILD in Systemic Autoimmune Rheumatic Diseases — 2023 지침/2024 발행](https://pmc.ncbi.nlm.nih.gov/articles/PMC12646475/)
- [ERS. Treatment of Sarcoidosis — 2021](https://publications.ersnet.org/lookup/pmid/34140301)
- [FDA. JASCAYD (nerandomilast) Prescribing Information — 2025, 약제 허가 근거·지침과 별도](https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/220449s000lbl.pdf)


## 2026-10-08 원본 정리

140개 보강 결과를 최종 원본 폴더에 동기화했다. 이후 미커밋 112개 문서의 누락 내용도 최신 GitHub 기준으로 선택 병합했다. 대표 범위 메타데이터는 새 포함 질환에 맞춰 정규화했으며, 문서 구조 검사는 Python 5개·Node 7개를 통과했다. 전체 로컬 빌드는 생략한다. 상세 내역은 [원본 병합 보고서](../source-reconciliation-2026-10-08/summary.md)를 참고한다.
