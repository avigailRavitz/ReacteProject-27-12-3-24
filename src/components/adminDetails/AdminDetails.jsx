import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AdminData from '../../store/AdminData';
import {observer} from "mobx-react"
import EditAdminDetails from '../editAdminDetails/EditAdminDetails';
const AdminDetails =(observer(()=>{
  // const[Id,setId]=useState('');
  // const[Name,setName]=useState('');
  // const[Adress,setAdress]=useState('');
  // const[Phon,setPhon]=useState('');
  // const[Owner,setOwner]=useState('');
  // const[Logo,setLogo]=useState('');
  // const[Description,setDescription]=useState('');

  const chengsetsendToEdit = () => {
    AdminData.setsendToEdit(true);
  };

    return(
        <>
 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
       {AdminData.business.id} :בעל עסק
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
      {AdminData.business.name} :שם עסק
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {AdminData.business.address} :כתובת
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {AdminData.business.phone} :טלפון
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {AdminData.business.owner} :owner
          </Typography>
          <Typography variant="body3" color="text.secondary">
            ברוכים הבאים לפרויקט שלנו
            <br></br>
            בהצלחה בהמשך החיים!!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {AdminData.isLogin?
        <Button  size="small" color="primary" onClick={chengsetsendToEdit}>
          edit
        </Button>
        :<div>user</div>}
{/*         
        {
          AdminData.sendToEdit?
          <EditAdminDetails/>:<></>
        } */}
      </CardActions>
    </Card>
        </>
    )

}))

export default AdminDetails