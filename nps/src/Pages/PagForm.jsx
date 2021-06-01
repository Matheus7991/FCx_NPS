import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import api from '../Utils/api'

import Card from "../Components/Card";

const PagForm = () => {

  const [form, setForm] = useState({
    Nota_NPS: '',
    Classificacao: '',
    pergunta_1: '',
    pergunta_2: '',
    pergunta_3: '',
    pergunta_4: '',
    pergunta_5: '',
  });

  const onChange = (event) => {

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    })
  };

  const onSubmit = async () => {
    alert('Obrigado!!!!!!')

    let nota = Number(form.Nota_NPS);
    if (nota <= 6){
      form.Classificacao = "Detrator";
    } else if (nota>6 && nota < 9){
      form.Classificacao = "Neutro";
    } else {
      form.Classificacao = "Promotor";
    }

    await api.post('/cliente', form); 
  };

  return (
    <Container className="mt-5">
      <Card title="Olá, tudo bem?! Nos ajude a melhorar">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Label>
                  Qual é a probabilidade de recomendar esta empresa a um amigo
                  ou colega?
                </Form.Label>
                <br />
                <Form.Check inline value={0} label="0" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={1} label="1" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={2} label="2" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={3} label="3" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={4} label="4" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={5} label="5" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={6} label="6" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={7} label="7" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={8} label="8" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={9} label="9" name="Nota_NPS" type={type} onChange={onChange}/>
                <Form.Check inline value={10} label="10" name="Nota_NPS" type={type} onChange={onChange}/>
              </div>
            ))}
          </Form.Group>

          <Form.Group>
            <Form.Label>Valor do Frete:</Form.Label>
            <br />
            <Form.Check
              inline
              label="Curtir"
              type="radio"
              name="pergunta_1"
              value={"Curtir"}
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_1"
              value={"Não Curtir"}
              onChange={onChange}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Preço do Produto:</Form.Label>
            <br />
            <Form.Check
              inline
              label="Curtir"
              type="radio"
              name="pergunta_2"
              value={"Curtir"}
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_2"
              value={"Não Curtir"}
              onChange={onChange}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Navegação no Site:</Form.Label>
            <br />
            <Form.Check
              inline
              label="Curtir"
              type="radio"
              name="pergunta_3"
              value={"Curtir"}
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_3"
              value={"Não Curtir"}
              onChange={onChange}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Pagamento:</Form.Label>
            <br />
            <Form.Check
              inline
              label="Curtir"
              type="radio"
              name="pergunta_4"
              value={"Curtir"}
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_4"
              value={"Não Curtir"}
              onChange={onChange}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Entrega:</Form.Label>
            <br />
            <Form.Check
              inline
              label="Curtir"
              type="radio"
              name="pergunta_5"
              value={"Curtir"}
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_5"
              value={"Não Curtir"}
              onChange={onChange}
            />
          </Form.Group>

          <Button type="submit" className="mt-3">Enviar</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default PagForm;
