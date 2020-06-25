import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'hello',
  template: `<div class="search-bar">
  <span class="icon icon-search"></span>
    <form (submit)="onSearch()" action="#">
  <input type="search" class="form-control ml-2" name="search" id="search" [formControl]="searchField" (keydown.enter)="onSearch()" 
    placeholder="Search..." autofocus>
  <button mat-raised-button type="submit" class="successButton" id="invSearch" title="Click to perform search." >Search</button>
</form>
</div>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {

  public searchField:FormControl=new FormControl('');

@Output() public searchText: EventEmitter<any>=new EventEmitter();;
  ngOnInit(){
    this.onSearch()

  }

  onSearch(){
    console.log("sadf",this.searchField.value)
        this.searchField.valueChanges.subscribe((text:any)=>{
       if (this.searchField.value !== '' && !this.searchField.value.replace(/\s/g, '').length) {
          return;
        }
    this.searchText.emit(this.searchField.value)
    })

  }

  //   public closeSearchBox(): void {
  //     console.log("close")
  //   if (this.searchField.value) {
  //     this.searchField.patchValue('');
  //     this.searchText.emit(this.searchField.value);
  //   }
  // }
}
