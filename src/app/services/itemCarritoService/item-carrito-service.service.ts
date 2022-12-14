import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';

@Injectable({
  providedIn: 'root',
})
export class ItemCarritoServiceService extends DataService {
  constructor(http: HttpClient) {
    super(url + '/api/itemCarrito', http);
  }
}
