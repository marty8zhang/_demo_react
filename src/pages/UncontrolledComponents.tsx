import React, { FormEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FunctionComponentPageTitle } from '../components/PageTitle';

interface Props {}
interface State {}

export default class UncontrolledComponents extends React.Component<Props, State> {
  private readonly nameInput: React.RefObject<HTMLInputElement>;

  private readonly fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<Props>) {
    super(props);

    this.nameInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(`A name was submitted: ${this.nameInput.current?.value}`);

    this.processSubmittedFileInput();
  }

  private processSubmittedFileInput() {
    const fileInput = this.fileInput.current;
    if (!fileInput || !fileInput.files || !fileInput.files.length) {
      console.log('No file was submitted');

      return;
    }

    console.log(`A file was submitted: ${fileInput.files[0]?.name}`);
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <FunctionComponentPageTitle pageTitle="`Fragment`s" />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <form onSubmit={this.handleSubmit}>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>
                  <strong>Name:</strong>
                  {' '}
                  {/*
                    * <input type="text">, <select> and <textarea> support defaultValue.
                    * <input type="checkbox"> and <input type="radio"> support defaultChecked.
                    */}
                  <input type="text" ref={this.nameInput} defaultValue="Default Name" />
                </label>
                <br />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>
                  <strong>File:</strong>
                  {' '}
                  <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
