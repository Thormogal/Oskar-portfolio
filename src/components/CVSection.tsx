import React from 'react';

const CVSection = () => {
  const openPDF = () => {
    window.open('/assets/Oskar_Lovstrand_CV.pdf', '_blank');
  };

  return (
    <section id="cv">
      <h2>CV</h2>
      <button onClick={openPDF}>
        Visa mitt CV i helskärm
      </button>
    </section>
  );
};

export default CVSection;

