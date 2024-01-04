import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Repository } from '../types/repository.interface';

export const GITHUB_API_URL = "https://api.github.com/users/leandroleiteh/repos"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getRepos(): Observable<HttpResponse<Repository[]>> {
    return this.httpClient.get<Repository[]>(GITHUB_API_URL, { observe: 'response', responseType: 'json' });
  }

}

