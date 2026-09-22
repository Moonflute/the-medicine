begin;

with review_values (
  id,
  payload_hash,
  proposed_documents,
  action,
  rationale,
  confidence,
  flags,
  needed_document,
  manifest
) as (
  values
    ('QB-PF2026-V01-IM-BANK-0094', '18f51d6d7398b6de3d6b7255eb9ed8c1', '[]'::jsonb, 'no-suitable-document', '문항의 핵심은 심정지 후 자발순환 회복 환자의 표적체온관리 목표와 유지 시간이다. 현재 카탈로그에는 심정지 후 치료 또는 표적체온관리 개별 문서가 없으며, 대표문서인 응급의학을 연결하면 범위가 지나치게 넓어진다.', 'high', '[]'::jsonb, '심정지 후 치료 및 표적체온관리', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0104', '71e99b5ccc936c910f5aa4cc78a6611b', '[]'::jsonb, 'no-suitable-document', '여러 소화기 내시경 시술에서 예방적 항생제 적응증을 비교하는 술기·감염예방 문항이다. 보기의 간경변, 췌장 낭종, 식도 협착은 비교 대상일 뿐 특정 질환 이론으로 연결할 근거가 없다.', 'high', '[]'::jsonb, '소화기 내시경의 예방적 항생제', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0208', '435d933fe7c33975f783069b018b34c1', '[{"type":"disease","slug":"MDUg7Iug7J6lL-uLqOuwseuHqC5tZA","title":"단백뇨"}]'::jsonb, 'add', '24시간 소변 단백 정량을 위한 정확한 채취법을 묻는 문항으로, 단백뇨의 평가 과정과 직접 연결된다. 기립성 단백뇨처럼 특정 원인 문서보다 단백뇨 문서가 정확하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0255', '5ffd512f4d376a3027a02676e5aba0f3', '[]'::jsonb, 'no-suitable-document', 'BMI와 동반질환에 따른 비만대사수술 적응증을 묻는다. 카탈로그에 비만 또는 비만대사수술 문서가 없고, 당뇨병·고혈압은 없다고 명시된 배제 조건이므로 이들 문서에 연결하면 안 된다.', 'high', '[]'::jsonb, '비만 및 비만대사수술 적응증', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0257', '68b75f9a33b313e3c7b9119ea0e7bd8a', '[{"type":"disease","slug":"MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ","title":"대장균 (E. coli)"}]'::jsonb, 'add', '설사 환자의 E. coli 감수성 결과에서 ESBL 양상을 판독하고 카바페넴을 선택하는 문항이다. 특정 병원체가 확정되어 있으므로 가장 좁은 대장균 문서가 적절하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0312', 'fc31b5221b62233cf15d8b1cf54f9395', '[]'::jsonb, 'no-suitable-document', 'Venturi mask 등 산소 전달 장치의 유량 체계와 고정 FiO2를 구분하는 문항이다. 특정 질환이나 증상 접근 문항이 아니므로 호흡기 질환을 임의로 연결하지 않는다.', 'high', '[]'::jsonb, '산소요법 및 산소 전달 장치', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0329', 'a559a861d9ec244055f73140367b752e', '[]'::jsonb, 'no-suitable-document', '기관지로 잘못 삽입된 비위관을 영상으로 확인하고 즉시 제거하는 술기 안전 문항이다. 대장암과 장폐색은 비위관을 사용하게 된 배경일 뿐 정답 개념이 아니다.', 'high', '[]'::jsonb, '비위관 삽입 및 위치 확인', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0330', '70c631d9aee434617cfb9da0eb463a3a', '[]'::jsonb, 'no-suitable-document', '복부 신체진찰의 순서 자체를 묻는 일반 진찰 문항이며 특정 질환·CC와 연결할 수 없다.', 'high', '[]'::jsonb, '복부 진찰', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0333', '1fea6057235c3c5ea86fa5d5c9b53434', '[]'::jsonb, 'no-suitable-document', '점막피부 색소침착과 과오종성 용종을 근거로 Peutz-Jeghers syndrome을 진단하는 문항이다. 카탈로그에 해당 개별 문서가 없고 FAP·HNPCC는 오답 감별 대상이므로 대신 연결하면 안 된다.', 'high', '[]'::jsonb, '포이츠-예거 증후군 (Peutz-Jeghers Syndrome)', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0348', '352dda7dd39239f5224d73a51c247c47', '[]'::jsonb, 'no-suitable-document', '고도 요독 환자에서 급격한 혈액투석 직후 발생한 신경학적 악화로 투석불균형증후군을 진단하는 문항이다. 만성 콩팥병은 배경질환이고 현재 카탈로그에는 이 합병증의 개별 문서가 없다.', 'high', '[]'::jsonb, '투석불균형증후군 (Dialysis Disequilibrium Syndrome)', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0353', '03921650b9b21bd5815d0c79c9e71aab', '[{"type":"disease","slug":"MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA","title":"급성 신우신염 (Acute Pyelonephritis)"},{"type":"disease","slug":"MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ","title":"대장균 (E. coli)"}]'::jsonb, 'add', '발열·옆구리통증과 요·혈액배양 E. coli는 급성 신우신염에 합당하고, 정답 선택은 ESBL 생성 대장균의 항균제 치료에 달려 있다. 질환과 원인균이 모두 문제 핵심이므로 두 개별 문서를 연결한다.', 'high', '["existing-drug-link-review"]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0383', 'd41a3d410a39b8909be1b9863894aa74', '[]'::jsonb, 'no-suitable-document', '산소 전달 장치별 권장 유량을 묻는 장비·산소요법 문항이다. 저산소혈증은 산소 투여의 전제일 뿐 특정 CC의 감별·접근을 묻지 않는다.', 'high', '[]'::jsonb, '산소요법 및 산소 전달 장치', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0394', '3aca7d3a36ddd55289d0f128ec40e229', '[{"type":"disease","slug":"MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ","title":"포도알균 감염 (Staphylococcal Infection)"}]'::jsonb, 'add', 'coagulase 양성 포도알균과 oxacillin 내성으로 MRSA를 판정하고 vancomycin을 선택하는 문항이다. 광범위한 폐렴 대표문서보다 원인균과 내성 해석을 다루는 포도알균 감염 문서가 더 좁고 정확하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0401', '07e48c1181ae0fd4c90858737ea1c4af', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA","title":"임신성고혈압 (Gestational Hypertension)"}]'::jsonb, 'add', '임신 중 고혈압 약제 선택과 ACE 억제제 금기를 묻는다. 일반 고혈압보다 임신 중 고혈압 치료를 포함하는 산과 문서가 임상 맥락에 더 가깝다.', 'medium', '["diagnostic-scope-ambiguous","current-drug-is-distractor"]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0407', '1e56e21dd45ae3f08730fcf1eb5b7685', '[{"type":"disease","slug":"MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trgq3slZQgKEdhbGxibGFkZGVyIENhbmNlcikubWQ","title":"담낭암 (Gallbladder Cancer)"}]'::jsonb, 'add', '담낭절제 후 우연히 발견된 점막 국한 담낭암의 병기별 추가 수술 여부를 묻는 문항으로 담낭암 개별 문서와 직접 일치한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0408', '1aecee50810fc60a9ddb881d755d3cb2', '[]'::jsonb, 'no-suitable-document', '청진기의 구조와 정상·비정상 호흡음 원리를 묻는 흉부 신체진찰 문항이다. 보기에서 언급한 폐경화·흉수는 오답 설명의 예시이므로 질환 연결 대상으로 삼지 않는다.', 'high', '[]'::jsonb, '흉부 진찰 및 호흡음', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-BANK-0422', '2ebc3200f4d30b8a07a779f9a2affbfd', '[{"type":"disease","slug":"MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k","title":"제2형 당뇨병 (Type 2 Diabetes Mellitus)"}]'::jsonb, 'add', '경구 혈당강하제 중 insulin secretagogue의 단독 저혈당 위험을 묻는다. 약제군이 주로 사용되는 제2형 당뇨병 문서가 당뇨병 전체 대표문서보다 좁고 실용적이다.', 'medium', '["inferred-type-2-diabetes"]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2019-0018', '50bd291ef431dbd9b14086f2ef36c241', '[]'::jsonb, 'no-suitable-document', '노인의 낙상 위험 선별에서 과거력을 우선 확인하는 원칙을 묻는다. 폐렴은 입원 배경일 뿐 연결 대상이 아니며 카탈로그에 노인 낙상 평가 문서가 없다.', 'high', '[]'::jsonb, '노인 낙상 위험 평가', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2019-0020', '29da110bf160c0a94ebf94f501cd3992', '[]'::jsonb, 'no-suitable-document', '와파린 복용 중 출혈 경향에서 PT/INR을 확인하는 약물 모니터링 문항이다. 심방세동은 약물 복용의 배경이고 혈소판·응고인자 질환을 진단하는 문항도 아니므로 별도 질환 연결을 강제하지 않는다.', 'high', '[]'::jsonb, '항응고제 모니터링 및 와파린 과항응고', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2021-0026', '2a97092c50e76c3109f0b381d34e609c', '[{"type":"disease","slug":"MDgg6rCQ7Je8L-y9lOuhnOuCmOuwlOydtOufrOyKpOqwkOyXvOymnS0xOSAoQ09WSUQtMTkpLm1k","title":"코로나바이러스감염증-19 (COVID-19)"}]'::jsonb, 'add', 'SARS-CoV-2 비인두 검체 채취 시 필요한 PPE를 묻는 COVID-19 감염관리 문항이다. 뇌졸중과 고혈압은 내원 배경이므로 연결하지 않는다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2022-0030', '95c3c060260b1a80278b94b94a4cd518', '[]'::jsonb, 'no-suitable-document', '포괄적 노인평가에서 IADL 항목을 구분하는 기능평가 문항이다. 골절은 퇴원 전 평가의 배경일 뿐이며 현재 카탈로그에 ADL/IADL 문서가 없다.', 'high', '[]'::jsonb, '포괄적 노인평가와 ADL/IADL', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2023-0030', 'bb023378ebba9224b0564cb4106767a1', '[]'::jsonb, 'no-suitable-document', '반복 낙상과 보행 불안정이 있는 노인에서 Timed Up and Go Test를 선택하는 낙상 평가 문항이다. 고혈압과 당뇨병은 병력일 뿐 정답 판단의 핵심이 아니다.', 'high', '[]'::jsonb, '노인 낙상 위험 평가', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2024-0016', 'f773bee29f5926f9777ad01cc6db597b', '[{"type":"cc","slug":"7JiI67Cp7KCR7KKF","title":"예방접종"}]'::jsonb, 'add', '고령자의 PPSV23·PCV13 순차 접종 간격을 묻는 성인 예방접종 일정 문항이다. 특정 폐렴 질환의 진단·치료가 아니라 예방접종 접근 자체가 핵심이므로 예방접종 CC가 가장 적절하다.', 'high', '["catalog-category-pediatric-for-adult-topic"]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2025-0002', '45ec39305f4283373479f3ed3b45d18a', '[{"type":"disease","slug":"MDcg66WY66eI7Yuw7IqkL-yErOycoOq3vO2GtSAoRmlicm9teWFsZ2lhKS5tZA","title":"섬유근통 (Fibromyalgia)"}]'::jsonb, 'add', '정상 염증수치·근효소와 근력저하 부재를 바탕으로 섬유근통을 진단하는 문항이다. 감별 보기의 염증성 근육병·척추관절염·혈관염은 오답이므로 연결하지 않고 가장 구체적인 섬유근통 문서만 연결한다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2025-0004', '15c7bf842f0c1790f234591e4a3a4583', '[]'::jsonb, 'no-suitable-document', '정상 신기능 환자에서 정맥 요오드 조영제와 metformin 관리 원칙을 묻는 검사·약물 안전 문항이다. 실제 AKI나 CKD가 없으므로 해당 질환 문서를 연결하면 부정확하다.', 'high', '["incidental-drug-link"]'::jsonb, '요오드 조영제와 메트포민 관리', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2025-0010', '6480ec07c83f7e686a36fd56637d089a', '[]'::jsonb, 'no-suitable-document', '치과 시술 뒤 발생한 ring-enhancing lesion을 뇌농양으로 진단하고 경험적 항생제를 고르는 문항이다. 카탈로그에 뇌농양 개별 문서가 없으며 뇌수막염이나 다른 부위 농양 문서는 대체할 수 없다.', 'high', '[]'::jsonb, '뇌농양 (Brain Abscess)', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2026-0004', 'e1dcb0faebaa07774313ccf5d276e4b5', '[]'::jsonb, 'no-suitable-document', '감염 상태를 알 수 없는 노출원에 대한 주사침 손상 후 HBV·HIV 등 노출후 예방을 묻는다. 특정 감염이 진단된 것이 아니므로 HBV·HIV 문서를 연결하면 안 되며, 카탈로그에 직업성 혈액노출 문서가 없다.', 'high', '[]'::jsonb, '주사침 손상 및 혈액매개감염 노출후 예방', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2026-0006', '81843d593800416d8c5a6cc95a7dea98', '[]'::jsonb, 'no-suitable-document', '대장수술에서 예방적 항생제를 피부 절개 전 60분 이내 투여하는 원칙을 묻는다. 대장암은 수술의 배경이고 암의 이론을 묻지 않으므로 연결하지 않는다.', 'high', '[]'::jsonb, '수술 예방적 항생제', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V01-IM-Y2026-0029', 'f56a2726358e31e2098790b10a143bbd', '[]'::jsonb, 'no-suitable-document', '사전연명의료의향서가 있는 말기 환자의 임종기 호흡과 분비물 소견을 인지하고 임종 돌봄을 계획하는 문항이다. 폐암과 뇌전이는 임종 상황의 배경이며 종양 치료 문항이 아니다.', 'high', '[]'::jsonb, '임종 돌봄 및 연명의료 결정', 'phase1-unlinked-internal.json'),
    ('QB-PF2026-V02-OG-BANK-0003', 'f78edb5ee224d975253786d350bdb466', '[]'::jsonb, 'no-suitable-document', '발프로산 노출 및 신경관결손 재발 고위험 여성의 임신 전 고용량 엽산 예방을 묻는다. 현재 카탈로그에는 신경관결손 또는 임신 전 엽산 예방 문서가 없고, 발프로산은 과거 노출 배경이므로 다른 신경계 질환 문서에 연결하지 않는다.', 'high', '["missing-exact-document"]'::jsonb, '신경관결손 예방 및 임신 전 엽산 보충', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0086', '5980eb3f439a133b25b9e00ea342dadd', '[]'::jsonb, 'no-suitable-document', '그림에서 회음부·항문괄약근·직장점막 손상 범위를 판독해 4도 회음열상으로 분류하는 문항이다. 산후출혈 대표문서는 범위가 넓고 회음열상 분류 자체를 대신하지 못한다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '산과적 회음열상 및 산도손상', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0098', '42dc847b96f99a4be24da3a43a9a1542', '[]'::jsonb, 'no-suitable-document', '배란기 에스트로겐과 자궁경관점액의 fern pattern을 묻는 정상 월경주기 생리 문항이다. 불임 문서에는 경관점액 검사가 언급되지만 이 문항은 불임 평가가 아니므로 질환 연결을 강제하지 않는다.', 'high', '["missing-exact-document","existing-drug-link-review"]'::jsonb, '월경주기·배란 생리와 자궁경관점액 검사', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0122', 'a6441ccddc81e00192051e22f9a39d0e', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg66qo7LK0IOuzgO2ZlCAoTWF0ZXJuYWwgQ2hhbmdlcyBEdXJpbmcgUHJlZ25hbmN5KS5tZA","title":"임신 중 모체 변화 (Maternal Changes During Pregnancy)"}]'::jsonb, 'add', '임신 28주, 다른 출혈 소견 없이 혈소판 80,000/μL인 안정 환자에서 경과관찰을 선택하는 문항으로 임신 중 혈액학적 변화와 임신성 혈소판감소증 감별이 핵심이다. ITP는 확정되지 않았으므로 ITP 문서보다 모체 변화 문서가 임상 맥락에 가깝다.', 'medium', '["target-document-needs-gestational-thrombocytopenia-coverage"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0183', '588e97a880d27660c8662f0b9036507e', '[]'::jsonb, 'no-suitable-document', '그림의 직장류를 확인하고 직장질중격 결손을 고르는 문항이다. 자궁 탈출은 골반장기탈출증의 다른 형태이므로 대신 연결하면 해부학적 진단이 부정확해진다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '골반장기탈출증 및 직장류', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0187', 'dea5e647a111ddf81d7ca807c542a050', '[]'::jsonb, 'no-suitable-document', '모체 AFP 상승과 태아 초음파에서 두개골·뇌 조직 부재를 근거로 무뇌증을 진단한다. 다운증후군 등 다른 태아 이상은 감별 보기일 뿐이며 카탈로그에 무뇌증 또는 신경관결손 문서가 없다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '태아 신경관결손 및 무뇌증', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0191', '318cc21069e5a675df97a878aafd993f', '[]'::jsonb, 'no-suitable-document', '임신 6주에 우발적으로 시행한 단순 흉부 X선의 극저선량 노출을 상담하고 임신을 유지하는 원칙을 묻는다. 방사선 식도염은 전혀 다른 질환이며 현재 임신 중 진단 방사선 노출 문서가 없다.', 'high', '["missing-exact-document","answer-explanation-wording-review"]'::jsonb, '임신 중 진단 방사선 노출과 상담', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0192', 'e1c7dca9fd4374f91be92ec29295f08c', '[]'::jsonb, 'no-suitable-document', '정상 분만 기전 그림에서 앞·뒤숫구멍 방향을 이용해 LOA 태향을 판독하는 문항이다. 둔위·안면위·난산 문서는 정상 두정위 태향 판독을 대신할 수 없다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '태위·태향과 정상 분만 기전', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-BANK-0214', 'd4e092aa1daf5bdec4068c2b992b4953', '[]'::jsonb, 'no-suitable-document', '이전 개복수술로 배꼽 주위 유착이 의심될 때 Palmer point에 해당하는 좌상복부로 복강경 진입하는 술기 안전 문항이다. 자궁내막유착증은 복강 내 수술 유착과 다른 질환이다.', 'high', '["missing-exact-document"]'::jsonb, '부인과 복강경 진입법 및 수술 유착 시 접근', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2017-0016', 'dccbd562c7550995a00f12f9f8c13bbc', '[]'::jsonb, 'no-suitable-document', '지연된 아두 하강 뒤 액체저류 없이 보이는 일시적 두개 변형으로 거푸집 현상을 진단한다. 난산은 분만 배경일 뿐 정답 개념이 아니고, 카탈로그에 신생아 두피·두개 분만손상 감별 문서가 없다.', 'high', '["missing-exact-document","image-dependent"]'::jsonb, '분만 관련 신생아 두피 종창과 두개 변형', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2018-0005', '8432bc28f037eb99055e9df74892cc20', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yEuOq3oOyEsSDsp4jsl7wgKEJhY3RlcmlhbCBWYWdpbm9zaXMpLm1k","title":"세균성 질염 (Bacterial Vaginosis)"}]'::jsonb, 'add', '회색의 생선 냄새 분비물과 clue cell로 세균성 질염을 진단하고 metronidazole을 선택하는 전형적 문항이다. 질분비물 CC보다 확정된 개별 질환 문서가 더 좁고 정확하다.', 'high', '["keep-existing-drug-link"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2018-0020', '42952c0d6df96faf752a591e934ecb00', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k","title":"요실금 (Urinary Incontinence)"}]'::jsonb, 'add', '재채기 때 누출, 요도과운동성, 배뇨근 수축 부재와 정상 잔뇨로 복압성 요실금을 진단하고 중부요도 슬링술을 선택한다. 증상 CC보다 진단·치료를 다루는 요실금 질환 문서가 적절하다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2019-0010', 'af04b8e37245af5c972b66734c6ba7a3', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k","title":"상피성 난소암 (Epithelial Ovarian Cancer)"}]'::jsonb, 'add', '장액성 샘암종과 대망 전이로 진행성 상피성 난소암의 수술 후 paclitaxel-carboplatin 치료를 묻는다. 난소 종양 대표문서보다 상피성 난소암 개별 문서가 정확하다.', 'high', '["keep-existing-drug-links"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2020-0004', '4f63929c7ce7ecca680691822999c5d9', '[]'::jsonb, 'no-suitable-document', '임신 초기 단순 흉부 X선 노출의 위해도를 설명하고 불필요한 임신중절이나 침습검사를 피하는 상담 문항이다. 현재 카탈로그에 임신 중 진단 방사선 노출 문서가 없다.', 'high', '["missing-exact-document","answer-explanation-conflict"]'::jsonb, '임신 중 진단 방사선 노출과 상담', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2020-0009', '068a98a021d1a996d5c5df323409d4d3', '[]'::jsonb, 'no-suitable-document', '배란 뒤 황체에서 분비되는 프로게스테론이 기초체온을 올리는 정상 월경주기 생리를 묻는다. PCOS·무배란·불임을 진단하는 문항이 아니므로 해당 질환을 연결하지 않는다.', 'high', '["missing-exact-document"]'::jsonb, '월경주기·배란 생리와 기초체온', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2020-0013', 'f809ad8267a01b465c268971a10bdfeb', '[{"type":"disease","slug":"MTIg7IKw6rO8L-y0iOq4sOqwkOyGjSAoRWFybHkgRGVjZWxlcmF0aW9uKS5tZA","title":"초기감속 (Early Deceleration)"}]'::jsonb, 'add', '분만 중 태아심박동검사에서 정상 변이도와 초기감속을 판독하고 경과관찰을 선택한다. 태아 감시 일반 문서보다 초기감속 개별 문서가 가장 좁다.', 'high', '["image-dependent"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2021-0003', '3afbd86fcb3218b388ac7cf8ae9f8b5a', '[{"type":"disease","slug":"MTIg7IKw6rO8L-yehOyLoCDspJEg7YOc7JWEIOqwkOyLnCAoRmV0YWwgTW9uaXRvcmluZykubWQ","title":"임신 중 태아 감시 (Fetal Monitoring)"}]'::jsonb, 'add', '옥시토신 유도분만 중 비정상 태아심박동을 인지하고 자궁수축제를 중단하는 자궁내 소생술 원칙이 핵심이다. 두 해설이 변동감속과 후기감속으로 서로 달라 개별 감속 문서를 단정하지 않고 태아 감시 문서로 연결한다.', 'medium', '["image-dependent","explanation-conflict","keep-existing-drug-link"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2021-0005', 'cade2bb177979aae4f25c6b224960d73', '[]'::jsonb, 'no-suitable-document', '정상 활력의 신생아 두피 종창에서 산류·두혈종을 감별하고 관찰하는 문항이다. 신생아 황달은 두혈종의 가능한 합병증일 뿐 정답 개념이 아니며 해당 두피 종창 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '신생아 산류·두혈종·모상건막하출혈 감별', 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2021-0009', '9dfee448005cadba2591a5ef4a409ea7', '[{"type":"disease","slug":"MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA","title":"요로결석 (Urolithiasis)"}]'::jsonb, 'add', '임신 중 반복되는 옆구리 산통과 감염 없는 현미경적 혈뇨로 요로결석을 진단하고 우선 보존적 진통 치료를 선택한다. 임신은 치료 선택에 영향을 주지만 진단 자체는 요로결석이다.', 'high', '[]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2021-0012', '59ee30b6bf88b3e548ba02bbf5973222', '[{"type":"disease","slug":"MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA","title":"포상기태 (Molar Pregnancy)"}]'::jsonb, 'add', '제시된 초음파의 snowstorm pattern을 완전포상기태로 해석하고 흡입소파술을 선택하도록 구성된 문항이므로 포상기태 개별 문서가 가장 직접적이다.', 'medium', '["image-dependent","stem-explanation-conflict"]'::jsonb, null, 'phase1-unlinked-obgyn.json'),
    ('QB-PF2026-V02-OG-Y2021-0020', '18094c7b1a471efa3e7b8b477df7ac0d', '[]'::jsonb, 'no-suitable-document', '영아에서 얇고 쉽게 박리되는 음순 사이 막으로 음순유착을 진단한다. 무공처녀막·모호한 생식기는 오답 감별이며 카탈로그에 음순유착 문서가 없다.', 'high', '["missing-exact-document"]'::jsonb, '소아 음순유착 (Labial Adhesion)', 'phase1-unlinked-obgyn.json')
),
prepared as (
  select
    c.id,
    c.payload,
    c.index_data,
    v.action,
    v.rationale,
    v.confidence,
    v.flags,
    v.needed_document,
    v.manifest,
    coalesce((
      select jsonb_agg(document)
      from jsonb_array_elements(coalesce(c.payload->'relatedDocuments', '[]'::jsonb)) document
      where document->>'type' = 'drug'
    ), '[]'::jsonb) || v.proposed_documents as final_documents,
    coalesce((
      select jsonb_agg(document->>'slug')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'disease'
    ), '[]'::jsonb) as final_disease_slugs,
    coalesce((
      select jsonb_agg(document->>'title')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'disease'
    ), '[]'::jsonb) as final_disease_terms,
    coalesce((
      select jsonb_agg(document->>'slug')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'cc'
    ), '[]'::jsonb) as final_cc_slugs
  from public.private_qbank_canonical_items c
  join review_values v on v.id = c.id
  where md5(c.payload::text) = v.payload_hash
),
updated as (
  update public.private_qbank_canonical_items c
  set
    payload = c.payload || jsonb_build_object(
      'relatedDocuments', p.final_documents,
      'relatedDiseaseSlugs', p.final_disease_slugs,
      'relatedDiseaseTerms', p.final_disease_terms,
      'relatedCcSlugs', p.final_cc_slugs,
      'linkReview', jsonb_strip_nulls(jsonb_build_object(
        'status', case
          when p.action = 'no-suitable-document' then 'codex-semantic-reviewed-no-suitable-document'
          when p.action = 'needs-review' then 'codex-semantic-review-pending'
          else 'codex-semantic-reviewed'
        end,
        'method', 'question-answer-explanation-review',
        'reviewVersion', '2026-09-22-v1',
        'reviewedAt', '2026-09-22T09:47:10.848Z',
        'action', p.action,
        'reason', p.rationale,
        'confidence', p.confidence,
        'flags', p.flags,
        'neededDocument', p.needed_document,
        'manifest', p.manifest,
        'previous', jsonb_build_object(
          'relatedDocuments', coalesce(c.payload->'relatedDocuments', '[]'::jsonb),
          'relatedDiseaseSlugs', coalesce(c.payload->'relatedDiseaseSlugs', '[]'::jsonb),
          'relatedDiseaseTerms', coalesce(c.payload->'relatedDiseaseTerms', '[]'::jsonb),
          'relatedCcSlugs', coalesce(c.payload->'relatedCcSlugs', '[]'::jsonb),
          'linkReview', coalesce(c.payload->'linkReview', '{}'::jsonb)
        )
      ))
    ),
    index_data = coalesce(c.index_data, '{}'::jsonb) || jsonb_build_object(
      'relatedDiseaseSlugs', p.final_disease_slugs,
      'relatedCcSlugs', p.final_cc_slugs
    )
  from prepared p
  where c.id = p.id
  returning c.id
)
select jsonb_build_object(
  'requested', (select count(*) from review_values),
  'updated', (select count(*) from updated),
  'conflicts', coalesce((
    select jsonb_agg(v.id order by v.id)
    from review_values v
    left join updated u on u.id = v.id
    where u.id is null
  ), '[]'::jsonb)
) as result;

commit;
