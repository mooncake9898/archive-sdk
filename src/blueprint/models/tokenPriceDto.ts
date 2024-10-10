export class TokenPriceDto {
  constructor(
    public price: number,
    public source: string,
    public tokenType: number,
  ) {}
}
