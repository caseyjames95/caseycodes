import React from 'react'

// components
import NavBar from '../NavBar'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container
} from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <CardDeck>
            <Card>
              <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
      </>
    )
  }
}
export default About