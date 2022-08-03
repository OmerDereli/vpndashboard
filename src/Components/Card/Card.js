import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


export default function ActionAreaCard(props) {

    function handleDelete() {
        alert("Sildin abi");
        console.log("Button clicked");
    }

    const {title, subtitle, src, onClick} = props;
    return (
                <Card sx={{maxWidth: 345}} onClick={onClick}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={src}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {subtitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div>
                        <button type="button" onClick={handleDelete} className="btn btn-md btn-outline-danger">Delete</button>
                    </div>
                </Card>
            );
            }