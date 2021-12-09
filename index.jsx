import { h, render } from 'preact';

const App = ({ consent }) => {
  return (
    <div>
      <h1>Consent modal demo</h1>
      <h2>Navigation</h2>
      <ul>
        <li>Root Vue app https://consent-modal-demo.github.io</li>
        <li>Preact subapp https://consent-modal-demo.github.io/some-path</li>
      </ul>
      <h2>Consent state</h2>
      <dl>
        <dt>Consented?</dt>
        <dd>{consent}</dd>
      </dl>
      <button>Reset consent</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
