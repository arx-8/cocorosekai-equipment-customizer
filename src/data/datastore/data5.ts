import { Equipment } from "src/domain/model/Equipment"
import { CastAny } from "src/types/tsUtils"

export const data5: Equipment[] = [
  {
    attribute: "light",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890000.png",
    name: "羊飼いの杖",
    rawName: "羊飼いの杖",
    specialEffects: [
      {
        rawText: "[光属性専用]受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 72,
      magicAtk: 43,
      magicDef: 0,
      physicalAtk: 14,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890000.png",
    name: "羊飼いの杖",
    rawName: "羊飼いの杖+",
    specialEffects: [
      {
        rawText: "[光属性専用]受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 146,
      magicAtk: 88,
      magicDef: 0,
      physicalAtk: 29,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890000.png",
    name: "羊飼いの杖",
    rawName: "羊飼いの杖++",
    specialEffects: [
      {
        rawText: "[光属性専用]受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 222,
      magicAtk: 133,
      magicDef: 0,
      physicalAtk: 44,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890100.png",
    name: "ウールステッキ",
    rawName: "ウールステッキ",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 60,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 12,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890100.png",
    name: "ウールステッキ",
    rawName: "ウールステッキ+",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 122,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 24,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890100.png",
    name: "ウールステッキ",
    rawName: "ウールステッキ++",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 185,
      magicAtk: 111,
      magicDef: 0,
      physicalAtk: 37,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890200.png",
    name: "ウィングスタッフ",
    rawName: "ウィングスタッフ",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「眠り」を40%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 58,
      magicDef: 0,
      physicalAtk: 14,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890200.png",
    name: "ウィングスタッフ",
    rawName: "ウィングスタッフ+",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「眠り」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 117,
      magicDef: 0,
      physicalAtk: 29,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890200.png",
    name: "ウィングスタッフ",
    rawName: "ウィングスタッフ++",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「眠り」を80%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 178,
      magicDef: 0,
      physicalAtk: 44,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890300.png",
    name: "ブルームゲート",
    rawName: "ブルームゲート",
    specialEffects: [
      {
        rawText: "状態異常「眠り」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 48,
      magicDef: 0,
      physicalAtk: 12,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890300.png",
    name: "ブルームゲート",
    rawName: "ブルームゲート+",
    specialEffects: [
      {
        rawText: "状態異常「眠り」を45%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 98,
      magicDef: 0,
      physicalAtk: 24,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890300.png",
    name: "ブルームゲート",
    rawName: "ブルームゲート++",
    specialEffects: [
      {
        rawText: "状態異常「眠り」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 148,
      magicDef: 0,
      physicalAtk: 37,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890400.png",
    name: "アイスソード",
    rawName: "アイスソード",
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 72,
      magicAtk: 14,
      magicDef: 0,
      physicalAtk: 43,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890400.png",
    name: "アイスソード",
    rawName: "アイスソード+",
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 146,
      magicAtk: 29,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890400.png",
    name: "アイスソード",
    rawName: "アイスソード++",
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 222,
      magicAtk: 44,
      magicDef: 0,
      physicalAtk: 133,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890500.png",
    name: "ライトガントレット",
    rawName: "ライトガントレット",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 60,
      magicAtk: 12,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890500.png",
    name: "ライトガントレット",
    rawName: "ライトガントレット+",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 122,
      magicAtk: 24,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890500.png",
    name: "ライトガントレット",
    rawName: "ライトガントレット++",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 185,
      magicAtk: 37,
      magicDef: 0,
      physicalAtk: 111,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 890600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890600.png",
    name: "ラピッドスクゥアー",
    rawName: "ラピッドスクゥアー",
    specialEffects: [
      {
        rawText: "クリティカル率が5%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 890601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890600.png",
    name: "ラピッドスクゥアー",
    rawName: "ラピッドスクゥアー+",
    specialEffects: [
      {
        rawText: "クリティカル率が10%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 70,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 28,
    id: 890602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890600.png",
    name: "ラピッドスクゥアー",
    rawName: "ラピッドスクゥアー++",
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 105,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 890700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890700.png",
    name: "パラレルパラソル",
    rawName: "パラレルパラソル",
    specialEffects: [
      {
        rawText: "クリティカル率が5%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 35,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 890701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890700.png",
    name: "パラレルパラソル",
    rawName: "パラレルパラソル+",
    specialEffects: [
      {
        rawText: "クリティカル率が10%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 70,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 28,
    id: 890702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890700.png",
    name: "パラレルパラソル",
    rawName: "パラレルパラソル++",
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 105,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 0,
    equipCost: 13,
    id: 890800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890800.png",
    name: "サンライトショット",
    rawName: "サンライトショット",
    specialEffects: [
      {
        rawText: "[光属性限定]クリティカル率が10%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 70,
      magicDef: 0,
      physicalAtk: 70,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 1,
    equipCost: 23,
    id: 890801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890800.png",
    name: "サンライトショット",
    rawName: "サンライトショット+",
    specialEffects: [
      {
        rawText: "[光属性限定]クリティカル率が15%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 125,
      magicDef: 0,
      physicalAtk: 125,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 2,
    equipCost: 33,
    id: 890802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890800.png",
    name: "サンライトショット",
    rawName: "サンライトショット++",
    specialEffects: [
      {
        rawText: "[光属性限定]クリティカル率が20%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 0,
    equipCost: 12,
    id: 890900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890900.png",
    name: "水晶の杖",
    rawName: "水晶の杖",
    specialEffects: [
      {
        rawText: "[火属性専用]状態異常「幻惑」を40%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 66,
      magicAtk: 44,
      magicDef: 0,
      physicalAtk: 13,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 1,
    equipCost: 21,
    id: 890901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890900.png",
    name: "水晶の杖",
    rawName: "水晶の杖+",
    specialEffects: [
      {
        rawText: "[火属性専用]状態異常「幻惑」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 140,
      magicAtk: 91,
      magicDef: 0,
      physicalAtk: 28,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 2,
    equipCost: 30,
    id: 890902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890900.png",
    name: "水晶の杖",
    rawName: "水晶の杖++",
    specialEffects: [
      {
        rawText: "[火属性専用]状態異常「幻惑」を80%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 204,
      magicAtk: 137,
      magicDef: 0,
      physicalAtk: 42,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 891000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891000.png",
    name: "クラックゲート",
    rawName: "クラックゲート",
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 54,
      magicAtk: 37,
      magicDef: 0,
      physicalAtk: 11,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 891001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891000.png",
    name: "クラックゲート",
    rawName: "クラックゲート+",
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を45%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 116,
      magicAtk: 76,
      magicDef: 0,
      physicalAtk: 23,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 891002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891000.png",
    name: "クラックゲート",
    rawName: "クラックゲート++",
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 167,
      magicAtk: 115,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 24,
    id: 891100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891100.png",
    name: "無極の手甲",
    rawName: "無極の手甲",
    specialEffects: [
      {
        rawText: "ブロック率が15%上昇する",
      },
    ],
    statuses: {
      hp: 220,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 85,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 44,
    id: 891101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891100.png",
    name: "無極の手甲",
    rawName: "無極の手甲+",
    specialEffects: [
      {
        rawText: "ブロック率が27%上昇する",
      },
    ],
    statuses: {
      hp: 420,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 155,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 64,
    id: 891102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891100.png",
    name: "無極の手甲",
    rawName: "無極の手甲++",
    specialEffects: [
      {
        rawText: "ブロック率が40%上昇する",
      },
    ],
    statuses: {
      hp: 620,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 225,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 22,
    id: 891300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891300.png",
    name: "凶眼の竜玉",
    rawName: "凶眼の竜玉",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 200,
      magicAtk: 80,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 42,
    id: 891301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891300.png",
    name: "凶眼の竜玉",
    rawName: "凶眼の竜玉+",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが20%上昇する",
      },
    ],
    statuses: {
      hp: 400,
      magicAtk: 150,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 62,
    id: 891302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891300.png",
    name: "凶眼の竜玉",
    rawName: "凶眼の竜玉++",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが30%上昇する",
      },
    ],
    statuses: {
      hp: 600,
      magicAtk: 220,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 14,
    id: 891500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891500.png",
    name: "パニッシュメント",
    rawName: "パニッシュメント",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが5%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 50,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 23,
    id: 891501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891500.png",
    name: "パニッシュメント",
    rawName: "パニッシュメント+",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 85,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 32,
    id: 891502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891500.png",
    name: "パニッシュメント",
    rawName: "パニッシュメント++",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが15%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 0,
    equipCost: 17,
    id: 891600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891600.png",
    name: "エクセキューション",
    rawName: "エクセキューション",
    specialEffects: [
      {
        rawText: "[闇属性限定]物理攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 80,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 1,
    equipCost: 27,
    id: 891601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891600.png",
    name: "エクセキューション",
    rawName: "エクセキューション+",
    specialEffects: [
      {
        rawText: "[闇属性限定]物理攻撃ダメージが15%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 135,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 2,
    equipCost: 37,
    id: 891602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891600.png",
    name: "エクセキューション",
    rawName: "エクセキューション++",
    specialEffects: [
      {
        rawText: "[闇属性限定]物理攻撃ダメージが20%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 190,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 23,
    id: 891700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891700.png",
    name: "双翼の氷晶",
    rawName: "双翼の氷晶",
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
    statuses: {
      hp: 210,
      magicAtk: 82,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 43,
    id: 891701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891700.png",
    name: "双翼の氷晶",
    rawName: "双翼の氷晶+",
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する",
      },
    ],
    statuses: {
      hp: 410,
      magicAtk: 152,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 63,
    id: 891702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891700.png",
    name: "双翼の氷晶",
    rawName: "双翼の氷晶++",
    specialEffects: [
      {
        rawText: "クリティカル率が35%上昇する",
      },
    ],
    statuses: {
      hp: 610,
      magicAtk: 222,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 0,
    equipCost: 19,
    id: 891900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891900.png",
    name: "イビルアイ・ランス",
    rawName: "イビルアイ・ランス",
    specialEffects: [
      {
        rawText: "[闇属性専用]クリティカル率が10%上昇する",
      },
    ],
    statuses: {
      hp: 190,
      magicAtk: 70,
      magicDef: 0,
      physicalAtk: 70,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 1,
    equipCost: 36,
    id: 891901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891900.png",
    name: "イビルアイ・ランス",
    rawName: "イビルアイ・ランス+",
    specialEffects: [
      {
        rawText: "[闇属性専用]クリティカル率が20%上昇する",
      },
    ],
    statuses: {
      hp: 365,
      magicAtk: 134,
      magicDef: 0,
      physicalAtk: 134,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 2,
    equipCost: 53,
    id: 891902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891900.png",
    name: "イビルアイ・ランス",
    rawName: "イビルアイ・ランス++",
    specialEffects: [
      {
        rawText: "[闇属性専用]クリティカル率が30%上昇する",
      },
    ],
    statuses: {
      hp: 540,
      magicAtk: 198,
      magicDef: 0,
      physicalAtk: 198,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 0,
    equipCost: 12,
    id: 892000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892000.png",
    name: "ブロンズソウル",
    rawName: "ブロンズソウル",
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 62,
      magicAtk: 12,
      magicDef: 0,
      physicalAtk: 49,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 1,
    equipCost: 21,
    id: 892001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892000.png",
    name: "ブロンズソウル",
    rawName: "ブロンズソウル+",
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 135,
      magicAtk: 24,
      magicDef: 0,
      physicalAtk: 98,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 2,
    equipCost: 30,
    id: 892002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892000.png",
    name: "ブロンズソウル",
    rawName: "ブロンズソウル++",
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 198,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 147,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 892100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892100.png",
    name: "アイアンハート",
    rawName: "アイアンハート",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 48,
      magicAtk: 10,
      magicDef: 0,
      physicalAtk: 40,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 892101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892100.png",
    name: "アイアンハート",
    rawName: "アイアンハート+",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 112,
      magicAtk: 20,
      magicDef: 0,
      physicalAtk: 82,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 892102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892100.png",
    name: "アイアンハート",
    rawName: "アイアンハート++",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 160,
      magicAtk: 30,
      magicDef: 0,
      physicalAtk: 124,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 0,
    equipCost: 18,
    id: 892200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892200.png",
    name: "ブラックボックス",
    rawName: "ブラックボックス",
    specialEffects: [
      {
        rawText: "[火属性専用]物理・魔法攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 180,
      magicAtk: 66,
      magicDef: 0,
      physicalAtk: 66,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 1,
    equipCost: 35,
    id: 892201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892200.png",
    name: "ブラックボックス",
    rawName: "ブラックボックス+",
    specialEffects: [
      {
        rawText: "[火属性専用]物理・魔法攻撃ダメージが18%上昇する",
      },
    ],
    statuses: {
      hp: 355,
      magicAtk: 130,
      magicDef: 0,
      physicalAtk: 130,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 2,
    equipCost: 52,
    id: 892202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892200.png",
    name: "ブラックボックス",
    rawName: "ブラックボックス++",
    specialEffects: [
      {
        rawText: "[火属性専用]物理・魔法攻撃ダメージが25%上昇する",
      },
    ],
    statuses: {
      hp: 530,
      magicAtk: 194,
      magicDef: 0,
      physicalAtk: 194,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 892300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892300.png",
    name: "聖樹の木剣",
    rawName: "聖樹の木剣",
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 70,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 30,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 892301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892300.png",
    name: "聖樹の木剣",
    rawName: "聖樹の木剣+",
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を45%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 135,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 62,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 28,
    id: 892302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892300.png",
    name: "聖樹の木剣",
    rawName: "聖樹の木剣++",
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 200,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 94,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 0,
    equipCost: 16,
    id: 892400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892400.png",
    name: "パルス・ブラスター",
    rawName: "パルス・ブラスター",
    specialEffects: [
      {
        rawText: "[風属性専用]物理・魔法攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 160,
      magicAtk: 59,
      magicDef: 0,
      physicalAtk: 59,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 1,
    equipCost: 33,
    id: 892401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892400.png",
    name: "パルス・ブラスター",
    rawName: "パルス・ブラスター+",
    specialEffects: [
      {
        rawText: "[風属性専用]物理・魔法攻撃ダメージが18%上昇する",
      },
    ],
    statuses: {
      hp: 335,
      magicAtk: 122,
      magicDef: 0,
      physicalAtk: 122,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 2,
    equipCost: 50,
    id: 892402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892400.png",
    name: "パルス・ブラスター",
    rawName: "パルス・ブラスター++",
    specialEffects: [
      {
        rawText: "[風属性専用]物理・魔法攻撃ダメージが25%上昇する",
      },
    ],
    statuses: {
      hp: 510,
      magicAtk: 185,
      magicDef: 0,
      physicalAtk: 185,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 21,
    id: 892500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892500.png",
    name: "金獣の大槌",
    rawName: "金獣の大槌",
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
    statuses: {
      hp: 190,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 76,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 41,
    id: 892501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892500.png",
    name: "金獣の大槌",
    rawName: "金獣の大槌+",
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する",
      },
    ],
    statuses: {
      hp: 390,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 146,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 61,
    id: 892502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892500.png",
    name: "金獣の大槌",
    rawName: "金獣の大槌++",
    specialEffects: [
      {
        rawText: "クリティカル率が35%上昇する",
      },
    ],
    statuses: {
      hp: 590,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 216,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 892700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892700.png",
    name: "クマホ明神",
    rawName: "クマホ明神",
    specialEffects: [
      {
        rawText: "状態異常「行動不能」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 70,
      magicAtk: 30,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 892701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892700.png",
    name: "クマホ明神",
    rawName: "クマホ明神+",
    specialEffects: [
      {
        rawText: "状態異常「行動不能」を45%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 135,
      magicAtk: 62,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 28,
    id: 892702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892700.png",
    name: "クマホ明神",
    rawName: "クマホ明神++",
    specialEffects: [
      {
        rawText: "状態異常「行動不能」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 200,
      magicAtk: 94,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 0,
    equipCost: 15,
    id: 892800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892800.png",
    name: "神依木の木剣",
    rawName: "神依木の木剣",
    specialEffects: [
      {
        rawText: "[闇属性専用]状態異常「幻惑」を50%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 110,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 55,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 1,
    equipCost: 24,
    id: 892801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892800.png",
    name: "神依木の木剣",
    rawName: "神依木の木剣+",
    specialEffects: [
      {
        rawText: "[闇属性専用]状態異常「幻惑」を75%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 190,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 97,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 2,
    equipCost: 33,
    id: 892802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892800.png",
    name: "神依木の木剣",
    rawName: "神依木の木剣++",
    specialEffects: [
      {
        rawText: "[闇属性専用]状態異常「幻惑」を100%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 270,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 140,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 0,
    equipCost: 15,
    id: 892900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892900.png",
    name: "クマホ大明神",
    rawName: "クマホ大明神",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「行動不能」を50%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 110,
      magicAtk: 55,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 1,
    equipCost: 24,
    id: 892901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892900.png",
    name: "クマホ大明神",
    rawName: "クマホ大明神+",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「行動不能」を75%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 190,
      magicAtk: 97,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 2,
    equipCost: 33,
    id: 892902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892900.png",
    name: "クマホ大明神",
    rawName: "クマホ大明神++",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「行動不能」を100%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 270,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 17,
    id: 893000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893000.png",
    name: "クルーエルワンド",
    rawName: "クルーエルワンド",
    specialEffects: [
      {
        rawText: "[水属性専用]物理・魔法攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 170,
      magicAtk: 63,
      magicDef: 0,
      physicalAtk: 63,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 34,
    id: 893001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893000.png",
    name: "クルーエルワンド",
    rawName: "クルーエルワンド+",
    specialEffects: [
      {
        rawText: "[水属性専用]物理・魔法攻撃ダメージが18%上昇する",
      },
    ],
    statuses: {
      hp: 345,
      magicAtk: 126,
      magicDef: 0,
      physicalAtk: 126,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 51,
    id: 893002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893000.png",
    name: "クルーエルワンド",
    rawName: "クルーエルワンド++",
    specialEffects: [
      {
        rawText: "[水属性専用]物理・魔法攻撃ダメージが25%上昇する",
      },
    ],
    statuses: {
      hp: 520,
      magicAtk: 190,
      magicDef: 0,
      physicalAtk: 190,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 0,
    equipCost: 12,
    id: 893100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893100.png",
    name: "テオス・クシフォス",
    rawName: "テオス・クシフォス",
    specialEffects: [
      {
        rawText: "[光属性専用]状態異常「眠り」を40%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 102,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 40,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 1,
    equipCost: 21,
    id: 893101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893100.png",
    name: "テオス・クシフォス",
    rawName: "テオス・クシフォス+",
    specialEffects: [
      {
        rawText: "[光属性専用]状態異常「眠り」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 191,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 2,
    equipCost: 30,
    id: 893102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893100.png",
    name: "テオス・クシフォス",
    rawName: "テオス・クシフォス++",
    specialEffects: [
      {
        rawText: "[光属性専用]状態異常「眠り」を80%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 280,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 136,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 893200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893200.png",
    name: "鞘より抜かれし剣",
    rawName: "鞘より抜かれし剣",
    specialEffects: [
      {
        rawText: "状態異常「眠り」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 81,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 34,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 893201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893200.png",
    name: "鞘より抜かれし剣",
    rawName: "鞘より抜かれし剣+",
    specialEffects: [
      {
        rawText: "状態異常「眠り」を45%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 157,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 72,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 893202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893200.png",
    name: "鞘より抜かれし剣",
    rawName: "鞘より抜かれし剣++",
    specialEffects: [
      {
        rawText: "状態異常「眠り」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 233,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 110,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 893300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893300.png",
    name: "機槍ハーメルン",
    rawName: "機槍ハーメルン",
    specialEffects: [
      {
        rawText: "受ける物理・魔法攻撃ダメージを3%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 38,
      magicDef: 0,
      physicalAtk: 38,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 22,
    id: 893301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893300.png",
    name: "機槍ハーメルン",
    rawName: "機槍ハーメルン+",
    specialEffects: [
      {
        rawText: "受ける物理・魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 88,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 32,
    id: 893302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893300.png",
    name: "機槍ハーメルン",
    rawName: "機槍ハーメルン++",
    specialEffects: [
      {
        rawText: "受ける物理・魔法攻撃ダメージを8%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 138,
      magicDef: 0,
      physicalAtk: 138,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 893400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893400.png",
    name: "肉まんおばけ",
    rawName: "肉まんおばけ",
    specialEffects: [
      {
        rawText: "クリティカル率が8%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 23,
    id: 893401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893400.png",
    name: "肉まんおばけ",
    rawName: "肉まんおばけ+",
    specialEffects: [
      {
        rawText: "クリティカル率が14%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 80,
      magicDef: 0,
      physicalAtk: 80,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 34,
    id: 893402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893400.png",
    name: "肉まんおばけ",
    rawName: "肉まんおばけ++",
    specialEffects: [
      {
        rawText: "クリティカル率が20%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 124,
      magicDef: 0,
      physicalAtk: 124,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 0,
    equipCost: 14,
    id: 893500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893500.png",
    name: "上杉家のカレー",
    rawName: "上杉家のカレー",
    specialEffects: [
      {
        rawText: "[火属性専用]クリティカル率が11%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 50,
      magicDef: 0,
      physicalAtk: 50,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 1,
    equipCost: 26,
    id: 893501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893500.png",
    name: "上杉家のカレー",
    rawName: "上杉家のカレー+",
    specialEffects: [
      {
        rawText: "[火属性専用]クリティカル率が18%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 107,
      magicDef: 0,
      physicalAtk: 107,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 2,
    equipCost: 38,
    id: 893502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893500.png",
    name: "上杉家のカレー",
    rawName: "上杉家のカレー++",
    specialEffects: [
      {
        rawText: "[火属性専用]クリティカル率が25%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 164,
      magicDef: 0,
      physicalAtk: 164,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 20,
    id: 893600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893600.png",
    name: "混沌の旋刃",
    rawName: "混沌の旋刃",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 180,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 72,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 40,
    id: 893601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893600.png",
    name: "混沌の旋刃",
    rawName: "混沌の旋刃+",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが20%上昇する",
      },
    ],
    statuses: {
      hp: 380,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 142,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 60,
    id: 893602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893600.png",
    name: "混沌の旋刃",
    rawName: "混沌の旋刃++",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが30%上昇する",
      },
    ],
    statuses: {
      hp: 580,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 212,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 25,
    id: 893700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893700.png",
    name: "混沌の円環",
    rawName: "混沌の円環",
    specialEffects: [
      {
        rawText: "ブロック確率が15%上昇する",
      },
    ],
    statuses: {
      hp: 230,
      magicAtk: 88,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 893701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893700.png",
    name: "混沌の円環",
    rawName: "混沌の円環+",
    specialEffects: [
      {
        rawText: "ブロック確率が27%上昇する",
      },
    ],
    statuses: {
      hp: 430,
      magicAtk: 158,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 65,
    id: 893702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893700.png",
    name: "混沌の円環",
    rawName: "混沌の円環++",
    specialEffects: [
      {
        rawText: "ブロック確率が40%上昇する",
      },
    ],
    statuses: {
      hp: 630,
      magicAtk: 228,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 0,
    equipCost: 12,
    id: 893800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893800.png",
    name: "デモンズチェスト",
    rawName: "デモンズチェスト",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「毒」を40%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 65,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 53,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 1,
    equipCost: 21,
    id: 893801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893800.png",
    name: "デモンズチェスト",
    rawName: "デモンズチェスト+",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「毒」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 136,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 103,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 2,
    equipCost: 30,
    id: 893802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893800.png",
    name: "デモンズチェスト",
    rawName: "デモンズチェスト++",
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「毒」を80%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 207,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 153,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 893900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893900.png",
    name: "イビルチェスト",
    rawName: "イビルチェスト",
    specialEffects: [
      {
        rawText: "状態異常「毒」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 51,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 44,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 893901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893900.png",
    name: "イビルチェスト",
    rawName: "イビルチェスト+",
    specialEffects: [
      {
        rawText: "状態異常「毒」を45%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 109,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 87,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 893902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893900.png",
    name: "イビルチェスト",
    rawName: "イビルチェスト++",
    specialEffects: [
      {
        rawText: "状態異常「毒」を60%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 167,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 130,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 11,
    id: 894000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894000.png",
    name: "プリニー連射",
    rawName: "プリニー連射",
    specialEffects: [
      {
        rawText: "デバフ「物理ダメージ低下」を20%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 70,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 894001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894000.png",
    name: "プリニー連射",
    rawName: "プリニー連射+",
    specialEffects: [
      {
        rawText: "デバフ「物理ダメージ低下」を35%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 135,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 79,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 31,
    id: 894002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894000.png",
    name: "プリニー連射",
    rawName: "プリニー連射++",
    specialEffects: [
      {
        rawText: "デバフ「物理ダメージ低下」を50%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 200,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 122,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 0,
    equipCost: 13,
    id: 894100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894100.png",
    name: "プリニーボマー",
    rawName: "プリニーボマー",
    specialEffects: [
      {
        rawText:
          "[火属性専用]デバフ「物理ダメージ低下」を30%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 90,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 50,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 1,
    equipCost: 24,
    id: 894101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894100.png",
    name: "プリニーボマー",
    rawName: "プリニーボマー+",
    specialEffects: [
      {
        rawText:
          "[火属性専用]デバフ「物理ダメージ低下」を50%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 180,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 108,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 2,
    equipCost: 35,
    id: 894102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894100.png",
    name: "プリニーボマー",
    rawName: "プリニーボマー++",
    specialEffects: [
      {
        rawText:
          "[火属性専用]デバフ「物理ダメージ低下」を70%の確率で無効化する",
      },
    ],
    statuses: {
      hp: 270,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 166,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 0,
    equipCost: 12,
    id: 894200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894200.png",
    name: "大千鳥十文字槍・朱",
    rawName: "大千鳥十文字槍・朱",
    specialEffects: [
      {
        rawText: "[火属性専用]物理攻撃ダメージが5%上昇する",
      },
    ],
    statuses: {
      hp: 97,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 41,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 1,
    equipCost: 21,
    id: 894201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894200.png",
    name: "大千鳥十文字槍・朱",
    rawName: "大千鳥十文字槍・朱+",
    specialEffects: [
      {
        rawText: "[火属性専用]物理攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 184,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 90,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 2,
    equipCost: 30,
    id: 894202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894200.png",
    name: "大千鳥十文字槍・朱",
    rawName: "大千鳥十文字槍・朱++",
    specialEffects: [
      {
        rawText: "[火属性専用]物理攻撃ダメージが15%上昇する",
      },
    ],
    statuses: {
      hp: 271,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 139,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 894300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894300.png",
    name: "大千鳥十文字槍・鐵",
    rawName: "大千鳥十文字槍・鐵",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが5%上昇する",
      },
    ],
    statuses: {
      hp: 78,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 34,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 894301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894300.png",
    name: "大千鳥十文字槍・鐵",
    rawName: "大千鳥十文字槍・鐵+",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 152,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 894302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894300.png",
    name: "大千鳥十文字槍・鐵",
    rawName: "大千鳥十文字槍・鐵++",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが15%上昇する",
      },
    ],
    statuses: {
      hp: 226,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 112,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 11,
    id: 894400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894400.png",
    name: "スタービーチボール",
    rawName: "スタービーチボール",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 50,
      magicAtk: 35,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 894401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894400.png",
    name: "スタービーチボール",
    rawName: "スタービーチボール+",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 112,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 27,
    id: 894402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894400.png",
    name: "スタービーチボール",
    rawName: "スタービーチボール++",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 174,
      magicAtk: 111,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 11,
    id: 894500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894500.png",
    name: "一千貫き",
    rawName: "一千貫き",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 50,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 894501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894500.png",
    name: "一千貫き",
    rawName: "一千貫き+",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 112,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 27,
    id: 894502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894500.png",
    name: "一千貫き",
    rawName: "一千貫き++",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 174,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 111,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 0,
    equipCost: 10,
    id: 894600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894600.png",
    name: "宵を貫く星芒",
    rawName: "宵を貫く星芒",
    specialEffects: [
      {
        rawText: "[光属性専用]受ける物理・魔法攻撃ダメージを3%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 33,
      magicDef: 0,
      physicalAtk: 33,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 1,
    equipCost: 20,
    id: 894601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894600.png",
    name: "宵を貫く星芒",
    rawName: "宵を貫く星芒+",
    specialEffects: [
      {
        rawText: "[光属性専用]受ける物理・魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 89,
      magicDef: 0,
      physicalAtk: 89,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 2,
    equipCost: 30,
    id: 894602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894600.png",
    name: "宵を貫く星芒",
    rawName: "宵を貫く星芒++",
    specialEffects: [
      {
        rawText: "[光属性専用]受ける物理・魔法攻撃ダメージを8%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 145,
      magicDef: 0,
      physicalAtk: 145,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 11,
    id: 894700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894700.png",
    name: "不沈艦エピタフ",
    rawName: "不沈艦エピタフ",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 50,
      magicAtk: 35,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 894701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894700.png",
    name: "不沈艦エピタフ",
    rawName: "不沈艦エピタフ+",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 112,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 27,
    id: 894702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894700.png",
    name: "不沈艦エピタフ",
    rawName: "不沈艦エピタフ++",
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 174,
      magicAtk: 111,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 11,
    id: 894800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894800.png",
    name: "カリス・メイス",
    rawName: "カリス・メイス",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 50,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 19,
    id: 894801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894800.png",
    name: "カリス・メイス",
    rawName: "カリス・メイス+",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 112,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 27,
    id: 894802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894800.png",
    name: "カリス・メイス",
    rawName: "カリス・メイス++",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 174,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 111,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 10,
    id: 894900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894900.png",
    name: "戯れのアンサンブル",
    rawName: "戯れのアンサンブル",
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理・魔法攻撃ダメージを3%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 33,
      magicDef: 0,
      physicalAtk: 33,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 20,
    id: 894901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894900.png",
    name: "戯れのアンサンブル",
    rawName: "戯れのアンサンブル+",
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理・魔法攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 89,
      magicDef: 0,
      physicalAtk: 89,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 30,
    id: 894902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894900.png",
    name: "戯れのアンサンブル",
    rawName: "戯れのアンサンブル++",
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理・魔法攻撃ダメージを8%軽減する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 145,
      magicDef: 0,
      physicalAtk: 145,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 21,
    id: 895000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895000.png",
    name: "ゼロアワーアタック",
    rawName: "ゼロアワーアタック",
    specialEffects: [
      {
        rawText: "ブロック確率が20%上昇する",
      },
    ],
    statuses: {
      hp: 500,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 38,
    id: 895001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895000.png",
    name: "ゼロアワーアタック",
    rawName: "ゼロアワーアタック+",
    specialEffects: [
      {
        rawText: "ブロック確率が35%上昇する",
      },
    ],
    statuses: {
      hp: 1000,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 55,
    id: 895002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895000.png",
    name: "ゼロアワーアタック",
    rawName: "ゼロアワーアタック++",
    specialEffects: [
      {
        rawText: "ブロック確率が50%上昇する",
      },
    ],
    statuses: {
      hp: 1500,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 16,
    id: 895100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895100.png",
    name: "ファイアシェル",
    rawName: "ファイアシェル",
    specialEffects: [
      {
        rawText: "火属性耐性が15%上昇する。",
      },
    ],
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 33,
    id: 895101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895100.png",
    name: "ファイアシェル",
    rawName: "ファイアシェル+",
    specialEffects: [
      {
        rawText: "火属性耐性が30%上昇する。",
      },
    ],
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 50,
    id: 895102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895100.png",
    name: "ファイアシェル",
    rawName: "ファイアシェル++",
    specialEffects: [
      {
        rawText: "火属性耐性が50%上昇する。",
      },
    ],
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 16,
    id: 895200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895200.png",
    name: "ウォーターシェル",
    rawName: "ウォーターシェル",
    specialEffects: [
      {
        rawText: "水属性耐性が15%上昇する。",
      },
    ],
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 33,
    id: 895201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895200.png",
    name: "ウォーターシェル",
    rawName: "ウォーターシェル+",
    specialEffects: [
      {
        rawText: "水属性耐性が30%上昇する。",
      },
    ],
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 50,
    id: 895202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895200.png",
    name: "ウォーターシェル",
    rawName: "ウォーターシェル++",
    specialEffects: [
      {
        rawText: "水属性耐性が50%上昇する。",
      },
    ],
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 16,
    id: 895300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895300.png",
    name: "ウィンドシェル",
    rawName: "ウィンドシェル",
    specialEffects: [
      {
        rawText: "風属性耐性が15%上昇する。",
      },
    ],
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 33,
    id: 895301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895300.png",
    name: "ウィンドシェル",
    rawName: "ウィンドシェル+",
    specialEffects: [
      {
        rawText: "風属性耐性が30%上昇する。",
      },
    ],
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 50,
    id: 895302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895300.png",
    name: "ウィンドシェル",
    rawName: "ウィンドシェル++",
    specialEffects: [
      {
        rawText: "風属性耐性が50%上昇する。",
      },
    ],
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 16,
    id: 895400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895400.png",
    name: "ダークシェル",
    rawName: "ダークシェル",
    specialEffects: [
      {
        rawText: "闇属性耐性が15%上昇する。",
      },
    ],
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 33,
    id: 895401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895400.png",
    name: "ダークシェル",
    rawName: "ダークシェル+",
    specialEffects: [
      {
        rawText: "闇属性耐性が30%上昇する。",
      },
    ],
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 50,
    id: 895402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895400.png",
    name: "ダークシェル",
    rawName: "ダークシェル++",
    specialEffects: [
      {
        rawText: "闇属性耐性が50%上昇する。",
      },
    ],
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 16,
    id: 895500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895500.png",
    name: "ライトシェル",
    rawName: "ライトシェル",
    specialEffects: [
      {
        rawText: "光属性耐性が15%上昇する。",
      },
    ],
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 33,
    id: 895501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895500.png",
    name: "ライトシェル",
    rawName: "ライトシェル+",
    specialEffects: [
      {
        rawText: "光属性耐性が30%上昇する。",
      },
    ],
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 50,
    id: 895502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895500.png",
    name: "ライトシェル",
    rawName: "ライトシェル++",
    specialEffects: [
      {
        rawText: "光属性耐性が50%上昇する。",
      },
    ],
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 12,
    id: 895600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895600.png",
    name: "開放されし封印の箱",
    rawName: "開放されし封印の箱",
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが5%上昇する",
      },
    ],
    statuses: {
      hp: 58,
      magicAtk: 55,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 21,
    id: 895601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895600.png",
    name: "開放されし封印の箱",
    rawName: "開放されし封印の箱+",
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 126,
      magicAtk: 107,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 30,
    id: 895602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895600.png",
    name: "開放されし封印の箱",
    rawName: "開放されし封印の箱++",
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが15%上昇する",
      },
    ],
    statuses: {
      hp: 194,
      magicAtk: 159,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 895700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895700.png",
    name: "封印の箱",
    rawName: "封印の箱",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが5%上昇する",
      },
    ],
    statuses: {
      hp: 48,
      magicAtk: 45,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 895701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895700.png",
    name: "封印の箱",
    rawName: "封印の箱+",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが10%上昇する",
      },
    ],
    statuses: {
      hp: 104,
      magicAtk: 90,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 895702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895700.png",
    name: "封印の箱",
    rawName: "封印の箱++",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが15%上昇する",
      },
    ],
    statuses: {
      hp: 160,
      magicAtk: 135,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 0,
    equipCost: 12,
    id: 895800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895800.png",
    name: "忘失のカルディア",
    rawName: "忘失のカルディア",
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける物理攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 104,
      magicAtk: 37,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 1,
    equipCost: 21,
    id: 895801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895800.png",
    name: "忘失のカルディア",
    rawName: "忘失のカルディア+",
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける物理攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 195,
      magicAtk: 85,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 2,
    equipCost: 30,
    id: 895802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895800.png",
    name: "忘失のカルディア",
    rawName: "忘失のカルディア++",
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける物理攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 286,
      magicAtk: 133,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 895900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895900.png",
    name: "新生のカルディア",
    rawName: "新生のカルディア",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
    statuses: {
      hp: 85,
      magicAtk: 32,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 895901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895900.png",
    name: "新生のカルディア",
    rawName: "新生のカルディア+",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
    statuses: {
      hp: 163,
      magicAtk: 69,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 895902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895900.png",
    name: "新生のカルディア",
    rawName: "新生のカルディア++",
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
    statuses: {
      hp: 241,
      magicAtk: 106,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 8,
    id: 896000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896000.png",
    name: "ベアバンクル",
    rawName: "ベアバンクル",
    specialEffects: [
      {
        rawText: "味方全体のHPが毎ターン1%前後回復することがある。",
      },
    ],
    statuses: {
      hp: 60,
      magicAtk: 23,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 16,
    id: 896001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896000.png",
    name: "ベアバンクル",
    rawName: "ベアバンクル+",
    specialEffects: [
      {
        rawText: "味方全体のHPが毎ターン2%前後回復することがある。",
      },
    ],
    statuses: {
      hp: 145,
      magicAtk: 54,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 24,
    id: 896002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896000.png",
    name: "ベアバンクル",
    rawName: "ベアバンクル++",
    specialEffects: [
      {
        rawText: "味方全体のHPが毎ターン3%前後回復することがある。",
      },
    ],
    statuses: {
      hp: 230,
      magicAtk: 85,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 0,
    equipCost: 16,
    id: 896100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896100.png",
    name: "オルタナティヴ・B",
    rawName: "オルタナティヴ・B",
    specialEffects: [
      {
        rawText: "[火属性専用]味方全体のHPが毎ターン2%前後回復する。",
      },
    ],
    statuses: {
      hp: 150,
      magicAtk: 53,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 1,
    equipCost: 32,
    id: 896101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896100.png",
    name: "オルタナティヴ・B",
    rawName: "オルタナティヴ・B+",
    specialEffects: [
      {
        rawText: "[火属性専用]味方全体のHPが毎ターン4%前後回復する。",
      },
    ],
    statuses: {
      hp: 335,
      magicAtk: 119,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "fire",
    enhancementsNum: 2,
    equipCost: 48,
    id: 896102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896100.png",
    name: "オルタナティヴ・B",
    rawName: "オルタナティヴ・B++",
    specialEffects: [
      {
        rawText: "[火属性専用]味方全体のHPが毎ターン6%前後回復する。",
      },
    ],
    statuses: {
      hp: 520,
      magicAtk: 185,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 11,
    id: 896200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896200.png",
    name: "五等分の百点答案",
    rawName: "五等分の百点答案",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが5%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 40,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 24,
    id: 896201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896200.png",
    name: "五等分の百点答案",
    rawName: "五等分の百点答案+",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが12%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 100,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 37,
    id: 896202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896200.png",
    name: "五等分の百点答案",
    rawName: "五等分の百点答案++",
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが20%上昇する",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 160,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 14,
    id: 896300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896300.png",
    name: "抹茶ソーダ",
    rawName: "抹茶ソーダ",
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが10%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 28,
    id: 896301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896300.png",
    name: "抹茶ソーダ",
    rawName: "抹茶ソーダ+",
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが17%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 42,
    id: 896302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896300.png",
    name: "抹茶ソーダ",
    rawName: "抹茶ソーダ++",
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが25%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 220,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 0,
    equipCost: 14,
    id: 896400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896400.png",
    name: "バスケ部(助っ人)",
    rawName: "バスケ部(助っ人)",
    specialEffects: [
      {
        rawText: "[風属性専用]魔法攻撃ダメージが10%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 1,
    equipCost: 28,
    id: 896401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896400.png",
    name: "バスケ部(助っ人)",
    rawName: "バスケ部(助っ人)+",
    specialEffects: [
      {
        rawText: "[風属性専用]魔法攻撃ダメージが17%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "wind",
    enhancementsNum: 2,
    equipCost: 42,
    id: 896402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896400.png",
    name: "バスケ部(助っ人)",
    rawName: "バスケ部(助っ人)++",
    specialEffects: [
      {
        rawText: "[風属性専用]魔法攻撃ダメージが25%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 220,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 0,
    equipCost: 12,
    id: 896500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896500.png",
    name: "YT-KGM 800Y L",
    rawName: "YT-KGM 800Y L",
    specialEffects: [
      {
        rawText:
          "[光属性専用]光属性パネルによる攻撃・回復ASの威力を5%強化する。",
      },
    ],
    statuses: {
      hp: 60,
      magicAtk: 58,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 1,
    equipCost: 21,
    id: 896501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896500.png",
    name: "YT-KGM 800Y L",
    rawName: "YT-KGM 800Y L+",
    specialEffects: [
      {
        rawText:
          "[光属性専用]光属性パネルによる攻撃・回復ASの威力を10%強化する。",
      },
    ],
    statuses: {
      hp: 127,
      magicAtk: 110,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "light",
    enhancementsNum: 2,
    equipCost: 30,
    id: 896502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896500.png",
    name: "YT-KGM 800Y L",
    rawName: "YT-KGM 800Y L++",
    specialEffects: [
      {
        rawText:
          "[光属性専用]光属性パネルによる攻撃・回復ASの威力を15%強化する。",
      },
    ],
    statuses: {
      hp: 194,
      magicAtk: 162,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 896600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896600.png",
    name: "YT-KGM 500Y",
    rawName: "YT-KGM 500Y",
    specialEffects: [
      {
        rawText: "光属性パネルによる攻撃・回復ASの威力を5%強化する。",
      },
    ],
    statuses: {
      hp: 50,
      magicAtk: 46,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 896601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896600.png",
    name: "YT-KGM 500Y",
    rawName: "YT-KGM 500Y+",
    specialEffects: [
      {
        rawText: "光属性パネルによる攻撃・回復ASの威力を10%強化する。",
      },
    ],
    statuses: {
      hp: 104,
      magicAtk: 93,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 896602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896600.png",
    name: "YT-KGM 500Y",
    rawName: "YT-KGM 500Y++",
    specialEffects: [
      {
        rawText: "光属性パネルによる攻撃・回復ASの威力を15%強化する。",
      },
    ],
    statuses: {
      hp: 158,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 15,
    id: 896700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896700.png",
    name: "スターダストギフト",
    rawName: "スターダストギフト",
    specialEffects: [
      {
        rawText: "[水属性専用]クリティカル率が12%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 56,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 30,
    id: 896701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896700.png",
    name: "スターダストギフト",
    rawName: "スターダストギフト+",
    specialEffects: [
      {
        rawText: "[水属性専用]クリティカル率が24%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 119,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 45,
    id: 896702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896700.png",
    name: "スターダストギフト",
    rawName: "スターダストギフト++",
    specialEffects: [
      {
        rawText: "[水属性専用]クリティカル率が35%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 182,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 896800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896800.png",
    name: "スノーマンギフト",
    rawName: "スノーマンギフト",
    specialEffects: [
      {
        rawText: "クリティカル率が10%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 48,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 24,
    id: 896801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896800.png",
    name: "スノーマンギフト",
    rawName: "スノーマンギフト+",
    specialEffects: [
      {
        rawText: "クリティカル率が17%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 104,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 36,
    id: 896802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896800.png",
    name: "スノーマンギフト",
    rawName: "スノーマンギフト++",
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 160,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 22,
    id: 896900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
    name: "鬼灯鼻・じゅんろく",
    rawName: "鬼灯鼻・じゅんろく",
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 43,
    id: 896901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
    name: "鬼灯鼻・じゅんろく",
    rawName: "鬼灯鼻・じゅんろく+",
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 173,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 64,
    id: 896902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
    name: "鬼灯鼻・じゅんろく",
    rawName: "鬼灯鼻・じゅんろく++",
    specialEffects: [
      {
        rawText: "クリティカル率が35%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 258,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 0,
    equipCost: 15,
    id: 897000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897000.png",
    name: "至高のおせち",
    rawName: "至高のおせち",
    specialEffects: [
      {
        rawText: "[闇属性専用]物理攻撃ダメージが10%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 55,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 1,
    equipCost: 30,
    id: 897001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897000.png",
    name: "至高のおせち",
    rawName: "至高のおせち+",
    specialEffects: [
      {
        rawText: "[闇属性専用]物理攻撃ダメージが20%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 117,
      physicalDef: 0,
    },
  },
  {
    attribute: "darkness",
    enhancementsNum: 2,
    equipCost: 45,
    id: 897002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897000.png",
    name: "至高のおせち",
    rawName: "至高のおせち++",
    specialEffects: [
      {
        rawText: "[闇属性専用]物理攻撃ダメージが30%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 179,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 897100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897100.png",
    name: "究極の寿司",
    rawName: "究極の寿司",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが7%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 46,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 24,
    id: 897101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897100.png",
    name: "究極の寿司",
    rawName: "究極の寿司+",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが14%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 101,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 36,
    id: 897102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897100.png",
    name: "究極の寿司",
    rawName: "究極の寿司++",
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが20%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 156,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 23,
    id: 897200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897200.png",
    name: "くまるま＆うさるま",
    rawName: "くまるま＆うさるま",
    specialEffects: [
      {
        rawText: "ブロック確率が15%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 91,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 897201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897200.png",
    name: "くまるま＆うさるま",
    rawName: "くまるま＆うさるま+",
    specialEffects: [
      {
        rawText: "ブロック確率が27%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 181,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 67,
    id: 897202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897200.png",
    name: "くまるま＆うさるま",
    rawName: "くまるま＆うさるま++",
    specialEffects: [
      {
        rawText: "ブロック確率が40%上昇する。",
      },
    ],
    statuses: {
      hp: 0,
      magicAtk: 271,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 12,
    id: 897300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897300.png",
    name: "天釣打神鞭",
    rawName: "天釣打神鞭",
    specialEffects: [
      {
        rawText: "水属性パネルによる攻撃・回復ASの威力を5%強化する。",
      },
    ],
    statuses: {
      hp: 50,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 46,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 21,
    id: 897301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897300.png",
    name: "天釣打神鞭",
    rawName: "天釣打神鞭+",
    specialEffects: [
      {
        rawText: "水属性パネルによる攻撃・回復ASの威力を10%強化する。",
      },
    ],
    statuses: {
      hp: 104,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 93,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 30,
    id: 897302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897300.png",
    name: "天釣打神鞭",
    rawName: "天釣打神鞭++",
    specialEffects: [
      {
        rawText: "水属性パネルによる攻撃・回復ASの威力を15%強化する。",
      },
    ],
    statuses: {
      hp: 158,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 140,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 0,
    equipCost: 12,
    id: 897400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897400.png",
    name: "海穿打神鞭",
    rawName: "海穿打神鞭",
    specialEffects: [
      {
        rawText:
          "[水属性専用]水属性パネルによる攻撃・回復ASの威力を5%強化する。",
      },
    ],
    statuses: {
      hp: 60,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 58,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 1,
    equipCost: 21,
    id: 897401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897400.png",
    name: "海穿打神鞭",
    rawName: "海穿打神鞭+",
    specialEffects: [
      {
        rawText:
          "[水属性専用]水属性パネルによる攻撃・回復ASの威力を10%強化する。",
      },
    ],
    statuses: {
      hp: 127,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 110,
      physicalDef: 0,
    },
  },
  {
    attribute: "water",
    enhancementsNum: 2,
    equipCost: 30,
    id: 897402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/897400.png",
    name: "海穿打神鞭",
    rawName: "海穿打神鞭++",
    specialEffects: [
      {
        rawText:
          "[水属性専用]水属性パネルによる攻撃・回復ASの威力を15%強化する。",
      },
    ],
    statuses: {
      hp: 194,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 162,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 950000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
    name: "ヴィブロブレード",
    rawName: "ヴィブロブレード",
    specialEffects: [],
    statuses: {
      hp: 30,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 48,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 15,
    id: 950001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
    name: "ヴィブロブレード",
    rawName: "ヴィブロブレード+",
    specialEffects: [],
    statuses: {
      hp: 60,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 96,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 20,
    id: 950002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
    name: "ヴィブロブレード",
    rawName: "ヴィブロブレード++",
    specialEffects: [],
    statuses: {
      hp: 90,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 144,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 950100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950100.png",
    name: "デスサイズ",
    rawName: "デスサイズ",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 12,
      magicDef: 0,
      physicalAtk: 48,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 15,
    id: 950101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950100.png",
    name: "デスサイズ",
    rawName: "デスサイズ+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 24,
      magicDef: 0,
      physicalAtk: 96,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 20,
    id: 950102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950100.png",
    name: "デスサイズ",
    rawName: "デスサイズ++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 144,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 950200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950200.png",
    name: "パペットシアター",
    rawName: "パペットシアター",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 48,
      magicDef: 0,
      physicalAtk: 12,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 15,
    id: 950201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950200.png",
    name: "パペットシアター",
    rawName: "パペットシアター+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 96,
      magicDef: 0,
      physicalAtk: 24,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 20,
    id: 950202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950200.png",
    name: "パペットシアター",
    rawName: "パペットシアター++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 144,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 22,
    id: 950300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950300.png",
    name: "村雨",
    rawName: "村雨",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 130,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 32,
    id: 950301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950300.png",
    name: "村雨",
    rawName: "村雨+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 200,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 40,
    id: 950302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950300.png",
    name: "村雨",
    rawName: "村雨++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 270,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 950400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950400.png",
    name: "センターマイク",
    rawName: "センターマイク",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 54,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 15,
    id: 950401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950400.png",
    name: "センターマイク",
    rawName: "センターマイク+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 108,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 20,
    id: 950402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950400.png",
    name: "センターマイク",
    rawName: "センターマイク++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 162,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 950500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950500.png",
    name: "クリスタルリーパー",
    rawName: "クリスタルリーパー",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 54,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 15,
    id: 950501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950500.png",
    name: "クリスタルリーパー",
    rawName: "クリスタルリーパー+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 108,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 20,
    id: 950502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950500.png",
    name: "クリスタルリーパー",
    rawName: "クリスタルリーパー++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 162,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 22,
    id: 950600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950600.png",
    name: "フェアリーグレイス",
    rawName: "フェアリーグレイス",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 130,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 32,
    id: 950601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950600.png",
    name: "フェアリーグレイス",
    rawName: "フェアリーグレイス+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 200,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 40,
    id: 950602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950600.png",
    name: "フェアリーグレイス",
    rawName: "フェアリーグレイス++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 270,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 30,
    id: 950700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950700.png",
    name: "劫火ノ槍",
    rawName: "劫火ノ槍",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 135,
      physicalDef: 100,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 950701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950700.png",
    name: "劫火ノ槍",
    rawName: "劫火ノ槍+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 203,
      physicalDef: 150,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 60,
    id: 950702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950700.png",
    name: "劫火ノ槍",
    rawName: "劫火ノ槍++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 270,
      physicalDef: 200,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 30,
    id: 950800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950800.png",
    name: "流水ノ双剣",
    rawName: "流水ノ双剣",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 100,
      physicalAtk: 135,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 950801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950800.png",
    name: "流水ノ双剣",
    rawName: "流水ノ双剣+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 150,
      physicalAtk: 203,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 60,
    id: 950802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950800.png",
    name: "流水ノ双剣",
    rawName: "流水ノ双剣++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 200,
      physicalAtk: 270,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 30,
    id: 950900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950900.png",
    name: "旧式端末",
    rawName: "旧式端末",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 135,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 100,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 950901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950900.png",
    name: "旧式端末",
    rawName: "旧式端末+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 203,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 150,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 60,
    id: 950902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950900.png",
    name: "旧式端末",
    rawName: "旧式端末++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 270,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 200,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 30,
    id: 951100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951100.png",
    name: "宵闇ノ書",
    rawName: "宵闇ノ書",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 135,
      magicDef: 100,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 951101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951100.png",
    name: "宵闇ノ書",
    rawName: "宵闇ノ書+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 203,
      magicDef: 150,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 60,
    id: 951102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951100.png",
    name: "宵闇ノ書",
    rawName: "宵闇ノ書++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 270,
      magicDef: 200,
      physicalAtk: 0,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 7,
    id: 951200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951200.png",
    name: "プルガトリオ",
    rawName: "プルガトリオ",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 40,
      magicDef: 0,
      physicalAtk: 40,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 11,
    id: 951201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951200.png",
    name: "プルガトリオ",
    rawName: "プルガトリオ+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 80,
      magicDef: 0,
      physicalAtk: 80,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 15,
    id: 951202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951200.png",
    name: "プルガトリオ",
    rawName: "プルガトリオ++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 30,
    id: 951300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951300.png",
    name: "旧式写真機",
    rawName: "旧式写真機",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 120,
      magicDef: 75,
      physicalAtk: 120,
      physicalDef: 75,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 45,
    id: 951301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951300.png",
    name: "旧式写真機",
    rawName: "旧式写真機+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 180,
      magicDef: 113,
      physicalAtk: 180,
      physicalDef: 113,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 60,
    id: 951302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951300.png",
    name: "旧式写真機",
    rawName: "旧式写真機++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 240,
      magicDef: 150,
      physicalAtk: 240,
      physicalDef: 150,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 13,
    id: 951400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951400.png",
    name: "忘竜の献花",
    rawName: "忘竜の献花",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 23,
    id: 951401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951400.png",
    name: "忘竜の献花",
    rawName: "忘竜の献花+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 158,
      magicDef: 0,
      physicalAtk: 158,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 33,
    id: 951402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951400.png",
    name: "忘竜の献花",
    rawName: "忘竜の献花++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 243,
      magicDef: 0,
      physicalAtk: 243,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 10,
    id: 951500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951500.png",
    name: "赤誠の情剣",
    rawName: "赤誠の情剣",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 56,
      magicDef: 0,
      physicalAtk: 56,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 17,
    id: 951501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951500.png",
    name: "赤誠の情剣",
    rawName: "赤誠の情剣+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 24,
    id: 951502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951500.png",
    name: "赤誠の情剣",
    rawName: "赤誠の情剣++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 184,
      magicDef: 0,
      physicalAtk: 184,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 0,
    equipCost: 25,
    id: 951600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
    name: "傲慢のアラーニェ",
    rawName: "傲慢のアラーニェ",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 140,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 1,
    equipCost: 38,
    id: 951601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
    name: "傲慢のアラーニェ",
    rawName: "傲慢のアラーニェ+",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 233,
      magicDef: 0,
      physicalAtk: 233,
      physicalDef: 0,
    },
  },
  {
    attribute: "void",
    enhancementsNum: 2,
    equipCost: 51,
    id: 951602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
    name: "傲慢のアラーニェ",
    rawName: "傲慢のアラーニェ++",
    specialEffects: [],
    statuses: {
      hp: 0,
      magicAtk: 326,
      magicDef: 0,
      physicalAtk: 326,
      physicalDef: 0,
    },
  },
] as CastAny
