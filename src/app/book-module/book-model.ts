export class Book {
  constructor(
    private id: string,
    private title: string,
    private author: {
      id: number;
      name: string;
      dateOfBirth: Date;
    },
    private year: number,
    private genre: string
  ) {}
}
