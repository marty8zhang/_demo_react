import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PageTitleWithProps } from '../components/PageTitle'

export default class Forms extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isFormSubmitted: false,
      date: new Date(),
      name: '',
      isGoing: false,
      iWillBring: new Set(),
      region: '', // A valid value, e.g., 'Other', can be provided here to make the option pre-selected.
      numberOfGuests: 2,
      // You can provide an array as the values for a multi-select field.
      favoriteFlavours: [
        'coconut',
        'mango',
      ],
      comments: '',
    }

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
    this.handleFormSubmission = this.handleFormSubmission.bind(this)
  }

  handleFormFieldChange (event) {
    const target = event.target
    const name = target.name
    let value

    if (target.type === 'checkbox') {
      value = this.handleFormCheckboxChange(target)
    } else if (target.type === 'select-multiple') {
      // `target.options` here is an object with option object(s) as its properties.
      // The `[...obj]` syntax extracts the properties of `obj` and put them into an array.
      // The end result should be an array of option values.
      value = [...target.options].filter((option) => {
        return option.selected
      }).map((option) => {
        return option.value
      })
    } else {
      value = target.value
    }

    console.log(target.type, target.value, name, value)

    this.setState({
      isFormSubmitted: false,
      // The ES2015 computed property name syntax is used here to convert the name string to a proper property key name.
      [name]: value,
    })
  }

  handleFormCheckboxChange (target) {
    if (target.name === 'iWillBring') {
      const iWillBring = this.state.iWillBring

      // This solution requires each checkbox to have a specific `value`.
      if (target.checked) {
        iWillBring.add(target.value)
      } else {
        iWillBring.delete(target.value)
      }

      return iWillBring
    } else {
      // Note: The example below from the official documentation can only handle the change of a single checkbox, but
      // not a group of checkboxes.
      return target.checked
    }
  }

  handleFormSubmission (event) {
    event.preventDefault()

    this.setState({
      isFormSubmitted: true,
    })
  }

  render () {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Forms" />
            </Col>
          </Row>
        </Container>
        <SubmissionData {...this.state} />
        <Container fluid>
          <Row>
            <Col>
              {/* The form submission handler should be bound via the `onSubmit` property of the `form` tag. */}
              <Form onSubmit={this.handleFormSubmission}>
                <Form.Group as={Row} controlId="text-date">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">Date (you can't change this):</Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    {/*
                      * Specifying `value` on a controlled component prevents the user from changing the input.
                      * If `value` is `undefined` or `null`, the user will still be able to change it.
                      * Whether `readOnly` presents or not doesn't really affect this behaviour, but it's a requirement
                      * of React to avoid showing the related warning message.
                      */}
                    <Form.Control type="text" name="date" value={this.state.date.toISOString()} readOnly />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="text-name">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">Name:</Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleFormFieldChange} placeholder="Name" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="checkbox-is-going">
                  <Col lg={{ span: 9, offset: 3 }} md={{ span: 8, offset: 4 }} sm={{ span: 7, offset: 5 }}>
                    <Form.Check label="Is going" name="isGoing" checked={this.state.isGoing} onChange={this.handleFormFieldChange} />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column lg={3} md={4} sm={5} className="text-right">I'll bring:</Form.Label>
                    <Col lg={9} md={8} sm={7}>
                      <Form.Check label="Blanket" value="Blanket" name="iWillBring" id="checkboxes-i-will-bring-blanket" checked={this.state.iWillBring.has('Blanket')} onChange={this.handleFormFieldChange} />
                      <Form.Check label="Chair" value="Chair" name="iWillBring" id="checkboxes-i-will-bring-chair" checked={this.state.iWillBring.has('Chair')} onChange={this.handleFormFieldChange} />
                      <Form.Check label="Drinks" value="Drinks" name="iWillBring" id="checkboxes-i-will-bring-drinks" checked={this.state.iWillBring.has('Drinks')} onChange={this.handleFormFieldChange} />
                      <Form.Check label="Food" value="Food" name="iWillBring" id="checkboxes-i-will-bring-food" checked={this.state.iWillBring.has('Food')} onChange={this.handleFormFieldChange} />
                    </Col>
                  </Form.Group>
                </fieldset>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column lg={3} md={4} sm={5} className="text-right">Region:</Form.Label>
                    <Col lg={9} md={8} sm={7}>
                      <Form.Check type="radio" label="WA" value="WA" name="region" id="radios-region-wa" checked={this.state.region === 'WA'} onChange={this.handleFormFieldChange} />
                      <Form.Check type="radio" label="VIC" value="VIC" name="region" id="radios-region-vic" checked={this.state.region === 'VIC'} onChange={this.handleFormFieldChange} />
                      <Form.Check type="radio" label="Other" value="Other" name="region" id="radios-region-other" checked={this.state.region === 'Other'} onChange={this.handleFormFieldChange} />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="select-number-of-guests">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">Number of guests:</Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    {/* Which option(s) is/are selected depends on the value of the select tag. */}
                    <Form.Control as="select" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleFormFieldChange}>
                      {/* The `value` attribute is optional if it's expected to be the same as the option text. */}
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="select-favorite-flavours">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">Pick your favorite flavour(s):</Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    <Form.Control as="select" htmlSize={5} multiple name="favoriteFlavours" value={this.state.favoriteFlavours} onChange={this.handleFormFieldChange}>
                      <option value="apple">Apple</option>
                      <option value="coconut">Coconut</option>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="mango">Mango</option>
                      <option value="orange">Orange</option>
                      <option value="vanilla">Vanilla</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="textarea-comments">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">Comments:</Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    {/* Note the syntax differences for the value of a JSX textarea and a HTML textarea. */}
                    <Form.Control as="textarea" name="comments" value={this.state.comments} onChange={this.handleFormFieldChange} rows={5} placeholder="Comments" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col lg={{ span: 9, offset: 3 }} md={{ span: 8, offset: 4 }} sm={{ span: 7, offset: 5 }}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

function SubmissionData (props) {
  if (props.isFormSubmitted === false) {
    return null
  }

  const favoriteFlavours = props.favoriteFlavours.map(f => {
    return f.charAt(0).toUpperCase() + f.slice(1)
  }).join(', ')
    .replace(/^(.+), ([a-z]+)$/i, '$1 & $2')

  const iWillBring = Array.from(props.iWillBring).join(', ')
    .replace(/^(.+), ([a-z]+)$/i, '$1 & $2')

  return (
    <Container fluid className="bg-info text-white">
      <Row>
        <Col>
          <p>The form has been submitted.</p>
          <p><strong>Submission Data:</strong><br />
            <strong>Date:</strong> {props.date.toISOString()}<br />
            <strong>Name:</strong> {props.name}<br />
            <strong>Is going:</strong> {props.isGoing ? 'Yes' : 'No'}<br />
            <strong>I'll bring:</strong> {iWillBring === '' ? 'Nothing' : iWillBring}<br />
            <strong>Region:</strong> {props.region}<br />
            <strong>Number of guests:</strong> {props.numberOfGuests}<br />
            <strong>Favorite flavours:</strong> {favoriteFlavours}<br />
            <strong>Comments:</strong> {props.comments}</p>
        </Col>
      </Row>
    </Container>
  )
}
