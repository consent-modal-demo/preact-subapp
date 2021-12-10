import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const App = () => {
  const [consent, setConsent] = useState();
  const [showingModal, setShowingModal] = useState();
  useEffect(() => {
    window.ConsentModal((consent, showingModal) => {
      setConsent(consent);
      setShowingModal(showingModal);
    });
  }, []);

  function reset() {
    window.localStorage.removeItem('consent');
    window.location.reload();
  }

  return (
    <div>
      <h1>Consent modal demo</h1>
      <h2>Navigation</h2>
      <ul>
        <li>
          Root Vue app <a href="/">https://consent-modal-demo.github.io</a>
        </li>
        <li>
          <strong>
            Preact subapp https://consent-modal-demo.github.io/some-path
          </strong>
        </li>
      </ul>
      <h2>Consent state</h2>
      <dl>
        <dt>Consent?</dt>
        <dd>{consent}</dd>
        <dt>Showing modal?</dt>
        <dd>{String(showingModal)}</dd>
      </dl>
      <button onClick={reset}>Reset consent</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
