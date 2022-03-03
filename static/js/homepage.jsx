'use strict';

function Homepage() {
  return (<React.Fragment>
    <h2>Welcome message: This is a great site for viewing trading cards.</h2>
    <a href="/cards">Click here to view the trading cards.</a>
    <div>
    <img src="/static/img/balloonicorn.jpg" width="600 px" height="600 px"  />
    </div>
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
