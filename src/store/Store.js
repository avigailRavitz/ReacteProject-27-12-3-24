// import{ observable, makeObservable,action} from 'mobx';
import AdminData from './AdminData'
class Store{

 
    sendDetails=async(id,name,address,phone,owner,logo,description)=>{
        console.log("enter save saveDetalise ")
        console.log(id,name,address,phone,owner,logo,description)
        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify({
              id,name,address,phone,owner,logo,description
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(id,name,address,phone,owner,logo,description)
        }

          getDetalise=async()=>{
            console.log("enter save detalis")
           const response = await fetch("http://localhost:8787/businessData");
           const data = await response.data.json();
           this.business=JSON.parse(data);
        // console.log(this.details)
           }  


///////////////////services///////////////////////////


           initService=async(services)=>{
            const response = await fetch("http://localhost:8787/service", {
                method: "POST",
                body: JSON.stringify(services),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              
              // if (response.status === 200) {
              //   this.businessServicesList = ([...this.businessServicesList, service])
            }
            getService=async()=>{
                const response1 = await fetch("http://localhost:8787/services", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
               const x= await response1.json();
                console.log("after get")
                console.log(x)
               }  

          // initialService = async () => {
          //     const response = await fetch("http://localhost:8787/services");
          //     const data = await response.json();
          //     console.log(data);
          //     this.businessServicesList = ([...data]);
          //   }
          
}
export default new Store;