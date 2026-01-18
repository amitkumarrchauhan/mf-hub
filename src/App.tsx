import { Suspense, lazy } from 'react';

// Lazy load remote components
const AccountProfile = lazy(() => import('account_app/AccountProfile'));
const CustomerDashboard = lazy(() => import('customer_app/CustomerDashboard'));

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1>Hub Container Application</h1>
        <p>Micro Frontend Architecture Demo</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <section>
          <h2>Account Module</h2>
          <Suspense fallback={<div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>Loading Account Profile...</div>}>
            <AccountProfile />
          </Suspense>
        </section>

        <section>
          <h2>Customer Module</h2>
          <Suspense fallback={<div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>Loading Customer Dashboard...</div>}>
            <CustomerDashboard />
          </Suspense>
        </section>
      </div>
    </div>
  );
}

export default App;
