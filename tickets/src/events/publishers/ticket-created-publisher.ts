import { Publisher, Subjects, TicketCreatedEvent } from '@danitaltech-dev/ticketing-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
