import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import almanya from "../../assets/images/almanya.png";
import "../MainDash/MainDash.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "../MainDash/Label.css"
import Uploadimage from "../UploadImage/Uploadimage";


export default function ActionAreaCard(props) {
    /*
        function handleDelete() {
            localStorage.removeItem("omerx")
            alert("Sildin abi");
            console.log("Button clicked");
        }
    */

    const {id, title, subtitle, src = almanya, ipadress, onClick, onClickDelete} = props;
    return (
        <Card className="cards" sx={{maxWidth: 250}} onClick={onClick}>

                <CardMedia
                           className="card__image"
                           component="img"
                           height="140"
                           src= {almanya}
                />

                <CardContent className="cards">

                    <Typography component="div">
                        {title}<br/>
                        {subtitle}<br/>
                        {ipadress}<br/>
                    </Typography>
                </CardContent>
            <CardActions>
                <div>
                    <Uploadimage />
                    <button className="button-88" onClick={() => onClickDelete(id)}>
                        <DeleteOutlinedIcon/>
                        Delete
                    </button>
                </div>
            </CardActions>

        </Card>

    );
}