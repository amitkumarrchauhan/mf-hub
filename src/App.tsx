import { Suspense, lazy } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';

// Lazy load remote components
const AccountProfile = lazy(() => import('account_app/AccountProfile'));
const CustomerDashboard = lazy(() => import('customer_app/CustomerDashboard'));

interface Customer {
  id: string;
  name: string;
  email: string;
  orderCount: number;
  status: 'active' | 'inactive' | 'pending';
}

function AppContent() {
  const { selectedCustomer, setSelectedCustomer } = useAppContext();

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1>Hub Container Application</h1>
        <p>Micro Frontend Architecture Demo</p>
        {selectedCustomer && (
          <p style={{ color: '#646cff', marginTop: '10px' }}>
            Selected Customer: {selectedCustomer.name}
          </p>
        )}
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <section>
          <h2>Account Module</h2>
          <Suspense fallback={<div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>Loading Account Profile...</div>}>
            <AccountProfile selectedCustomer={selectedCustomer} />
          </Suspense>
        </section>

        <section>
          <h2>Customer Module</h2>
          <Suspense fallback={<div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>Loading Customer Dashboard...</div>}>
            <CustomerDashboard onCustomerSelect={handleCustomerSelect} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
