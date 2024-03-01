import {
	AntragsArtBundesrat,
	AntragsArtNationalrat,
	Fraktion,
	Gegenstand,
	Gesetzgebungsperiode,
	Gremium,
	Thema,
} from './api-filter-dimensions';

export interface FilterRequestBody {
	THEMEN?: Thema[];
	NRBR?: Gremium[];
	GP_CODE?: Gesetzgebungsperiode[]; // Gesetzgebungsperiode in Römischen Zahlen
	DATUM_VON?: (string | null)[]; // Format: dd.mm.yyyy
	VHG?: Gegenstand[];
	DOKTYP?: AntragsArtNationalrat[] | AntragsArtBundesrat[];
	PAD_INTERN?: number[]; // PersonenID seit 1918 details unter
	INRNUM?: number[];
	SW?: string[]; // Schlagwörter
	EUROVOC?: string[];
	FRAK_CODE?: Fraktion[];
}

/*
	This is the indexation of the response 
*/
export enum ItemKeys {
	Gesetzgebungsperiode,
	Identifikationstyp,
	Nummer,
	Zusatzkennzeichen,
	DatumLetzteVerfahrensstufe,
	ArtVerhandlungsgegenstand,
	KurztitelVerhandlungsgegenstand,
	ZitationVerhandlungsgegenstand,
	DatesortTechnischeAngabe,
	MoeglichePhasenVerfahren,
	PhaseVerfahrenAbfrage,
	DokumententypVerhandlungsgegenstand,
	ZustimmungMoeglich,
	DokumententypLangform,
	VerlinkungGeschichtsseite,
	RSSBeschreibung,
	DatumsangabeEinlangens,
	KurzbezeichnungArt,
	KurzbezeichnungDokumententyp,
	TechnischeAngaben,
	PersonenID,
	KlubFraktionscode,
	Themen,
	Beschlagwortung,
	EuroVocBeschlagwortung,
	SysdateTechnischeAngabe,
	TechnischeAngabe,
	NummerVerhandlungsgegenstand,
	GesetzgebungsperiodeRZ,
	Gremium,
}

export interface ApiResponse {
	data: {
		count: number;
		header: any[];
		pages: number;
		rows: (string | number | null)[][]; // Define strcutre of each returned item
	};
	source: string;
}
