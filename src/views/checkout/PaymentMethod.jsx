import React from "react";
import Card from "react-bootstrap/Card";

export const PaymentMethod = () => {

    return (
        <div>
            <h3 className="mb-4">Metodo de pago</h3>
            <Card>
                <Card.Header>PAY U</Card.Header>
                <Card.Body>
                    <Card.Title>Paga con Débito PSE y Tarjetas de Crédito</Card.Title>
                    <Card.Text>
                        Después de hacer clic en “Pagar ahora”, serás redirigido a PayU:
                        Paga con Débito PSE y Tarjetas de Crédito para completar tu compra
                        de forma segura.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}