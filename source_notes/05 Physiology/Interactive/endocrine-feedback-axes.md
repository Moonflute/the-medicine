# Endocrine feedback axes
검토 기준일: 2026-10-21
- 수치는 정상 모델을 기준으로 한 교육용 정상상태 근사입니다. 증감 표시는 정상 모델 대비 방향일 뿐 검사실 정상범위가 아니며 환자 진단에 사용하지 않습니다. 시간 애니메이션은 호르몬 반감기나 투여 후 경과 시간을 뜻하지 않습니다.
- 같은 3단계 모양이어도 HPT·HPA·HPG·GH–IGF-1·ADH·Insulin은 서로 다른 조절계입니다. 외인성 입력은 내인성 분비와 별도로 계산하며 0%는 투여가 없는 상태입니다.
- Hormone pulsatility, Circadian rhythm, 결합단백, 검사법 교차반응, 수용체의 장기 적응은 재현하지 않습니다. 설명의 증상은 실제 질환과 연결하기 위한 것으로 화면 수치로 증상 유무를 예측하지 않습니다.

## thyroid-normal | HPT axis
### 기전
- Hypothalamus의 TRH가 Anterior pituitary의 TSH를 자극하고 Thyroid가 T4·T3를 분비합니다. 최종 호르몬은 상위 두 단계에 Negative feedback을 가합니다.
### 증상·검사 소견
- TSH와 free T4를 함께 읽어 생산기관과 상위 자극을 구분합니다. T3 전환, Non-thyroidal illness, 임신·약물의 영향은 현재 모델에 없습니다.
### 관찰과 해석
- 정상에서 입력 자극을 바꾼 뒤 Feedback sensitivity를 비교하세요. 정확한 기준 평형에서 민감도만 바꾸면 수치가 같을 수 있으며, 이는 평형점과 반응 강도가 다르기 때문입니다.
예측: free T4 상승이 정상 HPT 축의 TSH에 주는 방향은? | 억제 | 항상 자극 | 무관 | 0
### 관련 자료
- [Thyroid function](lab:Thyroid function overview)

## thyroid-primary-failure | Primary hypothyroidism
### 기전
- Thyroid 자체의 호르몬 생산 저하로 free T4가 내려가고 상위 억제가 풀려 TSH가 증가합니다. ‘높은 TSH’는 갑상선 생산이 높다는 뜻이 아닙니다.
### 증상·검사 소견
- 피로·추위 불내성·변비·피부 건조·느린 맥박이 연결됩니다. 경도·초기 질환은 증상이 뚜렷하지 않을 수 있습니다.
### 관찰과 해석
- TSH 상승과 free T4 감소라는 엇갈린 방향을 확인합니다. Subclinical hypothyroidism의 정상 free T4는 별도 패턴이며 이 프리셋과 동일하지 않습니다.
예측: Primary hypothyroidism의 대표 조합은? | TSH↓·free T4↓ | TSH↑·free T4↓ | TSH↓·free T4↑ | 1
### 관련 자료
- [Hypothyroidism](disease:갑상샘 기능저하증 (Hypothyroidism))

## thyroid-primary-excess | Primary hyperthyroidism
### 기전
- 상위 TSH 요구와 무관한 Thyroid hormone 과다가 TSH를 억제합니다. Graves disease의 수용체 자극과 자율성 결절 등 원인별 차이는 질환 노트에서 구분합니다.
### 증상·검사 소견
- 더위 불내성·체중 감소·떨림·두근거림이 나타날 수 있습니다. AF와 연결될 수 있지만 TSH 감소만으로 원인과 중증도를 확정하지 않습니다.
### 관찰과 해석
- free T4가 높은데 TSH가 낮은 이유를 Feedback 화살표로 설명해 보세요. TSH-secreting pituitary lesion은 이 프리셋에 해당하지 않습니다.
예측: Primary hormone 과다에서 TSH 감소는? | Feedback 반응 | 반드시 Pituitary failure | T4 감소의 증거 | 0
### 관련 자료
- [Hyperthyroidism](disease:갑상샘 기능항진증 (Hyperthyroidism))

