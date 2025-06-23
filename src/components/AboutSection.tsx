import React from 'react';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => (
    <section id="about" className="about-section">
        <img
            src="/assets/oskar.jpg"
            alt="Oskar Lövstrand"
            className="about-image"
        />
        <div className="about-text">
            <p>Hej!</p>

            <p>
                Jag heter Oskar Lövstrand och är en driven och idérik utvecklare med stark passion för
                både mobilapplikationer och webbteknik. Jag har nyligen avslutat mina studier inom
                mobilapplikationsutveckling vid Folkuniversitetet i Göteborg, där jag fått arbeta praktiskt
                med flera språk och teknologier, bland annat Java, Kotlin och Compose, Swift och SwiftUI,
                HTML/CSS/JavaScript och backend såsom AWS och Firebase.
            </p>

            <p>
                Jag brinner för att skapa lösningar där teknik möter användarvänlighet, och har ett särskilt
                öga för detaljer, struktur och symmetri. Det finns inget bättre än när en app är strukturerad
                på ett användarvänligt och iögonfallande sätt.
            </p>

            <p>
                Jag trivs lika bra i samarbete med andra som i självständigt arbete, och jag drivs av
                nyfikenhet, lärande och ett tydligt konsekvenstänk. Tidigare roller inom kundservice och
                som platschef har gett mig erfarenhet av att leda, organisera och kommunicera effektivt –
                egenskaper jag gärna bär med mig in i techvärlden.
            </p>

            <p>
                Min tid på Elgiganten som Operations Staff har dessutom stärkt min
                problemlösningsförmåga och mitt lugn i pressade situationer.
            </p>

            <p>
                Jag söker nu möjligheter att få växa vidare inom utveckling – gärna i en miljö där
                innovation, samarbete och lärande står i centrum. Jag vill bidra med både teknisk kunskap
                och kreativt nytänkande, oavsett om det gäller mobilappar eller webbapplikationer.
            </p>

            <p>
                På fritiden umgås jag med min familj, skapar musik med AI, tränar och nördar ner mig i
                teknik. Jag ser fram emot att få bidra till ett företag som uppskattar engagemang,
                utvecklingsvilja och användarfokus.
            </p>

            <p>
                Tack för att du tog dig tid att läsa! Jag ser fram emot att höra från er.
            </p>

            <p>
                Vänliga hälsningar,<br />
                Oskar Lövstrand
            </p>
        </div>
    </section>
);

export default AboutSection;
