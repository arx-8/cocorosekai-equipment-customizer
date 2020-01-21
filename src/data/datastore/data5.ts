import { Equipment } from "src/domain/model/Equipment"
import { CastAny } from "src/types/tsUtils"

export const data5: Equipment[] = [
  {
    id: 890000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890000.png",
    equipCost: 12,
    name: "羊飼いの杖",
    rawName: "羊飼いの杖",
    enhancementsNum: 0,
    attribute: "light",
    statuses: {
      hp: 72,
      magicAtk: 43,
      magicDef: 0,
      physicalAtk: 14,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 890001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890000.png",
    equipCost: 21,
    name: "羊飼いの杖",
    rawName: "羊飼いの杖+",
    enhancementsNum: 1,
    attribute: "light",
    statuses: {
      hp: 146,
      magicAtk: 88,
      magicDef: 0,
      physicalAtk: 29,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 890002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890000.png",
    equipCost: 30,
    name: "羊飼いの杖",
    rawName: "羊飼いの杖++",
    enhancementsNum: 2,
    attribute: "light",
    statuses: {
      hp: 222,
      magicAtk: 133,
      magicDef: 0,
      physicalAtk: 44,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 890100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890100.png",
    equipCost: 12,
    name: "ウールステッキ",
    rawName: "ウールステッキ",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 60,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 12,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 890101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890100.png",
    equipCost: 21,
    name: "ウールステッキ",
    rawName: "ウールステッキ+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 122,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 24,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 890102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890100.png",
    equipCost: 30,
    name: "ウールステッキ",
    rawName: "ウールステッキ++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 185,
      magicAtk: 111,
      magicDef: 0,
      physicalAtk: 37,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 890200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890200.png",
    equipCost: 12,
    name: "ウィングスタッフ",
    rawName: "ウィングスタッフ",
    enhancementsNum: 0,
    attribute: "wind",
    statuses: {
      hp: 0,
      magicAtk: 58,
      magicDef: 0,
      physicalAtk: 14,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「眠り」を40%の確率で無効化する",
      },
    ],
  },
  {
    id: 890201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890200.png",
    equipCost: 21,
    name: "ウィングスタッフ",
    rawName: "ウィングスタッフ+",
    enhancementsNum: 1,
    attribute: "wind",
    statuses: {
      hp: 0,
      magicAtk: 117,
      magicDef: 0,
      physicalAtk: 29,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「眠り」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 890202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890200.png",
    equipCost: 30,
    name: "ウィングスタッフ",
    rawName: "ウィングスタッフ++",
    enhancementsNum: 2,
    attribute: "wind",
    statuses: {
      hp: 0,
      magicAtk: 178,
      magicDef: 0,
      physicalAtk: 44,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「眠り」を80%の確率で無効化する",
      },
    ],
  },
  {
    id: 890300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890300.png",
    equipCost: 12,
    name: "ブルームゲート",
    rawName: "ブルームゲート",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 48,
      magicDef: 0,
      physicalAtk: 12,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「眠り」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 890301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890300.png",
    equipCost: 21,
    name: "ブルームゲート",
    rawName: "ブルームゲート+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 98,
      magicDef: 0,
      physicalAtk: 24,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「眠り」を45%の確率で無効化する",
      },
    ],
  },
  {
    id: 890302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890300.png",
    equipCost: 30,
    name: "ブルームゲート",
    rawName: "ブルームゲート++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 148,
      magicDef: 0,
      physicalAtk: 37,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「眠り」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 890400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890400.png",
    equipCost: 12,
    name: "アイスソード",
    rawName: "アイスソード",
    enhancementsNum: 0,
    attribute: "water",
    statuses: {
      hp: 72,
      magicAtk: 14,
      magicDef: 0,
      physicalAtk: 43,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 890401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890400.png",
    equipCost: 21,
    name: "アイスソード",
    rawName: "アイスソード+",
    enhancementsNum: 1,
    attribute: "water",
    statuses: {
      hp: 146,
      magicAtk: 29,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 890402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890400.png",
    equipCost: 30,
    name: "アイスソード",
    rawName: "アイスソード++",
    enhancementsNum: 2,
    attribute: "water",
    statuses: {
      hp: 222,
      magicAtk: 44,
      magicDef: 0,
      physicalAtk: 133,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 890500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890500.png",
    equipCost: 12,
    name: "ライトガントレット",
    rawName: "ライトガントレット",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 60,
      magicAtk: 12,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 890501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890500.png",
    equipCost: 21,
    name: "ライトガントレット",
    rawName: "ライトガントレット+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 122,
      magicAtk: 24,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 890502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890500.png",
    equipCost: 30,
    name: "ライトガントレット",
    rawName: "ライトガントレット++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 185,
      magicAtk: 37,
      magicDef: 0,
      physicalAtk: 111,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 890600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890600.png",
    equipCost: 10,
    name: "ラピッドスクゥアー",
    rawName: "ラピッドスクゥアー",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が5%上昇する",
      },
    ],
  },
  {
    id: 890601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890600.png",
    equipCost: 19,
    name: "ラピッドスクゥアー",
    rawName: "ラピッドスクゥアー+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 70,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が10%上昇する",
      },
    ],
  },
  {
    id: 890602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890600.png",
    equipCost: 28,
    name: "ラピッドスクゥアー",
    rawName: "ラピッドスクゥアー++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 105,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
  },
  {
    id: 890700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890700.png",
    equipCost: 10,
    name: "パラレルパラソル",
    rawName: "パラレルパラソル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 35,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が5%上昇する",
      },
    ],
  },
  {
    id: 890701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890700.png",
    equipCost: 19,
    name: "パラレルパラソル",
    rawName: "パラレルパラソル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 70,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が10%上昇する",
      },
    ],
  },
  {
    id: 890702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890700.png",
    equipCost: 28,
    name: "パラレルパラソル",
    rawName: "パラレルパラソル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 105,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
  },
  {
    id: 890800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890800.png",
    equipCost: 13,
    name: "サンライトショット",
    rawName: "サンライトショット",
    enhancementsNum: 0,
    attribute: "light",
    statuses: {
      hp: 0,
      magicAtk: 70,
      magicDef: 0,
      physicalAtk: 70,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性限定]クリティカル率が10%上昇する",
      },
    ],
  },
  {
    id: 890801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890800.png",
    equipCost: 23,
    name: "サンライトショット",
    rawName: "サンライトショット+",
    enhancementsNum: 1,
    attribute: "light",
    statuses: {
      hp: 0,
      magicAtk: 125,
      magicDef: 0,
      physicalAtk: 125,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性限定]クリティカル率が15%上昇する",
      },
    ],
  },
  {
    id: 890802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890800.png",
    equipCost: 33,
    name: "サンライトショット",
    rawName: "サンライトショット++",
    enhancementsNum: 2,
    attribute: "light",
    statuses: {
      hp: 0,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性限定]クリティカル率が20%上昇する",
      },
    ],
  },
  {
    id: 890900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890900.png",
    equipCost: 12,
    name: "水晶の杖",
    rawName: "水晶の杖",
    enhancementsNum: 0,
    attribute: "fire",
    statuses: {
      hp: 66,
      magicAtk: 44,
      magicDef: 0,
      physicalAtk: 13,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]状態異常「幻惑」を40%の確率で無効化する",
      },
    ],
  },
  {
    id: 890901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890900.png",
    equipCost: 21,
    name: "水晶の杖",
    rawName: "水晶の杖+",
    enhancementsNum: 1,
    attribute: "fire",
    statuses: {
      hp: 140,
      magicAtk: 91,
      magicDef: 0,
      physicalAtk: 28,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]状態異常「幻惑」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 890902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/890900.png",
    equipCost: 30,
    name: "水晶の杖",
    rawName: "水晶の杖++",
    enhancementsNum: 2,
    attribute: "fire",
    statuses: {
      hp: 204,
      magicAtk: 137,
      magicDef: 0,
      physicalAtk: 42,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]状態異常「幻惑」を80%の確率で無効化する",
      },
    ],
  },
  {
    id: 891000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891000.png",
    equipCost: 12,
    name: "クラックゲート",
    rawName: "クラックゲート",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 54,
      magicAtk: 37,
      magicDef: 0,
      physicalAtk: 11,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 891001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891000.png",
    equipCost: 21,
    name: "クラックゲート",
    rawName: "クラックゲート+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 116,
      magicAtk: 76,
      magicDef: 0,
      physicalAtk: 23,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を45%の確率で無効化する",
      },
    ],
  },
  {
    id: 891002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891000.png",
    equipCost: 30,
    name: "クラックゲート",
    rawName: "クラックゲート++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 167,
      magicAtk: 115,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 891100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891100.png",
    equipCost: 24,
    name: "無極の手甲",
    rawName: "無極の手甲",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 220,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 85,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック率が15%上昇する",
      },
    ],
  },
  {
    id: 891101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891100.png",
    equipCost: 44,
    name: "無極の手甲",
    rawName: "無極の手甲+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 420,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 155,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック率が27%上昇する",
      },
    ],
  },
  {
    id: 891102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891100.png",
    equipCost: 64,
    name: "無極の手甲",
    rawName: "無極の手甲++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 620,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 225,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック率が40%上昇する",
      },
    ],
  },
  {
    id: 891300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891300.png",
    equipCost: 22,
    name: "凶眼の竜玉",
    rawName: "凶眼の竜玉",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 200,
      magicAtk: 80,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 891301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891300.png",
    equipCost: 42,
    name: "凶眼の竜玉",
    rawName: "凶眼の竜玉+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 400,
      magicAtk: 150,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが20%上昇する",
      },
    ],
  },
  {
    id: 891302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891300.png",
    equipCost: 62,
    name: "凶眼の竜玉",
    rawName: "凶眼の竜玉++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 600,
      magicAtk: 220,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが30%上昇する",
      },
    ],
  },
  {
    id: 891500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891500.png",
    equipCost: 14,
    name: "パニッシュメント",
    rawName: "パニッシュメント",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 50,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが5%上昇する",
      },
    ],
  },
  {
    id: 891501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891500.png",
    equipCost: 23,
    name: "パニッシュメント",
    rawName: "パニッシュメント+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 85,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 891502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891500.png",
    equipCost: 32,
    name: "パニッシュメント",
    rawName: "パニッシュメント++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが15%上昇する",
      },
    ],
  },
  {
    id: 891600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891600.png",
    equipCost: 17,
    name: "エクセキューション",
    rawName: "エクセキューション",
    enhancementsNum: 0,
    attribute: "darkness",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 80,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性限定]物理攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 891601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891600.png",
    equipCost: 27,
    name: "エクセキューション",
    rawName: "エクセキューション+",
    enhancementsNum: 1,
    attribute: "darkness",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 135,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性限定]物理攻撃ダメージが15%上昇する",
      },
    ],
  },
  {
    id: 891602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891600.png",
    equipCost: 37,
    name: "エクセキューション",
    rawName: "エクセキューション++",
    enhancementsNum: 2,
    attribute: "darkness",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 190,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性限定]物理攻撃ダメージが20%上昇する",
      },
    ],
  },
  {
    id: 891700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891700.png",
    equipCost: 23,
    name: "双翼の氷晶",
    rawName: "双翼の氷晶",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 210,
      magicAtk: 82,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
  },
  {
    id: 891701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891700.png",
    equipCost: 43,
    name: "双翼の氷晶",
    rawName: "双翼の氷晶+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 410,
      magicAtk: 152,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する",
      },
    ],
  },
  {
    id: 891702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891700.png",
    equipCost: 63,
    name: "双翼の氷晶",
    rawName: "双翼の氷晶++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 610,
      magicAtk: 222,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が35%上昇する",
      },
    ],
  },
  {
    id: 891900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891900.png",
    equipCost: 19,
    name: "イビルアイ・ランス",
    rawName: "イビルアイ・ランス",
    enhancementsNum: 0,
    attribute: "darkness",
    statuses: {
      hp: 190,
      magicAtk: 70,
      magicDef: 0,
      physicalAtk: 70,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]クリティカル率が10%上昇する",
      },
    ],
  },
  {
    id: 891901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891900.png",
    equipCost: 36,
    name: "イビルアイ・ランス",
    rawName: "イビルアイ・ランス+",
    enhancementsNum: 1,
    attribute: "darkness",
    statuses: {
      hp: 365,
      magicAtk: 134,
      magicDef: 0,
      physicalAtk: 134,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]クリティカル率が20%上昇する",
      },
    ],
  },
  {
    id: 891902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/891900.png",
    equipCost: 53,
    name: "イビルアイ・ランス",
    rawName: "イビルアイ・ランス++",
    enhancementsNum: 2,
    attribute: "darkness",
    statuses: {
      hp: 540,
      magicAtk: 198,
      magicDef: 0,
      physicalAtk: 198,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]クリティカル率が30%上昇する",
      },
    ],
  },
  {
    id: 892000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892000.png",
    equipCost: 12,
    name: "ブロンズソウル",
    rawName: "ブロンズソウル",
    enhancementsNum: 0,
    attribute: "darkness",
    statuses: {
      hp: 62,
      magicAtk: 12,
      magicDef: 0,
      physicalAtk: 49,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 892001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892000.png",
    equipCost: 21,
    name: "ブロンズソウル",
    rawName: "ブロンズソウル+",
    enhancementsNum: 1,
    attribute: "darkness",
    statuses: {
      hp: 135,
      magicAtk: 24,
      magicDef: 0,
      physicalAtk: 98,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 892002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892000.png",
    equipCost: 30,
    name: "ブロンズソウル",
    rawName: "ブロンズソウル++",
    enhancementsNum: 2,
    attribute: "darkness",
    statuses: {
      hp: 198,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 147,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 892100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892100.png",
    equipCost: 12,
    name: "アイアンハート",
    rawName: "アイアンハート",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 48,
      magicAtk: 10,
      magicDef: 0,
      physicalAtk: 40,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 892101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892100.png",
    equipCost: 21,
    name: "アイアンハート",
    rawName: "アイアンハート+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 112,
      magicAtk: 20,
      magicDef: 0,
      physicalAtk: 82,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 892102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892100.png",
    equipCost: 30,
    name: "アイアンハート",
    rawName: "アイアンハート++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 160,
      magicAtk: 30,
      magicDef: 0,
      physicalAtk: 124,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 892200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892200.png",
    equipCost: 18,
    name: "ブラックボックス",
    rawName: "ブラックボックス",
    enhancementsNum: 0,
    attribute: "fire",
    statuses: {
      hp: 180,
      magicAtk: 66,
      magicDef: 0,
      physicalAtk: 66,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]物理・魔法攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 892201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892200.png",
    equipCost: 35,
    name: "ブラックボックス",
    rawName: "ブラックボックス+",
    enhancementsNum: 1,
    attribute: "fire",
    statuses: {
      hp: 355,
      magicAtk: 130,
      magicDef: 0,
      physicalAtk: 130,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]物理・魔法攻撃ダメージが18%上昇する",
      },
    ],
  },
  {
    id: 892202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892200.png",
    equipCost: 52,
    name: "ブラックボックス",
    rawName: "ブラックボックス++",
    enhancementsNum: 2,
    attribute: "fire",
    statuses: {
      hp: 530,
      magicAtk: 194,
      magicDef: 0,
      physicalAtk: 194,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]物理・魔法攻撃ダメージが25%上昇する",
      },
    ],
  },
  {
    id: 892300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892300.png",
    equipCost: 10,
    name: "聖樹の木剣",
    rawName: "聖樹の木剣",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 70,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 30,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 892301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892300.png",
    equipCost: 19,
    name: "聖樹の木剣",
    rawName: "聖樹の木剣+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 135,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 62,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を45%の確率で無効化する",
      },
    ],
  },
  {
    id: 892302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892300.png",
    equipCost: 28,
    name: "聖樹の木剣",
    rawName: "聖樹の木剣++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 200,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 94,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「幻惑」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 892400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892400.png",
    equipCost: 16,
    name: "パルス・ブラスター",
    rawName: "パルス・ブラスター",
    enhancementsNum: 0,
    attribute: "wind",
    statuses: {
      hp: 160,
      magicAtk: 59,
      magicDef: 0,
      physicalAtk: 59,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]物理・魔法攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 892401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892400.png",
    equipCost: 33,
    name: "パルス・ブラスター",
    rawName: "パルス・ブラスター+",
    enhancementsNum: 1,
    attribute: "wind",
    statuses: {
      hp: 335,
      magicAtk: 122,
      magicDef: 0,
      physicalAtk: 122,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]物理・魔法攻撃ダメージが18%上昇する",
      },
    ],
  },
  {
    id: 892402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892400.png",
    equipCost: 50,
    name: "パルス・ブラスター",
    rawName: "パルス・ブラスター++",
    enhancementsNum: 2,
    attribute: "wind",
    statuses: {
      hp: 510,
      magicAtk: 185,
      magicDef: 0,
      physicalAtk: 185,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]物理・魔法攻撃ダメージが25%上昇する",
      },
    ],
  },
  {
    id: 892500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892500.png",
    equipCost: 21,
    name: "金獣の大槌",
    rawName: "金獣の大槌",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 190,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 76,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する",
      },
    ],
  },
  {
    id: 892501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892500.png",
    equipCost: 41,
    name: "金獣の大槌",
    rawName: "金獣の大槌+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 390,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 146,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する",
      },
    ],
  },
  {
    id: 892502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892500.png",
    equipCost: 61,
    name: "金獣の大槌",
    rawName: "金獣の大槌++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 590,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 216,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が35%上昇する",
      },
    ],
  },
  {
    id: 892700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892700.png",
    equipCost: 10,
    name: "クマホ明神",
    rawName: "クマホ明神",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 70,
      magicAtk: 30,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「行動不能」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 892701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892700.png",
    equipCost: 19,
    name: "クマホ明神",
    rawName: "クマホ明神+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 135,
      magicAtk: 62,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「行動不能」を45%の確率で無効化する",
      },
    ],
  },
  {
    id: 892702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892700.png",
    equipCost: 28,
    name: "クマホ明神",
    rawName: "クマホ明神++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 200,
      magicAtk: 94,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「行動不能」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 892800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892800.png",
    equipCost: 15,
    name: "神依木の木剣",
    rawName: "神依木の木剣",
    enhancementsNum: 0,
    attribute: "darkness",
    statuses: {
      hp: 110,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 55,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]状態異常「幻惑」を50%の確率で無効化する",
      },
    ],
  },
  {
    id: 892801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892800.png",
    equipCost: 24,
    name: "神依木の木剣",
    rawName: "神依木の木剣+",
    enhancementsNum: 1,
    attribute: "darkness",
    statuses: {
      hp: 190,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 97,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]状態異常「幻惑」を75%の確率で無効化する",
      },
    ],
  },
  {
    id: 892802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892800.png",
    equipCost: 33,
    name: "神依木の木剣",
    rawName: "神依木の木剣++",
    enhancementsNum: 2,
    attribute: "darkness",
    statuses: {
      hp: 270,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 140,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]状態異常「幻惑」を100%の確率で無効化する",
      },
    ],
  },
  {
    id: 892900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892900.png",
    equipCost: 15,
    name: "クマホ大明神",
    rawName: "クマホ大明神",
    enhancementsNum: 0,
    attribute: "wind",
    statuses: {
      hp: 110,
      magicAtk: 55,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「行動不能」を50%の確率で無効化する",
      },
    ],
  },
  {
    id: 892901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892900.png",
    equipCost: 24,
    name: "クマホ大明神",
    rawName: "クマホ大明神+",
    enhancementsNum: 1,
    attribute: "wind",
    statuses: {
      hp: 190,
      magicAtk: 97,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「行動不能」を75%の確率で無効化する",
      },
    ],
  },
  {
    id: 892902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/892900.png",
    equipCost: 33,
    name: "クマホ大明神",
    rawName: "クマホ大明神++",
    enhancementsNum: 2,
    attribute: "wind",
    statuses: {
      hp: 270,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「行動不能」を100%の確率で無効化する",
      },
    ],
  },
  {
    id: 893000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893000.png",
    equipCost: 17,
    name: "クルーエルワンド",
    rawName: "クルーエルワンド",
    enhancementsNum: 0,
    attribute: "water",
    statuses: {
      hp: 170,
      magicAtk: 63,
      magicDef: 0,
      physicalAtk: 63,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]物理・魔法攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 893001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893000.png",
    equipCost: 34,
    name: "クルーエルワンド",
    rawName: "クルーエルワンド+",
    enhancementsNum: 1,
    attribute: "water",
    statuses: {
      hp: 345,
      magicAtk: 126,
      magicDef: 0,
      physicalAtk: 126,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]物理・魔法攻撃ダメージが18%上昇する",
      },
    ],
  },
  {
    id: 893002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893000.png",
    equipCost: 51,
    name: "クルーエルワンド",
    rawName: "クルーエルワンド++",
    enhancementsNum: 2,
    attribute: "water",
    statuses: {
      hp: 520,
      magicAtk: 190,
      magicDef: 0,
      physicalAtk: 190,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]物理・魔法攻撃ダメージが25%上昇する",
      },
    ],
  },
  {
    id: 893100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893100.png",
    equipCost: 12,
    name: "テオス・クシフォス",
    rawName: "テオス・クシフォス",
    enhancementsNum: 0,
    attribute: "light",
    statuses: {
      hp: 102,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 40,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]状態異常「眠り」を40%の確率で無効化する",
      },
    ],
  },
  {
    id: 893101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893100.png",
    equipCost: 21,
    name: "テオス・クシフォス",
    rawName: "テオス・クシフォス+",
    enhancementsNum: 1,
    attribute: "light",
    statuses: {
      hp: 191,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]状態異常「眠り」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 893102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893100.png",
    equipCost: 30,
    name: "テオス・クシフォス",
    rawName: "テオス・クシフォス++",
    enhancementsNum: 2,
    attribute: "light",
    statuses: {
      hp: 280,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 136,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]状態異常「眠り」を80%の確率で無効化する",
      },
    ],
  },
  {
    id: 893200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893200.png",
    equipCost: 12,
    name: "鞘より抜かれし剣",
    rawName: "鞘より抜かれし剣",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 81,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 34,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「眠り」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 893201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893200.png",
    equipCost: 21,
    name: "鞘より抜かれし剣",
    rawName: "鞘より抜かれし剣+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 157,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 72,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「眠り」を45%の確率で無効化する",
      },
    ],
  },
  {
    id: 893202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893200.png",
    equipCost: 30,
    name: "鞘より抜かれし剣",
    rawName: "鞘より抜かれし剣++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 233,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 110,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「眠り」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 893300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893300.png",
    equipCost: 12,
    name: "機槍ハーメルン",
    rawName: "機槍ハーメルン",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 38,
      magicDef: 0,
      physicalAtk: 38,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理・魔法攻撃ダメージを3%軽減する",
      },
    ],
  },
  {
    id: 893301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893300.png",
    equipCost: 22,
    name: "機槍ハーメルン",
    rawName: "機槍ハーメルン+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 88,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理・魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 893302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893300.png",
    equipCost: 32,
    name: "機槍ハーメルン",
    rawName: "機槍ハーメルン++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 138,
      magicDef: 0,
      physicalAtk: 138,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理・魔法攻撃ダメージを8%軽減する",
      },
    ],
  },
  {
    id: 893400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893400.png",
    equipCost: 12,
    name: "肉まんおばけ",
    rawName: "肉まんおばけ",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が8%上昇する",
      },
    ],
  },
  {
    id: 893401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893400.png",
    equipCost: 23,
    name: "肉まんおばけ",
    rawName: "肉まんおばけ+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 80,
      magicDef: 0,
      physicalAtk: 80,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が14%上昇する",
      },
    ],
  },
  {
    id: 893402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893400.png",
    equipCost: 34,
    name: "肉まんおばけ",
    rawName: "肉まんおばけ++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 124,
      magicDef: 0,
      physicalAtk: 124,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が20%上昇する",
      },
    ],
  },
  {
    id: 893500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893500.png",
    equipCost: 14,
    name: "上杉家のカレー",
    rawName: "上杉家のカレー",
    enhancementsNum: 0,
    attribute: "fire",
    statuses: {
      hp: 0,
      magicAtk: 50,
      magicDef: 0,
      physicalAtk: 50,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]クリティカル率が11%上昇する",
      },
    ],
  },
  {
    id: 893501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893500.png",
    equipCost: 26,
    name: "上杉家のカレー",
    rawName: "上杉家のカレー+",
    enhancementsNum: 1,
    attribute: "fire",
    statuses: {
      hp: 0,
      magicAtk: 107,
      magicDef: 0,
      physicalAtk: 107,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]クリティカル率が18%上昇する",
      },
    ],
  },
  {
    id: 893502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893500.png",
    equipCost: 38,
    name: "上杉家のカレー",
    rawName: "上杉家のカレー++",
    enhancementsNum: 2,
    attribute: "fire",
    statuses: {
      hp: 0,
      magicAtk: 164,
      magicDef: 0,
      physicalAtk: 164,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]クリティカル率が25%上昇する",
      },
    ],
  },
  {
    id: 893600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893600.png",
    equipCost: 20,
    name: "混沌の旋刃",
    rawName: "混沌の旋刃",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 180,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 72,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 893601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893600.png",
    equipCost: 40,
    name: "混沌の旋刃",
    rawName: "混沌の旋刃+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 380,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 142,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが20%上昇する",
      },
    ],
  },
  {
    id: 893602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893600.png",
    equipCost: 60,
    name: "混沌の旋刃",
    rawName: "混沌の旋刃++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 580,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 212,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが30%上昇する",
      },
    ],
  },
  {
    id: 893700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893700.png",
    equipCost: 25,
    name: "混沌の円環",
    rawName: "混沌の円環",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 230,
      magicAtk: 88,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック確率が15%上昇する",
      },
    ],
  },
  {
    id: 893701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893700.png",
    equipCost: 45,
    name: "混沌の円環",
    rawName: "混沌の円環+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 430,
      magicAtk: 158,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック確率が27%上昇する",
      },
    ],
  },
  {
    id: 893702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893700.png",
    equipCost: 65,
    name: "混沌の円環",
    rawName: "混沌の円環++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 630,
      magicAtk: 228,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック確率が40%上昇する",
      },
    ],
  },
  {
    id: 893800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893800.png",
    equipCost: 12,
    name: "デモンズチェスト",
    rawName: "デモンズチェスト",
    enhancementsNum: 0,
    attribute: "wind",
    statuses: {
      hp: 65,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 53,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「毒」を40%の確率で無効化する",
      },
    ],
  },
  {
    id: 893801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893800.png",
    equipCost: 21,
    name: "デモンズチェスト",
    rawName: "デモンズチェスト+",
    enhancementsNum: 1,
    attribute: "wind",
    statuses: {
      hp: 136,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 103,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「毒」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 893802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893800.png",
    equipCost: 30,
    name: "デモンズチェスト",
    rawName: "デモンズチェスト++",
    enhancementsNum: 2,
    attribute: "wind",
    statuses: {
      hp: 207,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 153,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]状態異常「毒」を80%の確率で無効化する",
      },
    ],
  },
  {
    id: 893900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893900.png",
    equipCost: 12,
    name: "イビルチェスト",
    rawName: "イビルチェスト",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 51,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 44,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「毒」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 893901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893900.png",
    equipCost: 21,
    name: "イビルチェスト",
    rawName: "イビルチェスト+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 109,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 87,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「毒」を45%の確率で無効化する",
      },
    ],
  },
  {
    id: 893902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/893900.png",
    equipCost: 30,
    name: "イビルチェスト",
    rawName: "イビルチェスト++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 167,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 130,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "状態異常「毒」を60%の確率で無効化する",
      },
    ],
  },
  {
    id: 894000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894000.png",
    equipCost: 11,
    name: "プリニー連射",
    rawName: "プリニー連射",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 70,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "デバフ「物理ダメージ低下」を20%の確率で無効化する",
      },
    ],
  },
  {
    id: 894001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894000.png",
    equipCost: 21,
    name: "プリニー連射",
    rawName: "プリニー連射+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 135,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 79,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "デバフ「物理ダメージ低下」を35%の確率で無効化する",
      },
    ],
  },
  {
    id: 894002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894000.png",
    equipCost: 31,
    name: "プリニー連射",
    rawName: "プリニー連射++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 200,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 122,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "デバフ「物理ダメージ低下」を50%の確率で無効化する",
      },
    ],
  },
  {
    id: 894100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894100.png",
    equipCost: 13,
    name: "プリニーボマー",
    rawName: "プリニーボマー",
    enhancementsNum: 0,
    attribute: "fire",
    statuses: {
      hp: 90,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 50,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText:
          "[火属性専用]デバフ「物理ダメージ低下」を30%の確率で無効化する",
      },
    ],
  },
  {
    id: 894101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894100.png",
    equipCost: 24,
    name: "プリニーボマー",
    rawName: "プリニーボマー+",
    enhancementsNum: 1,
    attribute: "fire",
    statuses: {
      hp: 180,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 108,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText:
          "[火属性専用]デバフ「物理ダメージ低下」を50%の確率で無効化する",
      },
    ],
  },
  {
    id: 894102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894100.png",
    equipCost: 35,
    name: "プリニーボマー",
    rawName: "プリニーボマー++",
    enhancementsNum: 2,
    attribute: "fire",
    statuses: {
      hp: 270,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 166,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText:
          "[火属性専用]デバフ「物理ダメージ低下」を70%の確率で無効化する",
      },
    ],
  },
  {
    id: 894200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894200.png",
    equipCost: 12,
    name: "大千鳥十文字槍・朱",
    rawName: "大千鳥十文字槍・朱",
    enhancementsNum: 0,
    attribute: "fire",
    statuses: {
      hp: 97,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 41,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]物理攻撃ダメージが5%上昇する",
      },
    ],
  },
  {
    id: 894201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894200.png",
    equipCost: 21,
    name: "大千鳥十文字槍・朱",
    rawName: "大千鳥十文字槍・朱+",
    enhancementsNum: 1,
    attribute: "fire",
    statuses: {
      hp: 184,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 90,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]物理攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 894202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894200.png",
    equipCost: 30,
    name: "大千鳥十文字槍・朱",
    rawName: "大千鳥十文字槍・朱++",
    enhancementsNum: 2,
    attribute: "fire",
    statuses: {
      hp: 271,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 139,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]物理攻撃ダメージが15%上昇する",
      },
    ],
  },
  {
    id: 894300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894300.png",
    equipCost: 12,
    name: "大千鳥十文字槍・鐵",
    rawName: "大千鳥十文字槍・鐵",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 78,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 34,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが5%上昇する",
      },
    ],
  },
  {
    id: 894301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894300.png",
    equipCost: 21,
    name: "大千鳥十文字槍・鐵",
    rawName: "大千鳥十文字槍・鐵+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 152,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 894302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894300.png",
    equipCost: 30,
    name: "大千鳥十文字槍・鐵",
    rawName: "大千鳥十文字槍・鐵++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 226,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 112,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "物理攻撃ダメージが15%上昇する",
      },
    ],
  },
  {
    id: 894400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894400.png",
    equipCost: 11,
    name: "スタービーチボール",
    rawName: "スタービーチボール",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 50,
      magicAtk: 35,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 894401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894400.png",
    equipCost: 19,
    name: "スタービーチボール",
    rawName: "スタービーチボール+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 112,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 894402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894400.png",
    equipCost: 27,
    name: "スタービーチボール",
    rawName: "スタービーチボール++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 174,
      magicAtk: 111,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 894500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894500.png",
    equipCost: 11,
    name: "一千貫き",
    rawName: "一千貫き",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 50,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 894501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894500.png",
    equipCost: 19,
    name: "一千貫き",
    rawName: "一千貫き+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 112,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 894502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894500.png",
    equipCost: 27,
    name: "一千貫き",
    rawName: "一千貫き++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 174,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 111,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 894600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894600.png",
    equipCost: 10,
    name: "宵を貫く星芒",
    rawName: "宵を貫く星芒",
    enhancementsNum: 0,
    attribute: "light",
    statuses: {
      hp: 0,
      magicAtk: 33,
      magicDef: 0,
      physicalAtk: 33,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]受ける物理・魔法攻撃ダメージを3%軽減する",
      },
    ],
  },
  {
    id: 894601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894600.png",
    equipCost: 20,
    name: "宵を貫く星芒",
    rawName: "宵を貫く星芒+",
    enhancementsNum: 1,
    attribute: "light",
    statuses: {
      hp: 0,
      magicAtk: 89,
      magicDef: 0,
      physicalAtk: 89,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]受ける物理・魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 894602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894600.png",
    equipCost: 30,
    name: "宵を貫く星芒",
    rawName: "宵を貫く星芒++",
    enhancementsNum: 2,
    attribute: "light",
    statuses: {
      hp: 0,
      magicAtk: 145,
      magicDef: 0,
      physicalAtk: 145,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[光属性専用]受ける物理・魔法攻撃ダメージを8%軽減する",
      },
    ],
  },
  {
    id: 894700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894700.png",
    equipCost: 11,
    name: "不沈艦エピタフ",
    rawName: "不沈艦エピタフ",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 50,
      magicAtk: 35,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 894701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894700.png",
    equipCost: 19,
    name: "不沈艦エピタフ",
    rawName: "不沈艦エピタフ+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 112,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 894702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894700.png",
    equipCost: 27,
    name: "不沈艦エピタフ",
    rawName: "不沈艦エピタフ++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 174,
      magicAtk: 111,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける魔法攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 894800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894800.png",
    equipCost: 11,
    name: "カリス・メイス",
    rawName: "カリス・メイス",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 50,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 35,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 894801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894800.png",
    equipCost: 19,
    name: "カリス・メイス",
    rawName: "カリス・メイス+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 112,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 894802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894800.png",
    equipCost: 27,
    name: "カリス・メイス",
    rawName: "カリス・メイス++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 174,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 111,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 894900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894900.png",
    equipCost: 10,
    name: "戯れのアンサンブル",
    rawName: "戯れのアンサンブル",
    enhancementsNum: 0,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 33,
      magicDef: 0,
      physicalAtk: 33,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理・魔法攻撃ダメージを3%軽減する",
      },
    ],
  },
  {
    id: 894901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894900.png",
    equipCost: 20,
    name: "戯れのアンサンブル",
    rawName: "戯れのアンサンブル+",
    enhancementsNum: 1,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 89,
      magicDef: 0,
      physicalAtk: 89,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理・魔法攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 894902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/894900.png",
    equipCost: 30,
    name: "戯れのアンサンブル",
    rawName: "戯れのアンサンブル++",
    enhancementsNum: 2,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 145,
      magicDef: 0,
      physicalAtk: 145,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]受ける物理・魔法攻撃ダメージを8%軽減する",
      },
    ],
  },
  {
    id: 895000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895000.png",
    equipCost: 21,
    name: "ゼロアワーアタック",
    rawName: "ゼロアワーアタック",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 500,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック確率が20%上昇する",
      },
    ],
  },
  {
    id: 895001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895000.png",
    equipCost: 38,
    name: "ゼロアワーアタック",
    rawName: "ゼロアワーアタック+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 1000,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック確率が35%上昇する",
      },
    ],
  },
  {
    id: 895002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895000.png",
    equipCost: 55,
    name: "ゼロアワーアタック",
    rawName: "ゼロアワーアタック++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 1500,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "ブロック確率が50%上昇する",
      },
    ],
  },
  {
    id: 895100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895100.png",
    equipCost: 16,
    name: "ファイアシェル",
    rawName: "ファイアシェル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "火属性耐性が15%上昇する。",
      },
    ],
  },
  {
    id: 895101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895100.png",
    equipCost: 33,
    name: "ファイアシェル",
    rawName: "ファイアシェル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "火属性耐性が30%上昇する。",
      },
    ],
  },
  {
    id: 895102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895100.png",
    equipCost: 50,
    name: "ファイアシェル",
    rawName: "ファイアシェル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "火属性耐性が50%上昇する。",
      },
    ],
  },
  {
    id: 895200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895200.png",
    equipCost: 16,
    name: "ウォーターシェル",
    rawName: "ウォーターシェル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "水属性耐性が15%上昇する。",
      },
    ],
  },
  {
    id: 895201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895200.png",
    equipCost: 33,
    name: "ウォーターシェル",
    rawName: "ウォーターシェル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "水属性耐性が30%上昇する。",
      },
    ],
  },
  {
    id: 895202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895200.png",
    equipCost: 50,
    name: "ウォーターシェル",
    rawName: "ウォーターシェル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "水属性耐性が50%上昇する。",
      },
    ],
  },
  {
    id: 895300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895300.png",
    equipCost: 16,
    name: "ウィンドシェル",
    rawName: "ウィンドシェル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "風属性耐性が15%上昇する。",
      },
    ],
  },
  {
    id: 895301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895300.png",
    equipCost: 33,
    name: "ウィンドシェル",
    rawName: "ウィンドシェル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "風属性耐性が30%上昇する。",
      },
    ],
  },
  {
    id: 895302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895300.png",
    equipCost: 50,
    name: "ウィンドシェル",
    rawName: "ウィンドシェル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "風属性耐性が50%上昇する。",
      },
    ],
  },
  {
    id: 895400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895400.png",
    equipCost: 16,
    name: "ダークシェル",
    rawName: "ダークシェル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "闇属性耐性が15%上昇する。",
      },
    ],
  },
  {
    id: 895401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895400.png",
    equipCost: 33,
    name: "ダークシェル",
    rawName: "ダークシェル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "闇属性耐性が30%上昇する。",
      },
    ],
  },
  {
    id: 895402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895400.png",
    equipCost: 50,
    name: "ダークシェル",
    rawName: "ダークシェル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "闇属性耐性が50%上昇する。",
      },
    ],
  },
  {
    id: 895500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895500.png",
    equipCost: 16,
    name: "ライトシェル",
    rawName: "ライトシェル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 150,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 60,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "光属性耐性が15%上昇する。",
      },
    ],
  },
  {
    id: 895501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895500.png",
    equipCost: 33,
    name: "ライトシェル",
    rawName: "ライトシェル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 325,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "光属性耐性が30%上昇する。",
      },
    ],
  },
  {
    id: 895502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895500.png",
    equipCost: 50,
    name: "ライトシェル",
    rawName: "ライトシェル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 500,
      magicAtk: 180,
      magicDef: 0,
      physicalAtk: 180,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "光属性耐性が50%上昇する。",
      },
    ],
  },
  {
    id: 895600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895600.png",
    equipCost: 12,
    name: "開放されし封印の箱",
    rawName: "開放されし封印の箱",
    enhancementsNum: 0,
    attribute: "water",
    statuses: {
      hp: 58,
      magicAtk: 55,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが5%上昇する",
      },
    ],
  },
  {
    id: 895601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895600.png",
    equipCost: 21,
    name: "開放されし封印の箱",
    rawName: "開放されし封印の箱+",
    enhancementsNum: 1,
    attribute: "water",
    statuses: {
      hp: 126,
      magicAtk: 107,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 895602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895600.png",
    equipCost: 30,
    name: "開放されし封印の箱",
    rawName: "開放されし封印の箱++",
    enhancementsNum: 2,
    attribute: "water",
    statuses: {
      hp: 194,
      magicAtk: 159,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが15%上昇する",
      },
    ],
  },
  {
    id: 895700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895700.png",
    equipCost: 12,
    name: "封印の箱",
    rawName: "封印の箱",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 48,
      magicAtk: 45,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが5%上昇する",
      },
    ],
  },
  {
    id: 895701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895700.png",
    equipCost: 21,
    name: "封印の箱",
    rawName: "封印の箱+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 104,
      magicAtk: 90,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが10%上昇する",
      },
    ],
  },
  {
    id: 895702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895700.png",
    equipCost: 30,
    name: "封印の箱",
    rawName: "封印の箱++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 160,
      magicAtk: 135,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが15%上昇する",
      },
    ],
  },
  {
    id: 895800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895800.png",
    equipCost: 12,
    name: "忘失のカルディア",
    rawName: "忘失のカルディア",
    enhancementsNum: 0,
    attribute: "darkness",
    statuses: {
      hp: 104,
      magicAtk: 37,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける物理攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 895801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895800.png",
    equipCost: 21,
    name: "忘失のカルディア",
    rawName: "忘失のカルディア+",
    enhancementsNum: 1,
    attribute: "darkness",
    statuses: {
      hp: 195,
      magicAtk: 85,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける物理攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 895802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895800.png",
    equipCost: 30,
    name: "忘失のカルディア",
    rawName: "忘失のカルディア++",
    enhancementsNum: 2,
    attribute: "darkness",
    statuses: {
      hp: 286,
      magicAtk: 133,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[闇属性専用]受ける物理攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 895900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895900.png",
    equipCost: 12,
    name: "新生のカルディア",
    rawName: "新生のカルディア",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 85,
      magicAtk: 32,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを5%軽減する",
      },
    ],
  },
  {
    id: 895901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895900.png",
    equipCost: 21,
    name: "新生のカルディア",
    rawName: "新生のカルディア+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 163,
      magicAtk: 69,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを7%軽減する",
      },
    ],
  },
  {
    id: 895902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/895900.png",
    equipCost: 30,
    name: "新生のカルディア",
    rawName: "新生のカルディア++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 241,
      magicAtk: 106,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "受ける物理攻撃ダメージを10%軽減する",
      },
    ],
  },
  {
    id: 896000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896000.png",
    equipCost: 8,
    name: "ベアバンクル",
    rawName: "ベアバンクル",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 60,
      magicAtk: 23,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "味方全体のHPが毎ターン1%前後回復することがある。",
      },
    ],
  },
  {
    id: 896001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896000.png",
    equipCost: 16,
    name: "ベアバンクル",
    rawName: "ベアバンクル+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 145,
      magicAtk: 54,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "味方全体のHPが毎ターン2%前後回復することがある。",
      },
    ],
  },
  {
    id: 896002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896000.png",
    equipCost: 24,
    name: "ベアバンクル",
    rawName: "ベアバンクル++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 230,
      magicAtk: 85,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "味方全体のHPが毎ターン3%前後回復することがある。",
      },
    ],
  },
  {
    id: 896100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896100.png",
    equipCost: 16,
    name: "オルタナティヴ・B",
    rawName: "オルタナティヴ・B",
    enhancementsNum: 0,
    attribute: "fire",
    statuses: {
      hp: 150,
      magicAtk: 53,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]味方全体のHPが毎ターン2%前後回復する。",
      },
    ],
  },
  {
    id: 896101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896100.png",
    equipCost: 32,
    name: "オルタナティヴ・B",
    rawName: "オルタナティヴ・B+",
    enhancementsNum: 1,
    attribute: "fire",
    statuses: {
      hp: 335,
      magicAtk: 119,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]味方全体のHPが毎ターン4%前後回復する。",
      },
    ],
  },
  {
    id: 896102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896100.png",
    equipCost: 48,
    name: "オルタナティヴ・B",
    rawName: "オルタナティヴ・B++",
    enhancementsNum: 2,
    attribute: "fire",
    statuses: {
      hp: 520,
      magicAtk: 185,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[火属性専用]味方全体のHPが毎ターン6%前後回復する。",
      },
    ],
  },
  {
    id: 896200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896200.png",
    equipCost: 11,
    name: "五等分の百点答案",
    rawName: "五等分の百点答案",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 40,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが5%上昇する",
      },
    ],
  },
  {
    id: 896201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896200.png",
    equipCost: 24,
    name: "五等分の百点答案",
    rawName: "五等分の百点答案+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 100,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが12%上昇する",
      },
    ],
  },
  {
    id: 896202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896200.png",
    equipCost: 37,
    name: "五等分の百点答案",
    rawName: "五等分の百点答案++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 160,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "魔法攻撃ダメージが20%上昇する",
      },
    ],
  },
  {
    id: 896300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896300.png",
    equipCost: 14,
    name: "抹茶ソーダ",
    rawName: "抹茶ソーダ",
    enhancementsNum: 0,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが10%上昇する。",
      },
    ],
  },
  {
    id: 896301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896300.png",
    equipCost: 28,
    name: "抹茶ソーダ",
    rawName: "抹茶ソーダ+",
    enhancementsNum: 1,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが17%上昇する。",
      },
    ],
  },
  {
    id: 896302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896300.png",
    equipCost: 42,
    name: "抹茶ソーダ",
    rawName: "抹茶ソーダ++",
    enhancementsNum: 2,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 220,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]魔法攻撃ダメージが25%上昇する。",
      },
    ],
  },
  {
    id: 896400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896400.png",
    equipCost: 14,
    name: "バスケ部(助っ人)",
    rawName: "バスケ部(助っ人)",
    enhancementsNum: 0,
    attribute: "wind",
    statuses: {
      hp: 0,
      magicAtk: 60,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]魔法攻撃ダメージが10%上昇する。",
      },
    ],
  },
  {
    id: 896401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896400.png",
    equipCost: 28,
    name: "バスケ部(助っ人)",
    rawName: "バスケ部(助っ人)+",
    enhancementsNum: 1,
    attribute: "wind",
    statuses: {
      hp: 0,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]魔法攻撃ダメージが17%上昇する。",
      },
    ],
  },
  {
    id: 896402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896400.png",
    equipCost: 42,
    name: "バスケ部(助っ人)",
    rawName: "バスケ部(助っ人)++",
    enhancementsNum: 2,
    attribute: "wind",
    statuses: {
      hp: 0,
      magicAtk: 220,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[風属性専用]魔法攻撃ダメージが25%上昇する。",
      },
    ],
  },
  {
    id: 896500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896500.png",
    equipCost: 12,
    name: "YT-KGM 800Y L",
    rawName: "YT-KGM 800Y L",
    enhancementsNum: 0,
    attribute: "light",
    statuses: {
      hp: 60,
      magicAtk: 58,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText:
          "[光属性専用]光属性パネルによる攻撃・回復ASの威力を5%強化する。",
      },
    ],
  },
  {
    id: 896501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896500.png",
    equipCost: 21,
    name: "YT-KGM 800Y L",
    rawName: "YT-KGM 800Y L+",
    enhancementsNum: 1,
    attribute: "light",
    statuses: {
      hp: 127,
      magicAtk: 110,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText:
          "[光属性専用]光属性パネルによる攻撃・回復ASの威力を10%強化する。",
      },
    ],
  },
  {
    id: 896502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896500.png",
    equipCost: 30,
    name: "YT-KGM 800Y L",
    rawName: "YT-KGM 800Y L++",
    enhancementsNum: 2,
    attribute: "light",
    statuses: {
      hp: 194,
      magicAtk: 162,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText:
          "[光属性専用]光属性パネルによる攻撃・回復ASの威力を15%強化する。",
      },
    ],
  },
  {
    id: 896600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896600.png",
    equipCost: 12,
    name: "YT-KGM 500Y",
    rawName: "YT-KGM 500Y",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 50,
      magicAtk: 46,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "光属性パネルによる攻撃・回復ASの威力を5%強化する。",
      },
    ],
  },
  {
    id: 896601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896600.png",
    equipCost: 21,
    name: "YT-KGM 500Y",
    rawName: "YT-KGM 500Y+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 104,
      magicAtk: 93,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "光属性パネルによる攻撃・回復ASの威力を10%強化する。",
      },
    ],
  },
  {
    id: 896602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896600.png",
    equipCost: 30,
    name: "YT-KGM 500Y",
    rawName: "YT-KGM 500Y++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 158,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "光属性パネルによる攻撃・回復ASの威力を15%強化する。",
      },
    ],
  },
  {
    id: 896700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896700.png",
    equipCost: 15,
    name: "スターダストギフト",
    rawName: "スターダストギフト",
    enhancementsNum: 0,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 56,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]クリティカル率が12%上昇する。",
      },
    ],
  },
  {
    id: 896701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896700.png",
    equipCost: 30,
    name: "スターダストギフト",
    rawName: "スターダストギフト+",
    enhancementsNum: 1,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 119,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]クリティカル率が24%上昇する。",
      },
    ],
  },
  {
    id: 896702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896700.png",
    equipCost: 45,
    name: "スターダストギフト",
    rawName: "スターダストギフト++",
    enhancementsNum: 2,
    attribute: "water",
    statuses: {
      hp: 0,
      magicAtk: 182,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "[水属性専用]クリティカル率が35%上昇する。",
      },
    ],
  },
  {
    id: 896800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896800.png",
    equipCost: 12,
    name: "スノーマンギフト",
    rawName: "スノーマンギフト",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 48,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が10%上昇する。",
      },
    ],
  },
  {
    id: 896801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896800.png",
    equipCost: 24,
    name: "スノーマンギフト",
    rawName: "スノーマンギフト+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 104,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が17%上昇する。",
      },
    ],
  },
  {
    id: 896802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896800.png",
    equipCost: 36,
    name: "スノーマンギフト",
    rawName: "スノーマンギフト++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 160,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する。",
      },
    ],
  },
  {
    id: 896900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
    equipCost: 22,
    name: "鬼灯鼻・じゅんろく",
    rawName: "鬼灯鼻・じゅんろく",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 88,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が15%上昇する。",
      },
    ],
  },
  {
    id: 896901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
    equipCost: 43,
    name: "鬼灯鼻・じゅんろく",
    rawName: "鬼灯鼻・じゅんろく+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 173,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が25%上昇する。",
      },
    ],
  },
  {
    id: 896902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/896900.png",
    equipCost: 64,
    name: "鬼灯鼻・じゅんろく",
    rawName: "鬼灯鼻・じゅんろく++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 258,
      physicalDef: 0,
    },
    specialEffects: [
      {
        rawText: "クリティカル率が35%上昇する。",
      },
    ],
  },
  {
    id: 950000,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
    equipCost: 10,
    name: "ヴィブロブレード",
    rawName: "ヴィブロブレード",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 30,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 48,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950001,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
    equipCost: 15,
    name: "ヴィブロブレード",
    rawName: "ヴィブロブレード+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 60,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 96,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950002,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950000.png",
    equipCost: 20,
    name: "ヴィブロブレード",
    rawName: "ヴィブロブレード++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 90,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 144,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950100.png",
    equipCost: 10,
    name: "デスサイズ",
    rawName: "デスサイズ",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 12,
      magicDef: 0,
      physicalAtk: 48,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950100.png",
    equipCost: 15,
    name: "デスサイズ",
    rawName: "デスサイズ+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 24,
      magicDef: 0,
      physicalAtk: 96,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950100.png",
    equipCost: 20,
    name: "デスサイズ",
    rawName: "デスサイズ++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 36,
      magicDef: 0,
      physicalAtk: 144,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950200.png",
    equipCost: 10,
    name: "パペットシアター",
    rawName: "パペットシアター",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 48,
      magicDef: 0,
      physicalAtk: 12,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950200.png",
    equipCost: 15,
    name: "パペットシアター",
    rawName: "パペットシアター+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 96,
      magicDef: 0,
      physicalAtk: 24,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950200.png",
    equipCost: 20,
    name: "パペットシアター",
    rawName: "パペットシアター++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 144,
      magicDef: 0,
      physicalAtk: 36,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950300.png",
    equipCost: 22,
    name: "村雨",
    rawName: "村雨",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 130,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950300.png",
    equipCost: 32,
    name: "村雨",
    rawName: "村雨+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 200,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950300.png",
    equipCost: 40,
    name: "村雨",
    rawName: "村雨++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 270,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950400.png",
    equipCost: 10,
    name: "センターマイク",
    rawName: "センターマイク",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 54,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950400.png",
    equipCost: 15,
    name: "センターマイク",
    rawName: "センターマイク+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 108,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950400.png",
    equipCost: 20,
    name: "センターマイク",
    rawName: "センターマイク++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 162,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950500.png",
    equipCost: 10,
    name: "クリスタルリーパー",
    rawName: "クリスタルリーパー",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 54,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950500.png",
    equipCost: 15,
    name: "クリスタルリーパー",
    rawName: "クリスタルリーパー+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 108,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950500.png",
    equipCost: 20,
    name: "クリスタルリーパー",
    rawName: "クリスタルリーパー++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 162,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950600.png",
    equipCost: 22,
    name: "フェアリーグレイス",
    rawName: "フェアリーグレイス",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 130,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950600.png",
    equipCost: 32,
    name: "フェアリーグレイス",
    rawName: "フェアリーグレイス+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 200,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950600.png",
    equipCost: 40,
    name: "フェアリーグレイス",
    rawName: "フェアリーグレイス++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 270,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950700,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950700.png",
    equipCost: 30,
    name: "劫火ノ槍",
    rawName: "劫火ノ槍",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 135,
      physicalDef: 100,
    },
    specialEffects: [],
  },
  {
    id: 950701,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950700.png",
    equipCost: 45,
    name: "劫火ノ槍",
    rawName: "劫火ノ槍+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 203,
      physicalDef: 150,
    },
    specialEffects: [],
  },
  {
    id: 950702,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950700.png",
    equipCost: 60,
    name: "劫火ノ槍",
    rawName: "劫火ノ槍++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 0,
      physicalAtk: 270,
      physicalDef: 200,
    },
    specialEffects: [],
  },
  {
    id: 950800,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950800.png",
    equipCost: 30,
    name: "流水ノ双剣",
    rawName: "流水ノ双剣",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 100,
      physicalAtk: 135,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950801,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950800.png",
    equipCost: 45,
    name: "流水ノ双剣",
    rawName: "流水ノ双剣+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 150,
      physicalAtk: 203,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950802,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950800.png",
    equipCost: 60,
    name: "流水ノ双剣",
    rawName: "流水ノ双剣++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 0,
      magicDef: 200,
      physicalAtk: 270,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 950900,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950900.png",
    equipCost: 30,
    name: "旧式端末",
    rawName: "旧式端末",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 135,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 100,
    },
    specialEffects: [],
  },
  {
    id: 950901,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950900.png",
    equipCost: 45,
    name: "旧式端末",
    rawName: "旧式端末+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 203,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 150,
    },
    specialEffects: [],
  },
  {
    id: 950902,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/950900.png",
    equipCost: 60,
    name: "旧式端末",
    rawName: "旧式端末++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 270,
      magicDef: 0,
      physicalAtk: 0,
      physicalDef: 200,
    },
    specialEffects: [],
  },
  {
    id: 951100,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951100.png",
    equipCost: 30,
    name: "宵闇ノ書",
    rawName: "宵闇ノ書",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 135,
      magicDef: 100,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951101,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951100.png",
    equipCost: 45,
    name: "宵闇ノ書",
    rawName: "宵闇ノ書+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 203,
      magicDef: 150,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951102,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951100.png",
    equipCost: 60,
    name: "宵闇ノ書",
    rawName: "宵闇ノ書++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 270,
      magicDef: 200,
      physicalAtk: 0,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951200,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951200.png",
    equipCost: 7,
    name: "プルガトリオ",
    rawName: "プルガトリオ",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 40,
      magicDef: 0,
      physicalAtk: 40,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951201,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951200.png",
    equipCost: 11,
    name: "プルガトリオ",
    rawName: "プルガトリオ+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 80,
      magicDef: 0,
      physicalAtk: 80,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951202,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951200.png",
    equipCost: 15,
    name: "プルガトリオ",
    rawName: "プルガトリオ++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951300,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951300.png",
    equipCost: 30,
    name: "旧式写真機",
    rawName: "旧式写真機",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 120,
      magicDef: 75,
      physicalAtk: 120,
      physicalDef: 75,
    },
    specialEffects: [],
  },
  {
    id: 951301,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951300.png",
    equipCost: 45,
    name: "旧式写真機",
    rawName: "旧式写真機+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 180,
      magicDef: 113,
      physicalAtk: 180,
      physicalDef: 113,
    },
    specialEffects: [],
  },
  {
    id: 951302,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951300.png",
    equipCost: 60,
    name: "旧式写真機",
    rawName: "旧式写真機++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 240,
      magicDef: 150,
      physicalAtk: 240,
      physicalDef: 150,
    },
    specialEffects: [],
  },
  {
    id: 951400,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951400.png",
    equipCost: 13,
    name: "忘竜の献花",
    rawName: "忘竜の献花",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 73,
      magicDef: 0,
      physicalAtk: 73,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951401,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951400.png",
    equipCost: 23,
    name: "忘竜の献花",
    rawName: "忘竜の献花+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 158,
      magicDef: 0,
      physicalAtk: 158,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951402,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951400.png",
    equipCost: 33,
    name: "忘竜の献花",
    rawName: "忘竜の献花++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 243,
      magicDef: 0,
      physicalAtk: 243,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951500,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951500.png",
    equipCost: 10,
    name: "赤誠の情剣",
    rawName: "赤誠の情剣",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 56,
      magicDef: 0,
      physicalAtk: 56,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951501,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951500.png",
    equipCost: 17,
    name: "赤誠の情剣",
    rawName: "赤誠の情剣+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 120,
      magicDef: 0,
      physicalAtk: 120,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951502,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951500.png",
    equipCost: 24,
    name: "赤誠の情剣",
    rawName: "赤誠の情剣++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 184,
      magicDef: 0,
      physicalAtk: 184,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951600,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
    equipCost: 25,
    name: "傲慢のアラーニェ",
    rawName: "傲慢のアラーニェ",
    enhancementsNum: 0,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 140,
      magicDef: 0,
      physicalAtk: 140,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951601,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
    equipCost: 38,
    name: "傲慢のアラーニェ",
    rawName: "傲慢のアラーニェ+",
    enhancementsNum: 1,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 233,
      magicDef: 0,
      physicalAtk: 233,
      physicalDef: 0,
    },
    specialEffects: [],
  },
  {
    id: 951602,
    imageUrl:
      "https://raw.githubusercontent.com/arx-8/cocorosekai-equipment-customizer/master/src/assets/equipments/951600.png",
    equipCost: 51,
    name: "傲慢のアラーニェ",
    rawName: "傲慢のアラーニェ++",
    enhancementsNum: 2,
    attribute: "void",
    statuses: {
      hp: 0,
      magicAtk: 326,
      magicDef: 0,
      physicalAtk: 326,
      physicalDef: 0,
    },
    specialEffects: [],
  },
] as CastAny
