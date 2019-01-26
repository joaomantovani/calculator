export class Button {
  constructor(value: string, color: string, type?: string) {
    this.value = value;
    this.color = color;
    this.type = type;
  }

  value: string;
  color: string;
  type?: string;
}
