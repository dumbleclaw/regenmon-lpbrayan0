# Regenmon - lpbrayan0

Tamagotchi digital con autenticación Privy y sistema de monedas $FRUTA.

## Características

- **3 tipos de Regenmon**: Semilla 🌱, Gota 💧, Chispa ✨
- **Sistema de estadísticas**: Felicidad, Energía, Hambre
- **Acciones**: Alimentar, Jugar, Entrenar
- **Chat con IA**: Conversación con OpenAI GPT-4o-mini
- **Autenticación**: Privy (Google + Email)
- **Monedas**: Sistema $FRUTA con localStorage por usuario
- **Persistencia**: Datos guardados localmente por usuario

## Estado Actual: Sesión 3 (S3)

✅ **S1**: Sistema base de Regenmon con estadísticas  
✅ **S2**: Chat con IA personalizado por tipo  
✅ **S3**: Autenticación Privy + sistema de monedas $FRUTA  

## Setup

```bash
npm install
npm run dev
```

## Variables de entorno

```
NEXT_PUBLIC_OPENAI_API_KEY=tu-key-aqui
NEXT_PUBLIC_PRIVY_APP_ID=cmkyyrsbj04bck40bidlscndo
```

## Deploy

```bash
npm run build
npx wrangler pages deploy out --project-name=regenmon-lpbrayan0
```