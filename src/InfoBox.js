import React from 'react'
import {Card,CardContent,Typography } from "@material-ui/core";
 
function InfoBox({ title,cases,total}) {
    return (
        <Card className="infoBox">
         <CardContent>
            {/*title*/}
            <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

          {/*120k*/}
          <h2 className="infoBox__cases">{cases}</h2>

          {/*1.2m*/}
          <Typography className="infoBox_total" color ="textSecondary">
              {total} total
              </Typography>
          
         </CardContent>   
            
        </Card>
    )
}

export default InfoBox
