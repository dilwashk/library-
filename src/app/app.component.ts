import { Component } from '@angular/core';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  data = [];

  title = 'Week9';

  name = '';

  date = '';

  status = '';

  summary = '';

 hardCoverDeleted = 0;

  totalBooks = 0;

 // hardCoverCounter = 0;



  newItem() {

    this.data.push({name: this.name, date: this.date, status: this.status, summary: this.summary});
    this.totalBooks++;

    if(this.status == 'hardCover'){
      this.hardCoverDeleted++;


    }
  }

  deleteItem(name) {

    for (let i = 0; i < this.data.length; i++) {


  if (this.data[i].name == name  && this.data[i].status == 'hardCover' ) {
  this.totalBooks--;
  this.hardCoverDeleted--;
  this.data.splice(i, 1);
  break;
}
  if (this.data[i].name == name) {
     this.totalBooks --;
     this.data.splice(i, 1);
     break;
     }




  }
  }


  deleteHardCover() {

   for (let i = 0; i < this.data.length; i++) {
    if (this.data[i].status == 'hardCover') {

      this.data.splice(i, this.hardCoverDeleted);
      this.totalBooks = this.totalBooks - this.hardCoverDeleted ;
      this.hardCoverDeleted -= this.hardCoverDeleted;
    }

    }

         }
    }





