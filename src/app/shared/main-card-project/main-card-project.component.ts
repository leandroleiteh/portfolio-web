import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from 'src/app/types/repository.interface';

@Component({
  selector: 'main-card-project',
  templateUrl: './main-card-project.component.html',
  styleUrls: ['./main-card-project.component.scss']
})
export class MainCardProjectComponent implements OnInit {
  repositories: Repository[] = [];
  visibleCards = 4;

  showMoreCards() {
    this.visibleCards = this.repositories.length;
  }

  showMinCard() {
    this.visibleCards = 4;
  }

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (response) => this.repositories = response.body ?? []


    })

  }
}
