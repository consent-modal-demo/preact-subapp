import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import ConsentModal from '@consent-modal-demo/consent-modal';

const App = () => {
  const [consent, setConsent] = useState();
  const [showingModal, setShowingModal] = useState();
  useEffect(() => {
    ConsentModal((consent, showingModal) => {
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
        <li>Root Vue app https://consent-modal-demo.github.io</li>
        <li>Preact subapp https://consent-modal-demo.github.io/some-path</li>
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
