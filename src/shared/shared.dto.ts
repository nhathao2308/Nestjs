export class SuccessResponsedDTO {
  statusCode: number
  data: any

  constructor(partial: Partial<SuccessResponsedDTO>) {
    Object.assign(this, partial)
  }
}
