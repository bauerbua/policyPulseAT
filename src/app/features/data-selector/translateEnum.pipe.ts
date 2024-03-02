import { Input, Pipe } from '@angular/core';

export enum FilterGroups {
	fraktion = 'fraktion',
	gegenstand = 'gegenstand',
	gremium = 'gremium',
	antragsart = 'antragsart',
	periode = 'periode',
}

@Pipe({ name: 'translateEnum', standalone: true })
export class TranslateEnumPipe {
	@Input({ required: true }) filterGroup: FilterGroups | undefined;

	private translations: { [key in FilterGroups]: Map<string, string> } = {
		fraktion: new Map([
			// Fraktionen
			['F', 'FPÖ'],
			['G', 'Grüne'],
			['V', 'ÖVP'],
			['N', 'NEOS'],
			['A', 'Ohne Klub'],
			['S', 'SPÖ'],
			['J', 'Liste JETZT'],
			['P', 'Liste Pilz'],
		]),
		gegenstand: new Map([
			['ASEU', 'Aktuelle Europastunden'],
			['AS', 'Aktuelle Stunden'],
			['J_JPR_M', 'Anfragen'],
			['ANTR', 'Anträge'],
			['US', 'Anträge Unterschuchungsausschuss'],
			['AUB', 'Ausschussberichte'],
			['AB_ABPR_ABM', 'Beantwortungen'],
			['III', 'Berichte an den Nationalrat'],
			['BNR', 'Beschlüsse'],
			['BI', 'Bürgerinitiativen'],
			['EBR', 'Einsprüche des Bundesrats'],
			['E', 'Entschließungen'],
			['EU', 'EU-Vorlagen & Beschlüsse'],
			['GO', 'Geschäftsbehandlungen'],
			['GABR', 'Gesetzesanträge des Bundesrates'],
			['GABR13', 'Gesetzesanträge von einem Drittel des BR'],
			['IMM', 'Immunitätsangelegenheiten'],
			['KOMM', 'Kommuniques'],
			['PET', 'Petitionen'],
			['RGER', 'Regierungserklärungen'],
			['RV', 'Regierungsvorlagen (Gesetze)'],
			['RVS', 'Staatsverträge'],
			['TRAU', 'Trauerkundgebungen'],
			['RVS15', 'Vereinbarungen gemäß Art. 15a B-VG'],
			['VOLKBG', 'Volksbegehren'],
			['W', 'Wahlen'],
		]),
		gremium: new Map([
			['NR', 'Nationalrat'],
			['BR', 'Bundesrat'],
		]),
		antragsart: new Map([]),
		periode: new Map([
			['XXVII', 'seit 23.10.2019: XXVII. Gesetzgebungsperiode'],
			['XXVI', '09.11.2017 - 22.10.2019: XXVI. GP'],
			['XXV', '29.10.2013 - 08.11.2017: XXV. GP'],
			['XXIV', '28.10.2008 - 28.10.2013: XXIV. GP'],
			['XXIII', '30.10.2006 - 27.10.2008: XXIII. GP'],
			['XXII', '20.12.2002 - 29.10.2006: XXII. GP'],
			['XXI', '29.10.1999 - 19.12.2002: XXI. GP'],
			['XX', '15.01.1996 - 28.10.1999: XX. GP'],
			['XIX', '07.11.1994 - 14.01.1996: XIX. GP'],
			['XVIII', '05.11.1990 - 06.11.1994: XVIII. GP'],
			['XVII', '17.12.1986 - 04.11.1990: XVII. GP'],
			['XVI', '19.05.1983 - 16.12.1986: XVI. GP'],
			['XV', '05.06.1979 - 18.05.1983: XV. GP'],
			['XIV', '04.11.1975 - 04.06.1979: XIV. GP'],
			['XIII', '04.11.1971 - 04.11.1975: XIII. GP'],
			['XII', '31.03.1970 - 04.11.1971: XII. GP'],
			['XI', '30.03.1966 - 31.03.1970: XI. GP'],
			['X', '14.12.1962 - 30.03.1966: X. GP'],
			['IX', '09.06.1959 - 14.12.1962: IX. GP'],
			['VIII', '04.11.1945 - 03.11.1949: VIII. GP'],
			['VII', '18.03.1953 - 08.06.1956: VII. GP'],
			['VI', '08.11.1949 - 18.03.1953: VI. GP'],
			['V', '19.12.1945 - 08.11.1949: V. GP'],
			['IV', '02.12.1930 - 02.05.1934: IV. GP'],
			['III', '18.05.1927 - 01.10.1930: III. GP'],
			['II', '20.11.1923 - 18.05.1927: II. GP'],
			['I', '10.11.1920 - 20.11.1923: I. GP'],
			['KN', '04.03.1919 - 09.11.1920: Konstituierende Nationalversammlung'],
			['PN', '21.10.1918 - 16.02.1919: Provisorische Nationalversammlung'],
		]),
	};

	transform(key: string, filterGroup: FilterGroups): string {
		return this.translations[filterGroup].get(key) || key;
	}
}
