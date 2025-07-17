import { Injectable, inject } from '@angular/core';
import { ReceiptGeneratorService } from 'src/app/domain/services/receipt-generator.service';

@Injectable({ providedIn: 'root' })
export class GenerateReceiptUseCase {
  private service = inject(ReceiptGeneratorService);

  async execute(contentId: string, invoiceNumber: string): Promise<void> {
    await this.service.generate(contentId, invoiceNumber);
  }
}

