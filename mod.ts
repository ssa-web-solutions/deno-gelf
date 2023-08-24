export const levels = {
    EMERGENCY: 0,
    ALERT: 1,
    CRITICAL: 2,
    ERROR: 3,
    WARNING: 4,
    NOTICE: 5,
    INFORMATIONAL: 6,
    DEBUG: 7,
}

export class Logger {
    constructor(
        private host: string,
        private defaultSource: string = 'localhost',
        private defaultLevel: number = levels.INFORMATIONAL
    ) {}

    async log(message: string, fullMessage?: string, level?: number, source?: string) {
        await fetch(this.host, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                short_message: message,
                full_message: fullMessage ?? message,
                level: level ?? this.defaultLevel,
                host: source ?? this.defaultSource
            })
        })
    }

    async emergency(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.EMERGENCY, source)
    }

    async alert(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.ALERT, source)
    }

    async critical(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.CRITICAL, source)
    }
    
    async error(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.ERROR, source)
    }

    async warning(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.WARNING, source)
    }

    async notice(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.NOTICE, source)
    }

    async info(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.INFORMATIONAL, source)
    }

    async debug(message: string, fullMessage?: string, source?: string) {
        await this.log(message, fullMessage, levels.DEBUG, source)
    }
}