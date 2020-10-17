import './HomeProducts.css';
import {Component} from "react";
import React from 'react';
import computer from '../../../assets/images/88763-large_default.jpg'

class HomeProducts extends Component {
    data = [
        {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        }, {
            Name: 'MSI GF75 THIN 10SCSR',
            Processor: 'i7-10750H',
            'Graphic card': 'NVIDIA GeForce GTX 1650 (4 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'FreeDos',
            Screen: '17.3" FULL HD',
            RAM: '16 Go DDR4',
            price: '3199'
        },
        {
            Name: 'HP Gaming Pavilion',
            Processor: 'AMD RYZEN 5-3550H',
            'Graphic card': 'NVIDIA GeForce GTX 1050 (3 Go GDDR5)',
            'Hard disk': '512 Go SSD',
            OS: 'Windows 10 Home',
            Screen: '15.6" IPS FHD',
            RAM: '8Go DDR4',
            price: '3199'
        },
    ]

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', justifyContent: 'center'}}>
                {
                    this.data.map(o => (
                        <div style={{
                            width: '20%',
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '0.5em',
                            background: 'white',
                            border: '1px solid #FFF',
                            borderRadius: '4px'
                        }}>
                            <img src={computer} width={200} height={200} style={{margin: '4px auto'}}/>
                            <div style={{justifyContent: 'center', background: 'rgb(13, 141, 199)', height: '100%', borderRadius: '4px',}}>
                                {
                                    this.getCharacteristics(o)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    private getCharacteristics(o: any) {
        const data = [];
            data.push(
                <div style={{display: 'flex', flexDirection: 'row', height: 'fit-content',  color: 'white', padding: '4px'}}>
                    <div style={{width: '120px', fontWeight: 'bold'}}>Name</div>
                    <div style={{width: '100%'}}>: {o['Name']}</div>
                </div>
            );
            data.push(
                <div style={{display: 'flex', flexDirection: 'row', height: 'fit-content',  color: 'white', padding: '4px'}}>
                    <div style={{width: '120px', fontWeight: 'bold'}}>Price</div>
                    <div style={{width: '100%'}}>: {o['price']}</div>
                </div>
            );
        return data;
    }
}

export default HomeProducts;