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
                { src: "assets/arm_passive/Ballistic_Padding_Armor_Passive_Icon.webp", caption: "탄도갑", name: "흉부 저항 +25%, 폭발 저항 +25%, 흉부 출혈 방지" },
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
            ]
        ]
    },
    //==========================================================================================================================
    // {
    //     group: "group7",
    //     layout: [
    //         [{ src: "assets/weapons/main1.png", name: "돌격소총", caption: "균형 잡힌 주무기" },
    //         ]
    //     ]
    // },
    // //==========================================================================================================================
    // {
    //     group: "group8",
    //     layout: [
    //         [{ src: "assets/weapons/sub1.png", name: "권총", caption: "기본 보조무기" },
    //         ]
    //     ]
    // },
    // //==========================================================================================================================
    // {
    //     group: "group9",
    //     layout: [
    //         [{ src: "assets/weapons/grenade.png", name: "수류탄", caption: "범위 공격" }
    //         ]
    //     ]
    // },
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
    "assets/arm_passive/Ballistic_Padding_Armor_Passive_Icon.webp",
    "assets/arm_passive/Democracy_Protects_Armor_Passive_Icon.webp",
    "assets/arm_passive/Electrical_Conduit_Armor_Passive_Icon.webp",
    "assets/arm_passive/Engineering_Kit_Armor_Passive_Icon.webp",
    "assets/arm_passive/Extra_Padding_Armor_Passive_Icon.webp",
    "assets/arm_passive/Fortified_Armor_Passive_Icon.webp",
    "assets/arm_passive/Gunslinger_Armor_Passive_Icon.webp",
]