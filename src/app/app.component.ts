import { Component ,OnInit,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
	latitude: number;
	longitude: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  title = 'smartdatatable';
  settings = {

    mode: 'inline',
    reset: true,
    //actions: false,
    pager: {
        display: true,
        perPage: 100
    },
    columns: {
      id: {
        title: 'ID',
        filter: true,
        width: '5%',
		  sort:true
      },
      name: {
        title: 'NAME',
        filter: true,
        width: '5%',
		sort:true
      },
      username: {
        title: 'USER NAME',
        filter: true,
        width: '3%',
		sort:true
      },
      email: {
        title: 'EMAIL',
        filter: true,
        width: '2%',
		sort:true
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [{ name: 'Button', title: '<i class="ion-forward">pin_drop</i>' }],
      position:  'right',
    },
    attr: {
      class: 'table table-bordered'
    }
  };
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  ngOnInit() {
  }
  onCustom(event): void {
    
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      closeOnNavigation:true,
      width:'80%',
      height:'80%',
      data: {latitude: event.data.id }
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dealerinfo.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.latitude = data.latitude;
      this.longitude = data.longitude;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  zoom: number = 15;
  
 
  latitude: number ;
  longitude: number ;


  


}
