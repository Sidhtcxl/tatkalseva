import { Component, OnInit,ElementRef } from '@angular/core';
import {FormGroup,FormBuilder,FormArray} from '@angular/forms';
 import {availableTags} from '../trainNames';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  host: {
        '(document:click)': 'handleClick($event)',
    },
  styles: [`
    td,.children{
      padding-left: 0;
      padding-right: 0;
    }
    
    #myButton{
      background-color:#029acf;
      color:white;
      border-color:#029acf;
    }
    #myButton:hover{
      background:#3b5998;
    }
    .ds{
      padding-left:0;
    }
    .df { padding-top: 70px; }
    #cond {
      width: 100%;
      height: 100%;
      min-width: 1000px;
      min-height: 1000px;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
    .irc,.irc:hover{
      text-decoration:none;
      color:white;
    }
  `]
})
export class FormComponent implements OnInit {
  quota = ['General','Premium Tatkal','Ladies','Tatkal'];
  quotaVal=['GN','PT','LD','TQ'];
  loginForm: FormGroup;
  trainDetails: FormGroup;
  mobileDetails: FormGroup;
  childrenPassenger:FormGroup;
  passenger:FormGroup;
  paymentMethod:FormGroup;
  temporaryBanks:string[];
  temporaryBanksValue:string[];
  display=false;
  month = ['MM','01 (Jan)','02 (Feb)','03 (Mar)','04 (Apr)','05 (May)','06 (Jun)','07 (Jul)','08 (Aug)','09 (Sep)','10 (Oct)','11 (Nov)','12 (Dec)'];
  monthVal = ['MM','01','02','03','04','05','06','07','08','09','10','11','12'];
  paymentMode = ['Net Banking','Payment Gateway/Credit Card','Debit Card'];
  paymentModeVal = ['NETBANKING','CREDIT_CARD','DEBIT_CARD'];
  selectNetBank = ['Select','State Bank of India','State Bank of India and Associates','Federal Bank','Indian Bank','Union Bank of India','Allahabad Bank','Vijaya Bank','AXIS Bank','HDFC Bank','Bank of Baroda','Karnataka Bank','Karur Vysya Bank','Kotak Mahindra Bank','ICICI Bank','IndusInd Bank','Central Bank of India','Bank of India','Syndicate Bank','Corporation Bank','Yes Bank','Nepal SBI Bank Ltd.','South Indian Bank','Canara Bank','City Union Bank'];
  selectNetBankValue = ['-1','1','10','22','29','28','35','38','39','36','37','42','40','46','44','45','50','48','54','56','60','64','67','81','80'];
  selectDebitBank = ['Select','State Bank of India','Indian Overseas Bank','Central Bank of India','Indian Bank','Union Bank of India','Bank of India','United Bank of India','Canara Bank','ICICI Bank','HDFC Bank','AXIS Bank'];
  selectDebitBankValue = ['-1','3','5','69','15','16','19','86','26','41','57','66'];
  selectNetSbiAss= ['State Bank of Bikaner and Jaipur','State Bank of Patiala','State Bank of Hyderabad','State Bank of Travancore','State Bank of Mysore'];
  selectPaymentBank = ['Select','Visa/Master Card(Powered By ICICI BANK)','Visa/Master Card(Powered By CITI BANK)','Visa/Master Card(Powered By HDFC BANK)','American Express','Visa/Master Card(Powered By AXIS BANK)','RuPay Card (Powered by Kotak Bank)','International cards (Powered by ATOM)'];
  selectPaymentBankValue = ['-1','4','17','21','27','30','58','72'];
  cardType = ['Visa','Master'];
  citiCard = ['Citi Credit/Debit Card','Other Credit/Debit Card'];
  gender = ['Select','Male','Female'];
  travelArray = ['SL','3A','2A','1A','2S','CC'];
  childAgeArray = ['Select','Below One year','One year','Two years','Three years','Four years'];
  birth = ['No Preference','LOWER','MIDDLE','UPPER','SIDE UPPER','SIDE LOWER','WINDOW SIDE'];
  meal = ['Select','NON VEG','VEG'];
  isAge = false;
  lisFrom: boolean = false;
  lisTo: boolean = true;
  active: string[];
  private query;
  customStyle={
        'position': 'absolute',
        'padding-left': '27%',
        'top': '278px',
        'width': '88%',
        'cursor':'pointer',
      };
  liColor=[];
  private id:string ;
  constructor(private formBuilder: FormBuilder,private elementRef:ElementRef) {
    this.loginForm = formBuilder.group({
      'userID':[''],
      'password': ['']
    });
    this.trainDetails = formBuilder.group({
      'fromStation':[''],
      'toStation':[''],
      'date':[''],
      'trainNo':[''],
      'boardingStation':['']
    });
    this.mobileDetails = formBuilder.group({
      'mobileNo':''
    });
    this.childrenPassenger = formBuilder.group({
      'passengers':this.formBuilder.array([])
    });
    this.passenger = formBuilder.group({
      'passengers':this.formBuilder.array([])
    });
    this.paymentMethod = formBuilder.group({
      'cardNo':[''],
      'year':[''],
      'cvv':[''],
      'pin':[''],
      'name':[''],
      'netBankLog':formBuilder.group({
      'userID':[''],
      'password':['']
      })
    });
    this.temporaryBanks = this.selectNetBank;
    this.temporaryBanksValue = this.selectNetBankValue;
    this.addChildPassengers();
   }

