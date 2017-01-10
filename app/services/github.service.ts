import{Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private username:string;
    private client_id = '6d5166d273cf2b7d879a';
    private client_secret = 'dafcdab0a4d4ed5292e689badc2e4dd18b285fd2';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'robbrown24';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string){
        this.username=username;
    }
}