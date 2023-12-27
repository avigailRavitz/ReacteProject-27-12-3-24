import{ observable, makeObservable,action} from 'mobx';

class AdminData{
   
     business = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "The best coding academy in the world",
    };
     services =[
        {
        id: "11",
        name: "פגישת ייעוץ פרונטלית",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
         },
         {
        id: "12",
        name: "בלהבלהבלהבלה",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 200,
        duration: 5,
         }
    ]
    isLogin=false;//נכנס כמנהל
    sendToEdit=false;//אם לחץ על edit in admin details
    serviceList=[];//מערך של אוביקטים שרותים
    constructor(){
        makeObservable(this,{
         //    arreyMeeting:observable,//מערך הפגישות
         //  //  addArryMeeting:action,//
            serviceList:observable,
            services:observable,//מערך השרותים
            addAarreyServices:action,
            isLogin:observable,//בדיקה אם המשתמש הוא המנהל(משתנה)
            setIsLogin:action,//בדיקה אם המשתמש הוא המנהל(פונקציה)
            sendToEdit:observable,//(משתנה)אם לחץ על edit in admin details
            setsendToEdit:action,//אם לחץ על edit in admin details)פונקציה)
            
        })
     }
     setIsLogin=(val)=>{
        this.isLogin=val;
     }
     setsendToEdit=(val)=>{
      this.sendToEdit=val;
   }
   addAarreyServices = (service) => {
      this.services = [...this.services, { id: this.services.length, name: service.name,description: this.service.description ,price :this.service.price,duration: this.service.duration}];
  }
     
     
}
export default new AdminData;