import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import PropTypes, { string } from 'prop-types';
import { PageTitleWithProps } from '../components/PageTitle';

function SubmissionData({
  isFormSubmitted,
  favoriteFlavours,
  iWillBring,
  date,
  name,
  isGoing,
  region,
  numberOfGuests,
  comments,
}) {
  if (isFormSubmitted === false) {
    return null;
  }

  const favoriteFlavoursString = favoriteFlavours
    .map((f) => f.charAt(0).toUpperCase() + f.slice(1))
    .join(', ')
    .replace(/^(.+), ([a-z]+)$/i, '$1 & $2');

  const iWillBringString = Array.from(iWillBring)
    .join(', ')
    .replace(/^(.+), ([a-z]+)$/i, '$1 & $2');

  return (
    <Container fluid className="bg-info text-white">
      <Row>
        <Col>
          <p>The form has been submitted.</p>
          <p>
            <strong>Submission Data:</strong>
            <br />
            <strong>Date:</strong>
            {' '}
            {date.toISOString()}
            <br />
            <strong>Name:</strong>
            {' '}
            {name}
            <br />
            <strong>Is going:</strong>
            {' '}
            {isGoing ? 'Yes' : 'No'}
            <br />
            <strong>I&apos;ll bring:</strong>
            {' '}
            {iWillBringString === '' ? 'Nothing' : iWillBringString}
            <br />
            <strong>Region:</strong>
            {' '}
            {region}
            <br />
            <strong>Number of guests:</strong>
            {' '}
            {numberOfGuests}
            <br />
            <strong>Favorite flavours:</strong>
            {' '}
            {favoriteFlavoursString === '' ? 'None' : favoriteFlavoursString}
            <br />
            <strong>Comments:</strong>
            {' '}
            {comments}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
SubmissionData.propTypes = {
  isFormSubmitted: PropTypes.bool.isRequired,
  favoriteFlavours: PropTypes.arrayOf(string).isRequired,
  iWillBring: PropTypes.instanceOf(Set).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  name: PropTypes.string.isRequired,
  isGoing: PropTypes.bool.isRequired,
  region: PropTypes.string.isRequired,
  numberOfGuests: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  comments: PropTypes.string.isRequired,
};

export default class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormSubmitted: false,
      date: new Date(),
      name: '',
      isGoing: false,
      iWillBring: new Set(),
      /* A valid value, e.g., 'Other', can be provided here to make the option pre-selected. */
      region: '',
      numberOfGuests: 2,
      /* You can provide an array as the values for a multi-select field. */
      favoriteFlavours: [
        'coconut',
        'mango',
      ],
      comments: '',
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormFieldChange(event) {
    const { target } = event;
    const { name } = target;
    let value;

    if (target.type === 'checkbox') {
      value = this.handleFormCheckboxChange(target);
    } else if (target.type === 'select-multiple') {
      /*
       * `target.options` here is an object with option object(s) as its properties.
       * The `[...obj]` syntax extracts the properties of `obj` and put them into an array.
       * The end result should be an array of option values.
       */
      value = [...target.options].filter((option) => option.selected)
        .map((option) => option.value);
    } else {
      value = target.value;
    }

    console.log(target.type, target.value, name, value);

    this.setState({
      isFormSubmitted: false,
      /*
       * The ES2015 computed property name syntax is used here to convert the name string to a
       * proper property key name.
       */
      [name]: value,
    });
  }

  handleFormCheckboxChange(target) {
    if (target.name === 'iWillBring') {
      const { iWillBring } = this.state;

      /* This solution requires each checkbox to have a specific `value`. */
      if (target.checked) {
        iWillBring.add(target.value);
      } else {
        iWillBring.delete(target.value);
      }

      return iWillBring;
    }
    /*
     * Note: The example below from the official documentation can only handle the change of a
     * single checkbox, but not a group of checkboxes.
     */
    return target.checked;
  }

  handleFormSubmission(event) {
    event.preventDefault();

    this.setState({
      isFormSubmitted: true,
    });
  }

  render() {
    const {
      isFormSubmitted,
      date,
      name,
      isGoing,
      iWillBring,
      region,
      numberOfGuests,
      favoriteFlavours,
      comments,
    } = this.state;

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <PageTitleWithProps pageTitle="Forms" />
            </Col>
          </Row>
        </Container>
        <SubmissionData
          isFormSubmitted={isFormSubmitted}
          date={date}
          name={name}
          isGoing={isGoing}
          iWillBring={iWillBring}
          region={region}
          numberOfGuests={numberOfGuests}
          favoriteFlavours={favoriteFlavours}
          comments={comments}
        />
        <Container fluid>
          <Row>
            <Col>
              {/*
                * The form submission handler should be bound via the `onSubmit` property of the
                * `form` tag.
                */}
              <Form onSubmit={this.handleFormSubmission}>
                <Form.Group as={Row} controlId="text-date">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">
                    Date (you can&apos;t change this):
                  </Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    {/*
                      * Specifying `value` on a controlled component prevents the user from
                      * changing the input. If `value` is `undefined` or `null`, the user will
                      * still be able to change it.
                      * Whether `readOnly` presents or not doesn't really affect this behaviour,
                      * but it's a requirement of React to avoid showing the related warning
                      * message.
                      */}
                    <Form.Control
                      type="text"
                      name="date"
                      value={date.toISOString()}
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="text-name">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">Name:</Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleFormFieldChange}
                      placeholder="Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="checkbox-is-going">
                  <Col
                    lg={{ span: 9, offset: 3 }}
                    md={{ span: 8, offset: 4 }}
                    sm={{ span: 7, offset: 5 }}
                  >
                    <Form.Check
                      label="Is going"
                      name="isGoing"
                      checked={isGoing}
                      onChange={this.handleFormFieldChange}
                    />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column lg={3} md={4} sm={5} className="text-right">
                      I&apos;ll bring:
                    </Form.Label>
                    <Col lg={9} md={8} sm={7}>
                      <Form.Check
                        label="Blanket"
                        value="Blanket"
                        name="iWillBring"
                        id="checkboxes-i-will-bring-blanket"
                        checked={iWillBring.has('Blanket')}
                        onChange={this.handleFormFieldChange}
                      />
                      <Form.Check
                        label="Chair"
                        value="Chair"
                        name="iWillBring"
                        id="checkboxes-i-will-bring-chair"
                        checked={iWillBring.has('Chair')}
                        onChange={this.handleFormFieldChange}
                      />
                      <Form.Check
                        label="Drinks"
                        value="Drinks"
                        name="iWillBring"
                        id="checkboxes-i-will-bring-drinks"
                        checked={iWillBring.has('Drinks')}
                        onChange={this.handleFormFieldChange}
                      />
                      <Form.Check
                        label="Food"
                        value="Food"
                        name="iWillBring"
                        id="checkboxes-i-will-bring-food"
                        checked={iWillBring.has('Food')}
                        onChange={this.handleFormFieldChange}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column lg={3} md={4} sm={5} className="text-right">
                      Region:
                    </Form.Label>
                    <Col lg={9} md={8} sm={7}>
                      <Form.Check
                        type="radio"
                        label="WA"
                        value="WA"
                        name="region"
                        id="radios-region-wa"
                        checked={region === 'WA'}
                        onChange={this.handleFormFieldChange}
                      />
                      <Form.Check
                        type="radio"
                        label="VIC"
                        value="VIC"
                        name="region"
                        id="radios-region-vic"
                        checked={region === 'VIC'}
                        onChange={this.handleFormFieldChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Other"
                        value="Other"
                        name="region"
                        id="radios-region-other"
                        checked={region === 'Other'}
                        onChange={this.handleFormFieldChange}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="select-number-of-guests">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">
                    Number of guests:
                  </Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    {/* Which option(s) is/are selected depends on the value of the select tag. */}
                    <Form.Control
                      as="select"
                      name="numberOfGuests"
                      value={numberOfGuests}
                      onChange={this.handleFormFieldChange}
                    >
                      {/*
                        * The `value` attribute is optional if it's expected to be the same as the
                        * option text.
                        */}
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="select-favorite-flavours">
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">
                    Pick your favorite flavour(s):
                  </Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    <Form.Control
                      as="select"
                      htmlSize={5}
                      multiple
                      name="favoriteFlavours"
                      value={favoriteFlavours}
                      onChange={this.handleFormFieldChange}
                    >
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
                  <Form.Label column lg={3} md={4} sm={5} className="text-right">
                    Comments:
                  </Form.Label>
                  <Col lg={9} md={8} sm={7}>
                    {/*
                      * Note the syntax differences for the value of a JSX textarea and a HTML
                      * textarea.
                      */}
                    <Form.Control
                      as="textarea"
                      name="comments"
                      value={comments}
                      onChange={this.handleFormFieldChange}
                      rows={5}
                      placeholder="Comments"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col
                    lg={{ span: 9, offset: 3 }}
                    md={{ span: 8, offset: 4 }}
                    sm={{ span: 7, offset: 5 }}
                  >
                    <Button type="submit">Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
