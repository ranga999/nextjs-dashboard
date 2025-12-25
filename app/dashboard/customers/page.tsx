import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return (
        <div>
            <h1>Customers Page</h1>
            <p>Customers</p>
        </div>        
    );
}