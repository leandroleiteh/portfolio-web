import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurriculumDownloadService {
  downloadCurriculum(): void {
    const curriculumUrl = 'assets/Curriculo - Leandro Henrique Luz Leite.pdf';
    const link = document.createElement('a');
    link.href = curriculumUrl;
    link.download = 'Curriculo-Leandro-Leite.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
