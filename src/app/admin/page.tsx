import dynamic from 'next/dynamic';

// Decap CMS only works in client side, so we dynamically import it with no SSR
const DecapCMS = dynamic(() => import('decap-cms-app'), { ssr: false });

export default function AdminPage() {
  return <DecapCMS />;
}
