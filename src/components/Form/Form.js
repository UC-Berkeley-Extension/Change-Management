import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  render() {
    return (
      <div>
        <p><strong>Note:</strong> If you're not logged into your berkeley email account, the form will not be displayed. Please log in to <a href="https://www.google.com/gmail/about/#" target="_blank">bmail</a> to get access:</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8GBYhwAVwsKqLSGVKP14jJjaQV0kqQJRJZU-SaksFz8ZZew/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
    );
  }
}

export default Form;
