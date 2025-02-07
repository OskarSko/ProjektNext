import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import './contact.css';

export const metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z twórcami forum anime.',
};

export default function Kontakt() {
  return (
    <>
      <Header />
      <div className="contact-page-container">
        <p className="contact-description">
          Masz pytania lub sugestie? Napisz do nas, a odpowiemy tak szybko, jak to możliwe!
        </p>
        <h1 className="contact-title">Skontaktuj się z nami</h1>
        <ContactForm />
      </div>
    </>
  );
}
