export enum Thema {
  Arbeit = 'Arbeit',
  Außenpolitik = 'Außenpolitik',
  Bildung = 'Bildung',
  BudgetUndFinanzen = 'Budget und Finanzen',
  EuropäischeUnion = 'Europäische Union',
  FamilieUndGenerationen = 'Familie und Generationen',
  FrauenUndGleichbehandlung = 'Frauen und Gleichbehandlung',
  GesundheitUndErnährung = 'Gesundheit und Ernährung',
  InformationUndMedien = 'Information und Medien',
  InneresUndRecht = 'Inneres und Recht',
  InnovationTechnologieUndForschung = 'Innovation, Technologie und Forschung',
  KlimaUmweltUndEnergie = 'Klima, Umwelt und Energie',
  Kultur = 'Kultur',
  LandUndForstwirtschaft = 'Land- und Forstwirtschaft',
  Landesverteidigung = 'Landesverteidigung',
  ParlamentUndDemokratie = 'Parlament und Demokratie',
  Soziales = 'Soziales',
  Sport = 'Sport',
  VerkehrUndInfrastruktur = 'Verkehr und Infrastruktur',
  Wirtschaft = 'Wirtschaft'
}

export enum Gremium {
  Nationalrat = 'NR',
  Bundesrat = 'BR'
}

export enum AntragsArtNationalrat {
  SelbständigerAntrag = 'A',
  SelbständigerEntschließungsantrag = 'A(E)',
  Abänderungsantrag = 'AA',
  SelbständigerAusschussEntschließungsantrag = 'AEA',
  SelbständigerAntragMinisteranklage = 'AMIN',
  VerlangenAufGebarungsüberprüfungRechnungshof = 'ARH2',
  AntragAufVolksbefragung = 'AVB',
  BerichtUndAntrag = 'BUA',
  UnselbständigerEntschließungsantrag = 'UEA',
  Misstrauensantrag = 'MEA',
  VerlangenAufGebarungsüberprüfungStändigerUARechnungshofausschuss = 'URH2'
}

export enum AntragsArtBundesrat {
  Abänderungsanträge = 'AA-BR',
  SelbständigerAntragBundesrat = 'A-BR',
  SelbständigerEntschließungsantragBundesrat = 'A(E)',
  SelbständigeEntschließungsanträgeVonAusschüssen = 'AEA-BR',
  UnselbständigeAnträge = 'UEA-BR'
}
export enum Fraktion {
  FPÖ = 'F',
  GRÜNE = 'G',
  ÖVP = 'V',
  NEOS = 'N',
  JETZT = 'J',
  SPÖ = 'S',
  OhneKlub = 'A'
}