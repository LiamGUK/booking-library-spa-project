import studentsImg from "../assets/students.jpg";
import listImg from "../assets/list.jpg";
import certificateImg from "../assets/certificate.jpg";
import Section from "../components/blocks/Section";

export default function HomePage() {
  return (
    <main id="home-page">
      <h2>Our Mission: Your Success</h2>

      <Section
        title="What we do"
        image={studentsImg}
        altText="A group of students"
      >
        ReactMentoring is a platform for React developers to find mentors who
        can help them with their React-related questions and problems. We are a
        community of React developers who want to help each other succeed.
      </Section>

      <Section
        title="What we offer"
        image={listImg}
        altText="A list of sessions"
        position="right"
      >
        We offer a variety of mentoring sessions, from one-on-one mentoring to
        group mentoring sessions. Browse our available sessions to find the one
        that best fits your needs.
      </Section>

      <Section
        title="What you get"
        image={certificateImg}
        altText="A certificate"
      >
        No matter if you are a beginner or an experienced React developer, we
        are here to help you level up your React skills.
      </Section>
    </main>
  );
}
