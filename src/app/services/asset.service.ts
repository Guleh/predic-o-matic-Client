import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from '../models/asset.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:8000/api'

  fetchAssets(){    
    this.http.get<Asset[]>(this.url+'/assets')
    .subscribe(assets => { assets
      this.setAssets(assets);
  })
  }

  assets: Asset[] = [];
  assetsChanged = new Subject<Asset[]>();
  setAssets(assets: Asset[]){
    assets.forEach(asset => {
        this.assets.push(asset)    
    });
    this.assetsChanged.next(this.assets.slice());
  }
  getAssets(){
    return this.assets.slice();
  }


  fetchModels(){    
    this.http.get<Algorithm[]>(this.url+'/models')
    .subscribe(models => { models
      this.setModels(models)
  })
  }

  models: Algorithm[] = [];
  modelsChanged = new Subject<Algorithm[]>();
  setModels(models: Algorithm[]){
    models.forEach(model => {
      this.models.push(model)    
  });
    this.modelsChanged.next(this.models.slice())
  }
  getModels(){
    return this.models.slice();
  }

  getCurrentPrice(asset:Asset){
    return this.http.get<any>('https://api.coingecko.com/api/v3/simple/price?ids='+asset.cg_name+'&vs_currencies=USD')
  }
    
}
