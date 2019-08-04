import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  private USER: any = this.dataService.getSelectedUserData();
  onSubmit(formData) {
    this.dataService.setFormData(formData);
    this.router.navigateByUrl('');
  }
  constructor(private router: Router, private dataService: DataService) {
  }

ngOnInit() {
}

}
