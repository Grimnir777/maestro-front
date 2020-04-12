import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/partition-file/';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  public uploadEasy(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<object>(url, formData);
  }

}
