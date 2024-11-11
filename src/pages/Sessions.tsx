import SessionsList from "../components/Sessions/SessionsList.tsx";
import { useSession } from "../store/sessions-context.tsx";

export default function SessionsPage() {
  const { data } = useSession();
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <SessionsList data={data} />
    </main>
  );
}
