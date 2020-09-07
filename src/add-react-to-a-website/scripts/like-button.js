'use strict'

class LikeButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }

  render () {
    const buttonLabel = this.state.liked ? 'Dislike' : 'Like'

    return React.createElement(
      'button',
      { onClick: () => this.setState(previousState => ({ liked: !previousState.liked })) },
      buttonLabel,
    )
  }
}

document.querySelectorAll('.like-button-container')
  .forEach(domContainer => {
    ReactDOM.render(React.createElement(LikeButton), domContainer)
  })
