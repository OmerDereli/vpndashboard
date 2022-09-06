import React, {useState, useEffect} from 'react';
import './MainDash.css';
import '../Card/Card'
import Card from "../Card/Card";
import Uploadimage from "../UploadImage/Uploadimage";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
/*import "./Label.css";*/
/*import almanya from "../../assets/images/almanya.png"
import amerika from "../../assets/images/amerika.png"*/

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const MainDash = () => {
    const [cards, setCards] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [ipadress, setIpadress] = useState("")



    const handleRemoveCards = (id) => {
        setCards(cards.filter(c => c.id !== id))
    }

    const send = () => {

    }

    return (
        <div className="cards" id="mahmut">
            <div>
                <button className="button-88 buttonEdit" onClick={handleOpen}>Add New</button>
                <Modal className=""
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <div className="buttons">
                            <Uploadimage />
                            <input className="" placeholder="Country" onChange={(e) => {
                                setTitle(e.target.value)
                            }}/>
                            <input className="" placeholder="City" onChange={(e) => {
                                setSubtitle(e.target.value)
                            }}/>
                            <input className="" placeholder="Ipadress" onChange={(e) => {
                                setIpadress(e.target.value)
                            }}/>
                            <button className="button-88" onClick={() => {
                                const item = {
                                    id: 'id' + (new Date()).getTime(),
                                    "title": title,
                                    "subtitle": subtitle,
                                    "ipadress": ipadress,
                                }
                                setCards([...cards, item])
                                localStorage.getItem("omerx")
                            }}>Ekle
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>

            {cards.map((card, index) => {
                return (

                    <Card
                          key={index}
                          id={card.id}
                          title={card.title}
                          subtitle={card.subtitle}
                          src={card.src}
                          ipadress={card.ipadress}
                          onClick={() => send(card)}
                          onClickDelete={id => handleRemoveCards(id)}
                    />
                )
            })}
        </div>
    );
};

export default MainDash;