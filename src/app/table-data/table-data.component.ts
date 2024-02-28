import { Component } from '@angular/core';

interface Userdata {
  Firstname:string,
  Lastname:string,
  UserName:string,
  email:string,
  phone:string
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent {

  userdata:Array<Userdata> = [
    {Firstname:'Ali', Lastname:'khan',UserName:'alikhan', email:'ali@gmail.com',phone:'154522855'},
    {Firstname:'hamza', Lastname:'khan',UserName:'hamzakhan', email:'hamza@gmail.com',phone:'154548255'},
    {Firstname:'junaid', Lastname:'khan',UserName:'junaid', email:'junaid@gmail.com',phone:'154522855'},
    {Firstname:'waseem', Lastname:'khan',UserName:'junaid', email:'waseem@gmail.com',phone:'154522855'},
    {Firstname:'tamoor', Lastname:'khan',UserName:'junaid', email:'tamoor@gmail.com',phone:'154522855'},
    {Firstname:'murtaza', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'wahab', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'riaz', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'king', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'Babar', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'kholi', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'kholi', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'mudashar', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'kholi', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'luqman', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'watson', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    {Firstname:'musin', Lastname:'khan',UserName:'junaid', email:'murtaza@gmail.com',phone:'154522855'},
    


  ]

// two variable declare
  currentPage:number = 1;
  pageSize:number = 5;

  filtereduser:Array<Userdata> = this.userdata;
  pageSizes:Array<number> = [5,10,20,50]

  ngOnInit(){
    this.visiabledata();
    this. pageNumbers()

  }

  visiabledata(){
    let startIndex = (this.currentPage -1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    // console.log(this.userdata.slice(0,5))
    return this.filtereduser.slice(startIndex , endIndex)
    
    
  }
  nextPage(){
   this.currentPage++;
   this.visiabledata();

  }

  perviousPage(){
    this.currentPage--
    this.visiabledata();

  }

  pageNumbers(){
  let totalPages = Math.ceil(this.filtereduser.length / this.pageSize);
  let pagNumArray = new Array(totalPages);
  return pagNumArray

  }
  changPage(pagenumber:number){
    this.currentPage = pagenumber;
    this.visiabledata();

  }

  filterData(searchTerm:string){
    // console.log(searchTerm)
   this.filtereduser = this.userdata.filter((item)=>{
      return Object.values(item).some((val)=>{
        return val.toLowerCase().includes(searchTerm.toLowerCase())
      })
    });
    this.visiabledata()

  }

  changPageSize(pageSize1:any){

    this.pageSize = pageSize1;
    this.visiabledata();



  }



}