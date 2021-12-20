export class UserEntry {
  static counter: number = 0;
  id: number;
  vorname: string;
  nachname: string;
  beschreibung: string;
  date: Date;

  constructor(vorname: string, nachname: string, bescreibung: string ) {
    this.id = UserEntry.counter++;
    this.vorname=vorname;
    this.beschreibung=bescreibung;
    this.nachname = nachname;
    this.date = new Date();
  }


}
