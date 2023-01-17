module.exports = {
  chainID: "ordos-1",
  lcd: "https://ordos-lcd.feather.network/",
  gasAdjustment: 2.5,
  gasPrices: { uord: 0.0 },
  prefix: "ordos",
  coinType: "118",
  baseAsset: "uord",
  name: "Ordos",
  icon: "https://station-assets.terra.money/img/chains/Ordos.png",
  ibc: {
    toTerra: "channel-2",
    fromTerra: "channel-200",
    ics: {
      contract:
        "ordos1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtq56pc9e",
      toTerra: "channel-1",
      fromTerra: "channel-199",
    },
    icsFromTerra: {
       contract:
        "terra12havy0g3svy6jlnc0je3z4f0lujhkp8h79ux5myhy4ujufeczpzsr5w7lz",
      toTerra: "channel-1",
      fromTerra: "channel-202",
    }
  },
};
