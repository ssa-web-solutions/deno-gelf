# deno-gelf
A deno module to send logs to graylog in GELF format.

It only works with the HTTP input. Therefore, you must make sure to create it =)

Its usage is pretty simple, just import the Logger class, set your graylog host and star logging.

```ts
import { Logger } from 'https://deno.land/...'

const logger = new Logger('http://graylog.myserver.com:12201/gelf')

logger.info('message', 'full message', 'source')
```
