import { Publisher, Subjects, TicketUpdatedEvent } from '@danitaltech-dev/ticketing-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
