import { Injectable } from "@angular/core";
import { NotifierService } from "angular-notifier";

@Injectable()
export class NotificationCustomService {
    constructor(private _notifier: NotifierService) { }

    /**
     * Show a notification
     * 
     * @param Notification type 
     * @param Notification message 
     */
    showNotification(type: string, message: string): void {
        this._notifier.notify(type, message);
    }

    /**
     * Show a notification
     * 
     * @param Notification id 
     */
    hideNotification(id: string): void {
        this._notifier.hide(id);
    }

    /**
     * Hide oldest notification
     */
    hideOldestNotification(): void {
        this._notifier.hideOldest();
    }

    /**
	 * Hide newest notification
	 */
    hideNewestNotification(): void {
        this._notifier.hideNewest();
    }

    /**
     * Hide all notification
     */
    hideAllNotifications(): void {
        this._notifier.hideAll();
    }

    /**
	 * Show a specific notification (with a custom notification ID)
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 * @param {string} id      Notification ID
	 */
    showSpecificNotification(type: string, message: string, id: string): void {
        this._notifier.show({
            id,
            message,
            type
        });
    }

    /**
     * Hide a specific notification (by a given notification ID)
     * 
     * @param Notification id 
     */
    hideSpecificNotification(id: string): void {
        this._notifier.hide(id);
    }

}