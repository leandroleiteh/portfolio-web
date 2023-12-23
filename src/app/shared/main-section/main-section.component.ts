import { Component, Inject } from '@angular/core';
import { CurriculumDownloadService } from 'src/app/services/donwload-curriculum.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {

  constructor(private curriculumDownloadService: CurriculumDownloadService) {}

  downloadCurriculum(): void {
    this.curriculumDownloadService.downloadCurriculum();
  }
}
