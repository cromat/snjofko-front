export class ItemCreateCommand {

  constructor(public name: string = '',
              public category: string = '',
              public description: string = '',
              public isActive: boolean) {
  }

  static fromData(data: any) {
    return new ItemCreateCommand(data.name, data.category, data.description, data.isActive);
  }
}
