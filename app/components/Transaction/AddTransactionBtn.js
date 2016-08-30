import React, { Component, PropTypes } from 'react';

export default class AddTransactionBtn extends Component {
  render() {
    const { handleClick, title } = this.props;

    return (
      <div>
        <div className='indicator radius5 font22' onClick={ handleClick } style={ { textAlign: 'center' } }>
          { title }
        </div>
      </div>
    );
  }
}

AddTransactionBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
