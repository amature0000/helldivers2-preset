const imageMap = [
    {
        group: "group1",
        layout: [
            [
                { src: "assets/icons/Bridge/Orbital Precision Strike.svg", caption: "궤정타" },
                { src: "assets/icons/Orbital Cannons/Orbital 120MM HE Barrage.svg", caption: "120MM" },
                { src: "assets/icons/Orbital Cannons/Orbital 380MM HE Barrage.svg", caption: "380MM" },
                { src: "assets/icons/Orbital Cannons/Orbital Napalm Barrage.svg", caption: "네이팜" }
            ],
            [
                { src: "assets/icons/Orbital Cannons/Orbital Laser.svg", caption: "레이저" },
                { src: "assets/icons/Orbital Cannons/Orbital Airburst Strike.svg", caption: "공폭" },
                { src: "assets/icons/Orbital Cannons/Orbital Gatling Barrage.svg", caption: "개틀링" },
                { src: "assets/icons/Bridge/Orbital Gas Strike.svg", caption: "가스" }
            ],
            [
                { src: "assets/icons/Orbital Cannons/Orbital Railcannon Strike.svg", caption: "레일캐넌" },
                { src: "assets/icons/Bridge/Orbital EMS Strike.svg", caption: "EMS" },
                { src: "assets/icons/Bridge/Orbital Smoke Strike.svg", caption: "연막" },
                { src: "assets/icons/Orbital Cannons/Orbital Walking Barrage.svg", caption: "이동타격" }
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group2",
        layout: [
            [
                { src: "assets/icons/Hangar/Eagle Strafing Run.svg", caption: "기총소사" },
                { src: "assets/icons/Hangar/Eagle Cluster Bomb.svg", caption: "집속탄" },
                { src: "assets/icons/Hangar/Eagle Airstrike.svg", caption: "공타" },
                { src: "assets/icons/Hangar/Eagle 500KG Bomb.svg", caption: "500KG" }
            ],
            [
                { src: "assets/icons/Hangar/Eagle Napalm Airstrike.svg", caption: "네이팜" },
                { src: "assets/icons/Hangar/Eagle 110MM Rocket Pods.svg", caption: "110MM" },
                { src: "assets/icons/Hangar/Eagle Smoke Strike.svg", caption: "연막" }
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group3",
        layout: [
            [
                { src: "assets/icons/Bridge/HMG Emplacement.svg", caption: "거치:기관총" },
                { src: "assets/icons/Urban Legends/Anti-Tank Emplacement.svg", caption: "거치:대전차" },
                { src: "assets/icons/Robotics Workshop/EMS Mortar Sentry.svg", caption: "EMS박격포" },
                { src: "assets/icons/Robotics Workshop/Mortar Sentry.svg", caption: "박격포" }
            ],
            [
                { src: "assets/icons/Engineering Bay/Anti-Personnel Minefield.svg", caption: "지뢰" },
                { src: "assets/icons/Engineering Bay/Gas Mine.svg", caption: "가스지뢰" },
                { src: "assets/icons/Engineering Bay/Incendiary Mines.svg", caption: "소이지뢰" },
                { src: "assets/icons/Engineering Bay/Anti-Tank Mines.svg", caption: "대전차지뢰" }
            ],
            [
                { src: "assets/icons/Robotics Workshop/Gatling Sentry.svg", caption: "개틀링" },
                { src: "assets/icons/Robotics Workshop/Machine Gun Sentry.svg", caption: "기관총" },
                { src: "assets/icons/Robotics Workshop/Autocannon Sentry.svg", caption: "오토캐넌" },
                { src: "assets/icons/Robotics Workshop/Rocket Sentry.svg", caption: "로켓" }
            ],
            [
                { src: "assets/icons/Bridge/Shield Generator Relay.svg", caption: "실드릴레이" },
                { src: "assets/icons/Urban Legends/Flame Sentry.svg", caption: "화방" },
                { src: "assets/icons/Bridge/Tesla Tower.svg", caption: "테슬라" },
                { src: "assets/icons/Control Group/Laser Sentry.svg", caption: "레이저" },
            ],
            [
                { src: "assets/icons/Bridge/Grenadier Battlement.svg", caption: "유탄방벽" }
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group4",
        layout: [
            [{ src: "assets/icons/Robotics Workshop/Patriot Exosuit.svg", caption: "워커" },
            { src: "assets/icons/Robotics Workshop/Emancipator Exosuit.svg", caption: "오캐워커" },
            { src: "assets/icons/Hangar/Fast Recon Vehicle.svg", caption: "정찰차" },
            { src: "assets/icons/Masters of Ceremony/One True Flag.svg", caption: "깃발" },
            ],
            [
                { src: "assets/icons/Robotics Workshop/Patriot Exosuit.svg", caption: "워커" },
                { src: "assets/icons/Robotics Workshop/Emancipator Exosuit.svg", caption: "오캐워커" },
                { src: "assets/icons/Hangar/Fast Recon Vehicle.svg", caption: "정찰차" },
                { src: "assets/icons/Masters of Ceremony/One True Flag.svg", caption: "깃발" },
            ],
            [
                { src: "assets/icons/Patriotic Administration Center/Stalwart.svg", caption: "스털워트" },
                { src: "assets/icons/Patriotic Administration Center/Machine Gun.svg", caption: "기관총" },
                { src: "assets/icons/Patriotic Administration Center/Heavy Machine Gun.svg", caption: "중기관총" },
                { src: "assets/icons/Engineering Bay/Laser Cannon.svg", caption: "레이저캐넌" },
            ],
            [
                { src: "assets/icons/Patriotic Administration Center/Anti-Materiel Rifle.svg", caption: "대물저격" },
                { src: "assets/icons/Patriotic Administration Center/Expendable Anti-Tank.svg", caption: "일회용" },
                { src: "assets/icons/Patriotic Administration Center/Commando.svg", caption: "코만도" },
                { src: "assets/icons/Engineering Bay/Quasar Cannon.svg", caption: "퀘이사" },
            ],
            [
                { src: "assets/icons/Engineering Bay/Grenade Launcher.svg", caption: "유탄발사기" },
                { src: "assets/icons/Patriotic Administration Center/Flamethrower.svg", caption: "화염방사기" },
                { src: "assets/icons/Chemical Agents/Sterilizer.svg", caption: "가스방사기" },
                { src: "assets/icons/Engineering Bay/Arc Thrower.svg", caption: "아크발사기" },
            ],
            [
                { src: "assets/icons/Patriotic Administration Center/Railgun.svg", caption: "레일건" },
                { src: "assets/icons/Control Group/Epoch.svg", caption: "에포크" },
                { src: "assets/icons/Force of Law/GL-52 De-Escalator.svg", caption: "아크유탄" }
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group5",
        layout: [
            [
                { src: "assets/icons/Patriotic Administration Center/Airburst Rocket Launcher.svg", caption: "공폭발사기", group: "group5" },
                { src: "assets/icons/Patriotic Administration Center/Autocannon.svg", caption: "오토캐넌", group: "group5" },
                { src: "assets/icons/Patriotic Administration Center/Recoilless Rifle.svg", caption: "무반동", group: "group5" },
                { src: "assets/icons/Patriotic Administration Center/Spear.svg", caption: "스피어", group: "group5" },
            ],
            [
                { src: "assets/icons/Patriotic Administration Center/StA-X3 W.A.S.P. Launcher.svg", caption: "와스프", group: "group5" },
            ],
            [
                { src: "assets/icons/Robotics Workshop/Guard Dog.svg", caption: "가드독", group: "group5" },
                { src: "assets/icons/Engineering Bay/Guard Dog Rover.svg", caption: "가드독:로버", group: "group5" },
                { src: "assets/icons/Chemical Agents/Guard Dog Breath.svg", caption: "가드독:가스", group: "group5" },
                { src: "assets/icons/Force of Law/Guard Dog K-9.svg", caption: "가드독:K9", group: "group5" },
            ],
            [
                { src: "assets/icons/Engineering Bay/Supply Pack.svg", caption: "보급팩", group: "group5" },
                { src: "assets/icons/Servants of Freedom/Hellbomb Portable.svg", caption: "핵가방", group: "group5" },
                { src: "assets/icons/Hangar/Jump Pack.svg", caption: "점프팩", group: "group5" },
                { src: "assets/icons/Borderline Justice/Hover Pack.svg", caption: "호버팩", group: "group5" },
            ],
            [
                { src: "assets/icons/Engineering Bay/Ballistic Shield Backpack.svg", caption: "방패", group: "group5" },
                { src: "assets/icons/Urban Legends/Directional Shield.svg", caption: "에너지방패", group: "group5" },
                { src: "assets/icons/Engineering Bay/Shield Generator Pack.svg", caption: "실드팩", group: "group5" },
                { src: "assets/icons/Control Group/Warp Pack.svg", caption: "워프팩", group: "group5" },
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group6",
        layout: [
            [
                { src: "assets/arm_passive/Adreno-Defibrillator_Armor_Passive_Icon.webp", caption: "부활갑", name: "사망 시 부활, 각성제 지속시간 +2, 아크 저항 +50%" },
                { src: "assets/arm_passive/Advanced_Filtration_Armor_Passive_Icon.webp", caption: "가스갑", name: "가스 저항 +80%" },
                { src: "assets/arm_passive/Ballistic_Padding_Armor_Passive_Icon.svg", caption: "탄도갑", name: "흉부 저항 +25%, 폭발 저항 +25%, 흉부 출혈 방지" },
                { src: "assets/arm_passive/Democracy_Protects_Armor_Passive_Icon.webp", caption: "민주갑", name: "50% 확률로 사망 방지, 흉부 출혈 방지" },
            ],
            [
                { src: "assets/arm_passive/Electrical_Conduit_Armor_Passive_Icon.webp", caption: "아크갑", name: "아크 저항 +95%" },
                { src: "assets/arm_passive/Engineering_Kit_Armor_Passive_Icon.webp", caption: "공병갑", name: "앉은 상태에서 반동 저항 +30%, 투척 무기 +2" },
                { src: "assets/arm_passive/Extra_Padding_Armor_Passive_Icon.webp", caption: "완충갑", name: "장갑 등급 +1" },
                { src: "assets/arm_passive/Fortified_Armor_Passive_Icon.webp", caption: "폭저갑", name: "앉은 상태에서 반동 저항 +30%, 폭발 저항 +50%" },
            ],
            [
                { src: "assets/arm_passive/Gunslinger_Armor_Passive_Icon.webp", caption: "총잡이", name: "보조 무기 재장전/드로우/반동 버프" },
                { src: "assets/arm_passive/Inflammable_Armor_Passive_Icon.webp", caption: "화저갑" },
                { src: "assets/arm_passive/Integrated_Explosives_Armor_Passive_Icon.webp", caption: "자폭갑" },
                { src: "assets/arm_passive/Med-Kit_Armor_Passive_Icon.webp", caption: "메딕갑" },
            ],
            [
                { src: "assets/arm_passive/Peak_Physique_Armor_Passive_Icon.webp", caption: "근들갑" },
                { src: "assets/arm_passive/Reinforced_Epaulettes_Armor_Passive_Icon.webp", caption: "의장갑" },
                { src: "assets/arm_passive/Scout_Armor_Passive_Icon.webp", caption: "정찰갑" },
                { src: "assets/arm_passive/Servo-Assisted_Armor_Passive_Icon.webp", caption: "서보보조" },
            ],
            [
                { src: "assets/arm_passive/Siege-Ready_Armor_Passive_Icon.webp", caption: "장전갑" },
                { src: "assets/arm_passive/Unflinching_Armor_Passive_Icon.webp", caption: "결연함" },
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group7",
        layout: [
            [
                { src: "assets/primary/CB-9_Exploding_Crossbow_Primary_Render.webp", caption: "석궁" },
                { src: "assets/primary/R-36_Eruptor_Primary_Render.webp", caption: "이럽터" },
            ],
            [
                { src: "assets/primary/StA-52_Assault_Rifle_Primary_Render.webp", caption: "StA-52" },
                { src: "assets/primary/AR-23C_Liberator_Concussive_Primary_Render.webp", caption: "리버컨커" },
                { src: "assets/primary/AR-23P_Liberator_Penetrator_Primary_Render.webp", caption: "리버페네" },
                { src: "assets/primary/AR-23_Liberator_Primary_Render.webp", caption: "리버레이터" },
            ],
            [
                { src: "assets/primary/AR-32_Pacifier_Primary_Render.webp", caption: "퍼시파이어" },
                { src: "assets/primary/AR-61_Tenderizer_Primary_Render.webp", caption: "텐더라이저" },
                { src: "assets/primary/BR-14_Adjudicator_Primary_Render.webp", caption: "어드주" },
            ],
            [
                { src: "assets/primary/StA-11_SMG_Primary_Render.webp", caption: "StA-11" },
                { src: "assets/primary/MP-98_Knight_Primary_Render.webp", caption: "나이트" },
                { src: "assets/primary/SMG-72_Pummeler_Primary_Render.webp", caption: "퍼멜러" },
                { src: "assets/primary/SMG-32_Reprimand_Primary_Render.webp", caption: "레프리맨드" },
            ],
            [
                { src: "assets/primary/SMG-37_Defender_Primary_Render.webp", caption: "디펜더" },
            ],
            [
                { src: "assets/primary/R-2124_Constitution_Primary_Render.webp", caption: "컨스티튜션" },
                { src: "assets/primary/R-63_Diligence_Primary_Render.webp", caption: "딜리전스" },
                { src: "assets/primary/R-63CS_Diligence_Counter_Sniper_Primary_Render.webp", caption: "딜카스" },
                { src: "assets/primary/R-6_Deadeye_Primary_Render.webp", caption: "데드아이" },
            ],
            [
                { src: "assets/primary/R-2_Amendment_Primary_Render.webp", caption: "어맨드멘트" },
                { src: "assets/primary/PLAS-39_Accelerator_Rifle_Primary_Render.webp", caption: "가우스" },
            ],
            [
                { src: "assets/primary/LAS-16_Sickle_Primary_Render.webp", caption: "시클" },
                { src: "assets/primary/LAS-17_Double-Edge_Sickle_Primary_Render.webp", caption: "더블시클" },
                { src: "assets/primary/LAS-5_Scythe_Primary_Render.webp", caption: "사이스" },
                { src: "assets/primary/PLAS-1_Scorcher_Primary_Render.webp", caption: "스코처" },
            ],
            [
                { src: "assets/primary/PLAS-101_Purifier_Primary_Render.webp", caption: "퓨리파이어" },
                { src: "assets/primary/ARC-12_Blitzer_Primary_Render.webp", caption: "블리처" },
            ],
            [
                { src: "assets/primary/SG-20_Halt_Primary_Render.webp", caption: "홀트" },
                { src: "assets/primary/SG-225IE_Breaker_Incendiary_Primary_Render.webp", caption: "브인센" },
                { src: "assets/primary/SG-225SP_Breaker_Spray&Pray_Primary_Render.webp", caption: "스앤프" },
                { src: "assets/primary/SG-225_Breaker_Primary_Render.webp", caption: "브레이커" },
            ],
            [
                { src: "assets/primary/SG-451_Cookout_Primary_Render.webp", caption: "쿡아웃" },
                { src: "assets/primary/SG-8P_Punisher_Plasma_Primary_Render.webp", caption: "플퍼" },
                { src: "assets/primary/SG-8S_Slugger_Primary_Render.webp", caption: "슬러거" },
                { src: "assets/primary/SG-8_Punisher_Primary_Render.webp", caption: "퍼니셔" },
            ]
        ]
    },
    //==========================================================================================================================
    {
        group: "group8",
        layout: [
            [
                { src: "assets/secondary/CQC-5_Combat_Hatchet_Secondary_Render.webp", caption: "근접무기" },
                { src: "assets/secondary/GP-20_Ultimatum_Secondary_Render.webp", caption: "얼티메이텀" },
                { src: "assets/secondary/GP-31_Grenade_Pistol_Secondary_Render.webp", caption: "유탄" },
                { src: "assets/secondary/LAS-58_Talon_Secondary_Render.webp", caption: "탈론" },
            ],
            [
                { src: "assets/secondary/LAS-7_Dagger_Secondary_Render.webp", caption: "대거" },
                { src: "assets/secondary/P-113_Verdict_Secondary_Render.webp", caption: "버딕트" },
                { src: "assets/secondary/P-11_Stim_Pistol_Secondary_Render.webp", caption: "스팀" },
                { src: "assets/secondary/P-19_Redeemer_Secondary_Render.webp", caption: "리디머" },
            ],
            [
                { src: "assets/secondary/P-2_Peacemaker_Secondary_Render.webp", caption: "피스메이커" },
                { src: "assets/secondary/P-4_Senator_Secondary_Render.webp", caption: "세너터" },
                { src: "assets/secondary/P-72_Crisper_Secondary_Render.webp", caption: "크리스퍼" },
                { src: "assets/secondary/P-92_Warrant_Secondary_Render.webp", caption: "워런트" },
            ],
            [
                { src: "assets/secondary/PLAS-15_Loyalist_Secondary_Render.webp", caption: "로얄리스트" },
                { src: "assets/secondary/SG-22_Bushwhacker_Secondary_Render.webp", caption: "부시웨커" },

            ]
        ]
    },
    {
        group: "group9",
        layout: [
            [
                { src: "assets/thr/G-109_Urchin_Throwable_Render.webp", caption: "어친" },
                { src: "assets/thr/G-10_Incendiary_Throwable_Render.webp", caption: "소이" },
                { src: "assets/thr/G-123_Thermite_Throwable_Render.webp", caption: "테르밋" },
                { src: "assets/thr/G-12_High_Explosive_Throwable_Render.webp", caption: "고폭" },
            ],
            [
                { src: "assets/thr/G-13_Incendiary_Impact_Throwable_Render.webp", caption: "소이충격" },
                { src: "assets/thr/G-142_Pyrotech_Throwable_Render.webp", caption: "파이로테크" },
                { src: "assets/thr/G-16_Impact_Throwable_Render.webp", caption: "충격" },
                { src: "assets/thr/G-23_Stun_Throwable_Render.webp", caption: "기절" },
            ],
            [
                { src: "assets/thr/G-31_ARC_Throwable_Render.webp", caption: "아크" },
                { src: "assets/thr/G-3_Smoke_Throwable_Render.webp", caption: "연막" },
                { src: "assets/thr/G-4_Gas_Throwable_Render.webp", caption: "가스" },
                { src: "assets/thr/G-50_Seeker_Throwable_Render.webp", caption: "시커" },
            ],
            [
                { src: "assets/thr/G-6_Frag_Throwable_Render.webp", caption: "세열" },
                { src: "assets/thr/K-2_Throwing_Knife_Throwable_Render.webp", caption: "단검" },
                { src: "assets/thr/TED-63_Dynamite_Throwable_Render.webp", caption: "다이너마이트" },
            ]
        ]
    }
];

const imageIndex = [
    "assets/default.png",
    "assets/icons/Orbital Cannons/Orbital 120MM HE Barrage.svg",
    "assets/icons/Bridge/Orbital Precision Strike.svg",
    "assets/icons/Orbital Cannons/Orbital 380MM HE Barrage.svg",
    "assets/icons/Orbital Cannons/Orbital Napalm Barrage.svg",
    "assets/icons/Orbital Cannons/Orbital Laser.svg",
    "assets/icons/Orbital Cannons/Orbital Airburst Strike.svg",
    "assets/icons/Orbital Cannons/Orbital Gatling Barrage.svg",
    "assets/icons/Bridge/Orbital Gas Strike.svg",
    "assets/icons/Orbital Cannons/Orbital Railcannon Strike.svg",
    "assets/icons/Bridge/Orbital EMS Strike.svg",
    "assets/icons/Bridge/Orbital Smoke Strike.svg",
    "assets/icons/Orbital Cannons/Orbital Walking Barrage.svg",
    "assets/icons/Hangar/Eagle Strafing Run.svg",
    "assets/icons/Hangar/Eagle Cluster Bomb.svg",
    "assets/icons/Hangar/Eagle Airstrike.svg",
    "assets/icons/Hangar/Eagle 500KG Bomb.svg",
    "assets/icons/Hangar/Eagle Napalm Airstrike.svg",
    "assets/icons/Hangar/Eagle 110MM Rocket Pods.svg",
    "assets/icons/Hangar/Eagle Smoke Strike.svg",
    "assets/icons/Bridge/HMG Emplacement.svg",
    "assets/icons/Urban Legends/Anti-Tank Emplacement.svg",
    "assets/icons/Robotics Workshop/EMS Mortar Sentry.svg",
    "assets/icons/Robotics Workshop/Mortar Sentry.svg",
    "assets/icons/Engineering Bay/Anti-Personnel Minefield.svg",
    "assets/icons/Engineering Bay/Incendiary Mines.svg",
    "assets/icons/Engineering Bay/Anti-Tank Mines.svg",
    "assets/icons/Robotics Workshop/Gatling Sentry.svg",
    "assets/icons/Robotics Workshop/Machine Gun Sentry.svg",
    "assets/icons/Robotics Workshop/Autocannon Sentry.svg",
    "assets/icons/Robotics Workshop/Rocket Sentry.svg",
    "assets/icons/Bridge/Shield Generator Relay.svg",
    "assets/icons/Urban Legends/Flame Sentry.svg",
    "assets/icons/Bridge/Tesla Tower.svg",
    "assets/icons/Robotics Workshop/Patriot Exosuit.svg",
    "assets/icons/Robotics Workshop/Emancipator Exosuit.svg",
    "assets/icons/Hangar/Fast Recon Vehicle.svg",
    "assets/icons/Patriotic Administration Center/Stalwart.svg",
    "assets/icons/Patriotic Administration Center/Machine Gun.svg",
    "assets/icons/Patriotic Administration Center/Heavy Machine Gun.svg",
    "assets/icons/Engineering Bay/Laser Cannon.svg",
    "assets/icons/Patriotic Administration Center/Railgun.svg",
    "assets/icons/Patriotic Administration Center/Expendable Anti-Tank.svg",
    "assets/icons/Patriotic Administration Center/Commando.svg",
    "assets/icons/Engineering Bay/Quasar Cannon.svg",
    "assets/icons/Engineering Bay/Grenade Launcher.svg",
    "assets/icons/Patriotic Administration Center/Flamethrower.svg",
    "assets/icons/Chemical Agents/Sterilizer.svg",
    "assets/icons/Engineering Bay/Arc Thrower.svg",
    "assets/icons/Patriotic Administration Center/Anti-Materiel Rifle.svg",
    "assets/icons/Patriotic Administration Center/Airburst Rocket Launcher.svg",
    "assets/icons/Patriotic Administration Center/Autocannon.svg",
    "assets/icons/Patriotic Administration Center/Recoilless Rifle.svg",
    "assets/icons/Patriotic Administration Center/Spear.svg",
    "assets/icons/Hangar/Jump Pack.svg",
    "assets/icons/Robotics Workshop/Guard Dog.svg",
    "assets/icons/Engineering Bay/Guard Dog Rover.svg",
    "assets/icons/Chemical Agents/Guard Dog Breath.svg",
    "assets/icons/Engineering Bay/Supply Pack.svg",
    "assets/icons/Engineering Bay/Ballistic Shield Backpack.svg",
    "assets/icons/Urban Legends/Directional Shield.svg",
    "assets/icons/Engineering Bay/Shield Generator Pack.svg",
    "assets/icons/Patriotic Administration Center/StA-X3 W.A.S.P. Launcher.svg",
    "assets/icons/Servants of Freedom/Hellbomb Portable.svg",
    "assets/icons/Engineering Bay/Gas Mine.svg",
    "assets/icons/Borderline Justice/Hover Pack.svg",
    "assets/icons/Bridge/Grenadier Battlement.svg",
    "assets/icons/Force of Law/GL-52 De-Escalator.svg",
    "assets/icons/Force of Law/Guard Dog K-9.svg",
    "assets/icons/Masters of Ceremony/One True Flag.svg",
    "assets/icons/Control Group/Epoch.svg",
    "assets/icons/Control Group/Laser Sentry.svg",
    "assets/icons/Control Group/Warp Pack.svg",
    "assets/arm_passive/Adreno-Defibrillator_Armor_Passive_Icon.webp",
    "assets/arm_passive/Advanced_Filtration_Armor_Passive_Icon.webp",
    "assets/arm_passive/Ballistic_Padding_Armor_Passive_Icon.svg",
    "assets/arm_passive/Democracy_Protects_Armor_Passive_Icon.webp",
    "assets/arm_passive/Electrical_Conduit_Armor_Passive_Icon.webp",
    "assets/arm_passive/Engineering_Kit_Armor_Passive_Icon.webp",
    "assets/arm_passive/Extra_Padding_Armor_Passive_Icon.webp",
    "assets/arm_passive/Fortified_Armor_Passive_Icon.webp",
    "assets/arm_passive/Gunslinger_Armor_Passive_Icon.webp",
    "assets/arm_passive/Inflammable_Armor_Passive_Icon.webp",
    "assets/arm_passive/Integrated_Explosives_Armor_Passive_Icon.webp",
    "assets/arm_passive/Med-Kit_Armor_Passive_Icon.webp",
    "assets/arm_passive/Peak_Physique_Armor_Passive_Icon.webp",
    "assets/arm_passive/Reinforced_Epaulettes_Armor_Passive_Icon.webp",
    "assets/arm_passive/Scout_Armor_Passive_Icon.webp",
    "assets/arm_passive/Servo-Assisted_Armor_Passive_Icon.webp",
    "assets/arm_passive/Siege-Ready_Armor_Passive_Icon.webp",
    "assets/arm_passive/Unflinching_Armor_Passive_Icon.webp",
    "assets/primary/AR-23A_Liberator_Carbine_Primary_Render.webp",
    "assets/primary/AR-23C_Liberator_Concussive_Primary_Render.webp",
    "assets/primary/AR-23P_Liberator_Penetrator_Primary_Render.webp",
    "assets/primary/AR-23_Liberator_Primary_Render.webp",
    "assets/primary/AR-32_Pacifier_Primary_Render.webp",
    "assets/primary/AR-61_Tenderizer_Primary_Render.webp",
    "assets/primary/ARC-12_Blitzer_Primary_Render.webp",
    "assets/primary/BR-14_Adjudicator_Primary_Render.webp",
    "assets/primary/CB-9_Exploding_Crossbow_Primary_Render.webp",
    "assets/primary/LAS-16_Sickle_Primary_Render.webp",
    "assets/primary/LAS-17_Double-Edge_Sickle_Primary_Render.webp",
    "assets/primary/LAS-5_Scythe_Primary_Render.webp",
    "assets/primary/MP-98_Knight_Primary_Render.webp",
    "assets/primary/PLAS-101_Purifier_Primary_Render.webp",
    "assets/primary/PLAS-1_Scorcher_Primary_Render.webp",
    "assets/primary/PLAS-39_Accelerator_Rifle_Primary_Render.webp",
    "assets/primary/R-2124_Constitution_Primary_Render.webp",
    "assets/primary/R-2_Amendment_Primary_Render.webp",
    "assets/primary/R-36_Eruptor_Primary_Render.webp",
    "assets/primary/R-63CS_Diligence_Counter_Sniper_Primary_Render.webp",
    "assets/primary/R-63_Diligence_Primary_Render.webp",
    "assets/primary/R-6_Deadeye_Primary_Render.webp",
    "assets/primary/SG-20_Halt_Primary_Render.webp",
    "assets/primary/SG-225IE_Breaker_Incendiary_Primary_Render.webp",
    "assets/primary/SG-225SP_Breaker_Spray&Pray_Primary_Render.webp",
    "assets/primary/SG-225_Breaker_Primary_Render.webp",
    "assets/primary/SG-451_Cookout_Primary_Render.webp",
    "assets/primary/SG-8P_Punisher_Plasma_Primary_Render.webp",
    "assets/primary/SG-8S_Slugger_Primary_Render.webp",
    "assets/primary/SG-8_Punisher_Primary_Render.webp",
    "assets/primary/SMG-32_Reprimand_Primary_Render.webp",
    "assets/primary/SMG-37_Defender_Primary_Render.webp",
    "assets/primary/SMG-72_Pummeler_Primary_Render.webp",
    "assets/primary/StA-11_SMG_Primary_Render.webp",
    "assets/primary/StA-52_Assault_Rifle_Primary_Render.webp",
    "assets/secondary/CQC-5_Combat_Hatchet_Secondary_Render.webp",
    "assets/secondary/GP-20_Ultimatum_Secondary_Render.webp",
    "assets/secondary/GP-31_Grenade_Pistol_Secondary_Render.webp",
    "assets/secondary/LAS-58_Talon_Secondary_Render.webp",
    "assets/secondary/LAS-7_Dagger_Secondary_Render.webp",
    "assets/secondary/P-113_Verdict_Secondary_Render.webp",
    "assets/secondary/P-11_Stim_Pistol_Secondary_Render.webp",
    "assets/secondary/P-19_Redeemer_Secondary_Render.webp",
    "assets/secondary/P-2_Peacemaker_Secondary_Render.webp",
    "assets/secondary/P-4_Senator_Secondary_Render.webp",
    "assets/secondary/P-72_Crisper_Secondary_Render.webp",
    "assets/secondary/P-92_Warrant_Secondary_Render.webp",
    "assets/secondary/PLAS-15_Loyalist_Secondary_Render.webp",
    "assets/secondary/SG-22_Bushwhacker_Secondary_Render.webp",
    "assets/thr/G-109_Urchin_Throwable_Render.webp",
    "assets/thr/G-10_Incendiary_Throwable_Render.webp",
    "assets/thr/G-123_Thermite_Throwable_Render.webp",
    "assets/thr/G-12_High_Explosive_Throwable_Render.webp",
    "assets/thr/G-13_Incendiary_Impact_Throwable_Render.webp",
    "assets/thr/G-142_Pyrotech_Throwable_Render.webp",
    "assets/thr/G-16_Impact_Throwable_Render.webp",
    "assets/thr/G-23_Stun_Throwable_Render.webp",
    "assets/thr/G-31_ARC_Throwable_Render.webp",
    "assets/thr/G-3_Smoke_Throwable_Render.webp",
    "assets/thr/G-4_Gas_Throwable_Render.webp",
    "assets/thr/G-50_Seeker_Throwable_Render.webp",
    "assets/thr/G-6_Frag_Throwable_Render.webp",
    "assets/thr/K-2_Throwing_Knife_Throwable_Render.webp",
    "assets/thr/TED-63_Dynamite_Throwable_Render.webp",
]