import { AntragsArtBundesrat, AntragsArtNationalrat, Fraktion, Gremium, Thema } from './api-filter-dimensions';

export interface FilterRequestBody {
	THEMEN?: Thema[];
	NPBR?: Gremium[];
	GP_CODE?: string[]; // Gesetzgebungsperiode in Römischen Zahlen
	DATUM_VON?: string[]; // Format: dd.mm.yyyy
	VHG: string[] /* ['ANTR'] */;
	DOKTYP?: AntragsArtNationalrat[] | AntragsArtBundesrat[];
	PAD_INTERN?: number[]; // PersonenID seit 1918 details unter
	INRNUM?: number[];
	SW?: string[]; // Schlagwörter
	EUROVOC?: string[];
	FRAK_CODE?: Fraktion[];
}

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
	count: number;
	header: any[];
	pages: number;
	rows: (string | number | null)[][]; // Define strcutre of each returned item
}
