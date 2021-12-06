import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function generatePdf(element) {
  if (element && process.browser) {
    html2canvas(element, {
      allowTaint: false,
      logging: true,
      scale: 4,
    }).then(function (canvas) {
      const img = canvas.toDataURL('image/jpeg');
      console.log('Report Image URL: ', img);

      const doc = new jsPDF({
        unit: 'px',
        format: 'a4',
        orientation: 'p',
      });
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();

      doc.addImage(img, 'JPEG', 0, 0, width, height);
      doc.save('pdf.pdf');
    });
  }
}
