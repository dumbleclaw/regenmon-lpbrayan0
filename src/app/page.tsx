'use client';

import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { RegenmonData, ChatMessage } from '@/types';
import { OpenAI } from 'openai';

const initialRegenmonData: RegenmonData = {
  name: '',
  type: 'Semilla',
  sprite: '🌱',
  level: 1,
  xp: 0,
  stats: {
    felicidad: 50,
    energia: 100,
    hambre: 50,
  },
  coins: 100,
  lastUpdated: Date.now(),
  memories: [],
};

const typeSprites = {
  'Semilla': '🌱',
  'Gota': '💧',
  'Chispa': '✨',
};

export default function Home() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [regenmon, setRegenmon] = useState<RegenmonData>(initialRegenmonData);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    if (ready && authenticated && user) {
      loadUserData();
    }
  }, [ready, authenticated, user]);

  const loadUserData = () => {
    const userId = user?.id || 'guest';
    const savedData = localStorage.getItem(`regenmon_${userId}`);
    const savedMessages = localStorage.getItem(`messages_${userId}`);
    
    if (savedData) {
      setRegenmon(JSON.parse(savedData));
    } else if (!regenmon.name) {
      setShowNameInput(true);
    }
    
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  };

  const saveUserData = (newData: RegenmonData, newMessages?: ChatMessage[]) => {
    if (!authenticated || !user) return;
    
    const userId = user.id;
    localStorage.setItem(`regenmon_${userId}`, JSON.stringify(newData));
    if (newMessages) {
      localStorage.setItem(`messages_${userId}`, JSON.stringify(newMessages));
    }
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const createRegenmon = (name: string, type: keyof typeof typeSprites) => {
    const newRegenmon = {
      ...initialRegenmonData,
      name,
      type,
      sprite: typeSprites[type],
    };
    setRegenmon(newRegenmon);
    saveUserData(newRegenmon);
    setShowNameInput(false);
    showToast(`¡${name} ha nacido! 🎉`);
  };

  const updateStats = (updates: Partial<RegenmonData>) => {
    const updated = { ...regenmon, ...updates, lastUpdated: Date.now() };
    setRegenmon(updated);
    saveUserData(updated);
  };

  const performAction = (action: 'feed' | 'play' | 'train') => {
    const actions = {
      feed: {
        felicidad: Math.min(100, regenmon.stats.felicidad + 15),
        hambre: Math.max(0, regenmon.stats.hambre - 20),
        xp: regenmon.xp + 5,
        coins: regenmon.coins + 2,
      },
      play: {
        felicidad: Math.min(100, regenmon.stats.felicidad + 20),
        energia: Math.max(0, regenmon.stats.energia - 10),
        xp: regenmon.xp + 8,
        coins: regenmon.coins + 3,
      },
      train: {
        energia: Math.max(0, regenmon.stats.energia - 15),
        xp: regenmon.xp + 15,
        coins: regenmon.coins + 5,
        hambre: Math.min(100, regenmon.stats.hambre + 10),
      },
    };

    const actionData = actions[action];
    const newLevel = Math.floor(regenmon.xp / 100) + 1;
    const levelUp = newLevel > regenmon.level;

    updateStats({
      stats: {
        felicidad: actionData.felicidad ?? regenmon.stats.felicidad,
        energia: actionData.energia ?? regenmon.stats.energia,
        hambre: actionData.hambre ?? regenmon.stats.hambre,
      },
      xp: actionData.xp,
      coins: actionData.coins,
      level: newLevel,
    });

    if (levelUp) {
      showToast(`¡${regenmon.name} subió al nivel ${newLevel}! 🎉`);
    } else {
      showToast(`+${actionData.coins} 🍊 $FRUTA`);
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setNewMessage('');
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Eres ${regenmon.name}, un Regenmon de tipo ${regenmon.type}. 
            Tu personalidad está basada en tu tipo:
            - Semilla 🌱: Optimista, paciente, sabio, conectado con la naturaleza
            - Gota 💧: Calmado, empático, fluido, adaptable
            - Chispa ✨: Energético, creativo, impulsivo, inspirador
            
            Estadísticas actuales:
            - Nivel: ${regenmon.level}
            - Felicidad: ${regenmon.stats.felicidad}/100
            - Energía: ${regenmon.stats.energia}/100
            - Hambre: ${regenmon.stats.hambre}/100
            
            Responde como este Regenmon, menciona tus stats si es relevante, y mantén un tono amigable y juguetón. Usa emojis relacionados con tu tipo.`,
          },
          ...updatedMessages.slice(-10).map((msg) => ({
            role: msg.role as 'user' | 'assistant',
            content: msg.content,
          })),
        ],
        max_tokens: 150,
        temperature: 0.8,
      });

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.choices[0]?.message?.content || '¡Hola!',
        timestamp: Date.now(),
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      saveUserData(regenmon, finalMessages);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      showToast('Error al comunicarse con el Regenmon');
    } finally {
      setIsLoading(false);
    }
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🌱</div>
          <div>Cargando...</div>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="nes-container text-center max-w-md">
          <h1 className="text-2xl mb-6">Regenmon</h1>
          <div className="text-6xl mb-6">🌱💧✨</div>
          <p className="mb-6 text-sm leading-relaxed">
            Cuida y entrena a tu Regenmon digital
          </p>
          <div className="mb-4">
            <div className="text-lg mb-2">🍊 — $FRUTA</div>
            <p className="text-xs">Las monedas se muestran después del inicio de sesión</p>
          </div>
          <button 
            onClick={login}
            className="nes-btn is-primary w-full"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  if (showNameInput || !regenmon.name) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="nes-container max-w-md">
          <h2 className="text-xl mb-6">Crea tu Regenmon</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              const type = formData.get('type') as keyof typeof typeSprites;
              if (name && type) {
                createRegenmon(name, type);
              }
            }}
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm">Nombre:</label>
              <input
                name="name"
                type="text"
                required
                className="w-full p-2 border-4 border-black bg-white text-sm"
                placeholder="Nombre de tu Regenmon"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm">Tipo:</label>
              <div className="space-y-2">
                {Object.entries(typeSprites).map(([type, sprite]) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      name="type"
                      type="radio"
                      value={type}
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-2xl">{sprite}</span>
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="nes-btn is-success w-full">
              Crear Regenmon
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="text-sm">
          {user?.email || user?.google?.email || 'Usuario'}
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-lg">🍊 {regenmon.coins} $FRUTA</div>
          <button onClick={logout} className="nes-btn is-error text-xs">
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {/* Regenmon Panel */}
        <div className="nes-container">
          <h2 className="text-xl mb-4">
            {regenmon.name} - Nivel {regenmon.level}
          </h2>
          
          {/* Stats */}
          <div className="mb-6 space-y-3">
            <div>
              <div className="text-xs mb-1">❤️ Felicidad: {regenmon.stats.felicidad}/100</div>
              <div className="nes-progress">
                <div 
                  className="progress-bar stat-felicidad" 
                  style={{ width: `${regenmon.stats.felicidad}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="text-xs mb-1">⚡ Energía: {regenmon.stats.energia}/100</div>
              <div className="nes-progress">
                <div 
                  className="progress-bar stat-energia" 
                  style={{ width: `${regenmon.stats.energia}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="text-xs mb-1">🍽️ Hambre: {regenmon.stats.hambre}/100</div>
              <div className="nes-progress">
                <div 
                  className="progress-bar stat-hambre" 
                  style={{ width: `${regenmon.stats.hambre}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="text-xs mb-1">⭐ XP: {regenmon.xp % 100}/100</div>
              <div className="nes-progress">
                <div 
                  className="progress-bar bg-purple-500" 
                  style={{ width: `${(regenmon.xp % 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Sprite */}
          <div className={`regenmon-sprite type-${regenmon.type.toLowerCase()} mb-6`}>
            {regenmon.sprite}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button 
              onClick={() => performAction('feed')}
              className="nes-btn is-success text-xs"
            >
              Alimentar
            </button>
            <button 
              onClick={() => performAction('play')}
              className="nes-btn is-primary text-xs"
            >
              Jugar
            </button>
            <button 
              onClick={() => performAction('train')}
              className="nes-btn is-warning text-xs"
            >
              Entrenar
            </button>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="nes-container">
          <h3 className="text-lg mb-4">Chat con {regenmon.name}</h3>
          
          <div className="chat-container p-2 mb-4">
            {messages.length === 0 ? (
              <div className="text-center text-xs text-gray-600 py-8">
                ¡Habla con tu Regenmon! 💬
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-message ${message.role} text-xs`}
                >
                  {message.content}
                </div>
              ))
            )}
            {isLoading && (
              <div className="chat-message assistant text-xs">
                {regenmon.name} está escribiendo...
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(newMessage);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-1 p-2 border-4 border-black bg-white text-xs"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !newMessage.trim()}
              className="nes-btn is-primary text-xs"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </div>
  );
}