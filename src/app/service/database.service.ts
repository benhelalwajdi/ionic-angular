import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';


export interface Dev {
  id: number,
  name: string,
  skills: any[],
  img: string
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private dtabase: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
  http: any;

  constructor(
    private plt: Platform, 
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private httpClientModule: HttpClient) 
    { 
      this.plt.ready().then(()=>{
        this.sqlite.create({
          name: 'developers.db',
          location: 'default'
        }).then((db: SQLiteObject)=>{
            this.dtabase = db;
            this.seedDatabase();
        });
      });
    }
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text' }).subscribe(
      sql => {
        this.sqlitePorter.importSqlToDb(this.dtabase, sql)
        .then(_ => {
            this.loadDevelopers();
            this.loadProducts();
            this.dbReady.next(true);
        }).catch(e=> console.error(e));
      }
    );
  }
  loadProducts() {
  }
  loadDevelopers() {
  }

}
