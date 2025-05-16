import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tempFilterForm: FormGroup;
  filterForm: FormGroup;
  isFilterPopupVisible = false;
  allData: any[] = [];
  filteredByFilterOnly: any[] = [];
  filteredData: any[] = [];
  searchText: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.filterForm = this.fb.group({
      gender: [''],
      position: ['']
    });

    this.tempFilterForm = this.fb.group({
      gender: [''],
      position: ['']
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.allData = data;
      this.filteredByFilterOnly = data;
      this.filteredData = data;
    });
  }

  toggleFilterPopup() {
    this.isFilterPopupVisible = !this.isFilterPopupVisible;
  
    if (this.isFilterPopupVisible) {
      this.tempFilterForm.setValue(this.filterForm.value);
    }
  }

  applyFilter() {
    this.filterForm.setValue(this.tempFilterForm.value);
  
    const gender = this.filterForm.get('gender')?.value;
    const position = this.filterForm.get('position')?.value;
  
    this.filteredByFilterOnly = this.allData.filter(person =>
      (!gender || person.gender === gender) &&
      (!position || person.position === position)
    );
  
    this.applySearch();
    this.toggleFilterPopup();
  }

  clearFilter() {
    const defaultValues = {
      gender: '',
      position: ''
    };
  
    this.filterForm.setValue(defaultValues);
    this.tempFilterForm.setValue(defaultValues);
    
    this.filteredByFilterOnly = this.allData;
    this.applySearch();
    this.toggleFilterPopup();
  }

  onSearch() {
    this.applySearch();
  }

  applySearch() {
    const searchText = this.searchText.toLowerCase();
    this.filteredData = this.filteredByFilterOnly.filter(person =>
      person.name.toLowerCase().includes(searchText)
    );
  }

  onLogout() {
    localStorage.removeItem('userToken');
    console.log('Logged out!');
    window.location.href = '/';
  }

  viewDetails(person: any) {
    const personId = person.id;
    if (personId) {
      this.router.navigate(['/person', personId]);
    } else {
      console.warn('No info found for this person:', person);
    }
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {
      let valueA = a[column];
      let valueB = b[column];

      if (column === 'date') {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      }

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
