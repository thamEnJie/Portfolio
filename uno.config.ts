// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    presets: [
        presetUno(),
    ],
    rules: [
        ['reset-btn', {
            background: 'transparent',
            color: 'inherit',
        }]
    ]
})