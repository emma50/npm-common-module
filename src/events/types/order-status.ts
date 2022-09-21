export enum OrderStatus {
  // When the order has been created but the ticket
  // it is trying to order has not been reserved
  Created = 'created',

  // When the ticket it is trying to reserve has already
  // been reserved, or the user have cancelled the order,
  // or the order expires before payment
  Cancelled = 'cancelled',

  // The order have successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // The order has successfully reserved the ticket
  // and the user has provided payment successfully
  Complete = 'complete'
}