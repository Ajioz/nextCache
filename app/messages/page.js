import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';


// export const revalidate = 5;  //wide card revalidation, works as in the fetch approach
// export const dynamic = 'force-dynamic'  //works as no-store cache


export default async function MessagesPage() {
  unstable_noStore();   // this is a granular approach to not caching sensitive fast changing content/dynamic
  const response = await fetch('http://localhost:8080/messages', {
    next: {
      revalidate: 5
    }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
