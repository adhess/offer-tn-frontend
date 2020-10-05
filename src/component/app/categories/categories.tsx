import React, {Component} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Collapse,
    FormControlLabel, Paper, Switch,
    Typography
} from "@material-ui/core";
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

class Categories extends Component {
    state = {checked: false};


    render() {
        const checked = this.state.checked;

        const cc = [
            {
                name: "Telephonie & Tablette", children: [
                    {
                        name: "Smartphone & Mobile", children: [
                            {name: "Telephone Portable", path: ""},
                            {name: "Smartphones Android", path: ""},
                            {name: "Iphone", path: ""}
                        ]
                    }, {
                        name: "Tablette & phablette", children: [
                            {name: "Tablette", path: ""},
                            {name: "Phablette", path: ""},
                            {name: "Ipad", path: ""}
                        ]
                    }, {
                        name: "Telephone fixe & fax", children: [
                            {name: "Telephone filaire", path: ""},
                            {name: "Telephone sans fil", path: ""},
                            {name: "Fax Lser", path: ""},
                            {name: "Fax Thermique", path: ""}
                        ]
                    }, {
                        name: "Accessoires telephonie", children: [
                            {name: "Etui & coque", path: ""},
                            {name: "Protection ecran", path: ""},
                            {name: "Ecouteurs et kit bluetooth", path: ""},
                            {name: "Power Bank", path: ""},
                            {name: "Chargeur & Batterie", path: ""},
                            {name: "Micro SD", path: ""},
                            {name: "Lecteur de carte", path: ""},
                            {name: "Allume Cigare + MP3", path: ""},
                            {name: "Cable audio", path: ""},
                            {name: "Tige selfie", path: ""},
                            {name: "Stylet", path: ""},
                        ]
                    }, {
                        name: "Objects Connectes", children: [
                            {name: "Montre connectee", path: ""},
                            {name: "Bracelet connecte", path: ""},
                            {name: "Casque VR", path: ""}
                        ]
                    }
                ]
            },{
                name: "Ordinateurs", children: [
                    {
                        name: "Ordinateur portable", children: [
                            {name: "PC Portable", path: ""},
                            {name: "PC Portable Gamer", path: ""},
                            {name: "MacBook", path: ""},
                        ]
                    }, {
                        name: "Ordinateur de bureau", children: [
                            {name: "Pc de bureau", path: ""},
                            {name: "Pc Gamer", path: ""},
                            {name: "Imac", path: ""}
                        ]
                    }, {
                        name: "Accessoires", children: [
                            {name: "Souris", path: ""},
                            {name: "Tapis", path: ""},
                            {name: "Casque Micro", path: ""},
                            {name: "Clavier", path: ""},
                            {name: "Sacoches", path: ""},
                            {name: "Sac a dos", path: ""},
                            {name: "Web Cam", path: ""},
                            {name: "Manette de jeux", path: ""},
                            {name: "Haut parleur", path: ""},
                            {name: "Support & refroidisseur", path: ""},
                        ]
                    }, {
                        name: "Stockage", children: [
                            {name: "Cle usb", path: ""},
                            {name: "Disque dur externe", path: ""},
                            {name: "Disque dur SSD", path: ""},
                            {name: "Carte memoire", path: ""},
                            {name: "Lecteur de carte sd", path: ""},
                            {name: "CD & DVD", path: ""},
                        ]
                    }, {
                        name: "Logiciels", children: [
                            {name: "Antivirus", path: ""},
                            {name: "Systeme d'Exploitation", path: ""},
                            {name: "Suite bureautique", path: ""}
                        ]
                    }, {
                        name: "Composants & maintenance", children: [
                            {name: "Clavier", path: ""},
                            {name: "Disque dur interne", path: ""},
                            {name: "Chargeur", path: ""},
                            {name: "Batterie", path: ""},
                            {name: "Graveur", path: ""},
                            {name: "Processeur", path: ""},
                            {name: "RAM", path: ""},
                            {name: "Bloc et cable d'alimentation", path: ""},
                            {name: "Ventilateur", path: ""},
                            {name: "Carte mere", path: ""},
                            {name: "Carte graphique", path: ""},
                            {name: "Carte reseau", path: ""},
                        ]
                    }, {
                        name: "Cable et Adaptateur", children: [
                            {name: "Cables HDMI & SATA", path: ""},
                            {name: "Cables USB", path: ""},
                            {name: "Cables Firewire", path: ""},
                            {name: "Cables Ecran TV/AUDIO", path: ""},
                            {name: "CAbles Alimentation", path: ""},
                            {name: "Adaptateurs/Conventiseseurs", path: ""},
                            {name: "Connecteur RJ45 & RJ 11", path: ""},
                        ]
                    }, {
                        name: "Serveur & Station de travail", children: [
                            {name: "Serveur tour", path: ""},
                            {name: "Serveur RAck", path: ""},
                            {name: "Station de travail", path: ""}
                        ]
                    }
                ]
            },{
                name: "Accessoires & Peripheriques", children: [
                    {
                        name: "Peripheriques", children: [
                            {name: "Souris & tapis", path: ""},
                            {name: "Ecouteur & micro-casque", path: ""},
                            {name: "Clavier", path: ""},
                            {name: "Haut parleur", path: ""},
                            {name: "Webcam", path: ""},
                            {name: "HUB", path: ""},
                            {name: "Refroidisseur", path: ""},
                            {name: "Nettoyage", path: ""},
                            {name: "Support pc portable", path: ""},
                            {name: "Chargeur pc portable", path: ""},
                            {name: "Batterie", path: ""},
                        ]
                    }, {
                        name: "Cable & Adaptateur", children: [
                            {name: "Cables HDMI & SATA", path: ""},
                            {name: "Cables USB", path: ""},
                            {name: "Cables Reseau", path: ""},
                            {name: "Cables Ecran TV/AuDIO", path: ""},
                            {name: "Cables Firewire", path: ""},
                            {name: "Cables Alimentation", path: ""},
                            {name: "Adapteteurs / Convertisseurs", path: ""}
                        ]
                    }
                ]
            },{
                name: "Impression", children: [
                    {
                        name: "Monofonction", children: [
                            {name: "jet d'encre", path: ""},
                            {name: "a reservoir", path: ""},
                            {name: "Noir & Blanc", path: ""},
                            {name: "Couleur", path: ""},
                        ]
                    }, {
                        name: "Multifonction", children: [
                            {name: "jet d'encre", path: ""},
                            {name: "a reservoir", path: ""},
                            {name: "Noir & Blanc", path: ""},
                            {name: "Couleur", path: ""},
                        ]
                    }, {
                        name: "Consommables", children: [
                            {name: "Cartouche", path: ""},
                            {name: "Toner", path: ""},
                            {name: "Bouteille d'encre", path: ""},
                            {name: "Ruban", path: ""},
                        ]
                    }
                ]
            },
        ];
        const handleChange = () => {
            this.setState((state: any) => ({checked: !state.checked}));
        };

        const categories = (
            ["Computers", "Phones", "electronics", "saramei", "ayato"].map(o => (
                <div style={{
                    margin: '2px',
                    width: '120px',
                    height: '50px',
                    borderRadius: '5px',
                    background: "#e8eaf6"
                }}>
                    <CardActionArea style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
                        <p style={{margin: 'auto', fontSize: '16px', fontWeight: "lighter"}}>{o}</p>
                    </CardActionArea>
                </div>
            ))
        );
        return (
            <div style={{margin: '40px', width: 'calc(100% - 40px)'}}>
                <div>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange}/>}
                        label="Show"
                    />
                    <div>
                        <Collapse in={checked}>
                            <Paper elevation={4}>
                                <svg>
                                    <polygon points="0,100 50,00, 100,100"/>
                                </svg>
                            </Paper>
                        </Collapse>
                        <Collapse in={checked} collapsedHeight={40}>
                            <Paper elevation={4}>
                                <svg>
                                    <polygon points="0,100 50,00, 100,100"/>
                                </svg>
                            </Paper>
                        </Collapse>
                    </div>
                </div>


                <div style={{
                    width: 'fit-content',
                    margin: 'auto',
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexFlow: 'wrap'
                }}>

                    {categories}

                </div>
            </div>);
    }
}

export default Categories;