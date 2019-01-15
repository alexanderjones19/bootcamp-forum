import React from 'react';
import { Card, Input, Button, CardBody, CardFooter } from 'reactstrap';

const CreateReply = props => {
  return (
    <Card className="mt-3">
      <CardBody>
        <Input type="textarea" name="reply" rows={4} />
      </CardBody>
      <CardFooter>
      <Button color="success" block onClick={props.handleReply}>Post</Button>
      </CardFooter>
    </Card>
  )
}

export default CreateReply;