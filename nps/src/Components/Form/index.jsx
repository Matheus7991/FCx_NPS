import React from "react";
import { Form } from "react-bootstrap";

const index = () => {
  return (
    <Form>
      <Form.Group>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Label>
              Qual é a probabilidade de recomendar esta empresa a um amigo ou
              colega?
            </Form.Label>
            <br />
            <Form.Check inline label="1" name="group1" type={type} />
            <Form.Check inline label="2" name="group1" type={type} />
            <Form.Check inline label="3" name="group1" type={type} />
            <Form.Check inline label="4" name="group1" type={type} />
            <Form.Check inline label="5" name="group1" type={type} />
            <Form.Check inline label="6" name="group1" type={type} />
            <Form.Check inline label="7" name="group1" type={type} />
            <Form.Check inline label="8" name="group1" type={type} />
            <Form.Check inline label="9" name="group1" type={type} />
            <Form.Check inline label="10" name="group1" type={type} />
          </div>
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Valor do Frete:</Form.Label>
        <br />
        <Form.Check inline label="Curtir" type="radio" aria-label="Valor_frete_1" />
        <Form.Check inline label="Não Curtir" type="radio" aria-label="Valor_frete_2" />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Label>Preço do Produto:</Form.Label>
        <br />
        <Form.Check inline label="Curtir" type="radio" aria-label="Preco_do_Produto_1" />
        <Form.Check inline label="Não Curtir" type="radio" aria-label="Preco_do_Produto_2" />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Label>Navegação no Site:</Form.Label>
        <br />
        <Form.Check inline label="Curtir" type="radio" aria-label="Navegacao_no_Site_1" />
        <Form.Check inline label="Não Curtir" type="radio" aria-label="Navegacao_no_Site_2" />
      </Form.Group>  
      
      <br />

      <Form.Group>
        <Form.Label>Pagamento:</Form.Label>
        <br />
        <Form.Check inline label="Curtir" type="radio" aria-label="Pagamento_1" />
        <Form.Check inline label="Não Curtir" type="radio" aria-label="Pagamento_2" />
      </Form.Group>

      <br />

      <Form.Group>
        <Form.Label>Entrega:</Form.Label>
        <br />
        <Form.Check inline label="Curtir" type="radio" aria-label="Entrega_1" /> 
        <Form.Check inline label="Não Curtir" type="radio" aria-label="Entrega_2" />
      </Form.Group>            
   

    </Form>
  );
};

export default index;
