import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  imports: [CommonModule]
})
export class PersonDetailComponent implements OnInit {
  personId: string | null = null;
  person: any;
  allPersons: any[] = [];
  showNextButton: boolean = true;
  showPreviousButton: boolean = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.personId = id;
        this.dataService.getPersonById(id).subscribe(data => {
          this.person = data;
          this.updateShowButton();
        });
      }
    });
  
    this.dataService.getData().subscribe(data => {
      this.allPersons = data;
      this.updateShowButton();
    });
  }

  updateShowButton() {
    this.showNextButton = !(this.isLast);
    this.showPreviousButton = !(this.isFirst);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  goPrevious() {
    if (!this.isFirst) {
      const prevPerson = this.allPersons[this.currentIndex - 1];
      this.router.navigate(['/person', prevPerson.id]);
    }
  }
  
  goNext() {
    if (!this.isLast) {
      const nextPerson = this.allPersons[this.currentIndex + 1];
      this.router.navigate(['/person', nextPerson.id]);
    }
  }

  get currentIndex(): number {
    return this.allPersons.findIndex(p => p.id === +this.personId!);
  }
  
  get isFirst(): boolean {
    return this.currentIndex <= 0;
  }
  
  get isLast(): boolean {
    return this.currentIndex >= this.allPersons.length - 1;
  }
}