import AiImage from './lib/ai-image'
import COS from './lib/cos'
import SMS from './lib/sms'

declare module 'egg' {
    interface Application {
        aiImage: AiImage
        cos: COS
        sms: SMS
    }
}