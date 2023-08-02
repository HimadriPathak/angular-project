import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private data:any = undefined;
  constructor() {}
    setData(data:any){
        this.data = data;
    }

    getData():any{
        return this.data;
    }
}
