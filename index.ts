// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
    abstract class Logger {
        abstract log(message: string): void;
        printDate(date: Date): void {
            this.log(date.toString());
        };
    }
    class ConsoleLogger extends Logger {
        log(message: string): void {
            console.log(message);
        }
        // printDate(): void {
        //     console.log(new Date());
        // }

        logWithDate(date: Date, message: string): void {
            this.printDate(date);
            this.log(message);
        }
    }

    const logger = new ConsoleLogger().logWithDate(new Date(), 'Hello world');