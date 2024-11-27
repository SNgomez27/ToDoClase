import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TareaService {
hola: BehaviorSubject<any> = new BehaviorSubject(null);
hola$: Observable<any> = this.hola.asObservable();

  constructor() { }
}
