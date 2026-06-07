/* pdf.js — PDF download via html2pdf.js */

function downloadPDF() {
  const btn = document.querySelector('.pdf-btn');
  btn.textContent = 'Generating…';
  btn.disabled = true;

  /* Load html2pdf on demand */
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  script.onload = function () {
    const element = document.getElementById('resume');

    const opt = {
      margin:      0,
      filename:    'Gokul_Kumar_FounderOffice.pdf',
      image:       { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale:         2,
        useCORS:       true,
        logging:       false,
        letterRendering: true
      },
      jsPDF: {
        unit:        'mm',
        format:      'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all'] }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Downloaded`;
        setTimeout(() => {
          btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download PDF`;
          btn.disabled = false;
        }, 2500);
      });
  };

  document.head.appendChild(script);
}
