interface TelegramInlineButton {
    text: string;
    callback_data: string;
}
interface TelegramRequestContactButton {
    text: string;
    request_contact?: boolean;
}
declare type TelegramParseMode = 'Markdown' | 'HTML' | 'None';
declare type TelegramInlineKeyboardMarkup = TelegramInlineButton[][];
declare type TelegramKeyboardMarkup = string[][];
interface TelegramReplyMarkup {
    keyboard?: TelegramKeyboardMarkup;
    inline_keyboard?: TelegramInlineKeyboardMarkup;
    resize_keyboard?: boolean;
}
interface TelegramKeyboard {
    reply_markup: TelegramReplyMarkup;
    parse_mode?: TelegramParseMode;
}
declare function InlineButton(text: string, type: string, data: any): TelegramInlineButton;
declare function RequestContactButton(text: string): TelegramRequestContactButton;
declare function Keyboard(keyboard: TelegramKeyboardMarkup, parse_mode?: TelegramParseMode): TelegramKeyboard;
declare function InlineKeyboard(inline_keyboard: TelegramInlineKeyboardMarkup, parse_mode?: TelegramParseMode): TelegramKeyboard;
export { InlineButton, RequestContactButton, Keyboard, InlineKeyboard, };
