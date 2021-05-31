import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

import Card from "../Components/Card";

const PagForm = () => {

  const [form, setForm] = useState({
    notaNPS: '',
    classificacao: '',
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

  return (
    <Container className="mt-5">
      <Card title="Olá, tudo bem?! Nos ajude a melhorar">
        <Form>
          <Form.Group>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Label>
                  Qual é a probabilidade de recomendar esta empresa a um amigo
                  ou colega?
                </Form.Label>
                <br />
                <Form.Check inline value={form.notaNPS} label="1" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="2" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="3" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="4" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="5" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="6" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="7" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="8" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="9" name="group1" type={type} onChange={onChange}/>
                <Form.Check inline value={form.notaNPS} label="10" name="group1" type={type} onChange={onChange}/>
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
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_1"
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
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_2"
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
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_3"
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
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_4"
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
              onChange={onChange}
            />
            <Form.Check
              inline
              label="Não Curtir"
              type="radio"
              name="pergunta_5"
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
