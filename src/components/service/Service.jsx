
import { observer } from "mobx-react"
import AdminData from '../../store/AdminData';
import Services from '../services/Services'
const Service=(observer(({id})=>  {
  
    return (
      <>
     <div>
                <label>
                    {AdminData.serviceList[id].id}
                </label>
                <label>
                    {AdminData.serviceList[id].name}
                </label>
                <label>
                    {AdminData.serviceList[id].price}
                </label>
                <label>
                    {AdminData.serviceList[id].description}
                </label>
                <label>
                    {AdminData.serviceList[id].duration}
                </label>

            </div>
      </>
    )
  }))
  
  export default Service