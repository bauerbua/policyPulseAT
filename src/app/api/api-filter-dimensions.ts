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
	Wirtschaft = 'Wirtschaft',
}

export enum Gremium {
	Nationalrat = 'NR',
	Bundesrat = 'BR',
}

export enum Gegenstand {
	Aktuelle_Europastunden = 'ASEU',
	Aktuelle_Stunden = 'AS',
	Anfragen = 'J_JPR_M',
	Antraege = 'ANTR',
	Antraege_Untersuchungsauschuss = 'US',
	Ausschussberichte = 'AUB',
	Beantwortungen = 'AB_ABPR_ABM',
	Berichte_an_den_Nationalrat = 'III',
	Beschluesse = 'BNR',
	Buergerinitiativen = 'BI',
	Einsprueche_des_Bundesrats = 'EBR',
	Entschliessungen = 'E',
	EU_Vorlagen_Beschluesse = 'EU',
	Geschaeftsbehandlungen = 'GO',
	Gesetzesanträge_des_Bundesrates = 'GABR',
	Gesetzesantraege_von_einem_Drittel_des_BR = 'GABR13',
	Immunitätsangelegenheiten = 'IMM',
	Kommuniques = 'KOMM',
	Petitionen = 'PET',
	Regierungserklärungen = 'RGER',
	Regierungsvorlagen_Gesetze = 'RV',
	Staatsverträge = 'RVS',
	Trauerkundgebungen = 'TRAU',
	Vereinbarungen_gemaess_art15aB_VG = 'RVS15',
	Volksbegehren = 'VOLKBG',
	Wahlen = 'W',
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
	VerlangenAufGebarungsüberprüfungStändigerUARechnungshofausschuss = 'URH2',
}

export enum AntragsArtBundesrat {
	Abänderungsanträge = 'AA-BR',
	SelbständigerAntragBundesrat = 'A-BR',
	SelbständigerEntschließungsantragBundesrat = 'A(E)',
	SelbständigeEntschließungsanträgeVonAusschüssen = 'AEA-BR',
	UnselbständigeAnträge = 'UEA-BR',
}

export enum Fraktion {
	FPÖ = 'F',
	GRÜNE = 'G',
	ÖVP = 'V',
	NEOS = 'N',
	OK = 'A',
	SPÖ = 'S',
	JETZT = 'J',
	PILZ = 'P',
}

export enum Gesetzgebungsperiode {
	XXVII_2019 = 'XXVII',
	XXVI_2017_2019 = 'XXVI',
	XXV_2013_2017 = 'XXV',
	XXIV_2008_2013 = 'XXIV',
	XXIII_2006_2008 = 'XXIII',
	XXII_2002_2006 = 'XXII',
	XXI_1999_2002 = 'XXI',
	XX_1996_1999 = 'XX',
	XIX_1994_1996 = 'XIX',
	XCIII_1990_1994 = 'XVIII',
	XVII_1986_1990 = 'XVII',
	XVI_1983_1986 = 'XVI',
	XV_1979_1983 = 'XV',
	XIV_1975_1979 = 'XIV',
	XIII_1971_1975 = 'XIII',
	XII_1970_1971 = 'XII',
	XI_1966_1970 = 'XI',
	X_1962_1966 = 'X',
	IX_1959_1962 = 'IX',
	VIII_1956_1959 = 'VIII',
	VII_1953_1956 = 'VII',
	VI_1949_1953 = 'VI',
	V_1945_1949 = 'V',
	IV_1930_1934 = 'IV',
	III_1927_1930 = 'III',
	II_1923_1927 = 'II',
	I_1920_1923 = 'I',
	Konstituierende_Nationalratsversammlung = 'KN',
	Provisorische_Nationalratsversammlung = 'PN',
}