## thyroid-pituitary-failure | Central hypothyroidism
### 기전
- Pituitary·Hypothalamic 자극이 충분하지 않아 free T4가 낮아집니다. 낮은 free T4에 비해 TSH가 적절히 증가하지 않는 것이 중요합니다.
### 증상·검사 소견
- Hypothyroid 증상과 다른 Pituitary hormone 결핍이 함께 있을 수 있습니다. 실제 TSH는 낮거나 정상, 일부는 약간 높을 수 있어 TSH 하나로 배제하지 않습니다.
### 관찰과 해석
- Primary failure와 비교해 최종 free T4 방향은 같아도 TSH 반응이 다른 것을 확인합니다. 이 모델은 낮은 TSH 예시 하나입니다.
예측: 낮은 free T4인데 TSH가 올라가지 않으면 고려할 것은? | Central dysfunction | 정상이라고 단정 | Primary hyperthyroidism | 0
### 관련 자료
- [Hypopituitarism](disease:뇌하수체 기능저하증 (Hypopituitarism))

## thyroid-exogenous | Exogenous T4
### 기전
- 외부 T4가 총 노출에 더해지고 TRH·TSH를 억제합니다. 총 free T4와 Thyroid 자체의 생산량은 같은 뜻이 아닙니다.
### 증상·검사 소견
- 과도한 노출에서는 두근거림·떨림 등 Thyrotoxicosis 증상이 나타날 수 있습니다. TSH는 실제로 즉시 평형에 도달하지 않으므로 투약 직후 수치를 이 애니메이션처럼 해석하지 않습니다.
### 관찰과 해석
- 외인성 입력을 0으로 낮추면 투여 효과가 사라집니다. 입력%는 Levothyroxine µg 용량과 대응하지 않습니다.
예측: 외인성 T4가 상위 축을 억제해도 총 T4는? | 낮아야만 함 | 높을 수 있음 | 측정할 수 없음 | 1
### 관련 자료
- [Levothyroxine](drug:Levothyroxine)

## adrenal-normal | HPA axis
### 기전
- CRH → ACTH → Adrenal cortex의 Cortisol 생산이 이어집니다. Cortisol은 에너지 동원·혈관 반응·면역 조절에 관여하고 상위 축을 억제합니다.
### 증상·검사 소견
- 실제 Cortisol은 채혈 시각·스트레스·결합단백에 영향을 받습니다. 단일 대표값이 검사실 범위를 대신하지 않습니다.
### 관찰과 해석
- 입력 자극을 높여 ACTH와 Cortisol의 연결을 보세요. 이 조작은 실제 Stress dose 처방이나 Adrenal reserve 검사가 아닙니다.
예측: HPA 축의 Cortisol 생산을 직접 자극하는 Pituitary hormone은? | ACTH | TSH | FSH | 0

## adrenal-primary-failure | Primary adrenal insufficiency
### 기전
- Adrenal cortex의 생산 저하로 Cortisol이 줄고 ACTH가 증가합니다. 실제 Primary disease에서는 Aldosterone 결핍도 동반될 수 있지만 이 화면은 RAAS를 계산하지 않습니다.
### 증상·검사 소견
- 피로·체중 감소·기립성 어지럼·Hyperpigmentation이 연결됩니다. Aldosterone 결핍이 동반되면 Hyperkalemia와 Salt wasting이 생길 수 있습니다.
### 관찰과 해석
- ACTH↑·Cortisol↓를 Secondary failure와 비교합니다. 급성 저혈압·구토·의식 변화가 있는 실제 상황은 Adrenal crisis 평가가 필요합니다.
예측: Cortisol 감소에 ACTH가 높다면 어느 수준의 장애에 맞는가? | Adrenal cortex | 반드시 Pituitary | 항상 외인성 과다 | 0
### 관련 자료
- [Primary adrenal insufficiency](disease:원발성 부신 기능저하증(Primary Adrenal Insufficiency))

