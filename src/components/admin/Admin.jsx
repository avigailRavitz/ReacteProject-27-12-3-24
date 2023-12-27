import {observer} from "mobx-react"
import Store from '../../store/Store'
import Login from '../login/Login'
import AdminPage from'../adminPage/AdminPage'
import AdminData from "../../store/AdminData"
import AdminDetails from "../adminDetails/AdminDetails"
import EditAdminDetails from "../editAdminDetails/EditAdminDetails"
    const Admin =(observer(()=>{
        return (
            <>
                <h1>Admin</h1>
                
                  {!AdminData.isLogin&&<Login/>}
                  {AdminData.isLogin&&!AdminData.sendToEdit&&<AdminPage/>}
                  {AdminData.sendToEdit&&<EditAdminDetails/>}
  
            </>
        )
    }))
    



    export default Admin

