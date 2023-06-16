import{Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import{server} from './global';
import { Post } from '../models/post';
@Injectable({
    providedIn:'root'
}) export class PostService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=server.url;
    }
    getPosts():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let option={
            headers:header
        }
        return this._http.get(this.url+"post",option);
    }
}
