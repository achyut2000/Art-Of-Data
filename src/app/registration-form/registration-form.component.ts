import { Component, OnInit } from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{


  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'ML' },
      { item_id: 2, item_text: 'Deep Learning' },
      { item_id: 3, item_text: 'AI' },
      { item_id: 4, item_text: 'Computer Vision' },
      { item_id: 5, item_text: 'Data analytics' },
      { item_id: 6, item_text: 'Data Modelling' },
      { item_id: 7, item_text: 'Data Engineer' },
      { item_id: 8, item_text: 'Neural Networks' },
      { item_id: 9, item_text: 'CNN' },
      { item_id: 10, item_text: 'Data Mining' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'ML' },
      { item_id: 5, item_text: 'Data Analytics' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      limitSelection:4
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
