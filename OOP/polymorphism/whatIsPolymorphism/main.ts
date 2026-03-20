import { EmailNotification } from './email-notification.ts';
import { SMSNotification } from './sms-notification.ts';

// Test code - don't modify
const email = new EmailNotification();
const sms = new SMSNotification();

console.log(email.send('Hello!')); // Should use EmailNotification's send()
console.log(sms.send('Hello!')); // Should use SMSNotification's send()
