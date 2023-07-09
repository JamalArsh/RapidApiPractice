import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SnackService } from './snack.service';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  key = environment.numbers_api_key;

  constructor(private http: HttpClient, private snackBar: SnackService) {}

  getDateFact(month: any, day: any) {
    // const url = 'https://numbersapi.p.rapidapi.com/6/21/date';
    const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date`;

    let headers: {
      'X-RapidAPI-Key': '274f144f29msh1db2f4ccc4218aep17e6e5jsnc3c66e8b96e8';
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com';
    };
    let urlParams = new HttpParams();
    urlParams = urlParams.append('fragment', 'true');
    urlParams = urlParams.append('json', 'true');

    let urlHeaders = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '274f144f29msh1db2f4ccc4218aep17e6e5jsnc3c66e8b96e8'
      )
      .set('X-RapidAPI-Host', 'numbersapi.p.rapidapi.com');

    // let urlHeaders = new HttpHeaders()
    //   .set(
    //     'X-RapidAPI-Key',
    //     '274f144f29msh1db2f4ccc4218aep17e6e5jsnc3c66e8b96e8'
    //   )
    //   .set('X-RapidAPI-Host', 'numbersapi.p.rapidapi.com');

    return this.http.get(url, { params: urlParams, headers: urlHeaders }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        this.snackBar.snakBarError();
        return error;
      })
    );
  }
}
