import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class HeartButton extends React.Component {
  state = {
    likes: 0,
    status: 'unliked',
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
      status: 'liked',
    });
  };

  unlike = () => {
    let newCount = this.state.likes - 1;
    this.setState({
      likes: newCount,
      status: 'unliked',
    });
  };

  render() {
    const status = this.state.status;
    const likes = this.state.likes;
    if (status != 'liked' && likes === 0) {
      return (
        <div>
          <button
            className="button__like social_icon_like"
            onClick={this.addLike}
          >
            <FontAwesomeIcon icon={faHeart} style={{ color: '#c5c5c5' }} />
          </button>
        </div>
      );
    }
    if (status != 'liked' && likes > 0) {
      return (
        <div>
          <button
            className="button__like social_icon_like"
            onClick={this.addLike}
          >
            <FontAwesomeIcon icon={faHeart} style={{ color: '#c5c5c5' }} />
            {likes}
          </button>
        </div>
      );
    }
    if (status === 'liked') {
      return (
        <div>
          <button
            className="button__like social_icon_like"
            onClick={this.unlike}
          >
            <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
            {this.state.likes}
          </button>
        </div>
      );
    }
  }
}

export default HeartButton;
