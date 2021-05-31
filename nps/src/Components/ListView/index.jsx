import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import axios from '../../Utils/api'
import Card from '../Card';
import Table from '../Table'

const Index = ({ title, columns, endpoint }) => {

    const [rows, setRows] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(endpoint);
        setRows(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []); 

  return(
    <Container className="mt-5">
        <Card title = {title}>
            <Table columns={columns} rows={rows}/>
        </Card>      
    </Container>
   )
  }


export default Index;
