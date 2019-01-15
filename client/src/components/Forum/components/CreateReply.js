import React from 'react';
import { Card, Input, Button, CardBody, CardFooter } from 'reactstrap';

const CreateReply = props => {
  return (
    <Card className="mt-3">
      <CardBody>
        <Input type="textarea" name="reply" rows={4} />
      </CardBody>
      <CardFooter>
        <Button color="success" onClick={props.handleReply}>Post</Button> {''}
        <Button color="info" onClick={props.displayCheatSheet}>View Markdown Cheat Sheet</Button>
      </CardFooter>
    </Card>
  )
}

export default CreateReply;