## adrenal-primary-excess | ACTH-independent Cortisol excess
### 기전
- Adrenal source의 자율적 Cortisol 과다를 가정합니다. ACTH는 Feedback으로 억제되므로 ACTH-dependent Cushing disease와 다릅니다.
### 증상·검사 소견
- Proximal muscle weakness·멍이 잘 듦·체중 분포 변화·Hyperglycemia가 나타날 수 있습니다. 임상 진단에는 적절한 Cortisol 검사가 필요합니다.
### 관찰과 해석
- Cortisol↑·ACTH↓의 조합을 봅니다. 이 프리셋 이름을 모든 Cushing syndrome 원인에 적용하지 않습니다.
예측: Adrenal source Cortisol 과다에서 ACTH는? | 억제되는 경향 | 반드시 상승 | Cortisol과 동일 | 0
### 관련 자료
- [Cushing syndrome](disease:쿠싱 증후군 (Cushing's Syndrome))

## adrenal-pituitary-failure | Secondary adrenal insufficiency
### 기전
- ACTH 부족으로 Cortisol이 감소합니다. RAAS가 대체로 보존되므로 Primary adrenal insufficiency와 Mineralocorticoid 양상이 다릅니다.
### 증상·검사 소견
- 피로·저혈압·Hypoglycemia·Hyponatremia가 가능하지만 ACTH 증가에 의한 Hyperpigmentation은 전형적이지 않습니다. Hyperkalemia도 일차 부신저하와 같은 방식으로 기대하지 않습니다.
### 관찰과 해석
- ACTH와 Cortisol이 함께 낮아지는 예시를 봅니다. 시야 변화·두통·다른 호르몬 결핍은 Pituitary 원인을 연결하는 단서입니다.
예측: Secondary failure에서 대체로 보존되는 조절계는? | RAAS | ACTH 분비 | 모든 Pituitary 축 | 0
### 관련 자료
- [Secondary adrenal insufficiency](disease:이차성 부신 기능저하증 (Secondary Adrenal Insufficiency))

## adrenal-exogenous | Exogenous glucocorticoid
### 기전
- 외인성 Glucocorticoid의 총 작용은 증가해도 CRH·ACTH와 내인성 Cortisol은 억제될 수 있습니다. 약물 작용과 검사에서 측정하는 Cortisol을 분리합니다.
### 증상·검사 소견
- 장기 노출에서는 Cushingoid 변화와 축 억제가 공존할 수 있습니다. 갑작스러운 중단 뒤 Adrenal insufficiency 위험은 이 즉시 평형 모델로 판단하지 않습니다.
### 관찰과 해석
- ‘내인성 Cortisol’과 ‘Glucocorticoid 총 작용’을 따로 비교하세요. 검사법의 약물 교차반응과 회복 기간은 반영되지 않으며 모델로 중단·감량을 결정하지 않습니다.
예측: 외인성 Glucocorticoid 과다에서 내인성 Cortisol은? | 무조건 상승 | 억제될 수 있음 | 총 작용과 항상 동일 | 1
### 관련 자료
- [Iatrogenic Cushing syndrome](disease:의인성 쿠싱 증후군 (Iatrogenic Cushing's Syndrome))

## gonadal-normal | HPG axis와 LH surge
### 기전
- Pulsatile GnRH가 LH·FSH를 자극하고 난소의 Estradiol·Inhibin이 Feedback에 참여합니다. 기본 그림은 Negative feedback 구간만 표현합니다.
### 증상·검사 소견
- 월경주기에 따라 LH·FSH·Estradiol의 의미가 달라집니다. 배란 직전 충분히 지속된 Estradiol 상승은 Positive feedback으로 LH surge를 유발하므로 항상 억제라고 외우면 안 됩니다.
### 관찰과 해석
- LH와 FSH를 합친 대표값은 편의를 위한 대리값이며 실제 두 검사를 합쳐 해석하지 않습니다. 배란·Progesterone·Inhibin의 시간 변화는 별도 계산하지 않습니다.
예측: 배란 직전 Estradiol의 지속 상승은 어떤 예외를 만들 수 있는가? | Positive feedback·LH surge | 모든 축 소실 | 항상 LH 완전 억제 | 0
### 관련 자료
- [Amenorrhea](disease:무월경 (Amenorrhea))

## gonadal-primary-failure | Primary ovarian insufficiency
### 기전
- 난소 기능 저하로 Estradiol·Inhibin의 억제 신호가 줄고 특히 FSH가 증가합니다. 이 모델은 Gonadotropin을 합쳐 표시하므로 실제 FSH/LH 비를 읽을 수 없습니다.
### 증상·검사 소견
- 불규칙 월경·Amenorrhea·안면홍조·질 건조가 나타날 수 있고 장기 Estrogen 결핍은 골 건강과 연결됩니다. 잔여 난소 기능은 간헐적일 수 있습니다.
### 관찰과 해석
- Estradiol↓와 상위 Gonadotropin↑를 Central dysfunction과 비교합니다. 진단은 연령·월경력·검사 반복과 다른 원인 평가가 필요합니다.
예측: 낮은 Estradiol에 FSH가 증가하는 방향은? | Primary ovarian failure | Central suppression만 가능 | 정상 배란 확정 | 0
### 관련 자료
- [Primary ovarian insufficiency](disease:조기난소부전 (Premature Ovarian Failure))

## gonadal-primary-excess | Autonomous ovarian hormone excess
### 기전
- 이 프리셋은 자율적 Estrogen 생산이 상위 Gonadotropin을 억제하는 가상 단순 상태입니다. 정상 LH surge나 PCOS 전체를 뜻하지 않습니다.
### 증상·검사 소견
- 비정상 자궁출혈 등 Estrogen effect가 나타날 수 있으나 원인별 양상은 다릅니다. Granulosa cell tumor 같은 호르몬 생산 종양을 연결할 수 있습니다.
### 관찰과 해석
- 기본 Negative feedback 조건에서 Estradiol↑·상위 신호↓를 확인합니다. 높은 Estradiol 하나로 종양이나 배란을 진단하지 않습니다.
예측: 이 프리셋이 직접 재현하지 않는 것은? | 자율적 Estrogen 노출 | 정상 주기 전체와 LH surge | 상위 억제 방향 | 1
### 관련 자료
- [Ovarian tumor](disease:난소 종양 (Ovarian Tumor))

## gonadal-pituitary-failure | Hypogonadotropic hypogonadism
### 기전
- Hypothalamic·Pituitary 자극 감소로 난소 호르몬 생산도 감소합니다. 에너지 부족·과도한 운동·만성질환에 의한 기능성 억제와 구조적 병변을 구분해야 합니다.
### 증상·검사 소견
- Amenorrhea·불임·낮은 Estrogen에 따른 골 손실 위험이 연결됩니다. 다른 Pituitary hormone 결핍이나 Hyperprolactinemia도 평가 맥락에 포함됩니다.
### 관찰과 해석
- 낮은 Estradiol에 Gonadotropin이 적절히 상승하지 않는 조합을 봅니다. 이 모델은 GnRH pulse frequency의 정량 검사가 아닙니다.
예측: Central suppression에서 Estradiol이 낮아도 Gonadotropin은? | 항상 매우 높음 | 낮거나 부적절하게 정상일 수 있음 | 무조건 0 | 1
### 관련 자료
- [Amenorrhea](disease:무월경 (Amenorrhea))
- [Hypopituitarism](disease:뇌하수체 기능저하증 (Hypopituitarism))

## gonadal-exogenous | Exogenous estrogen
### 기전
- 외인성 Estrogen이 총 노출에 더해져 상위 자극을 억제합니다. 실제 복합 제제의 Progestin 작용, 제제별 검사 검출 차이는 계산하지 않습니다.
### 증상·검사 소견
- 월경·출혈 양상과 호르몬 검사 해석에 복용력을 반영해야 합니다. 혈중 Estradiol 수치가 모든 합성 Estrogen의 총 효과를 그대로 나타내는 것은 아닙니다.
### 관찰과 해석
- 외인성 입력 0과 높은 입력을 비교해 Gonadotropin 억제 방향을 봅니다. 이 모델은 피임 효과나 개별 제제 용량을 예측하지 않습니다.
예측: 외인성 호르몬 사용 중 검사 해석에 반드시 필요한 것은? | 제제·복용 정보 | 수치 하나만 | 나이만 | 0
### 관련 자료
- [Amenorrhea](disease:무월경 (Amenorrhea))

## growth-normal | GH–IGF-1 axis
### 기전
- GHRH·Somatostatin 등이 Pituitary GH를 조절하고 GH가 Liver·말초조직의 IGF-1 반응을 유도합니다. 실제 Somatostatin의 별도 경로는 합쳐진 Feedback으로 표현합니다.
### 증상·검사 소견
- GH는 Pulsatile해 단일 무작위 수치가 분비능을 대표하지 못합니다. IGF-1도 연령·영양·Liver function과 함께 해석합니다.
### 관찰과 해석
- 그림은 평균 방향성을 보여줍니다. Sleep pulse나 GH stimulation/suppression test의 판정값으로 이용하지 않습니다.
예측: 무작위 GH 하나로 분비능을 확정하기 어려운 이유는? | Pulsatility | GH는 항상 0 | IGF-1과 동일 단위라서 | 0

## growth-primary-failure | Reduced IGF-1 response
### 기전
- GH에 대한 말초·간 반응이 약해 IGF-1이 낮아지고 Feedback이 줄어 GH가 높아질 수 있는 상태입니다. 이 프리셋은 Pituitary GH 결핍과 다릅니다.
### 증상·검사 소견
- 영양불량·Liver disease·GH resistance 등의 맥락을 구분합니다. 소아 성장 부진이나 낮은 IGF-1을 모두 GH 결핍으로 연결하지 않습니다.
### 관찰과 해석
- GH↑·IGF-1↓라는 분비와 반응의 불일치를 확인합니다. 이 조합 하나가 특정 유전성 GH resistance를 확진하지는 않습니다.
예측: GH는 높은데 IGF-1이 낮으면 고려할 층위는? | 표적 반응·영양·간 상태 | GH 생산이 반드시 0 | Acromegaly 확정 | 0

## growth-primary-excess | Acromegaly
### 기전
- 대부분의 Acromegaly는 Pituitary GH 과다와 관련됩니다. 모델도 자율적 과다를 Liver가 아니라 GH 단계에 두고 IGF-1 증가와 상위 억제를 연결합니다.
### 증상·검사 소견
- 손발·안면 변화, 발한, 관절 증상, Sleep apnea, Glucose intolerance가 연결됩니다. 성장판이 열린 상태의 GH 과다는 Gigantism과 구분합니다.
### 관찰과 해석
- GH와 IGF-1이 함께 높은데도 자율적 GH 분비가 유지되는 이유를 보세요. 실제 진단에는 연령 보정 IGF-1과 적절한 확인 검사가 필요합니다.
예측: Acromegaly의 흔한 자율적 과다 분비 위치는? | Pituitary GH | Liver의 TSH | Posterior pituitary ADH | 0
### 관련 자료
- [Acromegaly](disease:말단비대증 (Acromegaly))

## growth-pituitary-failure | GH deficiency
### 기전
- Pituitary GH 분비가 부족하면 IGF-1 자극이 감소합니다. GHRH 증가만으로 기능이 손상된 Pituitary의 출력이 정상화되지는 않습니다.
### 증상·검사 소견
- 소아에서는 성장 속도 저하, 성인에서는 체성분·운동능 변화가 가능하지만 비특이적입니다. 낮은 IGF-1만으로 진단하지 않습니다.
### 관찰과 해석
- GH↓·IGF-1↓를 말초 반응 저하의 GH↑·IGF-1↓와 비교합니다. 실제 Dynamic test의 자극 약물·절단값은 이 모델에서 제공하지 않습니다.
예측: 낮은 IGF-1에 낮은 GH가 동반된 모델의 장애 위치는? | Pituitary 출력 | 자율적 GH 과다 | 항상 간만 | 0
### 관련 자료
- [Hypopituitarism](disease:뇌하수체 기능저하증 (Hypopituitarism))

## growth-exogenous | Exogenous GH
### 기전
- 투여 GH는 2단계에 작용해 IGF-1을 증가시키고 내인성 GH 분비를 억제할 수 있습니다. IGF-1 자체를 투여하는 모델과 다릅니다.
### 증상·검사 소견
- 과도한 작용은 Edema·관절 불편·Glucose intolerance와 연결될 수 있습니다. 실제 GH 검사는 내인성·외인성을 모델처럼 완전히 나누어 측정하지 않습니다.
### 관찰과 해석
- ‘내인성 GH’와 ‘GH 총 노출’을 구분하세요. 외인성 입력을 0으로 두면 투여 기여가 사라지며 모델%는 임상 용량이 아닙니다.
예측: 외인성 GH가 들어오는 단계는? | IGF-1 출력 이후 | GH 단계 | TSH 단계 | 1
### 관련 자료
- [Acromegaly](disease:말단비대증 (Acromegaly))

## adh-normal | Osmolality–ADH axis
### 기전
- Hypothalamic osmoreceptor 자극이 ADH 분비를 조절합니다. ADH는 Hypothalamus에서 합성되어 Posterior pituitary에서 방출되고 Kidney V2–AQP2 작용으로 물을 보존합니다.
### 증상·검사 소견
- Plasma와 Urine osmolality를 짝지어 보며 갈증·수분 섭취·유효 순환량을 함께 고려합니다. ADH 자체를 일상적으로 직접 측정하는 것만이 진단법은 아닙니다.
### 관찰과 해석
- 삼투 자극을 높이면 내인성 ADH와 농축 반응이 달라집니다. 이 모델의 Urine osm은 호르몬이 아니라 Kidney의 반응 지표입니다.
예측: ADH가 직접 조절하는 핵심 표적은? | V2–AQP2 | TSH receptor | NKCC2만 | 0
### 관련 자료
- [Collecting duct]( /interactive/nephron-electrolyte-handling/notes#segment-collecting)

## adh-primary-failure | Central diabetes insipidus
### 기전
- ADH 분비가 부족하여 높은 Plasma osmolality에도 Collecting duct가 물을 충분히 보존하지 못합니다. 현재는 AVP deficiency라는 명칭도 사용합니다.
### 증상·검사 소견
- 많은 묽은 소변·갈증이 생기며 수분 접근이 제한되면 Hypernatremia 위험이 있습니다. 정상 Na⁺라도 충분한 음수로 보상 중일 수 있습니다.
### 관찰과 해석
- ADH↓·Urine osm↓와 Plasma osm↑ 방향을 확인합니다. Desmopressin을 더했을 때 반응이 남은 Kidney가 농축되는 것을 Nephrogenic DI와 비교합니다.
예측: Central DI의 기본 결함은? | ADH 분비 부족 | Kidney V2 반응 소실만 | Insulin 과다 | 0
### 관련 자료
- [Central DI](disease:중추성 요붕증 (Central Diabetes Insipidus))

## adh-primary-excess | SIADH
### 기전
- 낮아진 Plasma osmolality에도 ADH 작용이 충분히 억제되지 않아 자유수 배설이 제한됩니다. 이 경우 높은 Urine osm이 좋은 전신 수분 균형을 뜻하지 않습니다.
### 증상·검사 소견
- Hypotonic hyponatremia가 심해지면 오심·두통·혼동·경련이 가능합니다. 진단에는 체액 상태, 약물, Adrenal·Thyroid·Kidney 원인 평가가 필요합니다.
### 관찰과 해석
- Plasma osm이 낮아지는 방향과 Urine osm이 유지·상승하는 방향을 나란히 보세요. 실제 Serum sodium이나 교정 속도는 계산하지 않습니다.
예측: SIADH에서 문제인 조합은? | 낮은 Plasma osm에도 물 보존 지속 | 모든 소변이 무조건 묽음 | ADH 항상 0 | 0
### 관련 자료
- [SIADH](disease:항이뇨호르몬 부적절 분비 증후군 (SIADH) (Syndrome of Inappropriate Antidiuretic Hormone Secretion (SIADH)))

## adh-pituitary-failure | Nephrogenic diabetes insipidus
### 기전
- 장애 위치는 Kidney의 ADH 반응입니다. 내인성 ADH가 있어도 V2–AQP2 경로·수질 농축 기능이 충분히 작동하지 않습니다.
### 증상·검사 소견
- Polyuria·Polydipsia가 나타납니다. Lithium, Hypercalcemia, Hypokalemia 또는 유전성 원인 등을 연결하며 Central DI와 증상이 비슷할 수 있습니다.
### 관찰과 해석
- 높은 ADH에도 낮은 Urine osm이 남습니다. 같은 Desmopressin 입력을 Central DI와 비교하면 반응 차이를 볼 수 있으나 실제 Water deprivation test를 대체하지 않습니다.
예측: ADH가 높은데 묽은 소변이 지속될 수 있는 이유는? | Kidney 반응 저하 | 반드시 정상 | ADH가 소변으로만 분비되어서 | 0
### 관련 자료
- [Nephrogenic DI](disease:콩팥기원 요붕증 (Nephrogenic Diabetes Insipidus))

## adh-exogenous | Desmopressin
### 기전
- Desmopressin의 V2 작용은 내인성 ADH 분비량과 별개입니다. Kidney가 반응하면 물 회수가 증가하고 Plasma osmolality 자극이 줄어 내인성 ADH가 억제될 수 있습니다.
### 증상·검사 소견
- 수분 섭취·배설 균형에 따라 Hyponatremia 위험이 달라집니다. 투여 뒤 ADH 혈중값이 약물 총 작용을 그대로 나타내지 않습니다.
### 관찰과 해석
- 외인성 입력과 내인성 ADH를 따로 보세요. Central·Nephrogenic DI에서 추가 입력 비교는 교육용이며 투약 용량이나 진단 절단값을 제공하지 않습니다.
예측: Desmopressin 작용 증가와 내인성 ADH 감소는 공존 가능한가? | 가능 | 불가능 | 항상 Kidney failure | 0
### 관련 자료
- [Desmopressin](drug:Desmopressin)

## pancreatic-normal | Glucose–Insulin axis
### 기전
- β-cell의 Glucose sensing이 Insulin 분비를 유발하고 말초 이용·간의 Glucose output 억제가 혈당을 낮추는 방향으로 작동합니다. Pituitary를 거치는 3단계 호르몬 축이 아닙니다.
### 증상·검사 소견
- 공복·식후 상태와 Insulin sensitivity가 해석에 중요합니다. Glucagon·Incretin·간당생성의 개별 경로는 합쳐진 입력과 반응으로 표현합니다.
### 관찰과 해석
- Glucose 입력을 높여 내인성 Insulin 반응을 봅니다. ‘Glucose uptake’는 측정된 전신 Clamp 결과가 아니라 상대 반응 지표입니다.
예측: Glucose–Insulin 축의 분비 기관은? | Pancreatic β-cell | Pituitary | Thyroid | 0
### 관련 자료
- [Blood glucose](lab:Blood Glucose)

## pancreatic-primary-failure | Insulin deficiency
### 기전
- β-cell 출력이 부족하면 Glucose 증가에 대한 Insulin 반응이 불충분합니다. 이용 감소·간당생성 억제 부족이 Hyperglycemia에 기여합니다.
### 증상·검사 소견
- Polyuria·Polydipsia·체중 감소가 생길 수 있습니다. 심한 결핍은 Ketogenesis와 DKA로 연결되지만 이 모델은 Ketone·pH를 직접 계산하지 않습니다.
### 관찰과 해석
- Glucose↑·Insulin↓를 저항성 상태와 비교합니다. Type 1 diabetes의 면역기전과 발병 속도는 별도 질환 노트에서 확인합니다.
예측: Glucose 증가에 비해 Insulin 반응이 작으면 고려할 것은? | 분비 부족 | 항상 충분한 보상 | ADH 과다만 | 0
### 관련 자료
- [Type 1 diabetes](disease:제1형 당뇨병 (Type 1 Diabetes Mellitus))
- [DKA](disease:당뇨병성 케톤산증 (DKA) (Diabetic Ketoacidosis))

## pancreatic-primary-excess | Endogenous insulin excess
### 기전
- Glucose 감소에도 충분히 억제되지 않는 내인성 Insulin 작용을 가정합니다. 실제 감별에는 Insulinoma·Secretagogue 노출 등 원인과 C-peptide가 중요합니다.
### 증상·검사 소견
- 발한·떨림·두근거림은 자율신경 반응, 혼동·시야 이상·경련은 Neuroglycopenia와 연결됩니다. 실제 증상과 낮은 Glucose의 동시성 등을 확인해야 합니다.
### 관찰과 해석
- 낮아진 Glucose에도 내인성 Insulin이 남는 부적절한 관계를 봅니다. 특정 수치만으로 Insulinoma를 확진하는 화면이 아닙니다.
예측: 저혈당인데 Insulin이 억제되지 않았다면? | 적절한 정상 반응 | 부적절한 Insulin 작용 가능 | 반드시 ADH 결핍 | 1
### 관련 자료
- [Hypoglycemia](disease:저혈당 (Hypoglycemia))

## pancreatic-pituitary-failure | Insulin resistance
### 기전
- 장애 위치는 Pituitary가 아니라 표적조직의 Insulin 반응입니다. 초기에는 분비가 증가해 보상하지만 충분하지 않으면 Glucose도 상승할 수 있습니다.
### 증상·검사 소견
- 무증상일 수 있으며 Hyperglycemia가 심하면 갈증·다뇨가 나타납니다. 높은 Insulin이 정상 Glucose disposal을 보장하지 않습니다.
### 관찰과 해석
- Insulin↑·Glucose↑와 낮은 상대 uptake를 같이 보세요. Sensitivity를 바꾸면 결과가 연결되어 변하며 실제 HOMA-IR 또는 Clamp 검사값을 대신하지 않습니다.
예측: 높은 Insulin 농도가 충분한 작용을 보장하는가? | 보장한다 | 표적 반응도 봐야 한다 | Glucose와 무관하다 | 1
### 관련 자료
- [Type 2 diabetes](disease:제2형 당뇨병 (Type 2 Diabetes Mellitus))

## pancreatic-exogenous | Exogenous insulin
### 기전
- 외인성 Insulin이 말초·간 작용에 더해져 Glucose를 낮추고 내인성 β-cell 자극을 줄입니다. 내인성 Insulin 분비와 총 노출을 구분해야 합니다.
### 증상·검사 소견
- 과도한 효과는 Hypoglycemia와 연결됩니다. 검사법에 따라 Insulin analog 검출이 달라질 수 있고 C-peptide는 내인성 분비 평가에 활용됩니다.
### 관찰과 해석
- 외인성 입력을 0으로 하면 정상 기본 조건에서는 정상 평형으로 돌아옵니다. 입력%는 단위 용량이나 Insulin sensitivity factor가 아니므로 교정 용량을 계산하지 않습니다.
예측: 외인성 투여 시 내인성 분비 평가에 함께 고려할 것은? | C-peptide·검사법·투약력 | ECG 색 | FiO₂만 | 0
### 관련 자료
- [Hypoglycemia](disease:저혈당 (Hypoglycemia))

## 출처
- [Endotext — Adult Hypothyroidism](https://www.ncbi.nlm.nih.gov/books/NBK285561/)
- [Merck Manual Professional — Hyperthyroidism](https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/thyroid-disorders/hyperthyroidism)
- [Endotext — Adrenal Insufficiency](https://www.ncbi.nlm.nih.gov/books/NBK279083/)
- [Endocrine Society — Glucocorticoid-induced Adrenal Insufficiency guideline](https://www.endocrine.org/clinical-practice-guidelines/glucocorticoid-induced-adrenal-insufficiency)
- [Endotext — Normal Menstrual Cycle and Control of Ovulation](https://www.ncbi.nlm.nih.gov/books/NBK279054/)
- [NCBI Bookshelf — Primary Ovarian Insufficiency](https://www.ncbi.nlm.nih.gov/books/NBK589674/)
- [Endotext — Acromegaly](https://www.ncbi.nlm.nih.gov/books/NBK279097/)
- [Endotext — Hypopituitarism](https://www.ncbi.nlm.nih.gov/books/NBK278989/)
- [Endotext — Diagnostic Tests for Diabetes Insipidus](https://www.ncbi.nlm.nih.gov/books/NBK537591/)
- [GeneReviews — Hereditary Nephrogenic Diabetes Insipidus](https://www.ncbi.nlm.nih.gov/books/NBK1177/)
- [Endotext — Pathogenesis of Type 2 Diabetes Mellitus](https://www.ncbi.nlm.nih.gov/books/NBK279115/)
- [Endotext — Insulin Biosynthesis and Secretion](https://www.ncbi.nlm.nih.gov/books/NBK279029/)
- [Endotext — Hypoglycemia](https://www.ncbi.nlm.nih.gov/books/NBK279137/)
