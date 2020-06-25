import { Component, VERSION, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import {TableProperty} from './tableproperty'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit{
array:any[]=[]


  
constructor(){


}
  empData=[
    {id:1,name:'akshita'},
    {id:2,name:'aneri'},
    {id:3,name:'akshdfgfcgita'},
    {id:4,name:'fgdfs'},
    {id:5,name:'akshita'},
    {id:6,name:'akshita'},
    {id:7,name:'akshita'},
    {id:8,name:'akshita'},
    {id:9,name:'akshita'},
    {id:10,name:'akshita'},
    {id:11,name:'akshita'},
    {id:12,name:'akshita'},
    {id:13,name:'akshita'},
    {id:14,name:'akshita'},
    {id:15,name:'akshita'},
    ]
ngOnInit(){

}

onSearch(searchValue){
  debugger
  console.log(searchValue,"searchvalue")
  if(searchValue){

// let match=this.empData.find((ele)=>{return ele.name===searchValue})
// console.log('value',match)
// if(match){

// this.array.push(match)
// console.log(this.array)
// this.empData=this.array
// }
//   }else{
//     return this.empData
//   }
// // this.empData.push(match)
// console.log(this.empData)
}

}

}


