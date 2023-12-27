import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AdminData from '../../store/AdminData';
import Store from '../../store/Store';
import {observer} from "mobx-react"

const EditAdminDetails =(observer(()=>{
  const[Id,setId]=useState( AdminData.business.id);
  const[Name,setName]=useState(AdminData.business.name);
  const[Adress,setAdress]=useState(AdminData.business.address);
  const[Phon,setPhon]=useState(AdminData.business.phone);
  const[Owner,setOwner]=useState('');
  const[Logo,setLogo]=useState('');
  const[Description,setDescription]=useState('');
  

  const updateBussines=()=>{
    saveInLocalDetails(Id,Name,Adress,Phon,Owner,Logo,Description);
    Store.sendDetails(Id,Name,Adress,Phon,Owner,Logo,Description);
    AdminData.setsendToEdit(false);


  }
  const saveInLocalDetails=(Id,Name,Adress,Phon,Owner,Logo,Description)=>
  {
     AdminData.business.id=Id
     AdminData.business.name=Name
     AdminData.business.address=Adress
     AdminData.business.phone=Phon
     AdminData.business.owner=Owner
     AdminData.business.logo=Logo
     AdminData.business.description=Description
  }
    return (
        <>
        <h1>sendToEdit</h1>
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
           <input type='text'  placeholder={" :מספר עסק"} onChange={(e)=>setId(e.target.value)}/>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" >
          <input type='text' placeholder={" :שם עסק"} onChange={(e)=>setName(e.target.value)}/>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <input type='text' placeholder={" :כתובת"} onChange={(e)=>setAdress(e.target.value)}/>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <input type='text' placeholder={" :טלפון"}onChange={(e)=>setPhon(e.target.value)}/>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <input type='text' placeholder={" :בעלים"}onChange={(e)=>setOwner(e.target.value)}/>
          </Typography>
          <Typography variant="body3" color="text.secondary">
            ברוכים הבאים לפרויקט שלנו
            <br></br>
            בהצלחה בהמשך החיים!!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" onClick={updateBussines}>
          sava
        </Button>
      </CardActions>
    </Card>

        </>
    )
}))




export default EditAdminDetails