export enum Regierungen {
	Nehammer = 'Nehammer seit 6.12.2021',
	Schallenberg = 'Schallenberg 11.10.2021 - 6.12.2021',
	Kurz_II = 'Kurz II 7.1.2020 - 11.10.2021',
	Bierlein = 'Bierlein 3.6.2019 - 7.1.2020',
	Kurz_I = 'Kurz I 18.12.2017 - 28.5.2029',
	Kern = 'Kern 17.5.2016 - 18.12.2017',
	Faymann_II = 'Faymann II 16.12.2013 - 17.5.2016',
	Faymann_I = 'Faymann I 2.12.2008 - 16.12.2013',
	Gusenbauer = 'Gusenbauer 11.1.2007 - 2.12.2008',
	Schüssel_II = 'Schüssel II 28.2.2003 - 11.1.2007',
	Schüssel_I = 'Schüssel I 4.2.2000 - 28.2.2003',
	Klima = 'Klima 28.1.1997 - 4.2.2000',
	Vranitzky_V = 'Vranitzky V 12.3.1996 - 28.1.1997',
	Vranitzky_IV = 'Vranitzky IV 29.10.1994 - 12.3.1996',
	Vranitzky_III = 'Vranitzky III 17.12.1990 - 29.11.1994',
	Vranitzky_II = 'Vranitzky II 21.1.1987 - 17.12.1990',
	Vranitzky_I = 'Vranitzky I 16.6.1986 - 21.1.1987',
	Sinowatz = 'Sinowatz 24.5.1983 - 16.6.1986',
	Kreisky_IV = 'Kreisky IV 5.6.1979 - 24.5.1983',
	Kreisky_III = 'Kreisky III 28.10.1975 - 5.6.1979',
	Kreisky_II = 'Kreisky II 4.11.1971 - 28.10.1975',
	Kreisky_I = 'Kreisky I 21.4.1970 - 4.11.1971',
	Klaus_II = 'Klaus II 19.4.1966 - 21.4.1970',
	Klaus_I = 'Klaus I 2.4.1964 - 19.4.1966',
	Gorbach_II = 'Gorbach II 27.3.1963 - 2.4.1964',
	Gorbach_I = 'Gorbach I 11.4.1961 - 27.3.1963',
	Raab_IV = 'Rabb IV 3.11.1960 - 11.4.1961',
	Raab_III = 'Rabb III 16.7.1959 - 3.11.1960',
	Raab_II = 'Rabb II 29.6.1956 - 16.7.1959',
	Raab_I = 'Rabb I 2.4.1953 - 29.6.1956',
	Figl_III = 'Figl III 28.10.1952 - 2.4.1953',
	Figl_II = 'Figl II 8.11.1949 - 28.10.1952',
	Figl_I = 'Figl I 20.12.1945 - 8.11.1949',
	Renner = 'Renner 27.4.1945 - 20.12.1945',
}

export const regierungsPerioden: { start: string; end: string | undefined }[] = [
	{
		start: '6.12.2021',
		end: undefined,
	},
	{
		start: '11.10.2021',
		end: '6.12.2021',
	},
	{
		start: '7.1.2020',
		end: '11.10.2021',
	},
	{
		start: '3.6.2019',
		end: '7.1.2020',
	},
	{
		start: '18.12.2017',
		end: '28.5.2029',
	},
	{
		start: '17.5.2016',
		end: '18.12.2017',
	},
	{
		start: '16.12.2013',
		end: '17.5.2016',
	},
	{
		start: '2.12.2008',
		end: '16.12.2013',
	},
	{
		start: '11.1.2007',
		end: '2.12.2008',
	},
	{
		start: '28.2.2003',
		end: '11.1.2007',
	},
	{
		start: '4.2.2000',
		end: '28.2.2003',
	},
	{
		start: '28.1.1997',
		end: '4.2.2000',
	},
	{
		start: '12.3.1996',
		end: '28.1.1997',
	},
	{
		start: '29.10.1994',
		end: '12.3.1996',
	},
	{
		start: '17.12.1990',
		end: '29.11.1994',
	},
	{
		start: '21.1.1987',
		end: '17.12.1990',
	},
	{
		start: '16.6.1986',
		end: '21.1.1987',
	},
	{
		start: '24.5.1983',
		end: '16.6.1986',
	},
	{
		start: '5.6.1979',
		end: '24.5.1983',
	},
	{
		start: '28.10.1975',
		end: '5.6.1979',
	},
	{
		start: '4.11.1971',
		end: '28.10.1975',
	},
	{
		start: '21.4.1970',
		end: '4.11.1971',
	},
	{
		start: '19.4.1966',
		end: '21.4.1970',
	},
	{
		start: '2.4.1964',
		end: '19.4.1966',
	},
	{
		start: '27.3.1963',
		end: '2.4.1964',
	},
	{
		start: '11.4.1961',
		end: '27.3.1963',
	},
	{
		start: '3.11.1960',
		end: '11.4.1961',
	},
	{
		start: '16.7.1959',
		end: '3.11.1960',
	},
	{
		start: '29.6.1956',
		end: '16.7.1959',
	},
	{
		start: '2.4.1953',
		end: '29.6.1956',
	},
	{
		start: '28.10.1952',
		end: '2.4.1953',
	},
	{
		start: '8.11.1949',
		end: '28.10.1952',
	},
	{
		start: '20.12.1945',
		end: '8.11.1949',
	},
	{
		start: '27.4.1945',
		end: '20.12.1945',
	},
];
