// receipt-generator.service.impl.ts
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReceiptGeneratorService } from '../../domain/services/receipt-generator.service';

@Injectable({ providedIn: 'root' })
export class ReceiptGeneratorServiceImpl implements ReceiptGeneratorService {
  async generate(contentId: string, invoiceNumber: string): Promise<void> {
    const element = document.getElementById(contentId);
    if (!element) {
      console.error('Elemento no encontrado:', contentId);
      return;
    }

    try {
      // Aseguramos visibilidad temporal si el contenido está oculto
      const originalDisplay = element.style.display;
      element.style.display = 'block';

      const canvas = await html2canvas(element, {
        scale: 2, // Mejor calidad
        useCORS: true,
      });

      // Restauramos el display original
      element.style.display = originalDisplay;

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calculamos dimensiones para centrar imagen si es necesario
      const ratio = canvas.height / canvas.width;
      const pdfWidth = pageWidth - 20;
      const pdfHeight = pdfWidth * ratio;

      pdf.setFontSize(10);

      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
      pdf.save(`factura_${invoiceNumber}.pdf`);
    } catch (error) {
      console.error('Error al generar PDF:', error);
    }
  }
}
