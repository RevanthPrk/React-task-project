import './App.css';
import imgUrl from './img/experience-bg.jpeg'
import { useState, useEffect, useMemo } from 'react';
import Dropdown from 'react-dropdown';
import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import DatePicker from "react-datepicker";
import { BiBed, BiArea } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import Form from 'react-bootstrap/Form';

function Home () {
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')
  const [filter, setFilter] = useState('')
  const [empty, setEmptyFilters] = useState(false)
  const [date, setDate] = useState(new Date())

  const data = [
    {"id": 1,"cost": "2905", "name": "Palm Harbour", "adress": "2699 green Valley, Highland Lake, FL", "beds": "3", "bathrooms": "2","area": "5*7 m2", "type":"rental"},
    {"id": 2,"cost": "2700", "name": "Beverly Springfield", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "4", "bathrooms": "2","area": "5*7 m2","type":"apartment"},
    {"id": 3,"cost": "3405", "name": "Faulkner Ave", "adress": "909 Woodland St. Michigan, IN", "beds": "1", "bathrooms": "3","area": "5*7 m2","type":"individual"},
    {"id": 4,"cost": "1905", "name": "Palm Harbour", "adress": "2699 green Valley, Highland Lake, FL", "beds": "5", "bathrooms": "2","area": "5*7 m2","type":"sharing"},
    {"id": 5,"cost": "5605", "name": "Faulkner Ave", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "1","area": "5*7 m2","type":"rental"},
    {"id": 6,"cost": "2905", "name": "Beverly Springfield", "adress": "909 Woodland St. Michigan, IN", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"apartment"},
    {"id": 7,"cost": "7500", "name": "Palm Harbour", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"individual"},
    {"id": 8,"cost": "4705", "name": "Beverly Springfield", "adress": "2699 green Valley, Highland Lake, FL", "beds": "5", "bathrooms": "4","area": "5*7 m2","type":"rental"},
    {"id": 9,"cost": "2905", "name": "Palm Harbour", "adress": "909 Woodland St. Michigan, IN", "beds": "2", "bathrooms": "2","area": "5*7 m2","type":"sharing"},
    {"id": 10,"cost": "6950", "name": "Faulkner Ave", "adress": "2699 green Valley, Highland Lake, FL", "beds": "2", "bathrooms": "3","area": "5*7 m2","type":"individual"},
    {"id": 11,"cost": "3905", "name": "Palm Harbour", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"apartment"},
    {"id": 12,"cost": "8850", "name": "Beverly Springfield", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"rental"}
  ]

  const [filteredHouses, setFilteredHouses] = useState([
    {"id": 1,"cost": "2905", "name": "Palm Harbour", "adress": "2699 green Valley, Highland Lake, FL", "beds": "3", "bathrooms": "2","area": "5*7 m2", "type":"rental"},
    {"id": 2,"cost": "2700", "name": "Beverly Springfield", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "4", "bathrooms": "2","area": "5*7 m2","type":"apartment"},
    {"id": 3,"cost": "3405", "name": "Faulkner Ave", "adress": "909 Woodland St. Michigan, IN", "beds": "1", "bathrooms": "3","area": "5*7 m2","type":"individual"},
    {"id": 4,"cost": "1905", "name": "Palm Harbour", "adress": "2699 green Valley, Highland Lake, FL", "beds": "5", "bathrooms": "2","area": "5*7 m2","type":"sharing"},
    {"id": 5,"cost": "5605", "name": "Faulkner Ave", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "1","area": "5*7 m2","type":"rental"},
    {"id": 6,"cost": "2905", "name": "Beverly Springfield", "adress": "909 Woodland St. Michigan, IN", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"apartment"},
    {"id": 7,"cost": "7500", "name": "Palm Harbour", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"individual"},
    {"id": 8,"cost": "4705", "name": "Beverly Springfield", "adress": "2699 green Valley, Highland Lake, FL", "beds": "5", "bathrooms": "4","area": "5*7 m2","type":"rental"},
    {"id": 9,"cost": "2905", "name": "Palm Harbour", "adress": "909 Woodland St. Michigan, IN", "beds": "2", "bathrooms": "2","area": "5*7 m2","type":"sharing"},
    {"id": 10,"cost": "6950", "name": "Faulkner Ave", "adress": "2699 green Valley, Highland Lake, FL", "beds": "2", "bathrooms": "3","area": "5*7 m2","type":"individual"},
    {"id": 11,"cost": "3905", "name": "Palm Harbour", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"apartment"},
    {"id": 12,"cost": "8850", "name": "Beverly Springfield", "adress": "2821 Lake sevilla, Palm Harbour, TX", "beds": "3", "bathrooms": "2","area": "5*7 m2","type":"rental"}
  ])

  const filterFetch = () => {
    console.log("type",type)
    console.log("date",date)
    console.log("price",price)
    let filteredHouses = []
    let min = ''
    let max = ''
    if(type !== '' && price === '')
    {
      data.filter((house) => {
        console.log("housetype", house.type,type)
        if (house.type === type) {

          filteredHouses.push(house)
        } 
      })
      console.log("filtered houses", filteredHouses)
      setFilteredHouses(filteredHouses)
    } 
    else if (type === '' && price !== '') 
    {
      let splitPrice = price.split("-")
      min = splitPrice[0]
      max = splitPrice[1]
      console.log("....",min,max)
      data.filter((house) => {
        if (parseInt(house.cost) >= parseInt(min) && parseInt(house.cost) <= parseInt(max)) {
          filteredHouses.push(house)
        } 
      })
      setFilteredHouses(filteredHouses)
    } else if (type !== '' && price !== '') {
      let splitPrice = price.split("-")
      min = splitPrice[0]
      max = splitPrice[1]
      console.log("....",min,max)
      data.filter((house) => {
        if (house.type === type && parseInt(house.cost) >= parseInt(min) && parseInt(house.cost) <= parseInt(max)) {
          filteredHouses.push(house)
        } else {
          setEmptyFilters(true)
        }
      })
      setFilteredHouses(filteredHouses)
    }
    
    console.log("filteredHouses",filteredHouses)
  }

  const filterSearch = (item) => {
    setFilter(item)
    if (item !== '') {
      const results = data.filter((house) => {
        return house.name.toLowerCase().startsWith(item.toLowerCase());
      });
      setFilteredHouses(results);
    } else {
      setFilteredHouses(data);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className='row' style={{paddingTop: 20, width: '95%', paddingLeft: 70}}>
        <form className="form-inline d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by house name...."
            aria-label="Search"
            value={filter}
            onChange={(e) => {
              filterSearch(e.target.value);
            }}
          />
        </form>
        </div>
        <div className='row' style={{paddingTop: 50, width:'95%',paddingLeft:70}}>
        <Card>
          <Card.Body>
          <div className='col-12' style={{display:'flex'}}>
            <div className='col-3 mt-2'>
            <label>Location</label>
            <h4 style={{fontSize: 20}}>New York, USA</h4>
            </div>

            <div className='col-3 text-start' style={{paddingRight: 15}}>
              <label>Price</label>
              <Form.Select onChange={(e) => { setPrice(e.target.value) }} value={price} aria-label="Default select example">
              <option>Select Price</option>
              <option value="0-2000">$0 - $2,000 </option>
              <option value="2000-5000">$2,000 - $5,000</option>
              <option value="5000-9000">$5,000 - $9,000</option>
              </Form.Select>
            </div>
            <div className='col-2 text-start' style={{paddingRight: 5}}>
              <label>When</label>
              <DatePicker className="form-control" 
              selected={new Date(date)}  
              onChange={(date) => setDate(new Date(date).toISOString() )}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput 
              />
            </div>
            <div className='col-3' style={{paddingRight: 15}}>
              <label>Property Type</label>
              <Form.Select onChange={(e) => { setType(e.target.value) }} value={type} aria-label="Default select example">
              <option>Select Type</option>
              <option value="individual">Individual </option>
              <option value="apartment">Apartment</option>
              <option value="sharing">Sharing</option>
              <option value="rental">Rental</option>
              </Form.Select>
            </div>
            <div className='mt-4'>
              
              <Button variant="primary" onClick={()=>{filterFetch()}}>Search</Button>
            </div>
              
            </div>
          </Card.Body>
          </Card>
        </div>
        {filteredHouses.length == 0 && !empty &&
        <div className="row m-4">
        {data.length > 0 && 
          data.map((house, id) => {
            return (
          <div className="mt-4 col-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>
                  <div className='row' style={{display:'flex'}}>
                    <h5 className='col-4 text-end'>$ {house.cost}</h5><p className='col-4 text-start' style={{fontSize: 12,paddingTop: 5}}>/Month</p><p className='col-4 text-start' style={{fontSize: 12,paddingTop: 5}}></p>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h5 style={{fontSize: 18}}>{house.name}</h5>
                  <h6 style={{fontSize: 13}}>{house.adress}</h6>
                </Card.Text>
                <div className='row'>
                  <div className='col-4' style={{fontSize: 9}}><BiBed/> {house.beds} Beds</div>
                  <div className='col-4' style={{fontSize: 9}}><GiBathtub/> {house.bathrooms} Bathrooms</div>
                  <div className='col-4' style={{fontSize: 9}}><BiArea/> {house.area}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          )
        })
        }
        </div>
        }
        
        {filteredHouses.length > 0 &&
        <div className="row m-4">
        {filteredHouses.length > 0 && 
          filteredHouses.map((house, id) => {
            return (
          <div className="mt-4 col-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>
                  <div className='row' style={{display:'flex'}}>
                    <h5 className='col-4 text-end'>$ {house.cost}</h5><p className='col-4 text-start' style={{fontSize: 12,paddingTop: 5}}>/Month</p><p className='col-4 text-start' style={{fontSize: 12,paddingTop: 5}}></p>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h5 style={{fontSize: 18}}>{house.name}</h5>
                  <h6 style={{fontSize: 13}}>{house.adress}</h6>
                </Card.Text>
                <div className='row'>
                  <div className='col-4' style={{fontSize: 9}}><BiBed/> {house.beds} Beds</div>
                  <div className='col-4' style={{fontSize: 9}}><GiBathtub/> {house.bathrooms} Bathrooms</div>
                  <div className='col-4' style={{fontSize: 9}}><BiArea/> {house.area}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          )
        })
        }
        </div> 
        }

        {filteredHouses.length == 0 && empty &&
        <div className='mt-4' style={{justifyContent:"center",justifyItems:"center"}}>
        <center><h3>No Houses Found :(</h3></center>
        </div>
        }
      </div>
      
    
    </div>
  );
}

export default Home