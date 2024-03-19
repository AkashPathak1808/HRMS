import { Component } from '@angular/core';

interface Supplier {
  customerName:string;
  company:string;
  phoneno:string;
  email:string;
  country:string;
  status:string;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  img1="assets/client-page/TotalMembers.svg";
  img2="assets/client-page/Members.svg";
  img3="assets/client-page/ActiveMember.svg";
  person ="assets/client-page/personsimg.svg";


  suppliers: Array<Supplier> = [
    {customerName:'shubham pandey', company:'abc pvt ltd', 
    phoneno:'659825474', email:'abcd@gmail.com', country:'india', status:'active' },
    {customerName:'Akash pathak', company:'efg pvt ltd', 
    phoneno:'6558964474', email:'efg@gmail.com', country:'nepal', status:'active' },
    {customerName:'shubham johnny', company:'johnny pvt ltd', 
    phoneno:'659825474', email:'johnny@gmail.com', country:'nagaland', status:'active' },
    {customerName:'sagar', company:'lahri pvt ltd', 
    phoneno:'6558964474', email:'efg@gmail.com', country:'Afganistan', status:'active' },
    {customerName:'Akalish sonawani', company:'sonwani pvt ltd', 
    phoneno:'6558964474', email:'akki@gmail.com', country:'china', status:'active' },
    {customerName:'Tushar', company:'tushar pvt ltd', 
    phoneno:'6558964474', email:'tushar@gmail.com', country:'bangladesh', status:'active' },
    {customerName:'animesh minz', company:'Minz pvt ltd', 
    phoneno:'6558964474', email:'minz@gmail.com', country:'japan', status:'active' },
    {customerName:'Pankaj sir', company:'pankaj pvt ltd', 
    phoneno:'6558964474', email:'pankaj@gmail.com', country:'bangkok', status:'active' },
    {customerName:'Amit Chopra', company:'chopra pvt ltd', 
    phoneno:'6558964474', email:'chopra@gmail.com', country:'Isreal', status:'active' },
    {customerName:'Ashutosh singh', company:'singh pvt ltd', 
    phoneno:'6558964474', email:'singh@gmail.com', country:'srilank', status:'active' },
    {customerName:'salman khan', company:'khan pvt ltd', 
    phoneno:'64569825752', email:'khan@gmail.com', country:'pakistan', status:'inactive' },
    {customerName:'shubham pandey', company:'abc pvt ltd', 
    phoneno:'659825474', email:'abcd@gmail.com', country:'india', status:'active' },
    {customerName:'Akash pathak', company:'efg pvt ltd', 
    phoneno:'6558964474', email:'efg@gmail.com', country:'nepal', status:'active' },
    {customerName:'shubham johnny', company:'johnny pvt ltd', 
    phoneno:'659825474', email:'johnny@gmail.com', country:'nagaland', status:'active' },
    {customerName:'sagar', company:'lahri pvt ltd', 
    phoneno:'6558964474', email:'efg@gmail.com', country:'Afganistan', status:'active' },
    {customerName:'Akalish sonawani', company:'sonwani pvt ltd', 
    phoneno:'6558964474', email:'akki@gmail.com', country:'china', status:'active' },
    {customerName:'Akalish sonawani', company:'sonwani pvt ltd', 
    phoneno:'6558964474', email:'akki@gmail.com', country:'china', status:'active' },
    {customerName:'Akalish sonawani', company:'sonwani pvt ltd', 
    phoneno:'6558964474', email:'akki@gmail.com', country:'china', status:'active' },
    {customerName:'Akalish sonawani', company:'sonwani pvt ltd', 
    phoneno:'6558964474', email:'akki@gmail.com', country:'china', status:'active' },
    {customerName:'Akalish sonawani', company:'sonwani pvt ltd', 
    phoneno:'6558964474', email:'akki@gmail.com', country:'china', status:'active' }
  ]

  currentPage: number = 1;
  pageSize: number = 5;

  ngOnInit() {
    this.visibleData();
    this.pageNumbers();
  }

  visibleData(){
    let startIndex = (this.currentPage -1) * this.pageSize ;
    let endIndex = startIndex + this.pageSize;
    return (this.suppliers.slice(startIndex, endIndex))
  }  

  nextPage(){
    this.currentPage++;
    this.visibleData();
  }

  previousPage(){
    this.currentPage--;
    this.visibleData();
  }

  pageNumbers(){
    let totalPages = this.suppliers.length / this.pageSize;
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changepage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visibleData();

  }

}