   payModeChange(payMode){
      if(payMode === 'CREDIT_CARD'){
        this.temporaryBanks = this.selectPaymentBank;
        this.temporaryBanksValue = this.selectPaymentBankValue;
      }else if(payMode === 'DEBIT_CARD'){
        this.temporaryBanks = this.selectDebitBank;
        this.temporaryBanksValue = this.selectDebitBankValue;
      }else{
        this.temporaryBanks = this.selectNetBank;
        this.temporaryBanksValue = this.selectNetBankValue;
      }
   }

   initChildPassengers(){
     return this.formBuilder.group({'name':['']});
   }

   initPassengers(){
     return this.formBuilder.group({
       'name':[''],
       'age':['']
     });
   }

   addChildPassengers(){
     const control = <FormArray>this.childrenPassenger.controls['passengers'];
     Array(2).fill(0).forEach(element => {
       control.push(this.initChildPassengers());
     });
     const control1 = <FormArray>this.passenger.controls['passengers'];
     Array(6).fill(0).forEach(element => {
       control1.push(this.initPassengers());
     });
   }
   onLiColor(i){
     this.liColor[i]={'background-color':"#029acf",'color':'#ffffff'};
   }

   onLiLeave(i){
     this.liColor[i]='';
   }
   onInput(event) {
    if(event.target.id ==='to'){
      this.query = this.trainDetails.controls['toStation'].value;
      this.customStyle['top'] = '329px';
      this.id = 'to';
    }
    else if(event.target.id ==='from'){
      this.query = this.trainDetails.controls['fromStation'].value;
      this.customStyle['top'] = '278px';
      this.id = 'from';
    }
    else{
      this.query = this.trainDetails.controls['boardingStation'].value;
      this.customStyle['top'] = '481px';
      this.id = 'boarding';
    }
    if(this.query.length >2){
        var count = 0;
        this.filteredList = availableTags.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this)).splice(0,10);
      }else{
        this.filteredList = [];
    }
  }

  handleClick(event){
   this.filteredList = [];
 }

 saveForm(){
    this.display=!this.display;
 }

  select(item,i){
    if(this.id==='to')
      this.trainDetails.controls['toStation'].setValue(item);
    else if(this.id==='from')
      this.trainDetails.controls['fromStation'].setValue(item);
      else
       this.trainDetails.controls['boardingStation'].setValue(item);
      this.onLiLeave(i);
  }


  ngOnInit() {
  }

    public filteredList = [];
}
