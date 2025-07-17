export abstract class ReceiptGeneratorService {
  abstract generate(contentId: string, invoiceNumber: string): Promise<void>;
}
