function Hello(props) {
  return <div>{props.name}</div>
}

ReactDOM.render(<Hello name="rajat"/>, document.getElementById('root'));
