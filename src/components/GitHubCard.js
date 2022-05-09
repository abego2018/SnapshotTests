import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GitHubCard(){
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://placekitten.com/100/100" />
  <Card.Body>
    <Card.Title>Abraham</Card.Title>
    <Card.Text>
      I like to program
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default GitHubCard